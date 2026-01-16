'use client';

import { useCart } from '@/contexts/CartContext';

export default function CartActions({ product }) {
  const { addToCart, removeFromCart, cart } = useCart();

  // Check if the product is already in the cart
  const isInCart = cart.some((item) => item.id === product.id);

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      {/* Add to Cart */}
      <button
        onClick={() =>
          addToCart({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
          })
        }
        className="bg-teal-700 hover:bg-teal-800 text-white px-8 py-3 rounded-full transition"
      >
        Add to Cart
      </button>

      {/* Remove from Cart */}
      {isInCart && (
        <button
          onClick={() => removeFromCart(product.id)}
          className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full transition"
        >
          Remove from Cart
        </button>
      )}
    </div>
  );
}
