import React, { useState } from 'react';
import Header from './Header';
import About from './About';
import ProjectList from './ProjectList';
import Contact from './Contact';
import Footer from './Footer';

function Portfolio() {
  const [currentPage, handlePageChange] = useState('About');

  const renderPage = () => {
    switch (currentPage) {
      case 'Projects':
        return <ProjectList />;
      case 'Contact':
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <main>{renderPage(currentPage)}</main>
      <Footer />
    </div>
  );
}

export default Portfolio;
