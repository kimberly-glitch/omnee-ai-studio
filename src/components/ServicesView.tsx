import React, { useState, useEffect, useRef } from 'react';
import { SERVICES } from '../data';
import { DispatchType } from '../types';
import { 
  Zap, 
  Calendar, 
  ShieldAlert, 
  ArrowRight, 
  CheckCircle2, 
  Phone, 
  Activity, 
  Clock, 
  Thermometer, 
  MapPin, 
  Building2, 
  User, 
  Mail, 
  Check, 
  AlertCircle,
  Lock
} from 'lucide-react';

interface ServicesViewProps {
  onNavigate: (section: string) => void;
  pendingQuoteRequest?: {
    type: DispatchType;
    id: number;
  } | null;
}

export default function ServicesView({ onNavigate, pendingQuoteRequest }: ServicesViewProps) {
  // Quote Request Form States
  const [facilityName, setFacilityName] = useState('');
  const [contactName, setContactName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [dispatchType, setDispatchType] = useState<DispatchType>(
    pendingQuoteRequest?.type ?? 'Scheduled Daily Veterinary Sweep'
  );
  const [routeDetails, setRouteDetails] = useState('');
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const lastHandledRequestIdRef = useRef<number | null>(null);

  const scrollToQuoteForm = (type?: DispatchType) => {
    if (type) {
      setDispatchType(type);
      setFormSubmitted(false);
    }
    const targetElement = document.getElementById('quote-request-section');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    if (
      pendingQuoteRequest &&
      lastHandledRequestIdRef.current !== pendingQuoteRequest.id
    ) {
      setDispatchType(pendingQuoteRequest.type);
      setFormSubmitted(false);

      const timer = window.setTimeout(() => {
        lastHandledRequestIdRef.current = pendingQuoteRequest.id;
        const targetElement = document.getElementById('quote-request-section');
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 60);

      return () => window.clearTimeout(timer);
    }
  }, [pendingQuoteRequest]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!facilityName.trim() || !contactName.trim() || !phone.trim() || !email.trim() || !routeDetails.trim()) {
      setErrorMessage('Please complete all 4 required fields before submitting.');
      return;
    }

    setErrorMessage('');
    const randomCode = 'OMN-REQ-' + Math.floor(1000 + Math.random() * 9000);
    setConfirmationCode(randomCode);
    setFormSubmitted(true);
  };

  const handleResetForm = () => {
    setFacilityName('');
    setContactName('');
    setPhone('');
    setEmail('');
    setRouteDetails('');
    setFormSubmitted(false);
    setConfirmationCode('');
    setErrorMessage('');
  };

  const renderServiceIcon = (id: string) => {
    switch (id) {
      case 'veterinary-routes':
        return <Activity className="w-6 h-6 text-blue-400" />;
      case 'medical-specimen':
        return <ShieldAlert className="w-6 h-6 text-indigo-400" />;
      case 'stat-emergency':
        return <Zap className="w-6 h-6 text-rose-400" />;
      case 'legal-custody':
        return <Lock className="w-6 h-6 text-emerald-400" />;
      default:
        return <Calendar className="w-6 h-6 text-blue-400" />;
    }
  };

  return (
    <div className="space-y-20 pb-20">
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-10 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(37,99,235,0.08),transparent_100%)]"></div>
        <div className="max-w-4xl mx-auto relative z-10 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Flagstaff Medical &amp; Category B Diagnostic Specimen Logistics</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Do You Have Transport Problems? Omnee Has Solutions.
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            From late-night courier handovers to winter travel delays, we eliminate logistics headaches entirely. We coordinate every route with dependable local support, keeping your clinical operations running smoothly.
          </p>
        </div>
      </section>

      {/* Operational Hours & Dispatch Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="operational-hours-section">
        <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-white rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-800 shadow-xl relative overflow-hidden text-left">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 space-y-8">
            {/* Section Header with Direct Dispatch Contact */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-slate-800 pb-6">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
                  <span>Operational Hours • 24/7 STAT &amp; On-Demand</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-snug">
                  Open 24/7 for STAT &amp; On-Demand — Contact Us for Scheduled Sweeps &amp; Routine Pickups
                </h2>
                <p className="text-slate-400 text-xs sm:text-sm max-w-2xl leading-relaxed">
                  Dependable diagnostic, veterinary, and medical specimen logistics across Flagstaff and Northern Arizona. Reach our dispatch desk anytime to coordinate your route or immediate pickup.
                </p>
              </div>

              {/* Direct Dispatch Contact Card */}
              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 sm:p-5 shrink-0 space-y-2.5 lg:text-right shadow-inner">
                <div className="flex items-center gap-2 lg:justify-end">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-400">
                    24/7 Dispatch Desk
                  </span>
                </div>
                <div className="text-xs text-slate-300 font-medium">Reach Dispatch Directly:</div>
                <div className="pt-1 flex flex-wrap gap-2.5 lg:justify-end text-xs font-mono font-bold">
                  <a href="tel:9285471058" className="text-white hover:text-blue-400 transition-colors flex items-center gap-1.5 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800 whitespace-nowrap">
                    <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span className="whitespace-nowrap tabular-nums">928-547-1058</span>
                  </a>
                  <a href="mailto:Info@omneecourier.com" className="text-slate-300 hover:text-blue-400 transition-colors flex items-center gap-1.5 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800 font-normal whitespace-nowrap">
                    <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span className="whitespace-nowrap">Info@omneecourier.com</span>
                  </a>
                </div>
              </div>
            </div>

            {/* 3-Column Clean Service Availability Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="bg-slate-950/75 border border-slate-800/90 rounded-2xl p-5 space-y-2.5 hover:border-slate-700 transition-colors shadow-sm">
                <div className="w-9 h-9 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center font-bold">
                  <Calendar className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-white">Scheduled Sweeps</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Recurring route sweeps coordinated around veterinary hospitals, medical clinics, and reference lab cutoffs.
                </p>
              </div>

              <div className="bg-slate-950/75 border border-slate-800/90 rounded-2xl p-5 space-y-2.5 hover:border-slate-700 transition-colors shadow-sm">
                <div className="w-9 h-9 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center font-bold">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-white">Routine Pickups</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Dependable, temperature-monitored local and regional specimen transport built around your facility&apos;s workflow.
                </p>
              </div>

              <div className="bg-slate-950/75 border border-slate-800/90 rounded-2xl p-5 space-y-2.5 hover:border-slate-700 transition-colors shadow-sm">
                <div className="w-9 h-9 rounded-xl bg-rose-500/10 text-rose-400 flex items-center justify-center font-bold">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-white">STAT Dispatches</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Immediate, drop-everything priority courier response available 24/7 for urgent diagnostic and clinical logistics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section (3-Card Grid) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10" id="services-grid-section">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-700 block">Specialized Transport</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Tailored Courier Routes for Northern Arizona
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
            Temperature-controlled, chain-of-custody certified transport scheduled to sync directly with your facility's operational workflow.
          </p>
        </div>

        {/* 4-Card Responsive Grid (2x2 on desktop/tablet, 1-column on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {SERVICES.map((svc) => {
            const targetDispatchType: DispatchType = 
              svc.id === 'veterinary-routes' 
                ? 'Scheduled Daily Veterinary Sweep' 
                : svc.id === 'medical-specimen' 
                  ? 'Medical Specimen Route' 
                  : svc.id === 'legal-custody'
                    ? 'Confidential Legal & Chain-of-Custody'
                    : 'STAT Emergency Run';

            return (
              <div
                key={svc.id}
                id={`service-card-${svc.id}`}
                className="rounded-3xl p-7 sm:p-8 flex flex-col justify-between text-left transition-all duration-200 relative bg-gradient-to-b from-slate-900 to-slate-950 text-white border-2 border-blue-500 shadow-xl hover:shadow-2xl hover:border-blue-400"
              >
                <div className="space-y-6">
                  {/* Icon & Service Heading */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center font-bold bg-blue-950/80 border border-blue-800 shrink-0">
                      {renderServiceIcon(svc.id)}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 font-mono text-right">
                      {svc.deliveryTime}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white">
                      {svc.title}
                    </h3>
                    {svc.subtitle && (
                      <p className="text-xs font-bold mt-1 text-blue-400">
                        {svc.subtitle}
                      </p>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-300">
                    {svc.shortDesc}
                  </p>

                  {/* Core Features List */}
                  <div className="p-4 rounded-2xl border space-y-2.5 bg-slate-900/60 border-slate-800">
                    <span className="text-[10px] font-bold uppercase tracking-wider block text-slate-400">
                      Key Route Specifications
                    </span>
                    <ul className="space-y-2">
                      {svc.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs font-medium">
                          <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-blue-400" />
                          <span className="text-slate-200">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Pricing & CTA Button */}
                <div className="mt-8 pt-6 border-t border-slate-800 space-y-4">
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Pricing Structure
                    </span>
                    <span className="block text-xs sm:text-sm font-extrabold mt-0.5 text-blue-300">
                      {svc.priceTag}
                    </span>
                  </div>

                  <button
                    onClick={() => scrollToQuoteForm(targetDispatchType)}
                    className="w-full py-3.5 px-5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 active:scale-95 shadow-md bg-blue-600 hover:bg-blue-500 text-white hover:shadow-blue-500/25"
                    id={`btn-select-${svc.id}`}
                  >
                    <span>{svc.buttonText || 'Request Route Setup'}</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Simple Quote Request Form (Replacing the Complex Estimator) */}
      <section 
        id="quote-request-section" 
        className="scroll-mt-20 bg-slate-950 py-20 border-t border-slate-900 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(37,99,235,0.07),transparent_100%)] pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
          {/* Header */}
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20">
              <Clock className="w-3.5 h-3.5" />
              <span>Direct Dispatch Coordination</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Request Route Setup or STAT Dispatch
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Submit your clinic or facility details below. Our Flagstaff dispatch desk will immediately review your pickup timing, cut-off schedules, and temperature requirements.
            </p>
          </div>

          {/* Form Container */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
            {formSubmitted ? (
              /* Success Confirmation Card */
              <div className="text-center py-8 px-4 space-y-6 animate-fadeIn" id="dispatch-request-confirmation">
                <div className="w-16 h-16 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8 stroke-[2.5]" />
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-mono font-bold tracking-widest text-blue-400 uppercase">
                    CONFIRMATION CODE: {confirmationCode}
                  </span>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    Dispatch Request Received
                  </h3>
                  <p className="text-slate-300 text-sm max-w-lg mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{contactName}</strong>. Your request for <strong className="text-white">{facilityName}</strong> has been transmitted directly to our on-duty Flagstaff dispatch desk.
                  </p>
                </div>

                {/* Summary Box */}
                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 max-w-md mx-auto text-left space-y-2.5 text-xs">
                  <div className="flex justify-between py-1 border-b border-slate-900">
                    <span className="text-slate-400 font-medium">Selected Service:</span>
                    <span className="text-blue-400 font-bold">{dispatchType}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-900">
                    <span className="text-slate-400 font-medium">Contact Phone:</span>
                    <span className="text-slate-200 font-mono font-semibold">{phone}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-900">
                    <span className="text-slate-400 font-medium">Contact Email:</span>
                    <span className="text-slate-200 font-semibold">{email}</span>
                  </div>
                  <div className="pt-1">
                    <span className="text-slate-400 block mb-1 font-medium">Route & Temp Specifications:</span>
                    <p className="text-slate-300 font-mono text-[11px] bg-slate-900 p-2.5 rounded-lg border border-slate-800 line-clamp-3">
                      {routeDetails}
                    </p>
                  </div>
                </div>

                {/* STAT Notice */}
                <div className="bg-blue-950/40 border border-blue-900/60 rounded-xl p-4 max-w-md mx-auto text-xs text-slate-300 text-left flex items-start gap-3">
                  <Phone className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Immediate STAT Assistance</span>
                    <span>For critical time-sensitive runs needing instant vehicle deployment, call our live Flagstaff dispatch directly at </span>
                    <a href="tel:928-547-1058" className="text-blue-400 font-bold hover:underline font-mono">928-547-1058</a>.
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={handleResetForm}
                    className="bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-xl transition-all"
                  >
                    Submit Another Dispatch Request
                  </button>
                </div>
              </div>
            ) : (
              /* The 4-Field Form */
              <form onSubmit={handleFormSubmit} className="space-y-6 text-left" id="dispatch-request-form">
                {errorMessage && (
                  <div className="bg-rose-950/40 border border-rose-900 text-rose-300 text-xs font-semibold p-4 rounded-xl flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Field 1: Practice / Facility Name */}
                <div>
                  <label htmlFor="facility-name-input" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2 flex items-center gap-1.5">
                    <Building2 className="w-4 h-4 text-blue-400" />
                    <span>Practice / Facility Name</span>
                    <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="facility-name-input"
                    value={facilityName}
                    onChange={(e) => setFacilityName(e.target.value)}
                    placeholder="e.g., Flagstaff Animal Hospital, High Country Veterinary Care, Coconino Health Clinic"
                    required
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 font-medium transition-all"
                  />
                </div>

                {/* Field 2: Contact Name, Phone & Email */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2 flex items-center gap-1.5">
                    <User className="w-4 h-4 text-blue-400" />
                    <span>Contact Name, Phone & Email</span>
                    <span className="text-rose-400">*</span>
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div>
                      <input
                        type="text"
                        id="contact-name-input"
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        placeholder="Contact Name (e.g., Dr. Sarah Jenkins)"
                        required
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 font-medium transition-all"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        id="contact-phone-input"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Phone (e.g., 928-555-0199)"
                        required
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 font-medium font-mono transition-all"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        id="contact-email-input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email (e.g., clinic@flagstaffvet.com)"
                        required
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 font-medium transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Field 3: Dispatch Type (Dropdown) */}
                <div>
                  <label htmlFor="dispatch-type-select" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2 flex items-center gap-1.5">
                    <Activity className="w-4 h-4 text-blue-400" />
                    <span>Dispatch Type</span>
                    <span className="text-rose-400">*</span>
                  </label>
                  <select
                    id="dispatch-type-select"
                    value={dispatchType}
                    onChange={(e) => setDispatchType(e.target.value as DispatchType)}
                    required
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 font-semibold transition-all cursor-pointer"
                  >
                    <option value="Scheduled Daily Veterinary Sweep">Scheduled Daily Veterinary Sweep</option>
                    <option value="Medical Specimen Route">Medical Specimen Route</option>
                    <option value="STAT Emergency Run">STAT Emergency Run</option>
                    <option value="Confidential Legal & Chain-of-Custody">Confidential Legal &amp; Chain-of-Custody</option>
                  </select>
                  <p className="text-[11px] text-slate-400 mt-1.5">
                    {dispatchType === 'Scheduled Daily Veterinary Sweep' && 'Recurring scheduled sweeps coordinated around IDEXX, Antech, and reference lab cutoffs.'}
                    {dispatchType === 'Medical Specimen Route' && 'HIPAA & OSHA compliant transport for clinical human specimens with locked chain-of-custody.'}
                    {dispatchType === 'STAT Emergency Run' && 'Drop-everything 24/7 emergency response dispatch across Northern Arizona.'}
                    {dispatchType === 'Confidential Legal & Chain-of-Custody' && 'Locked security compartments and direct point-to-point transport with digital signature confirmation.'}
                  </p>
                </div>

                {/* Field 4: Route & Temperature Details (Text area) */}
                <div>
                  <label htmlFor="route-details-input" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2 flex items-center gap-1.5">
                    <Thermometer className="w-4 h-4 text-blue-400" />
                    <span>Route & Temperature Details</span>
                    <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    id="route-details-input"
                    rows={4}
                    value={routeDetails}
                    onChange={(e) => setRouteDetails(e.target.value)}
                    placeholder="Pickup address, destination lab (e.g. IDEXX / Antech drop, regional hospital), desired cut-off time, and temperature specifications (ambient, cold pack, frozen)..."
                    required
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-4 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 font-normal leading-relaxed transition-all"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    id="submit-dispatch-request-btn"
                    className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-blue-500/25 active:scale-95 flex items-center justify-center gap-2"
                  >
                    <span>Submit Dispatch Request</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </button>
                  <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-400 mt-3 px-1">
                    <span>Direct Flagstaff dispatch review within 15 minutes.</span>
                    <span className="flex items-center gap-1 text-slate-300 font-medium whitespace-nowrap">
                      <Phone className="w-3 h-3 text-blue-400 shrink-0" />
                      <span>24/7 Dispatch: <span className="whitespace-nowrap tabular-nums">928-547-1058</span></span>
                    </span>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
