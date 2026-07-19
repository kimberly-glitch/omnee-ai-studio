export interface TrackingStatus {
  status: 'created' | 'picked_up' | 'in_transit' | 'out_for_delivery' | 'delivered';
  label: string;
  timestamp: string;
  location: string;
  description: string;
  completed: boolean;
}

export interface Shipment {
  trackingNumber: string;
  sender: string;
  recipient: string;
  origin: string;
  destination: string;
  serviceType: string;
  weight: string;
  dimensions: string;
  estimatedDelivery: string;
  currentStatus: 'created' | 'picked_up' | 'in_transit' | 'out_for_delivery' | 'delivered';
  history: TrackingStatus[];
}

export interface ServiceDetail {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  features: string[];
  basePrice: number;
  perMileRate: number;
  deliveryTime: string;
}

export interface QuoteRequest {
  originZip: string;
  destinationZip: string;
  weightLbs: number;
  serviceId: string;
  specialInstructions?: string;
  companyName?: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
}

export interface SavedQuote extends QuoteRequest {
  id: string;
  quoteDate: string;
  estimatedCost: number;
  estimatedDays: string;
  status: 'pending' | 'booked' | 'expired';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  imageSeed: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageSeed: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
  phone?: string;
  isQuoteInquiry?: boolean;
}
