'use client';

import React from 'react';
import { useCart } from '@/contexts/CartContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function CartPage() {
  const { cart, removeFromCart, addToCart, clearCart } = useCart();

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-teal-700 to-teal-900 dark:from-teal-900 dark:via-gray-800 dark:to-gray-900">
      <Header />

      <main className="flex-grow px-4 sm:px-6 lg:px-20 py-12">
        <h1 className="text-3xl font-bold text-white mb-8">Your Cart</h1>

        {cart.length === 0 ? (
          <p className="text-white">
            Your cart is empty. <Link href="/" className="underline">Go shopping</Link>!
          </p>
        ) : (
          <div className="space-y-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-center bg-white/10 p-4 rounded-lg gap-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-contain rounded-lg"
                />

                <div className="flex-1 text-white">
                  <h2 className="font-semibold text-lg">{item.name}</h2>
                  <p className="text-teal-200">${item.price.toFixed(2)}</p>
                  <p className="text-sm text-white/80">Quantity: {item.quantity}</p>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => addToCart(item)}
                    className="bg-teal-700 hover:bg-teal-800 text-white px-3 py-1 rounded"
                  >
                    +
                  </button>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            {/* Total */}
            <div className="flex justify-between items-center mt-6 p-4 bg-white/10 rounded-lg text-white">
              <span className="font-semibold text-lg">Total:</span>
              <span className="text-teal-200 font-bold text-xl">${totalPrice.toFixed(2)}</span>
            </div>

            {/* Clear Cart */}
            <div className="mt-4 flex gap-4">
              <button
                onClick={clearCart}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full"
              >
                Clear Cart
              </button>
              <button
                className="bg-teal-700 hover:bg-teal-800 text-white px-6 py-3 rounded-full"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
