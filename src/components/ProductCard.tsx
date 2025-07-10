import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Product } from '@/services/api';

interface ProductCardProps {
  product: Product;
}

import React, { useState, memo } from 'react';

const ProductCard = memo(function ProductCard({ product }: ProductCardProps) {
  const [added, setAdded] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <Link to={`/product/${product._id}`} tabIndex={-1}>
      <Card
        className="group cursor-pointer transition-transform duration-200 hover:shadow-organic hover:-translate-y-1 overflow-hidden border-border/50 will-change-transform relative"
      >
        <CardContent className="p-0">
          <div className="aspect-square overflow-hidden relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 will-change-transform"
              loading="lazy"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = `https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=400&fit=crop&crop=center`;
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="absolute bottom-2 right-2 bg-primary text-white rounded-full px-4 py-2 shadow-lg text-sm font-semibold flex items-center gap-2 opacity-90 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-primary/60 transition-all duration-200"
              tabIndex={0}
            >
              {added ? (
                <>
                  <svg className="w-5 h-5 text-green-300 animate-bounce" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  Added!
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A1 1 0 007.5 17h9a1 1 0 00.85-1.53L17 13M7 13V6a1 1 0 011-1h5a1 1 0 011 1v7" /></svg>
                  Add to Cart
                </>
              )}
            </button>
          </div>
          <div className="p-4 space-y-2">
            <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors duration-200">
              {product.name}
            </h3>
            <p className="text-sm text-muted-foreground font-medium">
              {product.brand}
            </p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
});

export default ProductCard;