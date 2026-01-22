/**
 * Main Layout Component
 */

import React from 'react';
import Header from '../components/Header/Header';

const MainLayout = ({ children }) => {
  return (
    <div className="bg-[#0B0B0B] min-h-screen flex justify-center">
      <div className="w-[90%] md:w-[80%] max-w-7xl">
        <Header />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
