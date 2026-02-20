
import React, { useState } from 'react';
import { CurriculumCard, Page } from '../types';
import kidsImg from "../src/assets/pianokid.jpg";
import adultsImg from "../src/assets/pianoadult.jpg";
import examImg from "../src/assets/pianoexam1.jpg";
import clpImage from '../src/assets/clp930.jpg';

const Lessons: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const programs: CurriculumCard[] = [
    {
      title: 'Children & Teens',
      image: kidsImg,
      description: 'A holistic approach focusing on musical literacy, technique, and creative expression for ages 5-18.',
      features: ['Foundational Theory & Sight-reading', 'Performance confidence workshops', 'Introductory Classical Repertoire']
    },
    {
      title: 'Adult Piano Lessons',
      image: adultsImg,
      description: 'Customized programs for professionals and hobbyists looking to return to music or start a new journey.',
      features: ['Flexible scheduling for professionals', 'Genre-fluid: Classical to Jazz/Pop', 'Ergonomic technique & tension relief']
    },
    {
      title: 'Exam & Advanced Study',
      image: examImg,
      description: 'Rigorous preparation for ABRSM exams, conservatory auditions, and international competitions.',
      features: ['Intensive ABRSM training', 'Artistic interpretation & nuance', 'Audition repertoire coaching']
    }
  ];

  const faqs = [
    { q: 'What is the minimum age for enrollment?', a: 'We typically start students at age 5, but offer a pre-piano assessment for younger children to determine developmental readiness.' },
    { q: 'Do I need an acoustic piano at home?', a: 'While an acoustic piano is preferred for proper technique development, a high-quality 88-key weighted digital piano is suitable for most beginner and intermediate students.' },
    { q: 'Do you offer ABRSM exam preparation?', a: 'Yes, our Exam Prep & Advanced Study program specifically targets the ABRSM syllabi.' }
  ];

  return (
    <div className="animate-in fade-in duration-700 pb-20">
      <section className="max-w-7xl mx-auto px-6 lg:px-20 py-16 lg:py-24">
        <div className="max-w-2xl">
          <h2 className="text-4xl lg:text-5xl font-black leading-tight tracking-tight mb-6">
            Elevated Piano Instruction & Pedagogy
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-8">
            Discover a curriculum tailored to your artistic ambitions. From foundational technique to advanced conservatory preparation, we offer a structured environment for excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {programs.map((p, idx) => (
            <div key={idx} className="gold-border-gradient rounded-xl p-8 flex flex-col h-full bg-background-dark group hover:-translate-y-2 transition-transform duration-300">
              <div className="mb-6 h-48 w-full rounded-lg overflow-hidden brightness-90 group-hover:brightness-100 transition-all duration-500">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{p.title}</h3>
              <p className="text-slate-400 text-sm mb-6 flex-grow">{p.description}</p>
              <ul className="space-y-3 mb-8">
                {p.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <span className="material-symbols-outlined text-primary text-base pt-0.5">check_circle</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => window.location.hash = Page.BOOKING}
                className="w-full py-3 rounded-lg border border-primary text-primary font-bold text-sm hover:bg-primary hover:text-background-dark transition-all"
              >
                Book a Trial
              </button>
            </div>
          ))}
        </div>
      </section>
      
{/* Studio Instrument Section */}
<section className="py-24 border-b border-white/10">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
    
    {/* Text Content */}
    <div>
      <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
        <span className="text-primary text-2xl">🎹</span>
        Studio Instrument
      </h2>

      <p className="text-white/80 leading-relaxed mb-4">
        All lessons are conducted on a <span className="text-primary font-medium">Yamaha Clavinova CLP-930</span>, part of Yamaha’s premium Clavinova series.
      </p>

      <p className="text-white/70 leading-relaxed mb-4">
        Designed to faithfully replicate the touch, response, and tonal depth of a concert grand, the CLP-930 features weighted hammer-action keys and advanced digital sound modeling.
      </p>

      <p className="text-white/70 leading-relaxed">
        This instrument allows students to develop refined technique, dynamic control, and expressive sensitivity while benefiting from the consistency and versatility of a modern studio environment.
      </p>
    </div>

    {/* Image */}
    <div className="rounded-xl overflow-hidden border border-white/10 shadow-xl">
<img
  src={clpImage}
  alt="Yamaha Clavinova CLP-930"
  className="w-full h-full object-cover"
/>
    </div>

  </div>
</section>
      
      {/* Scheduling & Tuition */}
      <section className="max-w-7xl mx-auto px-6 lg:px-20 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Scheduling */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="material-symbols-outlined text-primary text-3xl">schedule</span>
              <h2 className="text-3xl font-bold tracking-tight">Scheduling & Duration</h2>
            </div>
            
            <div className="space-y-4">
              {[
                { time: '30 Minutes', detail: 'Recommended for young beginners' },
                { time: '45 Minutes', detail: 'Standard intermediate sessions' },
                { time: '60 Minutes', detail: 'Ideal for older students & adults' }
              ].map((d, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-xl border border-white/5 bg-white/5 hover:border-primary/30 transition-colors">
                  <span className="font-bold text-white">{d.time}</span>
                  <span className="text-slate-400 text-sm italic">{d.detail}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 rounded-xl bg-primary/10 border border-primary/20">
              <p className="text-slate-300 text-sm leading-relaxed">
                <span className="font-bold text-primary">Note:</span> Lessons are scheduled weekly. A trial lesson is required before beginning regular sessions to ensure the perfect fit between student and teacher.
              </p>
            </div>
          </div>

          {/* Tuition */}
          <div className="bg-card-dark border border-white/5 rounded-2xl p-8 lg:p-12 shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-5">
               <span className="material-symbols-outlined text-9xl">payments</span>
             </div>
             
             <h2 className="text-3xl font-bold mb-2 tracking-tight">Tuition</h2>
             <p className="text-slate-400 text-sm mb-8">Billed monthly based on lesson duration.</p>

             <div className="space-y-6">
                <div className="flex justify-between border-b border-white/10 pb-4 text-xs font-bold uppercase tracking-widest text-primary">
                  <span>Duration</span>
                  <span>Rate</span>
                </div>
                {[
                  { length: '30 minutes', price: '$40' },
                  { length: '45 minutes', price: '$60' },
                  { length: '60 minutes', price: '$80' }
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center group">
                    <span className="text-white font-medium group-hover:text-primary transition-colors">{item.length}</span>
                    <div className="h-[1px] flex-grow mx-4 border-t border-dashed border-white/10"></div>
                    <span className="text-2xl font-serif text-white">{item.price} <span className="text-xs font-sans text-slate-500">/ lesson</span></span>
                  </div>
                ))}
             </div>

             <p className="mt-10 text-slate-400 text-xs italic leading-relaxed border-t border-white/5 pt-6">
               Unsure which length is best? We’ll discuss the right fit during your trial based on age, experience, and musical goals ☺️
             </p>
          </div>
        </div>
      </section>

      {/* Policies */}
      <section className="max-w-7xl mx-auto px-6 lg:px-20 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-4 tracking-tight">Studio Policies</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Life happens, and we aim to be flexible while maintaining a professional and consistent teaching schedule for all our students.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              icon: 'history',
              title: 'Lateness',
              content: 'If a student arrives late, the lesson will still end at the scheduled time. If the instructor is running late, you will always receive your full time or a make-up session.'
            },
            {
              icon: 'event_busy',
              title: 'Cancellations',
              content: '24 hours\' notice is required for rescheduling. Cancellations with less than 24 hours\' notice or no-shows will be charged as a regular lesson (except in cases of emergency or illness).'
            },
            {
              icon: 'sync_alt',
              title: 'Make-Up Lessons',
              content: 'We strive to reschedule when availability allows, though make-up sessions are not guaranteed. Advance notice significantly increases the likelihood of finding a suitable time.'
            }
          ].map((policy, i) => (
            <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/40 transition-all">
              <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined">{policy.icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-4">{policy.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {policy.content}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center py-10 px-6 rounded-2xl border border-dashed border-primary/30 max-w-3xl mx-auto">
          <p className="text-lg italic font-serif text-slate-200">
            "Clear communication helps us build trust and respect — thank you for being thoughtful and respectful of our time together."
          </p>
          <p className="mt-4 text-xs uppercase tracking-widest font-bold text-primary">— Final Note</p>
        </div>
      </section>

      {/* Onboarding */}
      <section className="max-w-7xl mx-auto px-6 lg:px-20 py-24 bg-card-dark/20 mt-12 rounded-[3rem]">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 italic tracking-tight font-serif text-white">The Onboarding Journey</h2>
          <div className="h-1 w-12 bg-primary mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
          {[
            { n: '1', t: 'The Trial', d: 'A introductory consultation and skill assessment.' },
            { n: '2', t: 'Goal Mapping', d: 'Defining artistic milestones and personal curriculum path.' },
            { n: '3', t: 'Weekly Plan', d: 'Consistent 1-on-1 sessions at our Shrewsbury studio.' },
            { n: '4', t: 'Progress Tracking', d: 'Regular recitals, feedback reports, and certifications.' }
          ].map((s, idx) => (
            <div key={idx} className="flex flex-col items-center text-center relative z-10">
              <div className={`size-12 rounded-full flex items-center justify-center font-bold text-xl mb-6 shadow-lg ${idx === 0 ? 'bg-primary text-background-dark' : 'bg-background-dark border border-primary text-primary'}`}>
                {s.n}
              </div>
              <h4 className="text-lg font-bold mb-2">{s.t}</h4>
              <p className="text-slate-500 text-sm">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((f, idx) => (
            <div key={idx} className="border-b border-white/10 pb-4">
              <button 
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                className="flex w-full items-center justify-between py-4 text-left group"
              >
                <span className={`text-lg font-medium transition-colors ${activeFaq === idx ? 'text-primary' : 'group-hover:text-primary'}`}>{f.q}</span>
                <span className="material-symbols-outlined text-primary">
                  {activeFaq === idx ? 'remove' : 'add'}
                </span>
              </button>
              {activeFaq === idx && (
                <div className="text-slate-400 text-sm leading-relaxed pb-4 animate-in fade-in slide-in-from-top-2 duration-300">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Lessons;
