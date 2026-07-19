import React from 'react';
import { ShieldCheck, Award, Globe, Compass, MapPin, CheckCircle } from 'lucide-react';

export default function AboutView() {
  const values = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
      title: 'Uncompromised Custody',
      desc: 'Whether carrying clinical blood vials or other critical assets, we maintain secure biometrically verified chains-of-custody that align with regulatory baselines.'
    },
    {
      icon: <Award className="w-6 h-6 text-blue-500" />,
      title: 'Certified Competency',
      desc: 'All our dispatchers and couriers are full-time employees, subject to thorough security screening and routine bi-annual compliance certifications (HIPAA/OSHA).'
    },
    {
      icon: <Globe className="w-6 h-6 text-blue-400" />,
      title: 'Weather-Ready Vehicles',
      desc: 'By utilizing 4WD-equipped vehicles and advanced GPS routing, we ensure reliable transport through Northern Arizona\'s toughest winter conditions while maintaining peak operational efficiency.'
    },
    {
      icon: <Compass className="w-6 h-6 text-indigo-600" />,
      title: 'Algorithmic Dispatch',
      desc: 'We merge old-fashioned, face-to-face care with modern telemetry. By pairing efficient GPS routing with active real-time tracking, we adapt to live conditions on the road so you always know exactly where your critical delivery is.'
    }
  ];

  return (
    <div className="space-y-20 pb-20">
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(37,99,235,0.07),transparent_100%)]"></div>
        <div className="max-w-4xl mx-auto relative z-10 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-400 block">Our Company</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            More Than a Delivery.
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            It is never just cargo to us. It is a person waiting for an answer, a patient needing treatment, or a professional relying on a deadline.
          </p>
        </div>
      </section>

      {/* Founders Story Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Text */}
          <div className="space-y-6 text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-700 block">Founding Journey</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Clinical Integrity Meets Logistical Reliability
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Omnee Courier Solutions was born from a singular vision: to replace generic delivery services with a dedicated, medical-grade logistics engine. Co-founded by our President, a Certified Medical Assistant with a deep understanding of clinical urgency, and our Managing Partner, a technical operations professional focused on vehicle readiness.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Together, they have built a service that prioritizes the sanctity of the specimen and the timing of the dispatch. From maintaining high-reliability, 4WD-equipped vehicles to enforcing strict HIPAA and OSHA protocols, our leadership is hands-on in ensuring your critical assets are never compromised.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
              <div>
                <span className="text-2xl font-extrabold text-slate-900 font-mono">Flagstaff</span>
                <span className="text-xs text-slate-500 block font-semibold mt-0.5">Locally owned & operated</span>
              </div>
              <div>
                <span className="text-2xl font-extrabold text-slate-900 font-mono">100%</span>
                <span className="text-xs text-slate-500 block font-semibold mt-0.5">HIPAA & OSHA Compliant</span>
              </div>
            </div>
          </div>

          {/* Right Visual Representation */}
          <div className="bg-slate-50 border border-slate-200/60 rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between min-h-[350px] text-left">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-2xl"></div>
            
            <div className="space-y-4">
              <span className="text-xs font-bold text-blue-700 uppercase tracking-widest block">Omnee Corporate Mission</span>
              <p className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 leading-snug">
                "To deliver reliable peace of mind for high-stakes transport through a certified workforce, innovative telemetry, and strict operational compliance."
              </p>
            </div>

            <div className="space-y-3 pt-6 border-t border-slate-200/60">
              <div className="flex items-center gap-2.5 text-xs font-bold text-slate-700">
                <CheckCircle className="w-4 h-4 text-blue-600 shrink-0" />
                <span>HIPAA compliant bio-transport certified</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-bold text-slate-700">
                <CheckCircle className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Fully insured commercial liability</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-bold text-slate-700">
                <CheckCircle className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Guaranteed instant digital signatures & photo verification</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-bold text-slate-700">
                <CheckCircle className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Live GPS monitoring and real-time delivery tracking</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Values Grid */}
      <section className="bg-slate-50 py-20 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-700 block">Our Core Pillars</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Values That Drive Every Dispatch
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              Our culture centers around rigorous discipline. We recognize that we represent the critical final-mile of your professional commitments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {values.map((v, idx) => (
              <div key={idx} className="bg-white border border-slate-200/60 p-6 sm:p-8 rounded-2xl shadow-sm space-y-4">
                <div className="p-2.5 bg-slate-50 rounded-xl w-fit border border-slate-100">
                  {v.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900">{v.title}</h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
