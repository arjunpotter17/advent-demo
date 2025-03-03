import ProductCategory from '@/pages/ProductCategory';

export default function ProductCategoryPage({ params }: { params: { category: string } }) {
  return <ProductCategory category={params.category} />;
} 