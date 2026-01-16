'use client';

import { useCart } from '@/contexts/CartContext';

export default function AddToCartButton({ product }) {
  const { addToCart } = useCart();

  return (
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
  );
}
