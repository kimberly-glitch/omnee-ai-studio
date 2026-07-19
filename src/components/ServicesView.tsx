import React, { useState } from 'react';
import { SERVICES } from '../data';
import { ServiceDetail } from '../types';
import { Zap, Calendar, ShieldAlert, Package, Truck, ArrowRight, CheckCircle2, Calculator, Info, Check, ClipboardCheck } from 'lucide-react';

interface ServicesViewProps {
  onNavigate: (section: string) => void;
}

export default function ServicesView({ onNavigate }: ServicesViewProps) {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(SERVICES[0].id);
  const [originZip, setOriginZip] = useState('86001');
  const [destZip, setDestZip] = useState('86015');
  const [distance, setDistance] = useState(15);
  const [weight, setWeight] = useState(5);
  const [urgencyMultiplier, setUrgencyMultiplier] = useState(1); // 1 = Standard, 1.3 = Urgent (ASAP)
  
  const [calculationResult, setCalculationResult] = useState<{
    base: number;
    distanceCost: number;
    weightCost: number;
    total: number;
    transitTime: string;
    calculated: boolean;
  } | null>(null);

  const [bookingSuccess, setBookingSuccess] = useState(false);

  const handleCalculateRate = (e: React.FormEvent) => {
    e.preventDefault();
    
    const svc = SERVICES.find(s => s.id === selectedServiceId) || SERVICES[0];
    
    // Simple mock formula: Base + (Distance * perMileRate) + (weight * 0.45)
    const base = svc.basePrice;
    const distanceCost = distance * svc.perMileRate;
    const weightCost = weight * 0.45;
    
    const rawTotal = (base + distanceCost + weightCost) * urgencyMultiplier;
    
    setCalculationResult({
      base,
      distanceCost,
      weightCost,
      total: parseFloat(rawTotal.toFixed(2)),
      transitTime: svc.deliveryTime,
      calculated: true
    });
    setBookingSuccess(false);
  };

  const handleBookNow = () => {
    setBookingSuccess(true);
    // Auto clear success after 4 seconds
    setTimeout(() => {
      setBookingSuccess(false);
    }, 4000);
  };

  // Icon switcher for each service category
  const renderServiceIcon = (id: string, sizeClass = "w-6 h-6") => {
    switch (id) {
      case 'medical-specimen':
        return <ShieldAlert className={`${sizeClass} text-rose-500`} />;
      case 'pharmaceutical-delivery':
        return <Package className={`${sizeClass} text-blue-500`} />;
      case 'medical-records':
        return <ClipboardCheck className={`${sizeClass} text-indigo-500`} />;
      case 'scheduled-backup':
        return <Calendar className={`${sizeClass} text-emerald-500`} />;
      default:
        return <Package className={`${sizeClass} text-slate-500`} />;
    }
  };

  return (
    <div className="space-y-20 pb-20">
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(37,99,235,0.07),transparent_100%)]"></div>
        <div className="max-w-4xl mx-auto relative z-10 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-400 block">Our Capabilities</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Do You Have Transport Problems? Omnee Has Solutions.
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            From late-night courier handovers to winter travel delays, we eliminate logistics headaches entirely. We coordinate every route with dependable local support, keeping your clinical operations running smoothly.
          </p>
        </div>
      </section>

      {/* Services Breakdown Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {SERVICES.map((svc, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={svc.id} 
                className={`flex flex-col lg:flex-row gap-12 items-stretch border-b border-slate-100 pb-16 last:border-b-0 last:pb-0 ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
                id={`service-detail-${svc.id}`}
              >
                {/* Text Content */}
                <div className="flex-1 space-y-6 text-left flex flex-col justify-center">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-slate-50 border border-slate-100 rounded-2xl shadow-sm shrink-0">
                      {renderServiceIcon(svc.id, "w-8 h-8")}
                    </div>
                    <div>
                      <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">{svc.title}</h2>
                      <span className="inline-flex items-center gap-1 text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider mt-0.5">
                        Est: {svc.deliveryTime}
                      </span>
                    </div>
                  </div>

                  <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                    {svc.fullDesc}
                  </p>

                  <div className="space-y-3 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Core Service Inclusions</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {svc.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-blue-50/50 border border-blue-100 rounded-xl text-xs font-bold text-slate-900 max-w-md">
                    <div className="space-y-0.5 text-left">
                      <span className="block text-slate-500 font-medium text-[10px] uppercase">Starting Base Rate</span>
                      <span className="text-sm font-extrabold text-blue-800">
                        {svc.id === 'stat-emergency' ? 'Contact Dispatch for Priority STAT Rates' : `$${svc.basePrice.toFixed(2)} + $${svc.perMileRate.toFixed(2)}/mile`}
                      </span>
                    </div>
                    <button
                      onClick={() => {
                        setSelectedServiceId(svc.id);
                        document.getElementById('rate-estimator-section')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="bg-blue-700 hover:bg-blue-800 active:scale-95 text-white py-2 px-4 rounded transition-colors flex items-center gap-1 shrink-0"
                    >
                      <span>Estimate Cost</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Decorative visual block */}
                <div className="flex-1 flex items-center justify-center relative">
                  <div className="w-full h-80 lg:h-full min-h-[300px] bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden flex flex-col justify-between border border-slate-800">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20"></div>
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
                    
                    {/* Visual Elements inside the container */}
                    <div className="flex justify-between items-center relative z-10">
                      <span className="text-[10px] font-mono tracking-widest text-blue-400 uppercase">OMNEE • GLOBAL CODE: {svc.id.toUpperCase()}</span>
                      <span className="text-[10px] font-mono text-slate-400 uppercase">AUDITED & SECURE</span>
                    </div>

                    <div className="space-y-2 text-left relative z-10">
                      <span className="text-[10px] font-bold tracking-widest text-blue-400 uppercase">VEHICLE INSTRUCTIONS</span>
                      <h3 className="text-xl sm:text-2xl font-bold font-mono tracking-tight text-white leading-tight">
                        {svc.id === 'medical-specimen' ? 'MED_SPECURE_TEMP_STABLE' : 
                         svc.id === 'medical-records' ? 'RECORDS_HIPAA_SECURE' : 'EMERGENCY_STAT_DISPATCH'}
                      </h3>
                      <p className="text-xs text-slate-400 font-mono">
                        {svc.id === 'medical-specimen' ? 'HIPAA Chain-Of-Custody • Climate containment logged hourly.' :
                         svc.id === 'medical-records' ? 'Strict HIPAA chain of custody • Document lockboxes utilized.' :
                         'Bypasses standard routing for life-critical logistics • 4WD weather readiness.'}
                      </p>
                    </div>

                    <div className="bg-slate-950/80 border border-slate-800/80 p-4 rounded-xl flex items-center justify-between text-xs font-mono relative z-10">
                      <div>
                        <span className="block text-slate-500 text-[9px] uppercase">Est. Dispatch Time</span>
                        <span className="text-white font-bold">{svc.id === 'stat-emergency' ? 'Immediate STAT' : svc.id === 'medical-specimen' ? 'Standard / Rush' : 'Scheduled'}</span>
                      </div>
                      <div className="text-right">
                        <span className="block text-slate-500 text-[9px] uppercase">Compliance Flag</span>
                        <span className="text-blue-400 font-bold">100% PASS</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Interactive Quick Rate Estimator Calculator */}
      <section id="rate-estimator-section" className="bg-slate-950 py-20 border-t border-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(37,99,235,0.05),transparent_100%)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400 block">Transparent Pricing</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Interactive Quick Rate Estimator
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Our transparent baseline rates provide a predictable advantage over generic gig-economy apps with unstable surge pricing and hidden fees. Set your parameters to estimate your delivery instantly.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Form Fields */}
            <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 text-left">
              <h3 className="text-lg font-bold text-white border-b border-slate-800 pb-3 flex items-center gap-2">
                <Calculator className="w-5 h-5 text-blue-400" />
                <span>Estimate Parameters</span>
              </h3>

              <form onSubmit={handleCalculateRate} className="space-y-5">
                {/* Service Select */}
                <div>
                  <label htmlFor="est-service-level" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Service Level Required
                  </label>
                  <select
                    id="est-service-level"
                    value={selectedServiceId}
                    onChange={(e) => setSelectedServiceId(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 text-slate-200"
                  >
                    {SERVICES.map(s => (
                      <option key={s.id} value={s.id}>{s.title}</option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Origin ZIP */}
                  <div>
                    <label htmlFor="est-origin-zip" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Origin Zip Code
                    </label>
                    <input
                      type="text"
                      id="est-origin-zip"
                      maxLength={5}
                      value={originZip}
                      onChange={(e) => setOriginZip(e.target.value.replace(/\D/g, ''))}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 font-semibold font-mono text-slate-200"
                    />
                  </div>

                  {/* Destination ZIP */}
                  <div>
                    <label htmlFor="est-dest-zip" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Destination Zip Code
                    </label>
                    <input
                      type="text"
                      id="est-dest-zip"
                      maxLength={5}
                      value={destZip}
                      onChange={(e) => setDestZip(e.target.value.replace(/\D/g, ''))}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 font-semibold font-mono text-slate-200"
                    />
                  </div>
                </div>

                {/* Distance Slider */}
                <div>
                  <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    <label htmlFor="est-distance">Estimated Transit Distance</label>
                    <span className="text-blue-400 font-mono text-sm">{distance} Miles</span>
                  </div>
                  <input
                    type="range"
                    id="est-distance"
                    min="5"
                    max="150"
                    step="5"
                    value={distance}
                    onChange={(e) => setDistance(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-blue-600 border border-slate-800"
                  />
                  <span className="text-[10px] text-slate-500 mt-1 block">Local metropolitan courier runs typically span 5 to 60 miles.</span>
                </div>

                {/* Weight Slider */}
                <div>
                  <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    <label htmlFor="est-weight">Package Spec Weight</label>
                    <span className="text-blue-400 font-mono text-sm">{weight} Lbs</span>
                  </div>
                  <input
                    type="range"
                    id="est-weight"
                    min="1"
                    max="75"
                    value={weight}
                    onChange={(e) => setWeight(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-blue-600 border border-slate-800"
                  />
                  <span className="text-[10px] text-slate-500 mt-1 block">Rates include standard flat weight up to 5 lbs. Heavy weight surcharges apply past that.</span>
                </div>

                {/* Dispatch Urgency Radio Buttons */}
                <div>
                  <span className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Urgency & Dispatch Speed
                  </span>
                  <div className="grid grid-cols-2 gap-3">
                    <label className={`border rounded-xl p-3 flex flex-col justify-between cursor-pointer transition-all ${
                      urgencyMultiplier === 1 
                        ? 'border-blue-500 bg-blue-950/20 text-white' 
                        : 'border-slate-800 bg-slate-950 hover:bg-slate-900 text-slate-400'
                    }`}>
                      <input 
                        type="radio" 
                        name="urgency" 
                        checked={urgencyMultiplier === 1}
                        onChange={() => setUrgencyMultiplier(1)}
                        className="sr-only" 
                      />
                      <span className="text-xs font-bold block mb-0.5">Standard Dispatch</span>
                      <span className="text-[10px] text-slate-400 block">Default scheduled / courier tier routing</span>
                    </label>

                    <label className={`border rounded-xl p-3 flex flex-col justify-between cursor-pointer transition-all ${
                      urgencyMultiplier === 1.3 
                        ? 'border-blue-500 bg-blue-950/20 text-white' 
                        : 'border-slate-800 bg-slate-950 hover:bg-slate-900 text-slate-400'
                    }`}>
                      <input 
                        type="radio" 
                        name="urgency" 
                        checked={urgencyMultiplier === 1.3}
                        onChange={() => setUrgencyMultiplier(1.3)}
                        className="sr-only" 
                      />
                      <span className="text-xs font-bold block mb-0.5">STAT Immediate (+30%)</span>
                      <span className="text-[10px] text-slate-400 block">Emergency courier rerouting assigned instantly</span>
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-700 hover:bg-blue-600 active:scale-95 text-white font-bold uppercase tracking-wider py-4 rounded transition-all shadow-md text-xs flex items-center justify-center gap-2"
                  id="est-calc-submit-btn"
                >
                  <span>Compute Estimate</span>
                  <Calculator className="w-4 h-4 stroke-[2.5]" />
                </button>
              </form>
            </div>

            {/* Calculations Result Output Panel */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 flex flex-col justify-between min-h-[350px]">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4 pb-2 border-b border-slate-800">
                    Est. Invoice Breakdown
                  </h3>
                  
                  {calculationResult ? (
                    selectedServiceId === 'stat-emergency' ? (
                      <div className="space-y-4">
                        <div className="p-4 bg-rose-950/20 border border-rose-900/50 rounded-2xl space-y-2 text-xs text-left leading-relaxed">
                          <span className="block text-xs font-bold text-rose-400 uppercase tracking-wider mb-1">Priority Dispatch Tier</span>
                          <p className="text-slate-300">
                            Our STAT Emergency service operates as an immediate drop-everything priority run, bypassing standard routing. Rates are custom-calculated by dispatch to ensure direct, optimized logistics.
                          </p>
                          <p className="text-slate-300 font-semibold mt-2">
                            Please contact our Flagstaff dispatch desk directly:
                          </p>
                          <div className="text-blue-400 font-bold font-mono space-y-0.5 mt-1">
                            <div>Phone: 928-547-1058</div>
                            <div>Email: Info@Omneecourier.com</div>
                          </div>
                        </div>

                        {/* Transit Details */}
                        <div className="bg-slate-950 border border-slate-800/80 p-4 rounded-xl space-y-2 text-xs text-left">
                          <div className="flex justify-between">
                            <span className="text-slate-500 font-semibold uppercase">Transit Tier:</span>
                            <span className="text-rose-400 font-bold">Priority STAT (Immediate)</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-500 font-semibold uppercase">Route Coverage:</span>
                            <span className="text-slate-300 font-bold">Northern Arizona Region</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-500 font-semibold uppercase">Availability:</span>
                            <span className="text-blue-400 font-bold">24 Hours Around the Clock</span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {/* Cost Rows */}
                        <div className="space-y-2 text-xs font-mono">
                          <div className="flex justify-between">
                            <span className="text-slate-400">Base Service Surcharge:</span>
                            <span className="text-white">${calculationResult.base.toFixed(2)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-400">Mileage Tariff ({distance} mi):</span>
                            <span className="text-white">${calculationResult.distanceCost.toFixed(2)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-400">Weight Cargo Surcharge:</span>
                            <span className="text-white">${calculationResult.weightCost.toFixed(2)}</span>
                          </div>
                          {urgencyMultiplier > 1 && (
                            <div className="flex justify-between text-rose-400">
                              <span>STAT Urgent Multiplier:</span>
                              <span>x1.3</span>
                            </div>
                          )}
                        </div>

                        <div className="border-t border-slate-800 pt-4 mt-4 flex justify-between items-baseline">
                          <span className="text-xs font-bold uppercase tracking-wider text-slate-300">Total Estimate:</span>
                          <span className="text-3xl font-extrabold text-blue-400">${calculationResult.total.toFixed(2)}</span>
                        </div>

                        {/* Transit Details */}
                        <div className="bg-slate-950 border border-slate-800/80 p-4 rounded-xl space-y-2 text-xs">
                          <div className="flex justify-between">
                            <span className="text-slate-500 font-semibold uppercase">Transit Tier:</span>
                            <span className="text-slate-300 font-bold">{calculationResult.transitTime}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-500 font-semibold uppercase">Route Coverage:</span>
                            <span className="text-slate-300 font-bold">Northern Arizona Region</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-500 font-semibold uppercase">Handover proof:</span>
                            <span className="text-blue-400 font-bold flex items-center gap-1">
                              <Check className="w-3 h-3 stroke-[3]" /> Included
                            </span>
                          </div>
                        </div>
                      </div>
                    )
                  ) : (
                    <div className="text-center py-10 space-y-3">
                      <div className="w-12 h-12 rounded-full bg-slate-950 border border-slate-800 text-slate-500 flex items-center justify-center mx-auto">
                        <Info className="w-5 h-5" />
                      </div>
                      <p className="text-xs text-slate-400 font-medium max-w-xs mx-auto">
                        No parameters computed yet. Configure the sliders and click "Compute Estimate" to print your quote.
                      </p>
                    </div>
                  )}
                </div>

                {calculationResult && (
                  <div>
                    {selectedServiceId === 'stat-emergency' ? (
                      <a
                        href="tel:928-547-1058"
                        className="w-full bg-rose-700 hover:bg-rose-600 active:scale-95 text-white font-bold uppercase tracking-wider py-3.5 rounded transition-all shadow-md text-xs flex items-center justify-center gap-1.5"
                      >
                        <span>Call Dispatch (928-547-1058)</span>
                      </a>
                    ) : bookingSuccess ? (
                      <div className="bg-blue-950/60 border border-blue-900 text-blue-400 text-xs font-semibold p-4 rounded text-center animate-fade-in flex flex-col items-center gap-1">
                        <CheckCircle2 className="w-5 h-5 mb-0.5 shrink-0" />
                        <span>ESTIMATE LOGGED & DISPATCH BOOKED!</span>
                        <span className="text-[10px] text-slate-400 font-normal">Our dispatch desk will contact you at your account email shortly.</span>
                      </div>
                    ) : (
                      <button
                        onClick={handleBookNow}
                        className="w-full bg-blue-700 hover:bg-blue-600 active:scale-95 text-white font-bold uppercase tracking-wider py-3.5 rounded transition-all shadow-md text-xs flex items-center justify-center gap-1.5"
                        id="est-book-btn"
                      >
                        <span>Lock and Book Delivery</span>
                        <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
