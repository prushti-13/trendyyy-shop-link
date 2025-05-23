
export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  purchaseLink: string;
  popularity: number;
  linkMetadata?: {
    title: string;
    description?: string;
    lastModified: string;
    extractedPrice?: number;
  };
}
