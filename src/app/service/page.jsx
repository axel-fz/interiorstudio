'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Sofa,
  Truck,
  Hammer,
  ShieldCheck,
  Headphones,
  RefreshCw,
} from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-teal-700 to-teal-900 dark:from-teal-900 dark:via-gray-800 dark:to-gray-900">
      
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="px-6 lg:px-20 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Our Services
        </h1>
        <p className="max-w-3xl mx-auto text-white/90 text-lg">
          We provide complete furniture solutions — from design to delivery —
          ensuring comfort, quality, and peace of mind.
        </p>
      </section>

      {/* Services Grid */}
      <section className="bg-gray-50 dark:bg-gray-900 py-20 px-6 lg:px-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          
          {/* Service Card */}
          <ServiceCard
            icon={<Sofa />}
            title="Custom Furniture Design"
            description="Tailor-made furniture designed to match your space, style, and comfort needs."
          />

          <ServiceCard
            icon={<Truck />}
            title="Fast & Secure Delivery"
            description="Reliable delivery services ensuring your furniture arrives safely and on time."
          />

          <ServiceCard
            icon={<Hammer />}
            title="Installation & Assembly"
            description="Professional assembly and installation for a hassle-free experience."
          />

          <ServiceCard
            icon={<ShieldCheck />}
            title="Quality Assurance"
            description="Premium materials and strict quality control for long-lasting durability."
          />

          <ServiceCard
            icon={<Headphones />}
            title="Customer Support"
            description="Dedicated support team available to assist you whenever you need help."
          />

          <ServiceCard
            icon={<RefreshCw />}
            title="Easy Returns"
            description="Simple and flexible return policies for your peace of mind."
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-teal-800 dark:bg-teal-900 py-16 text-center px-6">
        <h2 className="text-3xl font-bold text-white mb-4">
          Need a Custom Solution?
        </h2>
        <p className="text-white/90 mb-8">
          Our experts are ready to help you create the perfect furniture setup.
        </p>
        <Link href={"/contact"}>

        <button className="bg-yellow-500 hover:bg-yellow-400 px-8 py-3 rounded-full font-semibold transition">
          Contact Us
        </button>
        </Link>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

/* ================= SERVICE CARD ================= */

function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center hover:shadow-2xl transition">
      <div className="w-14 h-14 flex items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900 mx-auto mb-6 text-teal-600">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 dark:text-white">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
