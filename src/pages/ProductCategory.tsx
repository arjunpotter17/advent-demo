"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { content } from '../data/content';
import Button from '@/components/ui/Button';

interface ProductCategoryProps {
  category: string;
}

const ProductCategory = ({ category }: ProductCategoryProps) => {
  const categoryData = content.products.categories.find(
    c => c.name.toLowerCase().replace(/\s+/g, '-') === category
  );
  const [selectedProduct, setSelectedProduct] = useState(
    categoryData?.items[0] || null
  );

  if (!categoryData) return null;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-16">
      {/* Hero Section */}
      <div className="bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {categoryData.name}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {categoryData.description}
          </p>
        </div>
      </div>

      {/* Product Display */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col">
        {selectedProduct && (
          <div className="mb-12">
            <motion.div
              layout
              className="relative h-[700px] w-full rounded-lg overflow-hidden"
            >
              <Image
                src={selectedProduct.image}
                alt={selectedProduct.name}
                fill
                className="object-contain transform rotate-[-90deg] scale-125"
               
              />
            </motion.div>
            <div className="mt-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {selectedProduct.name}
              </h2>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                {selectedProduct.description}
              </p>
            </div>
          </div>
        )}

        {/* Product Selection */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categoryData.items.map((product) => (
            <motion.div
              key={product.name}
              className={`cursor-pointer rounded-lg overflow-hidden border-2 transition-all
                ${selectedProduct?.name === product.name
                  ? 'border-blue-500'
                  : 'border-transparent hover:border-blue-300'
                }`}
              onClick={() => setSelectedProduct(product)}
            >
              <div className="relative h-48">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transform rotate-[-90deg] scale-150"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Interested in this product?
          </h2>
          <p className="text-gray-300 mb-8">
            Contact us for pricing and availability
          </p>
          <Button href="/contact" variant="white">
            Get in Touch
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCategory; 