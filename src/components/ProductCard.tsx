import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Product } from '@/services/api';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link to={`/product/${product._id}`}>
      <Card
        className="group cursor-pointer transition-transform duration-200 hover:shadow-organic hover:-translate-y-1 overflow-hidden border-border/50 will-change-transform"
      >
        <CardContent className="p-0">
          <div className="aspect-square overflow-hidden relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 will-change-transform"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = `https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=400&fit=crop&crop=center`;
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
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
}