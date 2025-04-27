import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Product } from '@/types/product';
import { Plus } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import LinkManager from './LinkManager';

interface AdminProductFormProps {
  initialProduct?: Product;
  categories: string[];
  onSubmit: (product: Omit<Product, 'id'>) => void;
}

const AdminProductForm: React.FC<AdminProductFormProps> = ({ 
  initialProduct, 
  categories,
  onSubmit 
}) => {
  const { toast } = useToast();
  const [title, setTitle] = useState(initialProduct?.title || '');
  const [description, setDescription] = useState(initialProduct?.description || '');
  const [price, setPrice] = useState(initialProduct?.price.toString() || '');
  const [category, setCategory] = useState(initialProduct?.category || '');
  const [image, setImage] = useState(initialProduct?.image || '');
  const [purchaseLink, setPurchaseLink] = useState(initialProduct?.purchaseLink || '');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!title) newErrors.title = 'Title is required';
    if (!description) newErrors.description = 'Description is required';
    if (!price) newErrors.price = 'Price is required';
    else if (isNaN(parseFloat(price))) newErrors.price = 'Price must be a number';
    if (!category) newErrors.category = 'Category is required';
    if (!image) newErrors.image = 'Image URL is required';
    if (!purchaseLink) newErrors.purchaseLink = 'Purchase link is required';
    else if (!purchaseLink.startsWith('http')) newErrors.purchaseLink = 'Must be a valid URL';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    const productData = {
      title,
      description,
      price: parseFloat(price),
      category,
      image,
      purchaseLink,
      popularity: initialProduct?.popularity || 0
    };
    
    onSubmit(productData);
    toast({
      title: initialProduct ? "Product updated" : "Product created",
      description: `Successfully ${initialProduct ? 'updated' : 'added'} ${title}`,
    });
  };

  const handlePurchaseLinkUpdate = (newLink: string) => {
    setPurchaseLink(newLink);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
      <div className="space-y-2">
        <Label htmlFor="title">Product Title</Label>
        <Input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter product title"
          className={errors.title ? 'border-red-500' : ''}
        />
        {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter product description"
          className={`min-h-[100px] ${errors.description ? 'border-red-500' : ''}`}
        />
        {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="price">Price ($)</Label>
          <Input
            id="price"
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="29.99"
            className={errors.price ? 'border-red-500' : ''}
          />
          {errors.price && <p className="text-red-500 text-sm">{errors.price}</p>}
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="category">Category</Label>
          <Select 
            value={category} 
            onValueChange={setCategory}
          >
            <SelectTrigger className={errors.category ? 'border-red-500' : ''}>
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((cat) => (
                <SelectItem key={cat} value={cat}>{cat}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.category && <p className="text-red-500 text-sm">{errors.category}</p>}
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="image">Image URL</Label>
        <Input
          id="image"
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="https://example.com/image.jpg"
          className={errors.image ? 'border-red-500' : ''}
        />
        {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}
        {image && (
          <div className="mt-2 w-32 h-32 border rounded-md overflow-hidden">
            <img 
              src={image} 
              alt="Product preview" 
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://placehold.co/400x400?text=Invalid+Image';
              }}
            />
          </div>
        )}
      </div>
      
      <div className="space-y-2">
        <Label>Purchase Link Management</Label>
        <LinkManager
          productId={initialProduct?.id || ''}
          currentLink={purchaseLink}
          onUpdateLink={handlePurchaseLinkUpdate}
        />
      </div>
      
      <Button type="submit" className="bg-trendyyy-accent hover:bg-trendyyy-accent/90">
        <Plus className="mr-2 h-4 w-4" />
        {initialProduct ? 'Update Product' : 'Add Product'}
      </Button>
    </form>
  );
};

export default AdminProductForm;
