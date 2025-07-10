import { Product } from '@/services/api';
import ProductCard from './ProductCard';

interface ProductGridProps {
  products: Product[];
}

import React, { useMemo } from 'react';

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  const productCards = useMemo(() =>
    products.map((product) => (
      <ProductCard key={product._id} product={product} />
    )),
    [products]
  );
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {productCards}
    </div>
  );
};

export default ProductGrid;