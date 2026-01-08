"use client";

import React, { useState } from 'react';
import { ShoppingCart, User, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { ModeToggle } from './ModeToggle';

const Header = () => {
/*   const [darkMode, setDarkMode] = useState(false);
 */  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="px-6 py-4  lg:px-8">
      <div className="flex items-center justify-between">
        <h1 className="text-white text-3xl font-bold">Furni</h1>

        {/* Desktop Menu */}
        <div className='flex gap-20'>

            <div className="hidden md:flex items-center space-x-6 text-md">
            <Link href="/" className="text-white hover:text-yellow-400 transition-colors">Home</Link>
            <a href="#" className="text-white/80 hover:text-white transition-colors">About us</a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">Services</a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">Blog</a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">Contact Us</a>
            </div>
            <div className="flex items-center space-x-4">
          
            <ModeToggle/>
            <User className="text-white w-7 h-7 cursor-pointer hover:text-yellow-400 transition-colors" />
            <ShoppingCart className="text-white w-7 h-7 cursor-pointer hover:text-yellow-400 transition-colors" />

            {/* Mobile Menu Button */}
            <button
                className="md:hidden z-101 text-white"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
                {mobileMenuOpen ? <X /> : <Menu />}
            </button>
            </div>

        </div>

      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <>
        <div className="md:hidden z-101 px-7 absolute left-0  bg-gradient-to-br w-full  from-teal-700 to-teal-900 dark:from-gray-900 dark:to-gray-800  mt-4 pb-4 space-y-3">
          <a href="/" className="block text-white hover:text-yellow-400 transition-colors">Home</a>
          <a href="#" className="block text-white/80 hover:text-white transition-colors">About us</a>
          <a href="#" className="block text-white/80 hover:text-white transition-colors">Services</a>
          <a href="#" className="block text-white/80 hover:text-white transition-colors">Blog</a>
          <a href="#" className="block text-white/80 hover:text-white transition-colors">Contact Us</a>
        </div>
       {/*  <div className='inset-0 fixed h-screen z-100 backdrop-blur-lg'>

        </div> */}
        </>
      )}
    </nav>
  );
};

export default Header;
