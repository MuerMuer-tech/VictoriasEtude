
import React from 'react';

const Booking: React.FC = () => {
  return (
    <div className="animate-in fade-in zoom-in-95 duration-700 px-6 lg:px-40 py-12 lg:py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Form */}
        <div className="lg:col-span-7 flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl lg:text-5xl font-black tracking-tight">Book a Trial Lesson</h1>
            <p className="text-slate-400 text-lg max-w-xl">
              Begin your musical journey with personalized instruction tailored to your artistic goals. We'll reach out to schedule your first session.
            </p>
          </div>
          
          <form className="flex flex-col gap-6" onSubmit={(e) => { e.preventDefault(); alert("Inquiry sent successfully!"); }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <label className="flex flex-col gap-2">
                <span className="text-sm font-semibold uppercase tracking-wider text-primary">Full Name</span>
                <input className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="Wolfgang Mozart" type="text" required />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-sm font-semibold uppercase tracking-wider text-primary">Email Address</span>
                <input className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="email@example.com" type="email" required />
              </label>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <label className="flex flex-col gap-2">
                <span className="text-sm font-semibold uppercase tracking-wider text-primary">Student Age</span>
                <select className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all">
                  <option disabled selected value="">Select age group</option>
                  <option value="child">Child (5-12)</option>
                  <option value="teen">Teenager (13-17)</option>
                  <option value="adult">Adult (18+)</option>
                </select>
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-sm font-semibold uppercase tracking-wider text-primary">Experience Level</span>
                <select className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all">
                  <option disabled selected value="">Select level</option>
                  <option value="beginner">Beginner (No experience)</option>
                  <option value="intermediate">Intermediate (1-3 years)</option>
                  <option value="advanced">Advanced (4+ years)</option>
                </select>
              </label>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">Lesson Format</span>
              <div className="flex flex-wrap gap-4">
                <label className="flex-1 flex items-center justify-center gap-3 cursor-pointer rounded-lg border border-white/10 p-4 hover:border-primary transition-all has-[:checked]:border-primary has-[:checked]:bg-primary/10">
                  <input className="hidden" name="format" type="radio" value="in-person" defaultChecked />
                  <span className="material-symbols-outlined text-primary">location_on</span>
                  <span className="font-medium">In-Person</span>
                </label>
                <label className="flex-1 flex items-center justify-center gap-3 cursor-pointer rounded-lg border border-white/10 p-4 hover:border-primary transition-all has-[:checked]:border-primary has-[:checked]:bg-primary/10">
                  <input className="hidden" name="format" type="radio" value="online" />
                  <span className="material-symbols-outlined text-primary">videocam</span>
                  <span className="font-medium">Online</span>
                </label>
              </div>
            </div>

            <label className="flex flex-col gap-2">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">General Availability</span>
              <textarea className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none" placeholder="Tell us your preferred days and times..." rows={3}></textarea>
            </label>

            <button className="mt-4 w-full md:w-max flex items-center justify-center rounded-lg h-14 px-10 bg-primary text-background-dark text-lg font-bold transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-primary/20" type="submit">
              Request a Trial Lesson
            </button>
          </form>
        </div>

        {/* Info Column */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="rounded-xl border border-white/10 bg-white/5 overflow-hidden shadow-sm">
            <div className="h-48 bg-background-dark relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent"></div>
              <div className="z-10 text-center p-6">
                <span className="material-symbols-outlined text-primary text-4xl mb-2">map</span>
                <p className="text-sm font-medium">Studio located in Shrewsbury, MA</p>
              </div>
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAA_EAxfbcDgR1EOBfCUrw5xbaiLv4ZgmOr9WK6wOzuEcwZZ7Xr9sODb7zERNe-tW5ghZGIUUNDam-N9CDCg-WMyKAU9XcaKLo1wpqNIdfL-mjq4yKnMXY9fZuBTu9pXa9GqDuM8XP62yCAzdyJgWHKknMy-JrkV_8A002mwGsTR8kNJ5FyBuZopjQ1vBumPS6GcN_-QXkX0vYhvDKGhYGeftAW1Wx3KnV5fN2jmhEWKSiY9cI0RO6l3Hh3CQe6Qt2p6RhXnqiRxa8"
                alt="Map"
                className="absolute inset-0 w-full h-full object-cover opacity-10"
              />
            </div>
            <div className="p-6 flex flex-col gap-3">
              <h3 className="text-lg font-bold">Studio Location</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Our private conservatory is located in the heart of Shrewsbury, providing a quiet and inspiring environment for dedicated study.
              </p>
              <div className="flex items-center gap-2 text-primary">
                <span className="material-symbols-outlined text-sm">directions_car</span>
                <span className="text-xs font-bold uppercase tracking-widest">Free On-site Parking</span>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-primary/10 p-6 flex items-start gap-4">
            <div className="bg-primary/20 rounded-lg p-3 text-primary">
              <span className="material-symbols-outlined">schedule</span>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-bold">Concierge Response</h3>
              <p className="text-sm text-slate-400">
                Victoria personally reviews all requests. Expect a curated response within 24 hours to finalize your trial time.
              </p>
            </div>
          </div>

          <div className="mt-4 p-8 border-l-2 border-primary italic text-slate-400">
            <p className="text-lg leading-relaxed mb-4 text-white font-serif">
              "The trial lesson wasn't just an assessment; it was the first time I felt someone truly understood my musical aspirations."
            </p>
            <cite className="not-italic font-bold text-primary">— Vivienne W., Intermediate Student</cite>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
