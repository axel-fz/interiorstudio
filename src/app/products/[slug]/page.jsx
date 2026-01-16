import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartActions from '@/components/CartActions';

/* ------------------ MOCK PRODUCT DATA ------------------ */
const products = [
  {
    id: 1,
    name: 'Nordic Chair',
    slug: 'nordic-chair',
    price: 50,
    image: '/product-1.png',
    category: 'Chair',
    description:
      'A modern Nordic chair made with premium wood and comfortable cushions. Perfect for living rooms and offices.',
    features: [
      'Premium wooden frame',
      'Comfortable cushioning',
      'Minimalist Nordic design',
      'Durable and lightweight',
    ],
  },
  {
    id: 2,
    name: 'Knox Arm Chair',
    slug: 'knox-arm-chair',
    price: 78,
    image: '/product-2.png',
    category: 'Arm Chair',
    description:
      'Elegant arm chair with arm support and a soft fabric finish. Designed for comfort and style.',
    features: [
      'Soft fabric finish',
      'Strong arm support',
      'Modern design',
      'Long-lasting comfort',
    ],
  },
  {
    id: 3,
    name: 'Ergonomic Chair',
    slug: 'ergonomic-chair',
    price: 43,
    image: '/product-3.png',
    category: 'Office Chair',
    description:
      'Ergonomic chair designed to support posture and improve productivity during long working hours.',
    features: [
      'Ergonomic design',
      'Back posture support',
      'Breathable material',
      'Ideal for office use',
    ],
  },
];

/* ------------------ SEO METADATA ------------------ */
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) return { title: 'Product Not Found' };

  return {
    title: `${product.name} | Furniture Store`,
    description: product.description,
  };
}

/* ------------------ PAGE COMPONENT (SERVER) ------------------ */
export default async function ProductDetailsPage({ params }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) notFound();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-teal-700 to-teal-900 dark:from-teal-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <Header />

      {/* Page Content */}
      <main className="flex-grow px-4 sm:px-6 lg:px-20 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Product Image */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[450px] object-contain"
            />
          </div>

          {/* Product Info */}
          <div>
            <p className="text-sm uppercase tracking-wide text-white/80 mb-2">
              {product.category}
            </p>

            <h1 className="text-4xl font-bold text-white mb-4">
              {product.name}
            </h1>

            <p className="text-2xl font-semibold text-teal-200 mb-6">
              ${product.price.toFixed(2)}
            </p>

            <p className="text-white/90 leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Features */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-white mb-3">Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start text-white/90">
                    <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Actions */}
            <CartActions product={product} />

            {/* Buy Now button */}
            {/* <button className="mt-4 sm:mt-0 border border-white/30 text-white px-8 py-3 rounded-full hover:bg-white/10 transition">
              Buy Now
            </button> */}
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
