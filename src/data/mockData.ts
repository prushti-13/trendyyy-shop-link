
import { Product } from '@/types/product';
import { Category } from '@/types/category';

// Mock Products
export const products: Product[] = [
  {
    id: '1',
    title: 'Premium Wireless Headphones',
    description: 'Experience crystal-clear sound with these premium wireless headphones. Featuring active noise cancellation, 30-hour battery life, and ultra-comfortable ear cushions for all-day wear.',
    price: 249.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    purchaseLink: 'https://example.com/buy-headphones',
    popularity: 95
  },
  {
    id: '2',
    title: 'Designer Leather Handbag',
    description: 'Elevate your style with this luxurious designer leather handbag. Features multiple compartments, premium hardware, and is crafted from genuine leather.',
    price: 199.99,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    purchaseLink: 'https://example.com/buy-handbag',
    popularity: 88
  },
  {
    id: '3',
    title: 'Smart Watch with Health Tracking',
    description: 'Monitor your health and stay connected with this feature-rich smartwatch. Tracks heart rate, sleep patterns, and includes GPS and water resistance up to 50 meters.',
    price: 299.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    purchaseLink: 'https://example.com/buy-smartwatch',
    popularity: 92
  },
  {
    id: '4',
    title: 'Organic Face Serum',
    description: 'Rejuvenate your skin with this all-natural, organic face serum. Packed with antioxidants and vitamins to hydrate and reduce signs of aging.',
    price: 59.99,
    category: 'Beauty',
    image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    purchaseLink: 'https://example.com/buy-faceserum',
    popularity: 85
  },
  {
    id: '5',
    title: 'Modern Living Room Lamp',
    description: 'Add a touch of elegance to your living space with this modern, minimalist floor lamp. Features adjustable brightness and color temperature.',
    price: 149.99,
    category: 'Home Decor',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    purchaseLink: 'https://example.com/buy-lamp',
    popularity: 80
  },
  {
    id: '6',
    title: 'Premium Sneakers',
    description: 'Step out in style with these premium, limited-edition sneakers. Features lightweight construction, superior cushioning, and unique design.',
    price: 129.99,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    purchaseLink: 'https://example.com/buy-sneakers',
    popularity: 90
  },
  {
    id: '7',
    title: 'Ultra Slim Laptop',
    description: 'Boost your productivity with this powerful yet lightweight laptop. Features a 4K display, 16GB RAM, and lightning-fast SSD storage.',
    price: 1299.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    purchaseLink: 'https://example.com/buy-laptop',
    popularity: 96
  },
  {
    id: '8',
    title: 'Luxury Candle Set',
    description: 'Transform your home ambiance with this set of premium scented candles. Made from natural soy wax with essential oils for a clean burn.',
    price: 49.99,
    category: 'Home Decor',
    image: 'https://images.unsplash.com/photo-1603006905393-be0cc337b888?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    purchaseLink: 'https://example.com/buy-candles',
    popularity: 82
  }
];

// Mock Categories
export const categories: Category[] = [
  {
    id: '1',
    name: 'Fashion',
    slug: 'fashion',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '2',
    name: 'Electronics',
    slug: 'electronics',
    image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '3',
    name: 'Beauty',
    slug: 'beauty',
    image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '4',
    name: 'Home Decor',
    slug: 'home-decor',
    image: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }
];
