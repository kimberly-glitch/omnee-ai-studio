import React, { useState } from 'react';
import { Truck, Menu, X, Phone, Mail, ArrowRight, Search, Clock } from 'lucide-react';
import OmneeLogo from './OmneeLogo';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  onOpenTrackingModal: (prefillCode?: string) => void;
}

export default function Navigation({ activeSection, setActiveSection, onOpenTrackingModal }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [quickTrackCode, setQuickTrackCode] = useState('');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact Us' }
  ];

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleQuickTrackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (quickTrackCode.trim()) {
      onOpenTrackingModal(quickTrackCode.trim());
      setQuickTrackCode('');
    }
  };

  return (
    <>
      {/* Top Banner Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-3 sm:px-6 lg:px-8 border-b border-slate-800" id="top-announcement-banner">
        {/* Mobile View: Concise single-line bar without email clutter, guaranteed no wrapping */}
        <div className="sm:hidden flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 min-w-0 text-[11px] text-slate-300">
            <Clock className="w-3.5 h-3.5 text-rose-400 shrink-0" />
            <span className="font-bold text-rose-400 whitespace-nowrap">STAT 24/7</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-300 truncate">After-Hours: 5PM–6AM</span>
          </div>
          <a
            href="tel:9285471058"
            className="shrink-0 inline-flex items-center gap-1 text-white hover:text-blue-300 font-mono font-bold text-xs bg-blue-600/25 px-2 py-0.5 rounded border border-blue-500/30 whitespace-nowrap"
            id="top-bar-mobile-call"
            aria-label="Call Dispatch 928-547-1058"
          >
            <Phone className="w-3 h-3 text-blue-400 shrink-0" />
            <span className="whitespace-nowrap tabular-nums">928-547-1058</span>
          </a>
        </div>

        {/* Desktop / Tablet View (sm and up) */}
        <div className="hidden sm:flex max-w-7xl mx-auto flex-row justify-between items-center gap-2.5">
          {/* Operational Hours Highlights */}
          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs">
            <div className="inline-flex items-center gap-1.5 font-bold">
              <Clock className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <span className="text-blue-300 font-mono text-[10px] font-bold uppercase tracking-wider bg-blue-950/90 px-2 py-0.5 rounded border border-blue-800/80 whitespace-nowrap">
                Operational Hours
              </span>
            </div>
            <span className="text-slate-200 whitespace-nowrap">
              <strong className="text-rose-400 font-bold">STAT 24/7</strong> (365 Days)
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-300 whitespace-nowrap">
              <strong className="text-blue-400 font-semibold">After-Hours:</strong> Mon–Fri 5:00 PM – 6:00 AM
            </span>
            <span className="text-slate-600 hidden md:inline">•</span>
            <span className="text-slate-300 hidden md:inline whitespace-nowrap">
              <strong className="text-indigo-300 font-semibold">Sweeps:</strong> Daily Afternoon & Evening
            </span>
          </div>

          {/* Active Dispatch Desk Contact */}
          <div className="flex items-center gap-3 text-xs shrink-0 justify-end">
            <div className="flex items-center gap-1.5 whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-slate-400 font-semibold text-[11px] whitespace-nowrap">Active Dispatch Desk (24/7):</span>
            </div>
            <div className="flex items-center gap-2.5 whitespace-nowrap">
              <a href="tel:9285471058" className="text-white hover:text-blue-400 transition-colors flex items-center gap-1 font-mono font-bold whitespace-nowrap">
                <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span className="whitespace-nowrap tabular-nums">928-547-1058</span>
              </a>
              <span className="text-slate-700">|</span>
              <a href="mailto:Info@omneecourier.com" className="text-slate-300 hover:text-blue-400 transition-colors flex items-center gap-1 font-mono text-xs whitespace-nowrap">
                <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span className="whitespace-nowrap">Info@omneecourier.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header Navigation */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo */}
            <button 
              onClick={() => handleNavClick('home')} 
              className="flex items-center text-left group focus:outline-none"
              id="nav-logo"
            >
              <OmneeLogo theme="light" className="transition-transform duration-300 group-hover:scale-[1.03]" />
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative py-2 text-sm font-semibold tracking-wide transition-colors focus:outline-none ${
                    activeSection === item.id 
                      ? 'text-blue-700' 
                      : 'text-slate-600 hover:text-blue-700'
                  }`}
                  id={`nav-link-${item.id}`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-700 rounded-full" />
                  )}
                </button>
              ))}
            </nav>

            {/* Right Side Controls (Desktop Quick Tracking) */}
            <div className="hidden lg:flex items-center gap-4">
              <form onSubmit={handleQuickTrackSubmit} className="relative">
                <input
                  type="text"
                  placeholder="Track code (e.g., OMN-7182)..."
                  value={quickTrackCode}
                  onChange={(e) => setQuickTrackCode(e.target.value)}
                  className="w-56 bg-slate-50 border border-slate-200 rounded-full py-1.5 pl-4 pr-10 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all font-mono"
                  id="header-track-input"
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-blue-700 transition-colors"
                  aria-label="Submit tracking number"
                >
                  <Search className="w-3.5 h-3.5" />
                </button>
              </form>
              
              <button
                onClick={() => handleNavClick('contact')}
                className="bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold tracking-wider uppercase px-5 py-2.5 rounded shadow-md hover:shadow-lg transition-all flex items-center gap-1.5 active:scale-95"
                id="header-quote-btn"
              >
                <span>Get Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Hamburger Menu Toggle */}
            <div className="flex items-center lg:hidden gap-3">
              <button
                onClick={() => onOpenTrackingModal()}
                className="p-2.5 text-slate-500 hover:text-blue-600 bg-slate-50 hover:bg-blue-50 rounded-lg transition-colors"
                title="Track shipment"
                aria-label="Track shipment button"
              >
                <Search className="w-5 h-5" />
              </button>
              
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2.5 rounded-lg text-slate-600 hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-400"
                aria-label="Toggle mobile navigation menu"
                id="mobile-menu-toggle"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Panel */}
        {isOpen && (
          <div className="lg:hidden border-t border-slate-100 bg-white shadow-inner animate-fade-in">
            <div className="px-4 pt-2 pb-6 space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`block w-full text-left px-4 py-2.5 rounded-lg text-base font-semibold tracking-wide transition-colors ${
                    activeSection === item.id
                      ? 'bg-blue-50 text-blue-700 font-bold'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                  id={`mobile-nav-link-${item.id}`}
                >
                  {item.label}
                </button>
              ))}
              
              {/* Mobile Quick Tracking Input */}
              <div className="pt-4 border-t border-slate-100">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2 px-4">
                  Quick Parcel Tracking
                </p>
                <form onSubmit={handleQuickTrackSubmit} className="relative px-4">
                  <input
                    type="text"
                    placeholder="Enter OMN-xxxx..."
                    value={quickTrackCode}
                    onChange={(e) => setQuickTrackCode(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2.5 pl-4 pr-10 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600"
                  />
                  <button
                    type="submit"
                    className="absolute right-7 top-1/2 -translate-y-1/2 text-slate-400 hover:text-blue-700 transition-colors"
                  >
                    <Search className="w-4 h-4" />
                  </button>
                </form>
              </div>

              <div className="px-4 pt-4">
                <button
                  onClick={() => handleNavClick('contact')}
                  className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold tracking-wider uppercase py-3 rounded-lg shadow-md transition-all flex items-center justify-center gap-1.5 text-sm"
                >
                  <span>Book / Request Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Mobile Dispatch Details Card */}
              <div className="mx-4 p-4 rounded-xl bg-slate-900 border border-slate-800 text-white space-y-3 shadow-md mt-4">
                <p className="text-[10px] font-bold uppercase tracking-widest text-blue-400">
                  Omnee Dispatch Center
                </p>
                <div className="space-y-2">
                  <a href="tel:9285471058" className="flex items-center gap-2 text-sm font-bold hover:text-blue-300 transition-colors">
                    <Phone className="w-4 h-4 text-blue-500 shrink-0" />
                    <span>Dispatch Phone: <span className="whitespace-nowrap tabular-nums">928-547-1058</span></span>
                  </a>
                  <a href="mailto:Info@omneecourier.com" className="flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors">
                    <Mail className="w-4 h-4 text-blue-500" />
                    <span>Email: Info@omneecourier.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

export function Footer({ setActiveSection }: { setActiveSection: (section: string) => void }) {
  const currentYear = new Date().getFullYear();

  const handleFooterLinkClick = (sectionId: string) => {
    setActiveSection(sectionId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 mt-auto border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10">
          {/* Brand Info */}
          <div className="space-y-4 lg:col-span-3">
            <button 
              onClick={() => handleFooterLinkClick('home')}
              className="flex items-center text-left group focus:outline-none"
            >
              <OmneeLogo theme="dark" className="transition-transform duration-300 group-hover:scale-[1.03]" />
            </button>
            <p className="text-xs font-bold text-blue-400 italic tracking-wide">
              Driven by Life. Moved by Care
            </p>
            <p className="text-sm leading-relaxed text-slate-400">
              Reliable, compliant diagnostic and veterinary specimen logistics in Flagstaff, tailored for healthcare providers, veterinary practices, laboratories, and local pharmacies.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-950 text-blue-400 border border-blue-900">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Flagstaff Dispatch Active
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-200 mb-5">
              Service Areas
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <button onClick={() => handleFooterLinkClick('services')} className="hover:text-blue-400 transition-colors">
                  Veterinary Diagnostic Routes
                </button>
              </li>
              <li>
                <button onClick={() => handleFooterLinkClick('services')} className="hover:text-blue-400 transition-colors">
                  Medical Specimen Transport
                </button>
              </li>
              <li>
                <button onClick={() => handleFooterLinkClick('services')} className="hover:text-blue-400 transition-colors">
                  STAT Emergency Dispatches
                </button>
              </li>
              <li>
                <button onClick={() => handleFooterLinkClick('services')} className="hover:text-blue-400 transition-colors">
                  Scheduled Daily Sweeps
                </button>
              </li>
            </ul>
          </div>

          {/* Company links */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-200 mb-5">
              Company
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <button onClick={() => handleFooterLinkClick('about')} className="hover:text-blue-400 transition-colors">
                  Our Mission & Values
                </button>
              </li>
              <li>
                <button onClick={() => handleFooterLinkClick('contact')} className="hover:text-blue-400 transition-colors">
                  Office Location
                </button>
              </li>
              <li>
                <button onClick={() => handleFooterLinkClick('contact')} className="hover:text-blue-400 transition-colors">
                  F.A.Q. Center
                </button>
              </li>
              <li>
                <button onClick={() => handleFooterLinkClick('contact')} className="hover:text-blue-400 transition-colors">
                  Schedule an Inquiry
                </button>
              </li>
            </ul>
          </div>

          {/* Exact Operational Hours & Contact Card */}
          <div className="space-y-4 lg:col-span-5" id="footer-operational-hours-card">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-200">
              Operational Hours & Dispatch
            </h3>
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 space-y-4 text-left">
              {/* Active Dispatch Desk */}
              <div className="space-y-1.5 pb-3 border-b border-slate-800/90">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-400">
                    Active Dispatch Desk: 24/7 On-Call
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 pt-1 text-xs">
                  <a href="tel:9285471058" className="text-white hover:text-blue-400 transition-colors flex items-center gap-1.5 font-mono font-bold">
                    <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>928-547-1058</span>
                  </a>
                  <span className="text-slate-700 hidden sm:inline">|</span>
                  <a href="mailto:Info@omneecourier.com" className="text-slate-300 hover:text-blue-400 transition-colors flex items-center gap-1.5 font-mono text-xs">
                    <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>Info@omneecourier.com</span>
                  </a>
                </div>
              </div>

              {/* Exact Operational Coverage Tiers */}
              <div className="space-y-3.5 text-xs">
                {/* 1. STAT Emergency Dispatches */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-rose-400 font-bold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-400"></span>
                      1. STAT Emergency Dispatches
                    </span>
                    <span className="text-[10px] font-mono font-bold text-white bg-rose-950/80 border border-rose-800/80 px-2 py-0.5 rounded shrink-0">
                      24/7 Availability
                    </span>
                  </div>
                  <p className="text-slate-400 text-[11px] leading-relaxed pl-3 border-l border-rose-900/40">
                    Immediate drop-everything priority service, 365 days a year, including weekends and holidays.
                  </p>
                </div>

                {/* 2. Dedicated After-Hours Route Coverage */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-blue-400 font-bold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                      2. Dedicated After-Hours Route Coverage
                    </span>
                    <span className="text-[10px] font-mono font-bold text-slate-200 bg-slate-800 px-2 py-0.5 rounded shrink-0">
                      Mon–Fri: 5PM–6AM
                    </span>
                  </div>
                  <p className="text-slate-400 text-[11px] leading-relaxed pl-3 border-l border-blue-900/40">
                    Monday through Friday from 5:00 PM to 6:00 AM (Bridging critical overnight gaps for local clinics and reference labs).
                  </p>
                </div>

                {/* 3. Scheduled Route Sweeps */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-indigo-400 font-bold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                      3. Scheduled Route Sweeps
                    </span>
                    <span className="text-[10px] font-mono font-bold text-slate-200 bg-slate-800 px-2 py-0.5 rounded shrink-0">
                      Daily Sweeps
                    </span>
                  </div>
                  <p className="text-slate-400 text-[11px] leading-relaxed pl-3 border-l border-indigo-900/40">
                    Recurring daily afternoon and evening sweeps timed around animal hospital, clinic, and diagnostic lab cutoffs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lower row */}
        <div className="border-t border-slate-900 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <div>
            &copy; {currentYear} Omnee Courier Solutions LLC. All rights reserved.
          </div>
          <div className="flex gap-6 text-slate-500">
            <a href="#privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            <a href="#carrier" className="hover:text-slate-300 transition-colors">Carrier Agreement</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
