import React, { useState } from 'react';
import { SERVICES } from '../data';
import { Truck, Zap, Shield, ChevronRight, Search, Clock, Award, ArrowRight, ClipboardCheck, Phone, MapPin } from 'lucide-react';

interface HomeViewProps {
  onNavigate: (section: string) => void;
  onOpenTracking: (code?: string) => void;
}

export default function HomeView({ onNavigate, onOpenTracking }: HomeViewProps) {
  const [trackInput, setTrackInput] = useState('');

  const handleTrackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackInput.trim()) {
      onOpenTracking(trackInput.trim());
    } else {
      onOpenTracking();
    }
  };

  const stats = [
    { value: 'After-Hours', label: 'Mon-Fri 5 PM - 6 AM', desc: 'Covering key overnight gaps' },
    { value: '24/7 STAT', label: 'Emergency Availability', desc: 'Dispatch considered at all times' },
    { value: '4WD Vehicles', label: 'Winter Weather Ready', desc: 'Equipped for Flagstaff snow' },
    { value: '100%', label: 'HIPAA & OSHA Compliant', desc: 'Certified local courier standards' }
  ];

  return (
    <div className="space-y-20 pb-16">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-slate-950 text-white py-24 md:py-32 px-4 sm:px-6 lg:px-8">
        {/* Subtle decorative grid/overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-25"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Hero Text */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
              <span>Flagstaff Medical Courier Services</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              Omnee Courier Solutions<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200 text-2xl sm:text-3xl md:text-4xl block mt-3 font-semibold">
                Driven by Life. Moved by Care.
              </span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed font-normal">
              Rooted in the concept of being all-encompassing, Omnee handles every dispatch as a complete local logistics partner. We offer a level of local availability that big companies simply cannot match. We are here to fill every gap with 'The Standard of One'—making a difference one delivery at a time, until we are the only solution you count on.
            </p>

            {/* Quick Live Tracking Bar */}
            <form onSubmit={handleTrackSubmit} className="max-w-md pt-2">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-2 flex gap-2 shadow-xl focus-within:border-blue-500/50 focus-within:ring-2 focus-within:ring-blue-500/10 transition-all">
                <div className="flex-1 flex items-center pl-3">
                  <Search className="w-5 h-5 text-slate-500 mr-2 shrink-0" />
                  <input
                    type="text"
                    placeholder="Enter Tracking ID (e.g. OMN-7182)..."
                    value={trackInput}
                    onChange={(e) => setTrackInput(e.target.value)}
                    className="w-full bg-transparent text-white font-mono text-sm focus:outline-none placeholder:text-slate-500 font-semibold uppercase tracking-wide"
                    id="hero-track-input"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-blue-700 hover:bg-blue-600 text-white font-bold px-5 py-3 rounded-xl transition-all shadow-md active:scale-95 text-xs uppercase tracking-wider flex items-center gap-1.5"
                  id="hero-track-btn"
                >
                  <span>Track Parcel</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>
              <p className="text-[10px] text-slate-500 mt-2.5 font-medium pl-4">
                Try searching <span onClick={() => setTrackInput('OMN-7182')} className="text-blue-400 cursor-pointer hover:underline font-bold font-mono">OMN-7182</span> or <span onClick={() => setTrackInput('OMN-4912')} className="text-blue-400 cursor-pointer hover:underline font-bold font-mono">OMN-4912</span> for a live demonstration.
              </p>
            </form>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => onNavigate('services')}
                className="bg-white hover:bg-slate-100 text-slate-950 font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2 active:scale-95"
              >
                <span>Explore Services</span>
                <ChevronRight className="w-4 h-4 text-slate-950" />
              </button>
              
              <button
                onClick={() => onNavigate('contact')}
                className="border border-slate-800 hover:border-slate-700 bg-slate-900/50 hover:bg-slate-900 text-slate-300 hover:text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl transition-all flex items-center gap-2"
              >
                <span>Request Custom Quote</span>
              </button>
            </div>
          </div>

          {/* Right Hero Illustration / Mock Tracking Board */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/5 rounded-full blur-2xl"></div>
              
              {/* Fake Active Feed Dashboard Header */}
              <div className="flex justify-between items-center mb-6 pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse"></div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-300">Live Dispatch Monitor</span>
                </div>
                <span className="text-[10px] font-mono text-slate-500 uppercase">SYS-REG: Active</span>
              </div>

              {/* Feed Items */}
              <div className="space-y-4">
                <div className="bg-slate-950 border border-slate-800/80 rounded-xl p-3.5 flex items-start gap-3 text-left">
                  <div className="p-2 bg-blue-950/80 border border-blue-900 text-blue-400 rounded-lg shrink-0">
                    <Truck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-mono text-xs font-bold text-blue-400">OMN-7182</span>
                      <span className="text-[9px] bg-sky-950 text-sky-400 border border-sky-900 px-1.5 py-0.5 rounded-full font-bold">STAT MEDICAL</span>
                    </div>
                    <p className="text-xs text-white font-semibold">Climate stable Specimen en-route to FMC</p>
                    <p className="text-[10px] text-slate-500 mt-1">In Transit • Flagstaff Medical Center</p>
                  </div>
                </div>

                <div className="bg-slate-950 border border-slate-800/80 rounded-xl p-3.5 flex items-start gap-3 text-left">
                  <div className="p-2 bg-blue-950/80 border border-blue-900 text-blue-400 rounded-lg shrink-0">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-mono text-xs font-bold text-blue-400">OMN-4912</span>
                      <span className="text-[9px] bg-blue-950 text-blue-400 border border-blue-900 px-1.5 py-0.5 rounded-full font-bold">RUSH SAME-DAY</span>
                    </div>
                    <p className="text-xs text-white font-semibold">Rx Consignment assigned to Courier #108</p>
                    <p className="text-[10px] text-slate-500 mt-1">Out for Local Delivery • Coconino County Clinic</p>
                  </div>
                </div>

                {/* Logistics Route Visual Mockup */}
                <div className="pt-2">
                  <div className="flex justify-between text-[10px] text-slate-400 font-bold uppercase mb-2">
                    <span>Origin: Sedona Hub</span>
                    <span>Transit: 28 Miles</span>
                    <span>Dest: Flagstaff Medical Dist.</span>
                  </div>
                  <div className="w-full bg-slate-950 h-1.5 rounded-full overflow-hidden relative border border-slate-800">
                    <div className="absolute left-0 top-0 bottom-0 w-2/3 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Key Statistics Counters */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow text-center sm:text-left">
              <span className="block text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-1">
                {stat.value}
              </span>
              <span className="block text-sm font-bold text-slate-900 mb-1">
                {stat.label}
              </span>
              <span className="block text-xs text-slate-500">
                {stat.desc}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Core Value Propositions ("Why Omnee") */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-700 block">Brand Strengths</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Logistics Built on Complete Accountability
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
            We don't just move packages. We construct reliable delivery routines backed by safe transport, climate stability, and fully authorized couriers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="bg-white border border-slate-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all space-y-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
              <Shield className="w-6 h-6 stroke-[2]" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Medical-Grade Chain of Custody</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Enforcing strict adherence to HIPAA, OSHA, and Bloodborne Pathogen protocols for every specimen, pharmaceutical, and confidential record in transit.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-slate-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all space-y-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <Zap className="w-6 h-6 stroke-[2]" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Reliable Timing & Weather Readiness</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Leveraging 4WD capabilities and technical logistics to navigate Flagstaff's winter conditions, ensuring STAT dispatches arrive with mathematical accuracy regardless of the weather.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-slate-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all space-y-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center">
              <Award className="w-6 h-6 stroke-[2]" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Strategic Northern Arizona Logistics</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Coordinating direct-to-lab and hospital network dispatches with expert-level dispatch management and professional client relations across Flagstaff and beyond.
            </p>
          </div>

          {/* Card 4 - Highlighted */}
          <div className="bg-blue-50/50 border border-blue-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all space-y-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center">
              <MapPin className="w-6 h-6 stroke-[2]" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Real-Time GPS Tracking</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              <strong className="text-blue-900">Real-Time Tracking & Transparency:</strong> We provide live GPS tracking on all dispatches, giving you complete visibility and peace of mind from the moment we pick up your specimens to the final delivery.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Quick Services Showcase */}
      <section className="bg-slate-50 py-20 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
            <div className="text-left space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-700 block">Our Offerings</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Logistics Tiers Built Around You
              </h2>
              <p className="text-slate-500 text-sm max-w-2xl leading-relaxed">
                Whether you need localized express runner services, reliable recurring daily dispatches, or backup routing, our specialized vehicles are ready.
              </p>
            </div>
            <button
              onClick={() => onNavigate('services')}
              className="bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs uppercase tracking-wider px-5 py-3 rounded shadow-md transition-all flex items-center gap-1 shrink-0 active:scale-95"
            >
              <span>View All Services</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICES.map((svc) => (
              <div 
                key={svc.id} 
                className="bg-white border border-slate-200/60 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between text-left group"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 text-slate-900 flex items-center justify-center font-bold">
                    {svc.id === 'medical-specimen' ? <Shield className="w-5 h-5 text-blue-600" /> : 
                     svc.id === 'medical-records' ? <ClipboardCheck className="w-5 h-5 text-indigo-500" /> : 
                     <Zap className="w-5 h-5 text-rose-500" />}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-700 transition-colors leading-snug">{svc.title}</h3>
                    <p className="text-xs text-slate-400 font-semibold uppercase mt-0.5 tracking-wider">{svc.deliveryTime}</p>
                  </div>
                  <p className="text-slate-500 text-xs leading-relaxed">{svc.shortDesc}</p>
                </div>
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-900">
                  <span className="text-slate-700">
                    {svc.id === 'stat-emergency' ? 'Contact Dispatch for Priority STAT Rates' : `Starting at $${svc.basePrice.toFixed(2)}`}
                  </span>
                  <button 
                    onClick={() => onNavigate('services')} 
                    className="text-blue-700 hover:text-blue-800 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Inspect</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Compliance & Standards Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-3xl p-8 sm:p-12 md:p-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border border-slate-800 relative overflow-hidden text-left shadow-2xl">
        {/* Shaded visual background effect using brand colors */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10"></div>
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -left-10 -bottom-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20">
              <Award className="w-4 h-4" />
              <span>Fully certified and compliant.</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Omnee Courier Solutions is proud to be HIPAA and OSHA compliant.
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              We maintain rigorous standards to ensure privacy, security, and integrity of every delivery. Every medical sample, medication, and clinical asset is handled by trained, HIPAA-certified couriers with strict compliance.
            </p>
          </div>
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-slate-900/65 border border-slate-800 p-5 rounded-2xl space-y-2">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center font-bold">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white">HIPAA Certified</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Full compliance with patient privacy and protected health information (PHI) secure protocols.
              </p>
            </div>
            <div className="bg-slate-900/65 border border-slate-800 p-5 rounded-2xl space-y-2">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center font-bold">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white">OSHA Compliant</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Strict adherence to safe handling of biohazards, medical waste, and temperature-sensitive specimens.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Corporate Account CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-950 text-white rounded-3xl p-8 sm:p-12 md:p-16 relative overflow-hidden text-left border border-slate-900">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(37,99,235,0.08),transparent_100%)]"></div>
          
          <div className="max-w-3xl relative z-10 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400 flex items-center gap-1.5">
              <ClipboardCheck className="w-4 h-4" />
              <span>Professional Logistics</span>
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Professional Logistics for Northern Arizona Healthcare Providers
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed max-w-2xl">
              We offer priority STAT dispatching, transparent monthly invoicing, and customized daily routing protocols tailored for local clinics, hospital networks, and pharmacies. Setup a Professional Account to synchronize your clinical operations.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onNavigate('contact')}
                className="bg-blue-700 hover:bg-blue-600 text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded transition-all shadow-md active:scale-95 flex items-center gap-1.5"
              >
                <span>Inquire Professional Account</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>
              <a
                href="tel:928-547-1058"
                className="text-slate-300 hover:text-white font-bold text-xs uppercase tracking-wider px-4 py-3 flex items-center gap-1.5 font-mono"
              >
                <Phone className="w-4 h-4 text-blue-500" />
                <span>928-547-1058</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
