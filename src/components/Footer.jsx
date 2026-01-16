'use client';

import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import { FaPaperPlane } from 'react-icons/fa';

export default function Footer() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    console.log('Newsletter subscription:', { name, email });
  };

  return (
    <footer className="bg-white dark:bg-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-8 py-12">

        {/* ================= Newsletter ================= */}
        <div className="mb-16 relative">
          <div className="flex items-center gap-2 mb-6">
            <Mail className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              Subscribe to Newsletter
            </h3>
          </div>

          <div className="max-w-2xl">
            <div className="flex flex-col lg:flex-row items-stretch gap-3">

              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 border rounded-lg
                  bg-white dark:bg-gray-700
                  border-gray-300 dark:border-gray-600
                  text-gray-900 dark:text-white
                  placeholder-gray-500 dark:placeholder-gray-400
                  focus:outline-none focus:ring-2 focus:ring-teal-500"
              />

              <input
                type="email"
                placeholder="Enter your e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border rounded-lg
                  bg-white dark:bg-gray-700
                  border-gray-300 dark:border-gray-600
                  text-gray-900 dark:text-white
                  placeholder-gray-500 dark:placeholder-gray-400
                  focus:outline-none focus:ring-2 focus:ring-teal-500"
              />

              <button
                onClick={handleSubmit}
                className="flex items-center justify-center px-5 py-3
                  bg-teal-600 hover:bg-teal-700
                  text-white rounded-lg transition-colors
                  lg:w-[56px]"
              >
                <FaPaperPlane className="w-5 h-5" />
              </button>

            </div>
          </div>

          {/* Decorative Image */}
          <div className="hidden lg:block absolute right-0 -top-32 min-w-[90px]">
            <img src="sofa 1.png" alt="Sofa" className="w-full" />
          </div>
        </div>

        {/* ================= Footer Content ================= */}
        <div className="grid mt-40 grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">

          {/* Brand */}
          <div className="lg:col-span-4">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Furni.
            </h2>
            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              Donec mattis porta eros, aliquet finibus risus interdum at.
              Nulla vivethe as it was for us to know what was to be done.
            </p>
          </div>

          {/* Links */}
          {[
            ['About us', 'Services', 'Blog', 'Contact us'],
            ['Support', 'Knowledge base', 'Live chat'],
            ['Jobs', 'Our team', 'Leadership', 'Privacy Policy'],
            ['Nordic Chair', 'Kruzo Aero', 'Ergonomic'],
          ].map((group, idx) => (
            <div key={idx} className="lg:col-span-2">
              <ul className="space-y-3">
                {group.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-gray-600 dark:text-gray-400
                        hover:text-gray-900 dark:hover:text-white
                        hover:underline transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* ================= Bottom Bar ================= */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8
          border-t border-gray-200 dark:border-gray-700">

          <p className="text-xs text-gray-500 dark:text-gray-400 mb-4 md:mb-0">
            Copyright 2023 elegant@furnitures.com. All Rights Reserved
          </p>

          <div className="flex gap-6">
            <a href="#" className="text-xs text-gray-500 dark:text-gray-400 hover:underline">
              Terms & Conditions
            </a>
            <a href="#" className="text-xs text-gray-500 dark:text-gray-400 hover:underline">
              Privacy Policy
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
