import { ServiceDetail, Testimonial, TeamMember, Shipment } from './types';

export const SERVICES: ServiceDetail[] = [
  {
    id: 'medical-specimen',
    title: 'Medical Specimen Transport',
    shortDesc: 'Standard and rush local routing for blood vials, urine specimens, and Category B diagnostic materials. Fully HIPAA and OSHA compliant with a locked chain of custody.',
    fullDesc: 'Standard and rush local routing for blood vials, urine specimens, and Category B diagnostic materials. Fully HIPAA and OSHA compliant with a locked chain of custody.',
    iconName: 'ShieldAlert',
    features: [
      'Category B diagnostic material handling',
      'OSHA and HIPAA compliant safety guidelines',
      'Locked chain of custody and secure containment',
      'Temperature logging (frozen, chilled, ambient)'
    ],
    basePrice: 45.00,
    perMileRate: 1.85,
    deliveryTime: 'Standard or Rush'
  },
  {
    id: 'medical-records',
    title: 'Medical Records Courier',
    shortDesc: 'Secure, direct document transfer across Flagstaff for clinics and medical administration. Strict HIPAA compliance without the need for temperature control.',
    fullDesc: 'Secure, direct document transfer across Flagstaff for clinics and medical administration. Strict HIPAA compliance without the need for temperature control.',
    iconName: 'ClipboardCheck',
    features: [
      'Confidential document and medical chart transfer',
      'Strict HIPAA compliance protocols enforced',
      'Secure locking bags and document briefcases',
      'Instant signature and handover proof'
    ],
    basePrice: 20.00,
    perMileRate: 1.00,
    deliveryTime: 'Same-Day or Scheduled'
  },
  {
    id: 'stat-emergency',
    title: 'STAT Emergency Dispatches',
    shortDesc: 'Immediate, drop-everything response available 24/7, including holidays and weekends. Bypasses standard routing for urgent, life-critical logistics.',
    fullDesc: 'Immediate, drop-everything response available 24/7, including weekends around the clock, holidays, and nights. Bypasses standard routing for urgent, life-critical logistics.',
    iconName: 'Zap',
    features: [
      'Immediate, drop-everything dispatch response',
      'Available weekends around the clock and holidays',
      'Bypasses standard routing for rapid delivery',
      'Direct, dedicated courier communication'
    ],
    basePrice: 0.00,
    perMileRate: 0.00,
    deliveryTime: 'Immediate / 24/7'
  }
];

export const TESTIMONIALS: Testimonial[] = [];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'm1',
    name: 'President & Founder',
    role: 'Chief of Clinical Integrity',
    bio: 'A Certified Medical Assistant with deep expertise in medical administration, our President focuses on regulatory compliance, safe handling, and clinical care standards to ensure every Omnee protocol meets the highest clinical standards.',
    imageSeed: 'executive_clinical'
  },
  {
    id: 'm2',
    name: 'Managing Partner',
    role: 'Chief of Logistics',
    bio: 'A versatile operations professional, our Managing Partner focuses on vehicle readiness, maintaining our 4WD capabilities to eliminate weather downtime, and directly coordinating local routes and urgent STAT dispatches.',
    imageSeed: 'executive_ops'
  }
];

export const FAQS = [
  {
    q: 'How quickly can you dispatch a courier for an Express Same-Day delivery?',
    a: 'For our Express Same-Day tier, dispatch occurs immediately upon booking. Our courier typically arrives at your pick-up location within 30 to 45 minutes of booking confirmation.'
  },
  {
    q: 'Are your medical transport couriers certified and compliant?',
    a: 'Yes. All Omnee medical couriers are HIPAA, OSHA, and DOT-certified. They undergo bi-annual training covering clinical specimen integrity, temperature logging, and medical spill responses.'
  },
  {
    q: 'What areas and regions do you cover?',
    a: 'We provide immediate same-day local medical courier services across Flagstaff, Sedona, Williams, Bellemont, and surrounding Coconino County communities. Our scheduled and statutory routes cover all regional hospital systems, pharmacies, and clinics.'
  },
  {
    q: 'Do you offer recurring daily delivery options?',
    a: 'Yes. We customize daily route protocols for clinical facilities and pharmacies across Northern Arizona, ensuring predictable pickup and drop-off times.'
  },
  {
    q: 'What happens if a package is delayed or damaged?',
    a: 'While we maintain high on-time delivery rates, any rare disruptions are resolved immediately. Standard shipments are insured, and we offer high-value declarations for sensitive clinical assets.'
  }
];

// Pre-configured mock shipments for live demonstration
export const MOCK_SHIPMENTS: Record<string, Shipment> = {
  'OMN-7182': {
    trackingNumber: 'OMN-7182',
    sender: 'Northern Arizona Bioscience Corp',
    recipient: 'Flagstaff Medical Center (Lab 3)',
    origin: 'Bellemont, AZ 86015',
    destination: 'Flagstaff, AZ 86001',
    serviceType: 'Secure & Medical Courier (STAT)',
    weight: '4.2 lbs',
    dimensions: '12 x 10 x 8 in',
    estimatedDelivery: 'Today by 5:30 PM',
    currentStatus: 'in_transit',
    history: [
      {
        status: 'created',
        label: 'Shipment Registered',
        timestamp: '2026-07-07, 1:15 PM',
        location: 'Flagstaff Hub',
        description: 'Electronic billing info received, label printed.',
        completed: true
      },
      {
        status: 'picked_up',
        label: 'Picked Up by Courier',
        timestamp: '2026-07-07, 2:00 PM',
        location: 'Client Facility',
        description: 'Package secured and logged by Courier #402. Temp check normal (4°C).',
        completed: true
      },
      {
        status: 'in_transit',
        label: 'In Transit',
        timestamp: '2026-07-07, 3:30 PM',
        location: 'I-40 Eastbound',
        description: 'Shipment is en route. Climate containment active.',
        completed: true
      },
      {
        status: 'out_for_delivery',
        label: 'Out for Delivery',
        timestamp: 'Pending',
        location: 'Flagstaff Dispatch',
        description: 'Assigned to localized delivery runner for immediate delivery.',
        completed: false
      },
      {
        status: 'delivered',
        label: 'Delivered',
        timestamp: 'Pending',
        location: 'Flagstaff Medical Center',
        description: 'Awaiting clean clinical handover and signature.',
        completed: false
      }
    ]
  },
  'OMN-4912': {
    trackingNumber: 'OMN-4912',
    sender: 'Sedona Health Laboratory',
    recipient: 'Coconino County Health Clinic',
    origin: 'Sedona, AZ 86336',
    destination: 'Flagstaff, AZ 86001',
    serviceType: 'Express Same-Day Delivery',
    weight: '1.5 lbs',
    dimensions: '9 x 12 x 1 in (Flat Envelope)',
    estimatedDelivery: 'Today by 4:15 PM',
    currentStatus: 'out_for_delivery',
    history: [
      {
        status: 'created',
        label: 'Shipment Registered',
        timestamp: '2026-07-07, 11:30 AM',
        location: 'Sedona Hub',
        description: 'Courier route scheduled, high-priority flag active.',
        completed: true
      },
      {
        status: 'picked_up',
        label: 'Picked Up',
        timestamp: '2026-07-07, 12:10 PM',
        location: 'Sedona Facility',
        description: 'Document sealed in tamper-proof package. Picked up by Courier #108.',
        completed: true
      },
      {
        status: 'in_transit',
        label: 'In Transit',
        timestamp: '2026-07-07, 1:40 PM',
        location: 'I-17 Northbound Node',
        description: 'Consolidated with regional express routes.',
        completed: true
      },
      {
        status: 'out_for_delivery',
        label: 'Out for Delivery',
        timestamp: '2026-07-07, 3:10 PM',
        location: 'Flagstaff South Division',
        description: 'Courier #108 is currently heading to clinic archives.',
        completed: true
      },
      {
        status: 'delivered',
        label: 'Delivered',
        timestamp: 'Pending',
        location: 'Coconino Clinic Office',
        description: 'Awaiting signature of receiving registrar.',
        completed: false
      }
    ]
  },
  'OMN-9021': {
    trackingNumber: 'OMN-9021',
    sender: 'Williams Family Pharmacy',
    recipient: 'Jonathan Miller',
    origin: 'Williams, AZ 86046',
    destination: 'Flagstaff, AZ 86004',
    serviceType: 'Pharmacy Delivery',
    weight: '2.5 lbs',
    dimensions: '8 x 6 x 4 in',
    estimatedDelivery: 'Yesterday, 3:45 PM',
    currentStatus: 'delivered',
    history: [
      {
        status: 'created',
        label: 'Label Printed',
        timestamp: '2026-07-05, 9:00 AM',
        location: 'Fulfillment Center',
        description: 'Shipper loaded weight and scheduled collection.',
        completed: true
      },
      {
        status: 'picked_up',
        label: 'Collected',
        timestamp: '2026-07-05, 4:30 PM',
        location: 'Williams Hub',
        description: 'Cargo consolidated into eastward transport container.',
        completed: true
      },
      {
        status: 'in_transit',
        label: 'Line Haul Transit',
        timestamp: '2026-07-06, 6:00 AM',
        location: 'I-40 Corridor East',
        description: 'Arrived at West Flagstaff Hub.',
        completed: true
      },
      {
        status: 'out_for_delivery',
        label: 'Out for Delivery',
        timestamp: '2026-07-06, 11:15 AM',
        location: 'Central Flagstaff Hub',
        description: 'Loaded onto delivery vehicle.',
        completed: true
      },
      {
        status: 'delivered',
        label: 'Package Delivered',
        timestamp: '2026-07-06, 3:42 PM',
        location: 'Recipient Pharmacy',
        description: 'Delivered. Handed to staff. Signed by M. PENDELTON.',
        completed: true
      }
    ]
  }
};

// Quick algorithm to generate a realistic shipment for any string input to make tracking fully robust
export function generateDynamicShipment(trackingNum: string): Shipment {
  const normalizedNum = trackingNum.trim().toUpperCase();
  if (MOCK_SHIPMENTS[normalizedNum]) {
    return MOCK_SHIPMENTS[normalizedNum];
  }

  // Create a pseudo-random seed based on the string value
  let sum = 0;
  for (let i = 0; i < normalizedNum.length; i++) {
    sum += normalizedNum.charCodeAt(i);
  }

  const hash = sum % 100;
  let status: 'created' | 'picked_up' | 'in_transit' | 'out_for_delivery' | 'delivered';
  let statusLabel = '';
  let statusDesc = '';

  if (hash < 15) {
    status = 'created';
    statusLabel = 'Label Generated';
    statusDesc = 'Shipment created in shipper portal. Awaiting courier collection.';
  } else if (hash < 40) {
    status = 'picked_up';
    statusLabel = 'Shipment Collected';
    statusDesc = 'Parcel secured by regional courier. En route to sorting hub.';
  } else if (hash < 70) {
    status = 'in_transit';
    statusLabel = 'In Transit';
    statusDesc = 'Package in transit between local dispatch networks.';
  } else if (hash < 90) {
    status = 'out_for_delivery';
    statusLabel = 'Out For Delivery';
    statusDesc = 'Courier #291 is en route to destination. Delivery expected today.';
  } else {
    status = 'delivered';
    statusLabel = 'Delivered & Signed';
    statusDesc = 'Successfully delivered. Securely deposited on-site and digitally logged.';
  }

  const cities = ['Flagstaff, AZ', 'Sedona, AZ', 'Williams, AZ', 'Bellemont, AZ', 'Parks, AZ', 'Munds Park, AZ', 'Winona, AZ', 'Camp Verde, AZ'];
  const originCity = cities[sum % cities.length];
  const destCity = cities[(sum + 3) % cities.length];

  const history: Shipment['history'] = [
    {
      status: 'created',
      label: 'Shipment Registered',
      timestamp: '2026-07-07, 08:30 AM',
      location: `${originCity} Office`,
      description: 'Courier dispatch registered. Secure packaging verification complete.',
      completed: true
    }
  ];

  if (status !== 'created') {
    history.push({
      status: 'picked_up',
      label: 'Picked Up by Courier',
      timestamp: '2026-07-07, 10:15 AM',
      location: `${originCity} Courier`,
      description: 'Vetted driver picked up package from sender facility.',
      completed: true
    });
  }

  if (status === 'in_transit' || status === 'out_for_delivery' || status === 'delivered') {
    history.push({
      status: 'in_transit',
      label: 'Transit Facility Sorting',
      timestamp: '2026-07-07, 01:10 PM',
      location: 'Regional Sorting Hub',
      description: 'Sorted and scanned into climate-controlled transport container.',
      completed: true
    });
  }

  if (status === 'out_for_delivery' || status === 'delivered') {
    history.push({
      status: 'out_for_delivery',
      label: 'Out for Local Delivery',
      timestamp: '2026-07-07, 03:00 PM',
      location: `${destCity} Local Dispatch`,
      description: 'Assigned to premium localized delivery driver.',
      completed: true
    });
  }

  if (status === 'delivered') {
    history.push({
      status: 'delivered',
      label: 'Delivered',
      timestamp: '2026-07-07, 04:12 PM',
      location: destCity,
      description: 'Delivered securely to receptionist. Signed: COURIER-SAFE.',
      completed: true
    });
  } else {
    // Push the remaining uncompleted milestones
    if (status === 'created') {
      history.push({ status: 'picked_up', label: 'Picked Up', timestamp: 'Pending', location: originCity, description: 'Courier dispatch pending.', completed: false });
    }
    if (status === 'created' || status === 'picked_up') {
      history.push({ status: 'in_transit', label: 'In Transit', timestamp: 'Pending', location: 'Sorting Hub', description: 'En route to sorting facilities.', completed: false });
    }
    if (status !== 'out_for_delivery') {
      history.push({ status: 'out_for_delivery', label: 'Out for Delivery', timestamp: 'Pending', location: destCity, description: 'Local courier assignment pending.', completed: false });
    }
    history.push({ status: 'delivered', label: 'Delivered', timestamp: 'Pending', location: destCity, description: 'Delivery completion pending receipt.', completed: false });
  }

  return {
    trackingNumber: normalizedNum,
    sender: 'Client Shipper Port',
    recipient: 'Receiving Division',
    origin: `${originCity} Metropolitan`,
    destination: `${destCity} Business District`,
    serviceType: SERVICES[sum % SERVICES.length].title,
    weight: `${((sum % 150) / 10 + 1.2).toFixed(1)} lbs`,
    dimensions: `${(sum % 10) + 6} x ${(sum % 8) + 6} x ${(sum % 5) + 2} in`,
    estimatedDelivery: status === 'delivered' ? 'Yesterday' : 'Today by 6:00 PM',
    currentStatus: status,
    history
  };
}
