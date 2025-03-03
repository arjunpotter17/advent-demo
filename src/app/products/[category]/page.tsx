"use client";
import ProductCategory from '@/pages/ProductCategory';
import { useParams } from 'next/navigation';

export default function ProductCategoryPage() {
  const params = useParams();
  if (!params || !params.category) {
    return <div>No category found</div>;
  }
  return <ProductCategory category={params.category as string} />;
} 