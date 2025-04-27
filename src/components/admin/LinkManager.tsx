
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Plus, Link, Trash2 } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useToast } from '@/hooks/use-toast';

interface LinkManagerProps {
  productId: string;
  currentLink: string;
  onUpdateLink: (newLink: string) => void;
}

const LinkManager: React.FC<LinkManagerProps> = ({
  productId,
  currentLink,
  onUpdateLink
}) => {
  const { toast } = useToast();
  const [newLink, setNewLink] = React.useState('');
  const [linkHistory, setLinkHistory] = React.useState<{ url: string; timestamp: string }[]>([]);

  const handleAddLink = () => {
    if (!newLink) {
      toast({
        title: "Error",
        description: "Please enter a valid URL",
        variant: "destructive",
      });
      return;
    }

    try {
      new URL(newLink); // Validate URL format
      onUpdateLink(newLink);
      setLinkHistory([
        { url: newLink, timestamp: new Date().toISOString() },
        ...linkHistory
      ]);
      setNewLink('');
      
      toast({
        title: "Success",
        description: "Purchase link updated successfully",
      });
    } catch {
      toast({
        title: "Error",
        description: "Please enter a valid URL",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-start gap-4">
        <div className="flex-1 space-y-2">
          <Input
            type="url"
            value={newLink}
            onChange={(e) => setNewLink(e.target.value)}
            placeholder="Enter new purchase link URL"
          />
        </div>
        <Button 
          onClick={handleAddLink}
          className="flex items-center gap-2"
        >
          <Plus className="h-4 w-4" />
          Update Link
        </Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Current Link</TableHead>
              <TableHead className="w-[200px]">Last Modified</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentLink ? (
              <TableRow>
                <TableCell className="font-medium">
                  <a 
                    href={currentLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
                  >
                    <Link className="h-4 w-4" />
                    {currentLink}
                  </a>
                </TableCell>
                <TableCell>
                  {new Date().toLocaleDateString()}
                </TableCell>
              </TableRow>
            ) : (
              <TableRow>
                <TableCell colSpan={2} className="text-center py-4 text-gray-500">
                  No purchase link set
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {linkHistory.length > 0 && (
        <div className="space-y-2">
          <h4 className="text-sm font-medium">Link History</h4>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Previous Links</TableHead>
                  <TableHead className="w-[200px]">Modified Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {linkHistory.map((link, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">
                      <a 
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
                      >
                        <Link className="h-4 w-4" />
                        {link.url}
                      </a>
                    </TableCell>
                    <TableCell>
                      {new Date(link.timestamp).toLocaleDateString()}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      )}
    </div>
  );
};

export default LinkManager;
