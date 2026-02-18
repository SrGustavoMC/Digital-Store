import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const PageLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-light-gray-3">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;