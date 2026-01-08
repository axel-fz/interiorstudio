"use client";

import Header from "@/components/Header";
import React, { useState } from "react";
import {
  Truck,
  ShoppingBag,
} from "lucide-react";
import { TbBallFootball, TbRefresh } from "react-icons/tb";
import FurnitureStore from "@/components/FurnitureStore";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";

export default function FurnitureLanding() {
  const [darkMode, setDarkMode] = useState(false);
  const router = useRouter();

  const products = [
    {
      name: "Nordic Chair",
      price: "$50.00",
      image: "/product-1.png",
      slug: "nordic-chair",
    },
    {
      name: "Knox Arm Chair",
      price: "$78.00",
      image: "/product-2.png",
      slug: "knox-arm-chair",
    },
    {
      name: "Ergonomic Chair",
      price: "$43.00",
      image: "/product-3.png",
      slug: "ergonomic-chair",
    },
  ];

  return (
    <div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
      {/* HERO */}
      <div className="bg-gradient-to-br from-teal-700 to-teal-900 dark:bg-gradient-to-br dark:from-teal-900 dark:to-gray-900 dark:via-gray-800 min-h-screen lg:px-20">
        <Header />

        <div className="px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-white text-5xl font-bold mb-8">
              Modern Interior <br /> Design Studio
            </h2>
            <div className="flex gap-4">
              <button className="bg-yellow-500 px-8 py-3 rounded-full font-semibold">
                Shop Now
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-full">
                Explore
              </button>
            </div>
          </div>

          <img src="/couch 1.png" className="rounded-lg" />
        </div>
      </div>

      {/* PRODUCTS */}
      <div className="bg-gray-50 dark:bg-gray-900 py-20 lg:px-20">
        <div className="grid lg:grid-cols-4 gap-8 px-6">
          <div>
            <h3 className="text-3xl font-bold mb-4 dark:text-white">
              Crafted with excellent material.
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              High-quality furniture built for comfort and style.
            </p>
          </div>

          {products.map((product, index) => (
            <div
              key={product.slug}
              onClick={() => router.push(`/products/${product.slug}`)}
              className={`cursor-pointer p-6 rounded-lg relative group transition hover:shadow-xl ${
                index === 0
                  ? "bg-gray-300"
                  : "bg-white dark:bg-gray-800"
              }`}
            >
              <img
                src={product.image}
                className="h-64 w-full object-cover group-hover:scale-110 transition"
              />

              <h4 className="mt-4 font-semibold dark:text-white text-center">
                {product.name}
              </h4>

              <p className="text-center font-bold text-gray-600 dark:text-gray-400">
                {product.price}
              </p>

              {index === 0 && (
                <button
                  onClick={(e) => e.stopPropagation()}
                  className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-gray-900 dark:bg-white rounded-full flex items-center justify-center"
                >
                  <span className="text-white dark:text-gray-900 text-xl">
                    +
                  </span>
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      <FurnitureStore />
      <Footer />
    </div>
  );
}
