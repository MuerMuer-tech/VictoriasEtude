
import React from 'react';
import { Page, NavItem } from '../types';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const navItems: NavItem[] = [
    { label: 'Home', page: Page.HOME },
    { label: 'About', page: Page.ABOUT },
    { label: 'Lessons', page: Page.LESSONS },
    { label: 'Contact', page: Page.CONTACT }
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-background-dark/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => onNavigate(Page.HOME)}
        >
          <div className="size-6 text-primary group-hover:scale-110 transition-transform">
            <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight uppercase tracking-widest leading-none">Victoria’s Etude</span>
            <span className="text-[10px] text-primary uppercase tracking-[0.2em]">Shrewsbury, MA</span>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.page}
              onClick={() => onNavigate(item.page)}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                currentPage === item.page ? 'text-primary' : 'text-white/70'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button 
          onClick={() => onNavigate(Page.BOOKING)}
          className="bg-primary text-background-dark px-6 py-2.5 rounded-lg text-sm font-bold hover:brightness-110 transition-all active:scale-95 shadow-lg shadow-primary/10"
        >
          Book a Trial
        </button>
      </div>
    </header>
  );
};

export default Header;
