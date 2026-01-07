import { Service } from '../../types';

export const SERVICES: Service[] = [
  {
    id: 'svc_executive_cut',
    title: 'The Executive Cut',
    description: 'Precision scissor cut tailored to your head shape, finished with a hot towel styling and neck shave.',
    price: 55,
    currency: 'USD',
    durationMin: 45,
    // Real Barber Image: Barber cutting hair with focus
    image: 'https://images.unsplash.com/photo-1585747833206-ec47d676f441?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'svc_royal_shave',
    title: 'Royal Shave',
    description: 'Traditional straight razor shave with pre-shave oil, hot foam, and a relaxing cold towel finish.',
    price: 45,
    currency: 'USD',
    durationMin: 30,
    // Real Barber Image: Hot towel/Shave setup
    image: 'https://images.unsplash.com/photo-1503951914205-b27cf1254fd9?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'svc_beard_sculpt',
    title: 'Beard Sculpting',
    description: 'Detailed beard trimming and shaping, including line-up, oil treatment, and mustache styling.',
    price: 35,
    currency: 'USD',
    durationMin: 30,
    // Real Barber Image: Beard grooming
    image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'svc_signature_package',
    title: 'The Signature',
    description: 'The ultimate experience. Executive Cut + Royal Shave + Facial Massage. Rejuvenate your look.',
    price: 90,
    currency: 'USD',
    durationMin: 75,
    // Real Barber Image: Luxury chair/environment
    image: 'https://images.unsplash.com/photo-1599351431202-6e0c051dd6a3?auto=format&fit=crop&q=80&w=800'
  }
];
