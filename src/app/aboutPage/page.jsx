'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Truck, ShieldCheck, Smile } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-teal-700 to-teal-900 dark:from-teal-900 dark:via-gray-800 dark:to-gray-900">
      
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="px-6 lg:px-20 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          About Furni
        </h1>
        <p className="max-w-3xl mx-auto text-white/90 text-lg leading-relaxed">
          We craft modern, comfortable, and durable furniture designed to
          transform your living and working spaces into places you truly love.
        </p>
      </section>

      {/* About Content */}
      <section className="bg-gray-50 dark:bg-gray-900 py-20 px-6 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Image */}
          <div>
            <img
              src="/about-furniture.png"
              alt="Furniture showroom"
              className="rounded-xl shadow-lg w-full object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <h2 className="text-3xl font-bold mb-6 dark:text-white">
              Who We Are
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              Furni is a modern furniture brand focused on quality craftsmanship,
              sustainable materials, and timeless design. From cozy homes to
              productive offices, our furniture is built to enhance everyday life.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              We believe furniture should be both functional and beautiful —
              blending comfort, durability, and style in every piece we create.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 lg:px-20">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Why Choose Furni?
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          
          {/* Card 1 */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center">
            <Truck className="w-10 h-10 text-teal-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 dark:text-white">
              Fast Delivery
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Reliable and fast delivery straight to your doorstep.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center">
            <ShieldCheck className="w-10 h-10 text-teal-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 dark:text-white">
              Premium Quality
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Built with durable materials and expert craftsmanship.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center">
            <Smile className="w-10 h-10 text-teal-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 dark:text-white">
              Customer Satisfaction
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Thousands of happy customers trust Furni worldwide.
            </p>
          </div>

        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-teal-800 dark:bg-teal-900 py-16 text-center px-6">
        <h2 className="text-3xl font-bold text-white mb-4">
          Ready to Upgrade Your Space?
        </h2>
        <p className="text-white/90 mb-8">
          Discover our collection and find furniture that fits your style.
        </p>
        <button className="bg-yellow-500 hover:bg-yellow-400 px-8 py-3 rounded-full font-semibold transition">
          Shop Now
        </button>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
