import { Service, Barber } from '@/models/common';

// Mock data - replace with actual API calls
const mockServices: Service[] = [
  { id: '1', name: 'Classic Haircut', description: 'A timeless, classic haircut.', duration: 45, price: 40, imageUrl: '/path/to/classic-haircut.jpg' },
  { id: '2', name: 'Beard Trim', description: 'Shape and trim your beard to perfection.', duration: 30, price: 25, imageUrl: '/path/to/beard-trim.jpg' },
  { id: '3', name: 'Hot Towel Shave', description: 'A luxurious hot towel shave experience.', duration: 45, price: 45, imageUrl: '/path/to/hot-towel-shave.jpg' },
];

const mockBarbers: Barber[] = [
  { id: '1', name: 'John Doe', specialty: 'Classic Cuts', bio: 'John has been a barber for over 10 years.', imageUrl: '/path/to/john.jpg', availability: {} },
  { id: '2', name: 'Jane Smith', specialty: 'Modern Styles', bio: 'Jane specializes in modern and trendy haircuts.', imageUrl: '/path/to/jane.jpg', availability: {} },
  { id: '3', name: 'Sam Brown', specialty: 'Fades and Shaves', bio: 'Sam is an expert in fades and hot towel shaves.', imageUrl: '/path/to/sam.jpg', availability: {} },
];

export const getServices = (): Promise<Service[]> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(mockServices);
    }, 500);
  });
};

export const getBarbers = (): Promise<Barber[]> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(mockBarbers);
    }, 500);
  });
};
