
import React from 'react';
import { Navigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { useAdmin } from '@/contexts/AdminContext';

interface LayoutProps {
  children: React.ReactNode;
  isAdmin?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, isAdmin = false }) => {
  const { isAdmin: isAdminUser } = useAdmin();

  if (isAdmin && !isAdminUser) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar isAdmin={isAdmin} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
