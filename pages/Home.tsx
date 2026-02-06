
import React from 'react';
import { Page, PhilosophyItem } from '../types';
import portrait from "../src/assets/VictoriaPiano.PNG";
import React from 'react';


const Home: React.FC = () => {
  const philosophy: PhilosophyItem[] = [
    {
      icon: 'auto_awesome',
      title: 'Thoughtful Teaching',
      description: 'Focused on individual student needs and personalized learning paths. We adapt to your pace and goals.'
    },
    {
      icon: 'account_balance',
      title: 'Structured Progress',
      description: 'A clear, disciplined path toward technical and musical mastery using world-class pedagogical methods.'
    },
    {
      icon: 'favorite',
      title: 'Joy in Music',
      description: 'Cultivating a lifelong love and appreciation for the instrument through expressive performance and discovery.'
    }
  ];

  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-[1.1] text-white">
              Victoria’s<br/><span className="italic font-serif font-extralight">Etude</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 font-light max-w-md">
              Private Piano Studio in Shrewsbury, Massachusetts.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => window.location.hash = Page.BOOKING}
              className="bg-primary text-background-dark px-8 py-4 rounded-xl text-lg font-bold hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-primary/20"
            >
              Schedule Introductory Lesson
            </button>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full opacity-30 group-hover:opacity-50 transition-opacity"></div>
          <div className="relative w-full aspect-[4/5] bg-cover bg-center rounded-xl shadow-2xl border border-white/10 overflow-hidden">
            <img 
              src={portrait}
              alt="Victoria Piano"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-card-dark/40 py-24 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 max-w-2xl">
            <h2 className="text-4xl font-bold mb-4 text-white">Our Philosophy</h2>
            <p className="text-slate-400 text-lg">Refined musical instruction tailored to every student's journey, from technical precision to artistic soul.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {philosophy.map((item, idx) => (
              <div key={idx} className="bg-card-dark border border-white/5 p-8 rounded-xl hover:border-primary/30 transition-all group hover:-translate-y-1">
                <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-primary">{item.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 max-w-4xl mx-auto px-6 text-center">
        <span className="text-primary font-bold tracking-widest text-xs uppercase mb-6 block">Testimonials</span>
        <div className="relative">
          <span className="material-symbols-outlined text-primary/20 text-7xl absolute -top-10 left-1/2 -translate-x-1/2">format_quote</span>
          <p className="text-2xl md:text-3xl font-light italic text-white leading-relaxed mb-8">
            "Victoria’s approach is both professional and incredibly warm. My daughter has grown so much in her confidence and musicality under her guidance. The environment is truly inspiring."
          </p>
          <div className="flex flex-col items-center">
            <div className="size-14 rounded-full bg-slate-800 mb-4 overflow-hidden border-2 border-primary/20">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBElkLPnD_LS-MXG89htjPYOX5X6MeRF4myGdO9AYC0SLG_N-RNc0YOtUdQIqypLbQfa0oLd2x2aTRkAOH2YHY16f7dMg71BtByKmgcQvbLEKN7GiwEyWSzSsNHNOqz7TXazfj0iaQAJ3AZIAMMtOx5lFT1GDCzYhC5Qt-5r9F3Uk-bwvLq-BLR5-45_8BWMHbycpVx4-aD-utrnjUjFgLZ7qm3z0HSuOwBa2KcgbI2fmCI-NxyxpFBgclP7FUhGqgJ1CIJTIEnkw8" 
                alt="Sarah Jenkins"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="font-bold text-white">Sarah Jenkins</h4>
            <span className="text-slate-500 text-sm">Parent of Intermediate Student</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="bg-primary rounded-xl p-12 md:p-20 text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none"></div>
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl md:text-5xl font-black text-background-dark">Begin Your Musical Journey</h2>
            <p className="text-background-dark/80 max-w-xl mx-auto text-lg">
              We are currently accepting a limited number of new students for the upcoming term in Shrewsbury.
            </p>
            <div className="flex justify-center gap-4">
              <button 
                onClick={() => window.location.hash = Page.BOOKING}
                className="bg-background-dark text-white px-10 py-4 rounded-xl font-bold hover:bg-slate-900 transition-colors shadow-2xl"
              >
                Book a Consultation
              </button>
            </div>
          </div>
          <div className="absolute -bottom-24 -right-24 size-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -top-24 -left-24 size-64 bg-white/10 rounded-full blur-3xl"></div>
        </div>
      </section>
    </div>
  );
};

export default Home;
