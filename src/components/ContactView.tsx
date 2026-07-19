import React, { useState } from 'react';
import { FAQS } from '../data';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, ChevronDown, ChevronUp, Map, ShieldCheck, HelpCircle } from 'lucide-react';

export default function ContactView() {
  // Contact Form States
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [subject, setSubject] = useState('General Logistics Inquiry');
  const [message, setMessage] = useState('');
  const [isQuoteInquiry, setIsQuoteInquiry] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [validationError, setValidationError] = useState('');

  // FAQ Accordion Active Index State
  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(0);

  // Coverage Map Interactive Tab State
  const [activeZone, setActiveZone] = useState<'local' | 'regional' | 'national'>('local');

  const coverageZones = {
    local: {
      title: 'Local Flagstaff (Immediate)',
      description: 'Our core immediate-response zone. Direct point-to-point courier dispatches are handled entirely by climate-secure vehicles or localized clinical delivery runners.',
      cities: 'Flagstaff, Bellemont, Parks, Winona, and immediate Flagstaff Medical District areas.',
      rates: 'Starting at $25.00 flat + local mileage.',
      deliveryTime: 'STAT or Scheduled options'
    },
    regional: {
      title: 'Coconino County & Northern Arizona',
      description: 'Regional logistics connections and dedicated scheduled route clinical dispatches covering major medical corridors throughout northern Arizona.',
      cities: 'Sedona, Williams, Munds Park, Grand Canyon Village, Camp Verde, Cottonwood.',
      rates: 'Starting at $55.00 base + regional mileage.',
      deliveryTime: 'Same-Day or Scheduled routes'
    },
    national: {
      title: 'Interstate Logistics',
      description: 'Specialized courier routing and expedited transit linking Northern Arizona with Phoenix, Tucson, and cross-state medical systems.',
      cities: 'Phoenix, Scottsdale, Mesa, Tucson, Prescott, and surrounding hospital systems.',
      rates: 'Expedited transport starting at $120.00.',
      deliveryTime: 'Same-Day or Next-Day guarantees'
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setValidationError('Please populate all required fields (Name, Email, and Message).');
      return;
    }
    
    setValidationError('');
    setFormSubmitted(true);
  };

  const toggleFaq = (index: number) => {
    if (activeFaqIndex === index) {
      setActiveFaqIndex(null);
    } else {
      setActiveFaqIndex(index);
    }
  };

  return (
    <div className="space-y-20 pb-20">
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(37,99,235,0.07),transparent_100%)]"></div>
        <div className="max-w-4xl mx-auto relative z-10 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-400 block">Contact & Dispatch</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Omnee Courier Solutions
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Ready to schedule a route or need a reliable backup medical courier? Contact us today for a custom service quote.
          </p>
        </div>
      </section>

      {/* Main Contact Grid (Form & Direct Contacts) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7 bg-white border border-slate-200/60 rounded-3xl p-6 sm:p-8 shadow-sm text-left">
            {formSubmitted ? (
              <div className="py-8 text-center space-y-5 animate-fade-in" id="contact-success-banner">
                <div className="w-16 h-16 rounded-full bg-blue-50 text-blue-600 border border-blue-200 flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Inquiry Securely Logged</h3>
                  <p className="text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-bold text-slate-800">{name}</span>. An automated ticketing index has been generated for your inquiry. A dispatcher will follow up shortly at <span className="font-bold text-slate-800">{email}</span>.
                  </p>
                </div>
                
                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 text-xs max-w-md mx-auto space-y-3 font-mono">
                  <div className="flex justify-between pb-2 border-b border-slate-200 text-slate-400 font-bold uppercase tracking-wider text-[10px]">
                    <span>Ticket Detail</span>
                    <span className="text-blue-600">PENDING_DISPATCH</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Inquirer Name:</span>
                    <span className="text-slate-800 font-bold">{name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Subject Category:</span>
                    <span className="text-slate-800 font-bold">{subject}</span>
                  </div>
                  {company && (
                    <div className="flex justify-between">
                      <span className="text-slate-500">Company:</span>
                      <span className="text-slate-800 font-bold">{company}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-slate-500">Ticket Priority:</span>
                    <span className="text-amber-600 font-bold">Standard Log</span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setName('');
                    setEmail('');
                    setPhone('');
                    setCompany('');
                    setMessage('');
                    setIsQuoteInquiry(false);
                  }}
                  className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-xl shadow-sm transition-colors"
                >
                  Submit Another Message
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-slate-900 tracking-tight">Direct Client Intake Portal</h2>
                  <p className="text-xs text-slate-500 mt-1">Please populate fields below. Required entries are flagged with (*).</p>
                </div>

                <form onSubmit={handleContactSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                        Contact Name <span className="text-blue-600 font-black">*</span>
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-600 text-slate-800 font-semibold"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                        Email Address <span className="text-blue-600 font-black">*</span>
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-600 text-slate-800 font-semibold"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone */}
                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="contact-phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-600 text-slate-800 font-semibold"
                      />
                    </div>

                    {/* Company */}
                    <div>
                      <label htmlFor="contact-company" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="contact-company"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-600 text-slate-800 font-semibold"
                      />
                    </div>
                  </div>

                  {/* Subject Dropdown */}
                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                      Inquiry Category
                    </label>
                    <select
                      id="contact-subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-600 text-slate-800 font-semibold"
                    >
                      <option value="General Logistics Inquiry">General Logistics Inquiry</option>
                      <option value="Corporate Account Setup">Corporate Account Setup</option>
                      <option value="Medical Courier Specifications">Medical Courier Specifications</option>
                      <option value="Route API Integration">Route API Integration</option>
                      <option value="Billing & Invoicing Query">Billing & Invoicing Query</option>
                    </select>
                  </div>

                  {/* Quote Toggle */}
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-150 flex items-center justify-between">
                    <div className="space-y-0.5 text-left">
                      <span className="block text-xs font-bold text-slate-800">Is this a custom quote request?</span>
                      <span className="block text-[10px] text-slate-500">Checking this flags your message for immediate dispatcher rating.</span>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={isQuoteInquiry} 
                        onChange={() => setIsQuoteInquiry(!isQuoteInquiry)} 
                        className="sr-only peer" 
                      />
                      <div className="w-11 h-6 bg-slate-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>

                  {/* Message body */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                      Inquiry Detail / Message <span className="text-blue-600 font-black">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Please details parameters of your shipping volume, special medical requirements, or general logistics questions here..."
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-600 text-slate-800 font-semibold placeholder:font-normal placeholder:text-slate-400"
                    />
                  </div>

                  {validationError && (
                    <p className="text-xs font-semibold text-rose-600">{validationError}</p>
                  )}

                  <button
                    type="submit"
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold uppercase tracking-wider py-4 rounded-xl transition-all shadow-md text-xs flex items-center justify-center gap-2 active:scale-95"
                    id="contact-submit-btn"
                  >
                    <span>Transmit Dispatch Ticket</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              </div>
            )}
          </div>

          {/* Right Column: Direct Info & Accolades */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            {/* Direct Info Card */}
            <div className="bg-slate-900 text-white border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
              <h3 className="text-lg font-bold border-b border-slate-800 pb-3">Omnee Operations Office</h3>
              
              <div className="space-y-5 text-sm">
                {/* HQ address */}
                <div className="flex gap-3.5">
                  <div className="p-2.5 bg-slate-800 text-blue-400 rounded-xl shrink-0 h-fit border border-slate-700">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-500">Service Area</span>
                    <span className="block font-semibold text-slate-200 mt-1">
                      Headquartered in Flagstaff, Arizona, proudly serving local clinics and regional healthcare facilities.
                    </span>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex gap-3.5">
                  <div className="p-2.5 bg-slate-800 text-blue-400 rounded-xl shrink-0 h-fit border border-slate-700">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-500">Phone</span>
                    <a href="tel:9285471058" className="block font-semibold text-slate-200 hover:text-blue-400 transition-colors mt-1 font-mono">
                      928-547-1058
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-3.5">
                  <div className="p-2.5 bg-slate-800 text-blue-400 rounded-xl shrink-0 h-fit border border-slate-700">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-500">Email</span>
                    <a href="mailto:Info@Omneecourier.com" className="block font-semibold text-slate-200 hover:text-blue-400 transition-colors mt-1 font-mono">
                      Info@Omneecourier.com
                    </a>
                  </div>
                </div>

                {/* Dispatch Desk Availability */}
                <div className="flex gap-3.5">
                  <div className="p-2.5 bg-slate-800 text-blue-400 rounded-xl shrink-0 h-fit border border-slate-700">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-500">Service Hours</span>
                    <div className="space-y-1.5 mt-1">
                      <div className="flex justify-between items-center text-sm font-semibold text-slate-200">
                        <span className="text-slate-400 font-normal">Mon-Fri:</span>
                        <span>5:00 PM - 6:00 AM</span>
                      </div>
                      <div className="flex justify-between items-center text-sm font-semibold text-blue-400">
                        <span className="text-slate-400 font-normal">Weekends:</span>
                        <span>24 Hours</span>
                      </div>
                      <div className="flex justify-between items-center text-sm font-semibold text-blue-400">
                        <span className="text-slate-400 font-normal">Holidays:</span>
                        <span>24 Hours</span>
                      </div>
                    </div>
                    <p className="text-[10px] text-slate-500 mt-2 leading-relaxed">
                      Emergency STAT dispatch availability considered at all times.
                    </p>
                    <div className="mt-3 pt-3 border-t border-slate-800">
                      <span className="block text-[9px] font-bold uppercase tracking-widest text-slate-600 mb-1">Our Objective</span>
                      <span className="block text-[11px] font-bold text-slate-400">24 Hours a Day • 365 Days a Year</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Regulatory Accolades */}
            <div className="bg-slate-50 border border-slate-200/60 p-6 rounded-3xl space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-blue-700 block">Logistics Assurances</span>
              <div className="flex gap-3">
                <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-slate-900 leading-none">Registered HIPAA Compliant Carrier</h4>
                  <p className="text-[11px] text-slate-500 leading-normal">Fully certified clinical handlers executing medical transport routines with temperature audit stability.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Coverage Map Panel Mockup */}
      <section className="bg-slate-50 py-16 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-700 block flex justify-center items-center gap-1">
              <Map className="w-4 h-4" />
              <span>Coverage Ranges</span>
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Interactive Service Mapping</h2>
            <p className="text-slate-500 text-sm">
              We operate dedicated vehicles covering Flagstaff clinics, Northern Arizona healthcare systems, and transport routing. Click on a range below:
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {/* Tabs Selector */}
            <div className="bg-white border border-slate-200 p-1.5 rounded-2xl flex gap-1 shadow-sm">
              <button
                onClick={() => setActiveZone('local')}
                className={`flex-1 py-3 text-xs sm:text-sm font-bold tracking-wide uppercase rounded-xl transition-all ${
                  activeZone === 'local'
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                Local Flagstaff
              </button>
              <button
                onClick={() => setActiveZone('regional')}
                className={`flex-1 py-3 text-xs sm:text-sm font-bold tracking-wide uppercase rounded-xl transition-all ${
                  activeZone === 'regional'
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                Northern Arizona
              </button>
              <button
                onClick={() => setActiveZone('national')}
                className={`flex-1 py-3 text-xs sm:text-sm font-bold tracking-wide uppercase rounded-xl transition-all ${
                  activeZone === 'national'
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                Interstate
              </button>
            </div>

            {/* Tab Body Card */}
            <div className="bg-white border border-slate-200/60 rounded-3xl p-6 sm:p-8 text-left shadow-sm grid grid-cols-1 md:grid-cols-12 gap-8 items-center animate-fade-in">
              <div className="md:col-span-7 space-y-4">
                <h3 className="text-lg font-bold text-slate-900 leading-tight">
                  {coverageZones[activeZone].title}
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                  {coverageZones[activeZone].description}
                </p>

                <div className="space-y-1 bg-slate-50 p-4 rounded-xl text-xs font-semibold">
                  <div className="text-slate-400 uppercase text-[9px] tracking-wider mb-1">Target Municipalities</div>
                  <p className="text-slate-800">{coverageZones[activeZone].cities}</p>
                </div>
              </div>

              <div className="md:col-span-5 bg-slate-900 text-white p-5 rounded-2xl border border-slate-800 space-y-3 font-mono text-xs">
                <span className="block text-slate-500 text-[10px] uppercase">RATES & SPECS</span>
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-400">Tariff Basis:</span>
                  <span className="text-blue-400 font-bold">{coverageZones[activeZone].rates}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Avg Transit Speed:</span>
                  <span className="text-white font-bold">{coverageZones[activeZone].deliveryTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions (Accordion) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-700 block flex justify-center items-center gap-1">
            <HelpCircle className="w-4 h-4" />
            <span>F.A.Q. Center</span>
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Solutions to Common Queries</h2>
          <p className="text-slate-500 text-sm max-w-2xl mx-auto leading-relaxed">
            Need information about STAT delivery speeds, client online APIs, or commercial liabilities? Browse answers to common questions.
          </p>
        </div>

        <div className="space-y-4 text-left">
          {FAQS.map((faq, idx) => {
            const isOpen = activeFaqIndex === idx;
            return (
              <div 
                key={idx} 
                className="bg-white border border-slate-200/60 rounded-2xl overflow-hidden transition-all shadow-sm"
                id={`faq-item-${idx}`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex justify-between items-center px-6 py-5 font-bold text-slate-900 text-sm sm:text-base text-left hover:bg-slate-50/50 transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-blue-600 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>
                
                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-slate-500 text-xs sm:text-sm leading-relaxed border-t border-slate-50 font-medium">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
