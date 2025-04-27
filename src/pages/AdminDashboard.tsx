
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import AdminProductList from '@/components/admin/AdminProductList';
import AdminProductForm from '@/components/admin/AdminProductForm';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, List } from 'lucide-react';
import { products as initialProducts, categories } from '@/data/mockData';
import { Product } from '@/types/product';
import { useToast } from '@/hooks/use-toast';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const AdminDashboard: React.FC = () => {
  const { toast } = useToast();
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState<string | null>(null);
  
  // Get unique category names from categories
  const categoryNames = categories.map(cat => cat.name);
  
  const handleAddProduct = (productData: Omit<Product, 'id'>) => {
    const newProduct = {
      ...productData,
      id: Date.now().toString(),
    };
    
    setProducts([newProduct, ...products]);
  };
  
  const handleUpdateProduct = (productData: Omit<Product, 'id'>) => {
    if (!editingProduct) return;
    
    const updatedProducts = products.map(product => 
      product.id === editingProduct.id 
        ? { ...productData, id: editingProduct.id } 
        : product
    );
    
    setProducts(updatedProducts);
    setEditingProduct(null);
  };
  
  const handleDeleteProduct = (productId: string) => {
    setProductToDelete(productId);
    setIsDeleteDialogOpen(true);
  };
  
  const confirmDelete = () => {
    if (!productToDelete) return;
    
    const updatedProducts = products.filter(product => product.id !== productToDelete);
    setProducts(updatedProducts);
    setIsDeleteDialogOpen(false);
    setProductToDelete(null);
    
    toast({
      title: 'Product Deleted',
      description: 'The product has been successfully deleted.',
    });
  };
  
  return (
    <Layout isAdmin>
      <div className="py-8 md:py-12">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Admin Dashboard</h1>
          
          <Tabs defaultValue="products" className="w-full">
            <TabsList className="mb-8">
              <TabsTrigger value="products" className="flex items-center gap-2">
                <List className="h-4 w-4" />
                Products
              </TabsTrigger>
              <TabsTrigger value="add-product" className="flex items-center gap-2">
                <Plus className="h-4 w-4" />
                Add New Product
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="products">
              <AdminProductList 
                products={products} 
                onEdit={setEditingProduct}
                onDelete={handleDeleteProduct}
              />
              
              {editingProduct && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                  <div className="bg-white rounded-lg shadow-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-fade-up">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-2xl font-bold">Edit Product</h2>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => setEditingProduct(null)}
                      >
                        ✕
                      </Button>
                    </div>
                    <AdminProductForm 
                      initialProduct={editingProduct} 
                      categories={categoryNames}
                      onSubmit={handleUpdateProduct}
                    />
                  </div>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="add-product">
              <AdminProductForm 
                categories={categoryNames}
                onSubmit={handleAddProduct}
              />
            </TabsContent>
          </Tabs>
          
          <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Are you sure?</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. This will permanently delete the product.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
                  Cancel
                </Button>
                <Button variant="destructive" onClick={confirmDelete}>
                  Delete
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
