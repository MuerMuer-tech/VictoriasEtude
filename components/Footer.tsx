
import React from 'react';
import { Page } from '../types';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="border-t border-white/5 py-12 bg-background-dark">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-4 text-white/50">
          <div className="size-4 text-primary">
            <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z"></path>
            </svg>
          </div>
          <p className="text-sm">© 2025 Victoria's Etude. Shrewsbury, MA.</p>
        </div>
        
        <div className="flex gap-8 text-white/50 text-sm">
          <button onClick={() => onNavigate(Page.ABOUT)} className="hover:text-primary transition-colors">About</button>
          <button onClick={() => onNavigate(Page.LESSONS)} className="hover:text-primary transition-colors">Lessons</button>
          <button onClick={() => onNavigate(Page.CONTACT)} className="hover:text-primary transition-colors">Contact</button>
        </div>

        <div className="flex gap-6">
          <a href="#" className="text-slate-400 hover:text-primary transition-colors">
            <span className="material-symbols-outlined">camera</span>
          </a>
          <a href="#" className="text-slate-400 hover:text-primary transition-colors">
            <span className="material-symbols-outlined">mail</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
