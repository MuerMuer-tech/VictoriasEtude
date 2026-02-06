import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch('https://formspree.io/f/xgoleedo', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        setStatus('success');
        form.reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <div className="animate-in fade-in duration-700 max-w-7xl mx-auto w-full py-20 px-8 lg:px-16">
      <div className="w-full mb-16 space-y-4">
        <span className="text-primary text-xs font-bold uppercase tracking-[0.3em]">Contact Us</span>
        <h2 className="text-4xl md:text-6xl font-extralight tracking-tight leading-none text-white">
          Let's begin your <br /><span className="italic font-serif text-primary">musical journey.</span>
        </h2>
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Info */}
        <div className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              { label: 'Email Inquiries', text: 'nchan2@alumni.berklee.edu' },
              { label: 'Studio Location', text: 'Shrewsbury, Massachusetts 01545, US' },
              { label: 'Studio Hours', text: 'Mon – Fri, By Appointment Only' },
              { label: 'Connect', text: 'Email/Phone' },
            ].map((info, idx) => (
              <div key={idx} className="space-y-2">
                <h3 className="text-primary text-[10px] uppercase tracking-[0.2em] font-bold">{info.label}</h3>
                <p className="text-lg font-light text-slate-300">{info.text}</p>
              </div>
            ))}
          </div>

          <div className="relative aspect-video w-full rounded-xl overflow-hidden grayscale contrast-125 opacity-60 hover:opacity-100 transition-all duration-500">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzjG9FM229SyrPn_CEAyt_UzX8NN2Bewypqp8onfwtxynQJOMKnqE-uQqKiLWlyq3ySImHDNOoNUbu1yhaJKFs5etH3E__d_AHUm0YSY8-Mzzy-ZJBpQuJBLkPZsj9GZ1ccnoJZcqys13w-KXnY5L2O1CzUVhh53oWOd3PVsopk3PPpYL9WYJkj0bg2QtfMiw_UiGEwxeHIerrx2jzQgp-qqaYG6s9NJikAbkydfz2JeaHi-NPTm20BCd3FCFARCz93vaRWbdTyEc"
              alt="Piano detail"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Form */}
        <div className="bg-white/5 p-10 lg:p-14 rounded-2xl">
          <form className="space-y-12" onSubmit={handleSubmit}>
            <input type="hidden" name="_subject" value="New Contact Inquiry — Victoria’s Etude" />

            <div className="space-y-1">
              <label className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold">Full Name</label>
              <input
                name="fullName"
                className="w-full bg-transparent border-0 border-b border-white/20 py-4 text-lg font-light focus:ring-0 focus:border-primary transition-colors outline-none"
                placeholder="Claude Debussy"
                type="text"
                required
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold">Email Address</label>
              <input
                name="email"
                className="w-full bg-transparent border-0 border-b border-white/20 py-4 text-lg font-light focus:ring-0 focus:border-primary transition-colors outline-none"
                placeholder="example@email.com"
                type="email"
                required
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold">Interested In</label>
              <select
                name="interestedIn"
                defaultValue=""
                required
                className="w-full bg-transparent border-0 border-b border-white/20 py-4 text-lg font-light focus:ring-0 focus:border-primary transition-colors outline-none appearance-none cursor-pointer"
              >
                <option value="" disabled className="bg-background-dark">
                  Select an option
                </option>
                <option value="Classical Piano Instruction" className="bg-background-dark">
                  Classical Piano Instruction
                </option>
                <option value="Performance Preparation" className="bg-background-dark">
                  Performance Preparation
                </option>
                <option value="Music Theory & Composition" className="bg-background-dark">
                  Music Theory & Composition
                </option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold">Message</label>
              <textarea
                name="message"
                className="w-full bg-transparent border-0 border-b border-white/20 py-4 text-lg font-light focus:ring-0 focus:border-primary transition-colors outline-none resize-none"
                placeholder="How can we help your musical journey?"
                rows={3}
                required
              ></textarea>
            </div>

            <button
              className="w-full bg-primary text-background-dark font-bold py-5 rounded-lg uppercase tracking-[0.2em] text-sm hover:brightness-110 transition-all flex items-center justify-center gap-2 group disabled:opacity-60"
              type="submit"
              disabled={status === 'submitting'}
            >
              {status === 'submitting' ? 'Sending…' : 'Send Inquiry'}
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </button>

            {status === 'success' && (
              <div className="rounded-lg border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm text-green-200">
                Thanks! Your message has been sent. Victoria will get back to you soon.
              </div>
            )}

            {status === 'error' && (
              <div className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                Oops—something went wrong. Please try again.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
