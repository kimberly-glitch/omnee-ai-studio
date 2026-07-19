import React, { useState, useEffect } from 'react';
import { Search, X, Check, ArrowRight, MapPin, Package, Clock, ShieldCheck, CornerDownRight, AlertCircle, Truck, Compass, Thermometer, Wifi } from 'lucide-react';
import { generateDynamicShipment, MOCK_SHIPMENTS } from '../data';
import { Shipment } from '../types';

function LiveCourierMap({ shipment }: { shipment: Shipment }) {
  const currentStatus = shipment.currentStatus;
  
  let percent = 0;
  let speed = "0 MPH";
  let tempText = "Chilled Containment: 3.8°C (Stable)";
  let signalText = "GPS Lkd • Sat 9";
  let currentActionText = "Preparing at origin facility";
  
  if (currentStatus === 'created') {
    percent = 0;
    speed = "0 MPH";
    currentActionText = "Courier scheduling secured. Awaiting pickup.";
  } else if (currentStatus === 'picked_up') {
    percent = 25;
    speed = "35 MPH";
    currentActionText = "Specimen collected. Moving through local corridors.";
  } else if (currentStatus === 'in_transit') {
    percent = 55;
    speed = "62 MPH";
    currentActionText = "Cruising I-40 East. Telemetry stream green.";
  } else if (currentStatus === 'out_for_delivery') {
    percent = 80;
    speed = "20 MPH";
    currentActionText = "Approaching hospital complex for final handover.";
  } else if (currentStatus === 'delivered') {
    percent = 100;
    speed = "0 MPH";
    currentActionText = "Secure handover verified. Chain of custody complete.";
  }

  const isRecords = shipment.serviceType.toLowerCase().includes('records');
  if (isRecords) {
    tempText = "Secured HIPAA Briefcase: Locked";
  }

  const points = [
    { x: 50, y: 100 },
    { x: 170, y: 65 },
    { x: 300, y: 135 },
    { x: 440, y: 75 },
    { x: 550, y: 110 }
  ];

  let vehicleX = 50;
  let vehicleY = 100;
  
  if (percent === 0) {
    vehicleX = points[0].x;
    vehicleY = points[0].y;
  } else if (percent === 25) {
    vehicleX = points[1].x;
    vehicleY = points[1].y;
  } else if (percent === 55) {
    vehicleX = points[2].x;
    vehicleY = points[2].y;
  } else if (percent === 80) {
    vehicleX = points[3].x;
    vehicleY = points[3].y;
  } else if (percent === 100) {
    vehicleX = points[4].x;
    vehicleY = points[4].y;
  }

  return (
    <div className="bg-slate-950 border border-slate-900 rounded-2xl p-4 sm:p-5 text-white overflow-hidden relative" id="live-telemetry-map-container">
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl"></div>
      
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4 pb-3 border-b border-slate-900 text-xs font-mono">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping"></span>
          <span className="font-bold text-blue-400">LIVE COURIER TELEMETRY</span>
        </div>
        <div className="flex flex-wrap items-center gap-3 text-[10px] text-slate-400">
          <span className="flex items-center gap-1">
            <Compass className="w-3.5 h-3.5 text-slate-500 shrink-0" />
            <span>{speed}</span>
          </span>
          <span className="h-3 w-px bg-slate-800"></span>
          <span className="flex items-center gap-1">
            <Thermometer className="w-3.5 h-3.5 text-slate-500 shrink-0" />
            <span>{tempText}</span>
          </span>
          <span className="h-3 w-px bg-slate-800"></span>
          <span className="flex items-center gap-1">
            <Wifi className="w-3.5 h-3.5 text-blue-500 shrink-0" />
            <span className="text-blue-400 font-bold">{signalText}</span>
          </span>
        </div>
      </div>

      <div className="relative w-full h-40 bg-slate-900/60 rounded-xl border border-slate-800/80 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-30"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-slate-800/10 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-slate-800/10 rounded-full"></div>
        
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 200" preserveAspectRatio="none">
          <path
            d="M 50 100 Q 110 50 170 65 T 300 135 T 440 75 T 550 110"
            fill="none"
            stroke="#1e293b"
            strokeWidth="5"
            strokeLinecap="round"
          />

          <path
            d="M 50 100 Q 110 50 170 65 T 300 135 T 440 75 T 550 110"
            fill="none"
            stroke="#2563eb"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="600"
            strokeDashoffset={600 - (600 * (percent / 100))}
            className="transition-all duration-1000 ease-in-out"
          />

          <circle cx="50" cy="100" r="10" className="fill-blue-500/20 animate-ping" />
          <circle cx="50" cy="100" r="4" className="fill-blue-500 stroke-slate-950 stroke-2" />

          <circle cx="550" cy="110" r="10" className="fill-blue-500/20" />
          <circle cx="550" cy="110" r="4" className={currentStatus === 'delivered' ? "fill-emerald-500 stroke-slate-950 stroke-2 animate-bounce" : "fill-slate-700 stroke-slate-950 stroke-2"} />

          {currentStatus !== 'delivered' && (
            <g transform={`translate(${vehicleX}, ${vehicleY})`}>
              <circle r="12" className="fill-blue-600/30 animate-pulse" />
              <circle r="6" className="fill-blue-400 stroke-slate-950 stroke-2" />
            </g>
          )}
        </svg>

        <div className="absolute left-6 top-[110px] text-left">
          <span className="block text-[8px] font-bold uppercase tracking-wider text-slate-500 font-mono">Origin Facility</span>
          <span className="block text-[10px] font-bold text-white leading-tight">{shipment.origin.replace(' Metropolitan', '')}</span>
        </div>

        <div className="absolute right-6 top-[120px] text-right">
          <span className="block text-[8px] font-bold uppercase tracking-wider text-slate-500 font-mono">Destination</span>
          <span className="block text-[10px] font-bold text-white leading-tight">{shipment.destination.replace(' Business District', '')}</span>
        </div>

        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-slate-950/90 border border-slate-800/80 px-4 py-2 rounded-xl text-center max-w-sm w-[90%] flex items-center justify-between gap-3 shadow-lg">
          <div className="flex items-center gap-2">
            <div className="bg-blue-900/60 p-1 rounded-lg shrink-0 text-blue-400">
              <Truck className="w-3.5 h-3.5" />
            </div>
            <p className="text-[10px] font-medium text-slate-300 text-left line-clamp-1 leading-tight">
              {currentActionText}
            </p>
          </div>
          <span className="text-[9px] font-mono font-bold bg-blue-900/40 border border-blue-800/60 text-blue-400 px-1.5 py-0.5 rounded uppercase shrink-0">
            {percent}% GPS
          </span>
        </div>
      </div>
    </div>
  );
}

interface TrackingWidgetProps {
  isOpen: boolean;
  onClose: () => void;
  prefillCode?: string;
}

export default function TrackingWidget({ isOpen, onClose, prefillCode }: TrackingWidgetProps) {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [shipment, setShipment] = useState<Shipment | null>(null);
  const [searched, setSearched] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (prefillCode) {
      setTrackingNumber(prefillCode);
      handleTrack(prefillCode);
    } else {
      setTrackingNumber('');
      setShipment(null);
      setSearched(false);
      setErrorMsg('');
    }
  }, [prefillCode, isOpen]);

  const handleTrack = (codeToSearch: string) => {
    const code = codeToSearch.trim().toUpperCase();
    if (!code) {
      setErrorMsg('Please enter a valid tracking number.');
      setShipment(null);
      return;
    }

    setErrorMsg('');
    try {
      const result = generateDynamicShipment(code);
      setShipment(result);
      setSearched(true);
    } catch (err) {
      setErrorMsg('An error occurred while retrieving tracking info. Please verify formatting.');
      setShipment(null);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleTrack(trackingNumber);
  };

  const handleSelectSample = (sampleCode: string) => {
    setTrackingNumber(sampleCode);
    handleTrack(sampleCode);
  };

  if (!isOpen) return null;

  // Get current state styling for milestones
  const getStatusStepClass = (stepIndex: number, currentStatus: Shipment['currentStatus']) => {
    const statusOrder: Shipment['currentStatus'][] = ['created', 'picked_up', 'in_transit', 'out_for_delivery', 'delivered'];
    const currentIndex = statusOrder.indexOf(currentStatus);
    
    if (stepIndex < currentIndex) {
      // Completed past step
      return {
        bg: 'bg-blue-600 text-white border-blue-600',
        line: 'bg-blue-600',
        text: 'text-slate-900 font-semibold'
      };
    } else if (stepIndex === currentIndex) {
      // Current active step
      return {
        bg: 'bg-blue-700 text-white ring-4 ring-blue-100 border-blue-700 animate-pulse',
        line: 'bg-slate-200',
        text: 'text-blue-700 font-extrabold'
      };
    } else {
      // Future step
      return {
        bg: 'bg-white text-slate-300 border-slate-200',
        line: 'bg-slate-200',
        text: 'text-slate-400 font-normal'
      };
    }
  };

  const milestones = [
    { label: 'Registered', desc: 'Label created' },
    { label: 'Collected', desc: 'Courier dispatch' },
    { label: 'In Transit', desc: 'Sorting hub' },
    { label: 'Out for Delivery', desc: 'Local runner' },
    { label: 'Delivered', desc: 'Complete' }
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        {/* Backdrop */}
        <div 
          className="fixed inset-0 bg-slate-950/65 backdrop-blur-sm transition-opacity" 
          aria-hidden="true" 
          onClick={onClose}
        ></div>

        {/* Trick to center modal content in desktop */}
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        {/* Modal Panel */}
        <div 
          className="relative inline-block align-bottom bg-white rounded-2xl text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full border border-slate-100"
          id="tracking-modal-panel"
        >
          {/* Header */}
          <div className="bg-slate-900 px-6 py-5 flex items-center justify-between border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="bg-blue-600 text-white p-2 rounded-lg">
                <Search className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white leading-tight">Live Parcel Tracking</h3>
                <p className="text-xs text-slate-400">Track and monitor high-priority shipments in real-time</p>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="rounded-lg p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 transition-all"
              aria-label="Close modal"
              id="tracking-modal-close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6">
            {/* Search Input Form */}
            <form onSubmit={handleFormSubmit} className="mb-6">
              <label htmlFor="modal-tracking-id" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Enter Shipment Tracking Code
              </label>
              <div className="flex gap-2.5">
                <input
                  type="text"
                  id="modal-tracking-id"
                  placeholder="e.g., OMN-7182, OMN-4912, or any random string..."
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-semibold tracking-wide font-mono focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600"
                  autoFocus
                />
                <button
                  type="submit"
                  className="bg-blue-700 hover:bg-blue-600 active:scale-95 text-white font-bold px-6 py-3 rounded transition-all shadow-md hover:shadow-blue-500/10 flex items-center gap-2 text-sm"
                  id="modal-track-btn"
                >
                  <span>Track</span>
                  <Search className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>
              {errorMsg && (
                <p className="mt-2 text-xs font-semibold text-rose-600 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errorMsg}</span>
                </p>
              )}
            </form>

            {/* Quick Demo Samples (when not searched or as helpers) */}
            {!shipment && (
              <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  Demonstration Live Shipments
                </p>
                <p className="text-xs text-slate-500 mb-4 leading-relaxed">
                  Click on one of our active logistics routes below to inspect how our real-time milestone stepper and secure tracking histories function:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <button
                    type="button"
                    onClick={() => handleSelectSample('OMN-7182')}
                    className="p-3 bg-white hover:bg-blue-50/50 border border-slate-200 hover:border-blue-300 rounded-xl text-left transition-all group"
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-mono text-xs font-bold text-slate-800 group-hover:text-blue-700">OMN-7182</span>
                      <span className="text-[10px] bg-sky-50 text-sky-700 px-1.5 py-0.5 rounded-full font-bold uppercase tracking-wide">STAT Medical</span>
                    </div>
                    <span className="block text-[10px] text-slate-400">In Transit - Climate stable</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleSelectSample('OMN-4912')}
                    className="p-3 bg-white hover:bg-blue-50/50 border border-slate-200 hover:border-blue-300 rounded-xl text-left transition-all group"
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-mono text-xs font-bold text-slate-800 group-hover:text-blue-700">OMN-4912</span>
                      <span className="text-[10px] bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded-full font-bold uppercase tracking-wide">Express Same-Day</span>
                    </div>
                    <span className="block text-[10px] text-slate-400">Out for Local Delivery</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleSelectSample('OMN-9021')}
                    className="p-3 bg-white hover:bg-blue-50/50 border border-slate-200 hover:border-blue-300 rounded-xl text-left transition-all group"
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-mono text-xs font-bold text-slate-800 group-hover:text-blue-700">OMN-9021</span>
                      <span className="text-[10px] bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded-full font-bold uppercase tracking-wide">Scheduled Route</span>
                    </div>
                    <span className="block text-[10px] text-slate-400">Delivered Yesterday</span>
                  </button>
                </div>
              </div>
            )}

            {/* Shipment Results */}
            {shipment && (
              <div className="space-y-6 animate-fade-in" id="tracking-results">
                {/* Status Bar */}
                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 sm:p-5">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4 pb-4 border-b border-slate-200">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Tracking Code</span>
                      <span className="block font-mono text-lg font-bold text-slate-900">{shipment.trackingNumber}</span>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 text-left sm:text-right block">Service Level</span>
                      <span className="block text-sm font-semibold text-slate-800 bg-white border border-slate-200 px-3 py-1 rounded-lg mt-0.5">{shipment.serviceType}</span>
                    </div>
                  </div>

                  {/* Shipment Quick Info Cards */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                    <div className="bg-white border border-slate-100 p-3 rounded-xl">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-0.5">Origin</span>
                      <span className="font-semibold text-slate-800 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
                        {shipment.origin}
                      </span>
                    </div>
                    <div className="bg-white border border-slate-100 p-3 rounded-xl">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-0.5">Destination</span>
                      <span className="font-semibold text-slate-800 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-blue-500 shrink-0" />
                        {shipment.destination}
                      </span>
                    </div>
                    <div className="bg-white border border-slate-100 p-3 rounded-xl">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-0.5">Specs</span>
                      <span className="font-semibold text-slate-800 flex items-center gap-1">
                        <Package className="w-3 h-3 text-slate-400 shrink-0" />
                        {shipment.weight} ({shipment.dimensions})
                      </span>
                    </div>
                    <div className="bg-white border border-slate-100 p-3 rounded-xl">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-0.5">Est. Delivery</span>
                      <span className="font-semibold text-blue-700 flex items-center gap-1">
                        <Clock className="w-3 h-3 text-blue-500 shrink-0" />
                        {shipment.estimatedDelivery}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Simulated Telemetry GPS Route Map */}
                <LiveCourierMap shipment={shipment} />

                {/* Tracking Progress Stepper */}
                <div className="py-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-6">Shipment Milestone Status</h4>
                  
                  {/* Stepper Grid (Horizontal on Medium, Vertical on Mobile) */}
                  <div className="hidden md:flex justify-between items-center relative px-2">
                    {/* Connecting line */}
                    <div className="absolute top-5 left-10 right-10 h-0.5 bg-slate-100 -z-10"></div>
                    
                    {milestones.map((milestone, idx) => {
                      const classes = getStatusStepClass(idx, shipment.currentStatus);
                      return (
                        <div key={idx} className="flex flex-col items-center text-center w-36 relative z-10">
                          <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center text-xs font-bold mb-2 transition-all duration-300 ${classes.bg}`}>
                            {idx < ['created', 'picked_up', 'in_transit', 'out_for_delivery', 'delivered'].indexOf(shipment.currentStatus) ? (
                              <Check className="w-4 h-4 stroke-[3]" />
                            ) : (
                              idx + 1
                            )}
                          </div>
                          <span className={`text-xs block font-bold truncate max-w-full ${classes.text}`}>{milestone.label}</span>
                          <span className="text-[10px] text-slate-400 block truncate max-w-full">{milestone.desc}</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Vertical Stepper for Mobile */}
                  <div className="md:hidden space-y-4 px-2">
                    {milestones.map((milestone, idx) => {
                      const classes = getStatusStepClass(idx, shipment.currentStatus);
                      const isCompleted = idx <= ['created', 'picked_up', 'in_transit', 'out_for_delivery', 'delivered'].indexOf(shipment.currentStatus);
                      return (
                        <div key={idx} className="flex gap-3">
                          <div className="flex flex-col items-center">
                            <div className={`w-8 h-8 rounded-full border flex items-center justify-center text-xs font-bold transition-all duration-300 ${classes.bg}`}>
                              {idx < ['created', 'picked_up', 'in_transit', 'out_for_delivery', 'delivered'].indexOf(shipment.currentStatus) ? (
                                <Check className="w-3.5 h-3.5 stroke-[3]" />
                              ) : (
                                idx + 1
                              )}
                            </div>
                            {idx < milestones.length - 1 && (
                              <div className={`w-0.5 h-10 mt-1 ${isCompleted ? 'bg-blue-600' : 'bg-slate-100'}`} />
                            )}
                          </div>
                          <div className="pt-0.5">
                            <h5 className={`text-xs font-bold ${classes.text}`}>{milestone.label}</h5>
                            <p className="text-[10px] text-slate-400">{milestone.desc}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Detailed History Log Accordion */}
                <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-blue-600" />
                    <span>Secure Audit & Handling History</span>
                  </h4>
                  <div className="space-y-4">
                    {shipment.history.map((log, index) => (
                      <div key={index} className={`flex gap-3 text-xs leading-relaxed ${log.completed ? 'opacity-100' : 'opacity-50'}`}>
                        <div className="flex flex-col items-center shrink-0">
                          <div className={`w-2 h-2 rounded-full ${log.completed ? 'bg-blue-600' : 'bg-slate-300'} mt-1.5`} />
                          {index < shipment.history.length - 1 && (
                            <div className="w-px h-full bg-slate-200 mt-1" />
                          )}
                        </div>
                        <div className="flex-1 pb-2">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                            <span className={`font-bold ${log.completed ? 'text-slate-800' : 'text-slate-400'}`}>{log.label}</span>
                            <span className="text-[10px] text-slate-400 font-mono">{log.timestamp}</span>
                          </div>
                          <div className="flex items-center gap-1 text-[10px] font-bold text-blue-600 mb-1">
                            <MapPin className="w-2.5 h-2.5" />
                            <span>{log.location}</span>
                          </div>
                          <p className="text-slate-500 text-[11px] font-medium">{log.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer Controls */}
          <div className="bg-slate-50 px-6 py-4 flex justify-between items-center border-t border-slate-100">
            <span className="text-[10px] text-slate-400 font-medium">All sessions encrypted. HIPAA compliance active.</span>
            <button
              onClick={onClose}
              className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs tracking-wider uppercase px-4 py-2 rounded-lg shadow-sm transition-all active:scale-95"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
