import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { productsAPI, Product } from '@/services/api';
import FeedbackForm from '@/components/FeedbackForm';
import LoadingSpinner from '@/components/LoadingSpinner';
import ErrorMessage from '@/components/ErrorMessage';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

import React, { useState as useStateReact } from 'react';
import { ArrowLeft, Package, Star, ShoppingCart, Heart, Share2 } from 'lucide-react';

function ProductActions() {
  const [cart, setCart] = useStateReact(false);
  const [wish, setWish] = useStateReact(false);
  const [shared, setShared] = useStateReact(false);

  return (
    <div className="flex gap-2 mt-2">
      <button
        className={`rounded-full p-2 bg-white/80 border border-border/50 shadow transition-colors flex items-center justify-center ${cart ? 'bg-green-100 border-green-400' : 'hover:bg-primary/10'}`}
        title="Add to Cart"
        onClick={() => {
          setCart(true);
          setTimeout(() => setCart(false), 1200);
        }}
        type="button"
      >
        {cart ? (
          <svg className="h-5 w-5 text-green-500 animate-bounce" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
        ) : (
          <ShoppingCart className="h-5 w-5 text-primary" />
        )}
      </button>
      <button
        className={`rounded-full p-2 bg-white/80 border border-border/50 shadow transition-colors flex items-center justify-center ${wish ? 'bg-pink-100 border-pink-400' : 'hover:bg-primary/10'}`}
        title="Add to Wishlist"
        onClick={() => {
          setWish(true);
          setTimeout(() => setWish(false), 1200);
        }}
        type="button"
      >
        {wish ? (
          <svg className="h-5 w-5 text-pink-500 animate-bounce" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
        ) : (
          <Heart className="h-5 w-5 text-pink-500" />
        )}
      </button>
      <button
        className={`rounded-full p-2 bg-white/80 border border-border/50 shadow transition-colors flex items-center justify-center ${shared ? 'bg-blue-100 border-blue-400' : 'hover:bg-primary/10'}`}
        title="Share"
        onClick={() => {
          setShared(true);
          setTimeout(() => setShared(false), 1200);
        }}
        type="button"
      >
        {shared ? (
          <svg className="h-5 w-5 text-blue-500 animate-bounce" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
        ) : (
          <Share2 className="h-5 w-5 text-accent" />
        )}
      </button>
    </div>
  );
}

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
          <div className="flex items-center justify-center">
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full max-w-[400px] h-auto max-h-[340px] object-contain rounded-xl border border-border/30 shadow"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&h=600&fit=crop&crop=center`;
                }}
              />
              <div className="absolute top-4 right-4 flex flex-col gap-2 items-end">
                <Badge className="bg-primary/90 text-primary-foreground shadow-lg">
                  <Star className="h-3 w-3 mr-1" />
                  Organic
                </Badge>
                <ProductActions />
              </div>
            </div>
          </div>


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