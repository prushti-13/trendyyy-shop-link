
import React, { createContext, useContext, useState } from 'react';

interface AdminContextType {
  isAdmin: boolean;
  toggleAdmin: () => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export function AdminProvider({ children }: { children: React.ReactNode }) {
  const [isAdmin, setIsAdmin] = useState(false);

  const toggleAdmin = () => {
    setIsAdmin(!isAdmin);
  };

  return (
    <AdminContext.Provider value={{ isAdmin, toggleAdmin }}>
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
}
