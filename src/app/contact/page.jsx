'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-teal-700 to-teal-900 dark:from-teal-900 dark:via-gray-800 dark:to-gray-900">
      
      {/* Header */}
      <Header />

      {/* Hero */}
      <section className="px-6 lg:px-20 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Contact Us
        </h1>
        <p className="max-w-3xl mx-auto text-white/90 text-lg">
          Have questions, feedback, or need help?  
          We’d love to hear from you.
        </p>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-50 dark:bg-gray-900 py-20 px-6 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold mb-8 dark:text-white">
              Get in Touch
            </h2>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-teal-600" />
                <span className="text-gray-600 dark:text-gray-400">
                  support@furni.com
                </span>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-teal-600" />
                <span className="text-gray-600 dark:text-gray-400">
                  +1 (234) 567-890
                </span>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="w-6 h-6 text-teal-600" />
                <span className="text-gray-600 dark:text-gray-400">
                  237 Furni Street, Design City
                </span>
              </div>
            </div>

            <p className="mt-8 text-gray-600 dark:text-gray-400 leading-relaxed">
              Our team is available Monday to Friday, 9am – 6pm.
              We usually respond within 24 hours.
            </p>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6 dark:text-white">
              Send Us a Message
            </h3>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
              />

              <button
                type="submit"
                className="w-full bg-teal-700 hover:bg-teal-800 text-white py-3 rounded-full flex items-center justify-center gap-2 transition"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
