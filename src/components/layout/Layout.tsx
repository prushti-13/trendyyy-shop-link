
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  isAdmin?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, isAdmin = false }) => {
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
