"use client";
import { content } from '../data/content';
import type { ProductCategory } from '../types/content';
import Image from 'next/image';
import Button from '@/components/ui/Button';

const Products = () => {
  const { products } = content;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gray-100 dark:bg-gray-800 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Products
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Discover our extensive range of premium granite solutions
          </p>
        </div>
      </div>

      {/* Product Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.categories.map((category: ProductCategory) => (
            <div key={category.name} className="group [perspective:1000px]">
              <div className="relative h-[300px] w-full rounded-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front */}
                <div className="absolute inset-0">
                  <div className="relative h-full w-full rounded-xl overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover rotate-[-90deg] scale-150"
                      style={{ transformOrigin: 'center' }}
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <h3 className="text-2xl font-bold text-white text-center px-4">
                        {category.name}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Back */}
                <div className="absolute inset-0 h-full w-full rounded-xl bg-black/90 px-8 py-6 text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="flex flex-col justify-between h-full">
                    <div>
                      <h3 className="text-2xl font-bold mb-4">{category.name}</h3>
                      <p className="text-gray-300 text-sm">
                        {category.description}
                      </p>
                    </div>
                    <Button href={`/products/${category.name.toLowerCase()}`} variant="white" className="w-full">
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-gray-300 mb-8">
            Contact us for a free consultation and quote
          </p>
          <Button href="/contact" variant="white">
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Products; 