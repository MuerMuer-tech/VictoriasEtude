
import React from 'react';
import { Milestone } from '../types';
import portrait from "../src/assets/Victoria.jpg";

const About: React.FC = () => {
  // Use a direct string path for the image asset to avoid ESM resolution errors in the browser.

  const milestones: Milestone[] = [
    {
      year: "2025–2026",
      icon: "workspace_premium",
      title: "Teaching & Founding Victoria’s Etude",
      description:
        "Worked as a piano instructor at Joy of Music Program and Pakachoag Music School, while founding Victoria’s Etude, a private piano studio in Shrewsbury, MA.",
    },
    {
      year: "2023–2025",
      icon: "school",
      title: "Master of Music Education — Berklee College of Music",
      description:
        "Completed a Master of Music Education at Berklee College of Music, with a focus on pedagogy, child development, and effective teaching strategies for students of all ages.",
    },
    {
      year: "2020–2023",
      icon: "library_music",
      title: "Bachelor of Arts in Music Performance — Leeds Conservatoire (UK)",
      description:
        "Earned a Bachelor of Arts in Music Performance at Leeds Conservatoire in United Kingdom, receiving comprehensive training in piano performance, music theory, and ensemble collaboration.",
    },
    {
      year: "2019–2020",
      icon: "school",
      title: "Cambridge School of Visual & Performing Arts (UK)",
      description:
        "Completed structured music training at Cambridge School of Visual and Performing Arts, focusing on technical foundations, musicianship, and artistic development.",
    },
    {
      year: "2004",
      icon: "music_note",
      title: "Early Musical Beginnings",
      description:
        "Began studying piano at the age of three, developing a strong musical foundation through consistent training and long-term study.",
    },
  ];

  return (
    <div className="animate-in slide-in-from-bottom-4 duration-700">
      <section className="max-w-7xl mx-auto w-full px-6 lg:px-20 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
          {/* Left: Portrait */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-primary/10 rounded-xl blur-xl group-hover:bg-primary/20 transition-all"></div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-white/10">
              <img 
                src={portrait}
                alt="Victoria"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
          
          {/* Right: Bio */}
          <div className="flex flex-col space-y-10">
            <div>
              <span className="text-primary uppercase tracking-[0.2em] text-xs font-bold mb-4 block">Maestra</span>
              <h1 className="text-white text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">About Victoria</h1>
              <p className="text-slate-400 text-lg leading-relaxed">
                With over 20 years of dedication to music and a specialized Master's degree in Music Education, Victoria brings a unique blend of performance excellence and pedagogical expertise to her students in Shrewsbury.
              </p>
            </div>
            
            <div className="space-y-8">
              {[
                { label: 'Education', icon: 'school', text: 'Masters in Music Education from Berklee College of Music. BA in Music Performance from Leeds Conservatoire.' },
                { label: 'Teaching Philosophy', icon: 'psychology', text: 'Cultivating artistic expression through technical mastery. I believe every student possesses a unique musical voice that can be unlocked through patience, precise technique, and emotional connection.' },
                { label: 'Experience', icon: 'workspace_premium', text: 'Faculty member at prestigious regional music programs including Joy of Music Program and Pakachoag Music School. Specializing in child development and effective piano pedagogy.' }
              ].map((item, idx) => (
                <div key={idx}>
                  <h3 className="text-primary text-sm font-bold uppercase tracking-widest mb-3 flex items-center gap-2">
                    <span className="material-symbols-outlined text-lg">{item.icon}</span> {item.label}
                  </h3>
                  <p className="text-white text-base leading-relaxed font-light opacity-80">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-white text-3xl font-bold mb-2">Musical & Teaching Journey</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {milestones.map((m, idx) => (
              <div key={idx} className="flex gap-8 group">
                <div className="flex flex-col items-center">
                  <div className="size-12 rounded-full border border-primary/40 flex items-center justify-center bg-background-dark z-10 text-primary group-hover:bg-primary group-hover:text-background-dark transition-colors">
                    <span className="material-symbols-outlined">{m.icon}</span>
                  </div>
                  {idx !== milestones.length - 1 && (
                    <div className="w-[1px] h-full bg-gradient-to-b from-primary/40 to-transparent"></div>
                  )}
                </div>
                <div className="pb-12 pt-2">
                  <span className="text-primary font-bold text-sm tracking-widest">{m.year}</span>
                  <h4 className="text-white text-xl font-bold mt-1">{m.title}</h4>
                  <p className="text-slate-400 mt-2 leading-relaxed">
                    {m.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
};

export default About;
