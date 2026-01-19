# AWS EC2 Deployment Guide

## Architecture Overview

This Next.js frontend works with your existing backend infrastructure:

- **Backend**: `/home/$EC2_USER/app` (API + Caddy + app-network)
- **Frontend**: `/home/$EC2_USER/nextjs-app` (Next.js app)
- **Shared**: External `app-network` Docker network
- **Routing**: 
  - `shamimrana.me` → nextjs_app:3000 (frontend)
  - `api.shamimrana.me` → app:5090 (backend)

## Required GitHub Secrets

Configure these in your repository settings (Settings → Secrets and variables → Actions):

| Secret | Description | Example |
|--------|-------------|---------|
| `DOCKER_USERNAME` | Docker Hub username | shamimrana2006 |
| `DOCKER_PASSWORD` | Docker Hub access token | dckr_pat_xxx... |
| `EC2_HOST` | EC2 instance IP or domain | 13.123.45.67 |
| `EC2_USER` | EC2 SSH username | ubuntu / ec2-user |
| `EC2_SSH_KEY` | Private SSH key | -----BEGIN RSA PRIVATE KEY----- |

## EC2 Prerequisites

Ensure your EC2 instance has:

```bash
# 1. Docker and Docker Compose installed
sudo apt update
sudo apt install docker.io docker-compose-plugin -y

# 2. Create app-network (if not exists)
sudo docker network create app-network

# 3. Create frontend directory
mkdir -p ~/nextjs-app

# 4. Add user to docker group
sudo usermod -aG docker $USER
newgrp docker
```

## Directory Structure on EC2

```
/home/$EC2_USER/
├── app/                          # Backend project
│   ├── docker-compose.yml        # Backend + Caddy
│   └── Caddyfile                 # Updated by frontend deployment
└── nextjs-app/                   # Frontend project
    ├── docker-compose.yml        # Next.js only
    └── Caddyfile                 # Source file
```

## Deployment Flow

1. **Push to main/dev branch**
2. **GitHub Actions runs:**
   - Builds and tests Next.js
   - Creates optimized Docker image
   - Pushes to Docker Hub
   - Deploys to EC2:
     - Copies files to `~/nextjs-app`
     - Pulls latest image
     - Restarts nextjs container
     - Updates Caddy config in backend
     - Reloads Caddy

## Manual Deployment Commands

```bash
# SSH into EC2
ssh -i your-key.pem $EC2_USER@$EC2_HOST

# Deploy frontend
cd ~/nextjs-app
sudo docker compose pull
sudo docker compose up -d

# Update Caddy config
sudo cp Caddyfile ~/app/Caddyfile
cd ~/app
sudo docker exec caddy_server caddy reload --config /etc/caddy/Caddyfile

# Check status
sudo docker ps
sudo docker logs nextjs_app
sudo docker logs caddy_server
```

## Port Configuration

- **External**: 5485 (host) → for direct access if needed
- **Internal**: 3000 (container) → actual Next.js port
- **Caddy routes**: shamimrana.me → nextjs_app:3000

## Troubleshooting

### Container not starting
```bash
sudo docker logs nextjs_app
sudo docker compose logs -f
```

### Network issues
```bash
# Verify network exists
sudo docker network ls | grep app-network

# Inspect network
sudo docker network inspect app-network
```

### Caddy not routing
```bash
# Check Caddy logs
sudo docker logs caddy_server

# Verify Caddyfile syntax
sudo docker exec caddy_server caddy validate --config /etc/caddy/Caddyfile

# Reload Caddy
sudo docker exec caddy_server caddy reload --config /etc/caddy/Caddyfile
```

### SSL certificate issues
```bash
# Check Caddy data
sudo docker exec caddy_server ls -la /data/caddy/certificates/
```

## Local Development

```bash
# Run locally
npm run dev

# Build Docker image locally
docker build -t shamimrana2006/nextjs-app:latest .

# Test container
docker run -p 3000:3000 shamimrana2006/nextjs-app:latest
```

## Security Checklist

- ✅ Non-root user in Docker container
- ✅ Multi-stage build (minimal image size)
- ✅ Standalone output mode (optimal performance)
- ✅ Environment variables for configuration
- ✅ SSH key authentication (not password)
- ✅ Docker Hub token (not password)
- ✅ HTTPS via Caddy with auto-SSL

## CI/CD Pipeline

**Triggers**: Push to `main` or `dev` branches

**Jobs**:
1. **test** - Install dependencies, run build
2. **build-and-push-docker-image** - Build and push to Docker Hub
3. **deploy** - Deploy to EC2 and reload services

**Duration**: ~3-5 minutes per deployment
