import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { productsAPI, Product } from '@/services/api';
import FeedbackForm from '@/components/FeedbackForm';
import LoadingSpinner from '@/components/LoadingSpinner';
import ErrorMessage from '@/components/ErrorMessage';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Package, Star } from 'lucide-react';

export default function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProduct = async () => {
    if (!id) return;
    
    try {
      setLoading(true);
      setError(null);
      const data = await productsAPI.getProductById(id);
      setProduct(data);
    } catch (err) {
      console.error('Error fetching product:', err);
      setError('Failed to load product details. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-subtle">
        <div className="container mx-auto px-4 py-8">
          <LoadingSpinner size="lg" text="Loading product details..." />
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-gradient-subtle">
        <div className="container mx-auto px-4 py-8">
          <ErrorMessage 
            message={error || 'Product not found'} 
            onRetry={fetchProduct} 
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <div className="mb-8">
          <Link to="/">
            <Button variant="outline" className="gap-2 hover:bg-primary/5">
              <ArrowLeft className="h-4 w-4" />
              Back to Products
            </Button>
          </Link>
        </div>

        {/* Product Details */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Product Image */}
          <Card className="overflow-hidden shadow-card">
            <CardContent className="p-0">
              <div className="aspect-square relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&h=600&fit=crop&crop=center`;
                  }}
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary/90 text-primary-foreground shadow-lg">
                    <Star className="h-3 w-3 mr-1" />
                    Organic
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Product Info */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Package className="h-4 w-4" />
                <span>{product.brand}</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                {product.name}
              </h1>
              {product.description && (
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              )}
            </div>

            {/* Features */}
            <Card className="bg-organic-green-light/20 border-primary/20">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-4">
                  Why Choose Organic?
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 bg-primary rounded-full" />
                    100% Natural & Chemical-Free
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 bg-primary rounded-full" />
                    Sustainably Sourced
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 bg-primary rounded-full" />
                    Supporting Local Farmers
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 bg-primary rounded-full" />
                    Better for You & the Planet
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Feedback Section */}
        <div className="max-w-2xl mx-auto">
          <FeedbackForm productId={product._id} productName={product.name} />
        </div>
      </div>
    </div>
  );
}