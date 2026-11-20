import React, { useState } from 'react';
import { Truck, Menu, X, Phone, Mail, ArrowRight, Search, Clock } from 'lucide-react';
import OmneeLogo from './OmneeLogo';
import { DispatchType } from '../types';

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
            <Clock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span className="font-bold text-emerald-400 whitespace-nowrap">24/7 STAT</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-300 truncate">On-Demand &amp; Scheduled</span>
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
        <div className="hidden sm:flex max-w-7xl mx-auto flex-row justify-between items-center gap-3">
          {/* Operational Hours Message */}
          <div className="flex items-center gap-2 min-w-0 text-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
            <span className="text-slate-200 font-medium truncate">
              <strong className="text-emerald-400 font-bold">Open 24/7 for STAT &amp; On-Demand</strong> — Contact Us for Scheduled Sweeps &amp; Routine Pickups
            </span>
          </div>

          {/* Dispatch Desk Contact */}
          <div className="flex items-center gap-2.5 text-xs shrink-0 whitespace-nowrap">
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
                <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
                  <span>Omnee Dispatch Center</span>
                </p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Open 24/7 for STAT &amp; On-Demand — Contact Us for Scheduled Sweeps &amp; Routine Pickups
                </p>
                <div className="space-y-2">
                  <a href="tel:9285471058" className="flex items-center gap-2 text-sm font-bold hover:text-blue-300 transition-colors">
                    <Phone className="w-4 h-4 text-blue-500 shrink-0" />
                    <span>Dispatch Phone: <span className="whitespace-nowrap tabular-nums">928-547-1058</span></span>
                  </a>
                  <a href="mailto:Info@omneecourier.com" className="flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors">
                    <Mail className="w-4 h-4 text-blue-500 shrink-0" />
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

interface FooterProps {
  setActiveSection: (section: string) => void;
  onSelectServiceQuote: (dispatchType: DispatchType) => void;
}

export function Footer({ setActiveSection, onSelectServiceQuote }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleFooterLinkClick = (sectionId: string) => {
    setActiveSection(sectionId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerServices: { label: string; dispatchType: DispatchType }[] = [
    { label: 'Veterinary Diagnostic Routes', dispatchType: 'Scheduled Daily Veterinary Sweep' },
    { label: 'Medical Specimen Transport', dispatchType: 'Medical Specimen Route' },
    { label: 'STAT Emergency Dispatches', dispatchType: 'STAT Emergency Run' },
    { label: 'Confidential Legal & Chain-of-Custody Courier', dispatchType: 'Confidential Legal & Chain-of-Custody' }
  ];

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

          {/* Services Links */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-200 mb-5">
              Services
            </h3>
            <ul className="space-y-3 text-sm">
              {footerServices.map((service) => (
                <li key={service.label}>
                  <button
                    type="button"
                    onClick={() => onSelectServiceQuote(service.dispatchType)}
                    className="text-left hover:text-blue-400 transition-colors cursor-pointer"
                  >
                    {service.label}
                  </button>
                </li>
              ))}
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

          {/* Operational Hours & Contact Card */}
          <div className="space-y-4 lg:col-span-5" id="footer-operational-hours-card">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-200">
              Operational Hours &amp; Dispatch
            </h3>
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 space-y-4 text-left">
              {/* Open 24/7 for STAT & On-Demand Statement */}
              <div className="space-y-2.5 pb-4 border-b border-slate-800/90">
                <div className="inline-flex items-center gap-2 bg-emerald-950/60 border border-emerald-800/60 px-2.5 py-1 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-400">
                    24/7 STAT &amp; On-Demand
                  </span>
                </div>
                <p className="text-sm font-bold text-white leading-snug">
                  Open 24/7 for STAT &amp; On-Demand — Contact Us for Scheduled Sweeps &amp; Routine Pickups
                </p>
              </div>

              {/* Direct Dispatch Contact */}
              <div className="space-y-2.5 text-xs">
                <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Direct Dispatch Desk
                </span>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="tel:9285471058"
                    className="text-white hover:text-blue-400 transition-colors inline-flex items-center gap-2 font-mono font-bold bg-slate-950/80 border border-slate-800 px-3 py-2 rounded-xl whitespace-nowrap"
                  >
                    <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span className="whitespace-nowrap tabular-nums">928-547-1058</span>
                  </a>
                  <a
                    href="mailto:Info@omneecourier.com"
                    className="text-slate-200 hover:text-blue-400 transition-colors inline-flex items-center gap-2 font-mono text-xs bg-slate-950/80 border border-slate-800 px-3 py-2 rounded-xl whitespace-nowrap"
                  >
                    <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span className="whitespace-nowrap">Info@omneecourier.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lower row */}
        <div className="border-t border-slate-900 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <div>
           &copy; {new Date().getFullYear()} Omnee Courier Solutions LLC. All rights reserved.
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
