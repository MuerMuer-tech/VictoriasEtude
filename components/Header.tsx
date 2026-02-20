import React, { useState } from 'react';
import { Page, NavItem } from '../types';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems: NavItem[] = [
    { label: 'Home', page: Page.HOME },
    { label: 'About', page: Page.ABOUT },
    { label: 'Lessons', page: Page.LESSONS },
    { label: 'Contact', page: Page.CONTACT }
  ];

  const handleNavigate = (page: Page) => {
    onNavigate(page);
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-background-dark/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => handleNavigate(Page.HOME)}
        >
          <div className="size-6 text-primary group-hover:scale-110 transition-transform">
            <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight uppercase tracking-widest leading-none">
              Victoria’s Etude
            </span>
            <span className="text-[10px] text-primary uppercase tracking-[0.2em]">
              Shrewsbury, MA
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.page}
              onClick={() => handleNavigate(item.page)}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                currentPage === item.page ? 'text-primary' : 'text-white/70'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* Mobile Hamburger */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-white/80 hover:text-white hover:bg-white/10 transition"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 7H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M4 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>

          {/* CTA Button */}
          <button
            onClick={() => handleNavigate(Page.BOOKING)}
            className="bg-primary text-background-dark px-6 py-2.5 rounded-lg text-sm font-bold hover:brightness-110 transition-all active:scale-95 shadow-lg shadow-primary/10"
          >
            Book a Trial
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Panel */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/10 bg-background-dark/95 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavigate(item.page)}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-white/10 ${
                  currentPage === item.page ? 'text-primary' : 'text-white/80'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
