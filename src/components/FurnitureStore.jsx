import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function FurnitureStore() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const products = [
    {
      name: 'Nordic Chair',
      description:
        'Donec mattis porta eros, aliquet finibus risus interdum at.',
      image: '/product-1 (1).png',
    },
    {
      name: 'Kruzo Aero',
      description:
        'Mattis porta eros, aliquet finibus risus interdum at.',
      image: '/product-2 (1).png',
    },
    {
      name: 'Ergonomic Chair',
      description: 'Donec mattis porta eros, aliquet finibus.',
      image: '/product-3 (1).png',
    },
  ];

  const testimonials = [
    {
      text:
        'Donec nibh magna, interdum quis massa sed, rhoncus laoreet quam.',
      name: 'Michelle Anna',
      title: 'CEO, XYZ Inc.',
      image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde',
    },
    {
      text:
        'Integer vel nibh tellus. Pellentesque in risus non dui venenatis.',
      name: 'James Carter',
      title: 'Product Manager',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d',
    },
    {
      text:
        'Fusce tincidunt nisl mi, at molestie odio accumsan non.',
      name: 'Sarah Johnson',
      title: 'Interior Designer',
      image: 'https://images.unsplash.com/photo-1544725176-7c40e5a2c9f9',
    },
  ];

  const blogPosts = [
    {
      title: 'First Time Home Owner Ideas',
      author: 'Nana Ama',
      date: 'Nov 18th, 2022',
      image: '/post-1 1.png',
    },
    {
      title: 'First Time Home Owner Ideas',
      author: 'Nana Ama',
      date: 'Nov 18th, 2022',
      image: '/post-2 1.png',
    },
    {
      title: 'First Time Home Owner Ideas',
      author: 'Nana Ama',
      date: 'Nov 18th, 2022',
      image: '/post-3 1.png',
    },
  ];

  /* AUTO SLIDE */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">

      {/* PRODUCTS */}
      <section className="px-4 py-12 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md transition"
          >
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 mx-auto mb-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain"
              />
            </div>

            <h3 className="text-base sm:text-lg font-semibold text-center text-gray-900 dark:text-white">
              {product.name}
            </h3>

            <p className="text-sm text-center text-gray-600 dark:text-gray-400 mt-2">
              {product.description}
            </p>
          </div>
        ))}
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
          Testimonials
        </h2>

        <div className="relative max-w-3xl mx-auto text-center px-4 sm:px-8">

          {/* LEFT ARROW (hidden on mobile) */}
          <button
            onClick={() =>
              setCurrentTestimonial(
                currentTestimonial === 0
                  ? testimonials.length - 1
                  : currentTestimonial - 1
              )
            }
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12
              w-10 h-10 rounded-full bg-white dark:bg-gray-700 shadow items-center justify-center"
          >
            <ChevronLeft />
          </button>

          {/* CONTENT */}
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
            “{testimonials[currentTestimonial].text}”
          </p>

          <div className="flex flex-col items-center">
            <img
              src={testimonials[currentTestimonial].image}
              alt={testimonials[currentTestimonial].name}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover mb-4"
            />
            <h4 className="font-semibold text-gray-900 dark:text-white">
              {testimonials[currentTestimonial].name}
            </h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {testimonials[currentTestimonial].title}
            </p>
          </div>

          {/* DOTS */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentTestimonial(i)}
                className={`w-2.5 h-2.5 rounded-full transition ${
                  i === currentTestimonial
                    ? 'bg-gray-900 dark:bg-white'
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
              />
            ))}
          </div>

          {/* RIGHT ARROW */}
          <button
            onClick={() =>
              setCurrentTestimonial(
                currentTestimonial === testimonials.length - 1
                  ? 0
                  : currentTestimonial + 1
              )
            }
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-12
              w-10 h-10 rounded-full bg-gray-900 dark:bg-gray-600 text-white shadow items-center justify-center"
          >
            <ChevronRight />
          </button>
        </div>
      </section>

      {/* BLOG */}
      <section className="px-4 py-16 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <article
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 sm:h-52 object-cover"
            />
            <div className="p-6">
              <h3 className="font-semibold text-gray-900 dark:text-white">
                {post.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                by {post.author} • {post.date}
              </p>
            </div>
          </article>
        ))}
      </section>

    </div>
  );
}
