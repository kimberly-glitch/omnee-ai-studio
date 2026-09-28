/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Phone } from 'lucide-react';
import Navigation, { Footer } from './components/Navigation';
import HomeView from './components/HomeView';
import ServicesView from './components/ServicesView';
import AboutView from './components/AboutView';
import ContactView from './components/ContactView';
import TrackingWidget from './components/TrackingWidget';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [trackingOpen, setTrackingOpen] = useState(false);
  const [prefillCode, setPrefillCode] = useState('');

  const handleOpenTrackingModal = (code?: string) => {
    if (code) {
      setPrefillCode(code);
    } else {
      setPrefillCode('');
    }
    setTrackingOpen(true);
  };

  const handleCloseTrackingModal = () => {
    setTrackingOpen(false);
    setPrefillCode('');
  };

  const renderActiveView = () => {
    switch (activeSection) {
      case 'home':
        return (
          <HomeView 
            onNavigate={(section) => {
              setActiveSection(section);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }} 
            onOpenTracking={handleOpenTrackingModal} 
          />
        );
      case 'services':
        return <ServicesView onNavigate={(section) => {
          setActiveSection(section);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }} />;
      case 'about':
        return <AboutView />;
      case 'contact':
        return <ContactView />;
      default:
        return (
          <HomeView 
            onNavigate={(section) => {
              setActiveSection(section);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }} 
            onOpenTracking={handleOpenTrackingModal} 
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-blue-600 selection:text-white" id="app-root-container">
      {/* Navigation Header */}
      <Navigation 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
        onOpenTrackingModal={handleOpenTrackingModal} 
      />

      {/* Main View Area */}
      <main className="flex-grow pb-20 sm:pb-0">
        {renderActiveView()}
      </main>

      {/* Footer */}
      <Footer setActiveSection={setActiveSection} />

      {/* Persistent Mobile Sticky Quick-Call Bar */}
      <aside 
        aria-label="Quick Dispatch Contact"
        className="fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 px-4 py-3 sm:hidden shadow-[0_-8px_30px_rgba(0,0,0,0.45)]"
        id="persistent-mobile-call-bar"
      >
        <a
          href="tel:9285471058"
          className="w-full bg-blue-600 hover:bg-blue-500 active:scale-[0.98] text-white font-bold text-sm tracking-wide py-3.5 px-4 rounded-xl shadow-lg flex items-center justify-center gap-2.5 transition-all text-center"
          id="mobile-quick-call-dispatch"
        >
          <Phone className="w-4 h-4 text-white shrink-0" />
          <span className="whitespace-nowrap">Call Dispatch: <span className="whitespace-nowrap tabular-nums">928-547-1058</span></span>
        </a>
      </aside>

      {/* Live Tracking Modal Widget */}
      <TrackingWidget 
        isOpen={trackingOpen} 
        onClose={handleCloseTrackingModal} 
        prefillCode={prefillCode} 
      />
    </div>
  );
}

