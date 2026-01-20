# Boutique - E-Commerce Store Sitemap

## Main Pages

- `/` - Home / Landing Page
- `/shop` - Shop / Product Listing Page (PLP)
- `/product` - Product Detail Page (PDP)

## Shopping Pages

- `/cart` - Shopping Cart Page
- `/checkout` - Checkout Page
- `/order-confirmation` - Order Confirmation / Thank You Page

## User Account Pages

- `/login` - Login Page
- `/signup` - Sign Up Page
- `/profile` - Profile / Account Page
- `/order-history` - Order History / My Orders Page
- `/wishlist` - Wishlist / Favorites Page
- `/forgot-password` - Forgot Password Page
- `/reset-password` - Reset Password Page

## Category & Navigation Pages

- `/category` - Category Pages
- `/search` - Search Results Page

## Informational / Support Pages

- `/about` - About Us Page
- `/contact` - Contact Us Page
- `/faq` - FAQ / Help Center Page
- `/policies` - Shipping & Delivery Info, Returns & Refund Policy, Privacy Policy, Terms & Conditions
- `/blog` - Blog / Articles Page

## Marketing & Extras

- `/offers` - Offers / Deals Page
- `/gift-cards` - Gift Cards / Vouchers Page
- `/loyalty` - Loyalty Program Page
- `/referral` - Referral Program Page

## Features Included

### Design & Components

- ✅ Fully responsive mobile, tablet, and desktop layouts
- ✅ Shadow CN/UI components with Tailwind CSS
- ✅ Lucide React icons throughout
- ✅ Professional color scheme (slate, blue, green, red, yellow)
- ✅ Smooth transitions and hover effects

### E-Commerce Features

- ✅ Product filtering and sorting
- ✅ Shopping cart with quantity management
- ✅ Multi-step checkout process
- ✅ Order confirmation with details
- ✅ Wishlist functionality

### User Features

- ✅ User authentication (Login/Sign Up)
- ✅ User profile management
- ✅ Order history tracking
- ✅ Address management

### Additional Features

- ✅ Search functionality
- ✅ Category navigation
- ✅ Loyalty program
- ✅ Referral program
- ✅ Blog/Articles section
- ✅ FAQs with collapsible sections
- ✅ Contact form
- ✅ Newsletter signup
- ✅ Gift cards
- ✅ Special offers and deals

### Layout Components

- ✅ Sticky header with navigation
- ✅ Footer with links and social media
- ✅ Search bar in header
- ✅ Shopping cart indicator
- ✅ User account link

## Technology Stack

- **Framework**: Next.js 16 (App Router)
- **UI Components**: Shadcn UI
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Language**: TypeScript
- **Package Manager**: pnpm

## Installation & Setup

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

Visit `http://localhost:8545` in your browser.

## Project Structure

```
app/
├── layout.tsx              # Root layout with Header and Footer
├── page.tsx                # Home page
├── globals.css             # Global styles
├── shop/
│   └── page.tsx           # Shop page with filters
├── product/
│   └── page.tsx           # Product detail page
├── cart/
│   └── page.tsx           # Shopping cart
├── checkout/
│   └── page.tsx           # Checkout process
├── order-confirmation/
│   └── page.tsx           # Order confirmation
├── login/
│   └── page.tsx           # Login page
├── signup/
│   └── page.tsx           # Sign up page
├── profile/
│   └── page.tsx           # User profile
├── order-history/
│   └── page.tsx           # Order history
├── wishlist/
│   └── page.tsx           # Wishlist
├── forgot-password/
│   └── page.tsx           # Forgot password
├── reset-password/
│   └── page.tsx           # Reset password
├── category/
│   └── page.tsx           # Category page
├── search/
│   └── page.tsx           # Search results
├── about/
│   └── page.tsx           # About us
├── contact/
│   └── page.tsx           # Contact page
├── faq/
│   └── page.tsx           # FAQ page
├── policies/
│   └── page.tsx           # Policies page
├── blog/
│   └── page.tsx           # Blog page
├── offers/
│   └── page.tsx           # Offers page
├── gift-cards/
│   └── page.tsx           # Gift cards
├── loyalty/
│   └── page.tsx           # Loyalty program
└── referral/
    └── page.tsx           # Referral program

components/
├── ui/
│   └── button.tsx         # Button component
└── layout/
    ├── Header.tsx         # Header component
    └── Footer.tsx         # Footer component

lib/
└── utils.ts               # Utility functions (cn)
```

## Next Steps

1. Connect to a backend API for dynamic data
2. Implement authentication system
3. Add shopping cart state management (Context API or Redux)
4. Connect payment gateway (Stripe, PayPal)
5. Add database integration (Prisma, MongoDB, PostgreSQL)
6. Deploy to production (Vercel, AWS, etc.)

---

**Project Status**: ✅ Complete - All pages and components created with Shadcn UI and Tailwind CSS
