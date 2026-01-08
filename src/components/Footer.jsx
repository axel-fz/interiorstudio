"use client"
import React, { useState } from 'react';
import { Mail, Check } from 'lucide-react';
import { FaPaperPlane } from "react-icons/fa";

export default function Footer() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    console.log('Newsletter subscription:', { name, email });
  };

  return (
    <footer className="bg-white py-10 dark:bg-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-8 py-12">

        {/* Newsletter Section */}
        <div className="mb-12 relative pb-8 ">
          <div className="flex items-start gap-2 mb-6">
            <Mail className="w-5 h-5 mt-1 text-gray-600 dark:text-gray-400" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              Subscribe to Newsletter
            </h3>
          </div>

          <div className="flex justify-between gap-50 max-w-2xl">
            <div  className="flex-col  justify-between  ">

                <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full lg:flex-1 mb-2 px-4 py-3 border rounded-lg bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <input
                type="email"
                placeholder="Enter your e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full lg:flex-1 px-4 mb-2  py-3 ml-2 border rounded-lg bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <button
                onClick={handleSubmit}
                className="bg-teal-600 w-full lg:flex-1 ml-2 flex justify-center items-center w-[10%] hover:bg-teal-700 text-white p-3 rounded-lg transition-colors"
                >
                <FaPaperPlane className="w-6 h-6" />
                </button>
            </div>
           { <div className='hidden  lg:block lg:right-0 lg:top-[-140] lg:absolute min-w-[90px]'>
                <img src="sofa 1.png" alt="image" className='w-full' />
            </div>}

          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 mt-30 lg:grid-cols-12 gap-8 mb-12">

          {/* Brand */}
          <div className="lg:col-span-4">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Furni.
            </h2>
            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was for us to know what was to be done. the this is a long  post for the text.`This small text has to be place here, since this is 
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
                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:underline transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200 dark:border-gray-700">
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
