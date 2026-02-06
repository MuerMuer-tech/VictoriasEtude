
import React, { useState, useEffect } from 'react';
import { Page } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Lessons from './pages/Lessons';
import Booking from './pages/Booking';
import Contact from './pages/Contact';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);

  // Simple hash-based "routing"
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as Page;
      if (Object.values(Page).includes(hash)) {
        setCurrentPage(hash);
      } else {
        setCurrentPage(Page.HOME);
      }
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Initial check

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case Page.HOME: return <Home />;
      case Page.ABOUT: return <About />;
      case Page.LESSONS: return <Lessons />;
      case Page.BOOKING: return <Booking />;
      case Page.CONTACT: return <Contact />;
      default: return <Home />;
    }
  };

  const navigateTo = (page: Page) => {
    window.location.hash = page;
  };

  return (
    <div className="flex flex-col min-h-screen font-sans selection:bg-primary/30 selection:text-white">
      <Header currentPage={currentPage} onNavigate={navigateTo} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer onNavigate={navigateTo} />
    </div>
  );
};

export default App;
