"use client";

import { Button } from "@/components/ui/button";
import { Heart, Search, ShoppingCart, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Shop", href: "/shop" },
    { label: "Women", href: "/category" },
    { label: "Men", href: "/category" },
    { label: "Accessories", href: "/category" },
    { label: "Offers", href: "/offers" },
    { label: "About", href: "/about" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all duration-300 animate-slide-down">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent hover:from-blue-700 hover:to-blue-900 transition-all duration-300 transform hover:scale-105"
          >
            BOUTIQUE
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-slate-700 hover:text-blue-600 font-medium transition-all duration-200 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex bg-slate-100 hover:bg-slate-200 rounded-lg px-4 py-2 items-center gap-2 transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-400">
              <Search size={18} className="text-slate-400" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent outline-none w-32 text-sm transition-all duration-200 focus:w-40"
              />
            </div>

            <Link href="/wishlist">
              <Button
                size="icon"
                variant="ghost"
                className="hover:text-red-500 hover:scale-110 transition-all duration-200"
              >
                <Heart size={20} />
              </Button>
            </Link>

            <Link href="/cart">
              <Button
                size="icon"
                variant="ghost"
                className="relative hover:scale-110 transition-all duration-200 group"
              >
                <ShoppingCart size={20} />
                <span className="absolute top-0 right-0 w-5 h-5 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs rounded-full flex items-center justify-center font-bold animate-pulse-soft group-hover:animate-bounce">
                  3
                </span>
              </Button>
            </Link>

            <Link href="/profile">
              <Button className="hidden md:block hover-lift" variant="default">
                Account
              </Button>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 space-y-3 pb-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block text-slate-700 hover:text-slate-900 font-medium py-2"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/profile" className="block">
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Sign In
              </Button>
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
