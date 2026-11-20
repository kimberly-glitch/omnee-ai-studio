import { ServiceDetail, Testimonial, TeamMember, Shipment } from './types';

export const SERVICES: ServiceDetail[] = [
  {
    id: 'veterinary-routes',
    title: 'Veterinary Diagnostic Routes',
    subtitle: 'Scheduled Sweeps & Reference Lab Connections',
    shortDesc: 'Scheduled sweeps and routine pickups timed around animal hospital, clinic, and diagnostic lab cutoffs. Temperature-controlled transport (ambient, refrigerated, frozen) for blood chemistry, urine profiles, cytology, and biopsy jars to meet IDEXX, Antech, and regional lab cutoffs.',
    fullDesc: 'Scheduled sweeps and routine pickups timed around animal hospital, clinic, and diagnostic lab cutoffs. Temperature-controlled transport (ambient, refrigerated, frozen) for blood chemistry, urine profiles, cytology, and biopsy jars to meet IDEXX, Antech, and regional lab cutoffs.',
    iconName: 'Activity',
    features: [
      'Custom-scheduled sweeps & routine pickups around lab cutoffs',
      'Temperature-controlled transport (ambient, refrigerated, frozen)',
      'IDEXX, Antech & regional reference lab cutoff adherence',
      'Blood chemistry, urine profiles, cytology & biopsy jars'
    ],
    basePrice: 35.00,
    perMileRate: 1.50,
    deliveryTime: 'Scheduled Sweeps',
    priceTag: 'Starting at $35.00 / Sweep • Recurring Route Discounts Available',
    buttonText: 'Request Route Setup'
  },
  {
    id: 'medical-specimen',
    title: 'Medical Specimen Transport',
    subtitle: 'Temperature-Monitored Clinical Transport',
    shortDesc: 'Scheduled clinic pickups and local clinical routing for blood vials, urine specimens, and Category B diagnostic materials—with 24/7 STAT & on-demand support available when urgent needs arise. Fully HIPAA and OSHA compliant with a locked chain of custody.',
    fullDesc: 'Scheduled clinic pickups and local clinical routing for blood vials, urine specimens, and Category B diagnostic materials—with 24/7 STAT & on-demand support available when urgent needs arise. Fully HIPAA and OSHA compliant with a locked chain of custody.',
    iconName: 'ShieldAlert',
    features: [
      'Scheduled routine pickups with 24/7 STAT & on-demand availability',
      'Reliable transport connecting local clinics and reference labs',
      'Category B diagnostic material handling with locked chain of custody',
      'OSHA and HIPAA certified compliance with temperature logging'
    ],
    basePrice: 45.00,
    perMileRate: 1.85,
    deliveryTime: 'Scheduled Pickups',
    priceTag: 'Starting at $45.00 Base • Tiered Mileage',
    buttonText: 'Request Route Setup'
  },
  {
    id: 'stat-emergency',
    title: 'STAT Emergency Dispatches',
    subtitle: '24/7 Drop-Everything Priority Logistics',
    shortDesc: 'Open 24/7 for immediate, drop-everything STAT & on-demand priority dispatches. Bypasses standard routing for urgent, life-critical diagnostic and clinical logistics.',
    fullDesc: 'Open 24/7 for immediate, drop-everything STAT & on-demand priority dispatches. Bypasses standard routing for urgent, life-critical diagnostic and clinical logistics.',
    iconName: 'Zap',
    features: [
      'Open 24/7 for STAT & on-demand emergency dispatches',
      'Immediate drop-everything priority response & direct dedicated courier',
      'Direct Dispatch Desk: 928-547-1058 or Info@omneecourier.com',
      'Bypasses standard routing for rapid time-critical delivery'
    ],
    basePrice: 0.00,
    perMileRate: 0.00,
    deliveryTime: 'Open 24/7 • STAT & On-Demand',
    priceTag: 'Contact Dispatch for Priority STAT Rates',
    buttonText: 'Request STAT Dispatch'
  },
  {
    id: 'legal-custody',
    title: 'Confidential Legal & Chain-of-Custody Courier',
    subtitle: 'Locked Security & Direct Document Transport',
    shortDesc: 'Secure, time-sensitive transport for legal filings, court documents, contracts, and confidential business records across Northern Arizona. Equipped with dedicated locked security compartments and lockboxes to maintain strict chain-of-custody and privacy from pickup to signature confirmation.',
    fullDesc: 'Secure, time-sensitive transport for legal filings, court documents, contracts, and confidential business records across Northern Arizona. Equipped with dedicated locked security compartments and lockboxes to maintain strict chain-of-custody and privacy from pickup to signature confirmation.',
    iconName: 'Lock',
    features: [
      'Locked Security Compartments',
      'Direct Point-to-Point Transport',
      'Digital Signature & Chain-of-Custody'
    ],
    basePrice: 45.00,
    perMileRate: 1.85,
    deliveryTime: 'Direct Point-to-Point',
    priceTag: 'Contact Dispatch for Legal & Custody Rates',
    buttonText: 'Request Legal Dispatch'
  }
];

export const TESTIMONIALS: Testimonial[] = [];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'm1',
    name: 'Clinical Integrity Leadership',
    role: 'Certified Medical Assistants',
    bio: 'Certified Medical Assistants with deep expertise in medical administration and clinical urgency, focused on regulatory compliance, safe handling, and clinical care standards to ensure every Omnee protocol meets the highest clinical standards.',
    imageSeed: 'executive_clinical'
  },
  {
    id: 'm2',
    name: 'Operations & Fleet Leadership',
    role: 'Technical Operations Professionals',
    bio: 'Technical operations professionals focused on vehicle readiness, maintaining our 4WD capabilities to eliminate weather downtime, and directly coordinating local routes and urgent STAT dispatches.',
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
        timestamp: 'Today, 1:15 PM',
        location: 'Flagstaff Hub',
        description: 'Electronic billing info received, label printed.',
        completed: true
      },
      {
        status: 'picked_up',
        label: 'Picked Up by Courier',
        timestamp: 'Today, 2:00 PM',
        location: 'Client Facility',
        description: 'Package secured and logged by Courier #402. Temp check normal (4°C).',
        completed: true
      },
      {
        status: 'in_transit',
        label: 'In Transit',
        timestamp: 'Today, 3:30 PM',
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
        timestamp: 'Today, 11:30 AM',
        location: 'Sedona Hub',
        description: 'Courier route scheduled, high-priority flag active.',
        completed: true
      },
      {
        status: 'picked_up',
        label: 'Picked Up',
        timestamp: 'Today, 12:10 PM',
        location: 'Sedona Facility',
        description: 'Document sealed in tamper-proof package. Picked up by Courier #108.',
        completed: true
      },
      {
        status: 'in_transit',
        label: 'In Transit',
        timestamp: 'Today, 1:40 PM',
        location: 'I-17 Northbound Node',
        description: 'Consolidated with regional express routes.',
        completed: true
      },
      {
        status: 'out_for_delivery',
        label: 'Out for Delivery',
        timestamp: 'Today, 3:10 PM',
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
        timestamp: 'Yesterday, 9:00 AM',
        location: 'Fulfillment Center',
        description: 'Shipper loaded weight and scheduled collection.',
        completed: true
      },
      {
        status: 'picked_up',
        label: 'Collected',
        timestamp: 'Yesterday, 11:30 AM',
        location: 'Williams Hub',
        description: 'Cargo consolidated into eastward transport container.',
        completed: true
      },
      {
        status: 'in_transit',
        label: 'Line Haul Transit',
        timestamp: 'Yesterday, 1:00 PM',
        location: 'I-40 Corridor East',
        description: 'Arrived at West Flagstaff Hub.',
        completed: true
      },
      {
        status: 'out_for_delivery',
        label: 'Out for Delivery',
        timestamp: 'Yesterday, 2:15 PM',
        location: 'Central Flagstaff Hub',
        description: 'Loaded onto delivery vehicle.',
        completed: true
      },
      {
        status: 'delivered',
        label: 'Package Delivered',
        timestamp: 'Yesterday, 3:42 PM',
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
      timestamp: 'Today, 08:30 AM',
      location: `${originCity} Office`,
      description: 'Courier dispatch registered. Secure packaging verification complete.',
      completed: true
    }
  ];

  if (status !== 'created') {
    history.push({
      status: 'picked_up',
      label: 'Picked Up by Courier',
      timestamp: 'Today, 10:15 AM',
      location: `${originCity} Courier`,
      description: 'Vetted driver picked up package from sender facility.',
      completed: true
    });
  }

  if (status === 'in_transit' || status === 'out_for_delivery' || status === 'delivered') {
    history.push({
      status: 'in_transit',
      label: 'Transit Facility Sorting',
      timestamp: 'Today, 01:10 PM',
      location: 'Regional Sorting Hub',
      description: 'Sorted and scanned into climate-controlled transport container.',
      completed: true
    });
  }

  if (status === 'out_for_delivery' || status === 'delivered') {
    history.push({
      status: 'out_for_delivery',
      label: 'Out for Local Delivery',
      timestamp: 'Today, 03:00 PM',
      location: `${destCity} Local Dispatch`,
      description: 'Assigned to premium localized delivery driver.',
      completed: true
    });
  }

  if (status === 'delivered') {
    history.push({
      status: 'delivered',
      label: 'Delivered',
      timestamp: 'Today, 04:12 PM',
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
