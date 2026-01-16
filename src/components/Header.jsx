'use client';

import React, { useState } from 'react';
import { ShoppingCart, User, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { ModeToggle } from './ModeToggle';
import { useCart } from '@/contexts/CartContext';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  /* ================= CART CONTEXT ================= */
  const { cart } = useCart();

  /* ================= TOTAL CART QUANTITY ================= */
  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="px-6 py-4 lg:px-8">
      <div className="flex items-center justify-between">
        <h1 className="text-white text-3xl font-bold">Furni</h1>

        {/* Desktop Menu */}
        <div className="flex gap-20">
          <div className="hidden md:flex items-center space-x-6 text-md">
            <Link href="/" className="text-white hover:text-yellow-400 transition-colors">
              Home
            </Link>
            <a href="/aboutPage" className="text-white/80 hover:text-white transition-colors">
              About us
            </a>
            <a href="/service" className="text-white/80 hover:text-white transition-colors">
              Services
            </a>
            <a href="/blog" className="text-white/80 hover:text-white transition-colors">
              Blog
            </a>
            <a href="/contact" className="text-white/80 hover:text-white transition-colors">
              Contact Us
            </a>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4 relative">
            <ModeToggle />

            <User className="text-white w-7 h-7 cursor-pointer hover:text-yellow-400 transition-colors" />

            {/* Cart Icon with Badge */}
            <Link href="/cart" className="relative">
              <ShoppingCart className="text-white w-7 h-7 cursor-pointer hover:text-yellow-400 transition-colors" />

              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-7 absolute left-0 bg-gradient-to-br w-full from-teal-700 to-teal-900 dark:from-gray-900 dark:to-gray-800 mt-4 pb-4 space-y-3 z-50">
          <Link href="/" className="block text-white hover:text-yellow-400 transition-colors">
            Home
          </Link>
          <a href="/aboutPage" className="block text-white/80 hover:text-white transition-colors">
            About us
          </a>
          <a href="/service" className="block text-white/80 hover:text-white transition-colors">
            Services
          </a>
          <a href="/blog" className="block text-white/80 hover:text-white transition-colors">
            Blog
          </a>
          <a href="/contact" className="block text-white/80 hover:text-white transition-colors">
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
};

export default Header;
