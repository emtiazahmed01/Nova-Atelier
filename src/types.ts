export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: 'outerwear' | 'knitwear' | 'footwear' | 'tailoring' | 'accessories' | 'denim';
  categoryLabel: string;
  rating: number;
  reviewsCount?: number;
  badge?: 'Best Seller' | 'Sale' | 'New' | 'Trending';
  sizes: string[];
  defaultSize?: string;
  color?: string;
  image: string;
  description: string;
  details?: string[];
  inStock?: boolean;
}

export interface CartItem {
  id: string;
  productId: string;
  name: string;
  price: number;
  size: string;
  color: string;
  image: string;
  quantity: number;
}
