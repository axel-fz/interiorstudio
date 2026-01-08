import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/* ------------------ MOCK PRODUCT DATA ------------------ */
const products = [
  {
    id: 1,
    name: "Nordic Chair",
    slug: "nordic-chair",
    price: 50,
    image: "/product-1.png",
    category: "Chair",
    description:
      "A modern Nordic chair made with premium wood and comfortable cushions. Perfect for living rooms and offices.",
    features: [
      "Premium wooden frame",
      "Comfortable cushioning",
      "Minimalist Nordic design",
      "Durable and lightweight",
    ],
  },
  {
    id: 2,
    name: "Knox Arm Chair",
    slug: "knox-arm-chair",
    price: 78,
    image: "/product-2.png",
    category: "Arm Chair",
    description:
      "Elegant arm chair with arm support and a soft fabric finish. Designed for comfort and style.",
    features: [
      "Soft fabric finish",
      "Strong arm support",
      "Modern design",
      "Long-lasting comfort",
    ],
  },
  {
    id: 3,
    name: "Ergonomic Chair",
    slug: "ergonomic-chair",
    price: 43,
    image: "/product-3.png",
    category: "Office Chair",
    description:
      "Ergonomic chair designed to support posture and improve productivity during long working hours.",
    features: [
      "Ergonomic design",
      "Back posture support",
      "Breathable material",
      "Ideal for office use",
    ],
  },
];

/* ------------------ SEO METADATA ------------------ */
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return { title: "Product Not Found" };
  }

  return {
    title: `${product.name} | Furniture Store`,
    description: product.description,
  };
}

/* ------------------ PAGE COMPONENT ------------------ */
export default async function ProductDetailsPage({ params }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen dark:bg-gradient-to-br dark:from-teal-900 dark:to-gray-900 dark:via-gray-800 bg-gradient-to-br from-teal-700 to-teal-900 flex flex-col bg-gray-50 dark:bg-gray-900">
      {/* Header */}

      <Header />
      {/* Page Content */}
      <main className="flex-grow px-4 sm:px-6 lg:px-20 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Product Image */}
          <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[300px] sm:h-[400px] lg:h-[450px] object-contain"
            />
          </div>

          {/* Product Info */}
          <div>
            <p className="text-xs sm:text-sm uppercase tracking-wide text-white dark:text-gray-400 mb-2">
              {product.category}
            </p>

            <h1 className="text-3xl sm:text-4xl font-bold text-white dark:text-white mb-4">
              {product.name}
            </h1>

            <p className="text-xl sm:text-2xl font-semibold text-teal-200 dark:text-teal-400 mb-6">
              ${product.price.toFixed(2)}
            </p>

            <p className="text-white dark:text-gray-300 leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Features */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Features
              </h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start text-white dark:text-gray-300"
                  >
                    <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-teal-700 hover:bg-teal-800 text-white px-8 py-3 rounded-full transition">
                Add to Cart
              </button>

              <button className="border border-gray-300 dark:border-gray-600 text-white dark:text-white px-8 py-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
