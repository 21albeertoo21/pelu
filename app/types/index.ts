export interface Booking {
  id: string;
  date: Date;
  service: string;
  clientName: string;
  clientEmail: string;
  status: 'pending' | 'confirmed' | 'cancelled';
}

export interface Service {
  id: string;
  name: string;
  description: string;
  duration: number;
  price: number;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}