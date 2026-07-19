/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
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
      <main className="flex-grow">
        {renderActiveView()}
      </main>

      {/* Footer */}
      <Footer setActiveSection={setActiveSection} />

      {/* Live Tracking Modal Widget */}
      <TrackingWidget 
        isOpen={trackingOpen} 
        onClose={handleCloseTrackingModal} 
        prefillCode={prefillCode} 
      />
    </div>
  );
}

