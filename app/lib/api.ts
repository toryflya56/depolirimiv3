import { Service, Barber } from '@/models/common';

// Mock data - replace with actual API calls
const mockServices: Service[] = [
  { id: '1', name: 'Classic Haircut', duration: 45, price: 40 },
  { id: '2', name: 'Beard Trim', duration: 30, price: 25 },
  { id: '3', name: 'Hot Towel Shave', duration: 45, price: 45 },
];

const mockBarbers: Barber[] = [
  { id: '1', name: 'John Doe', imageUrl: '/path/to/john.jpg' },
  { id: '2', name: 'Jane Smith', imageUrl: '/path/to/jane.jpg' },
  { id: '3', name: 'Sam Brown', imageUrl: '/path/to/sam.jpg' },
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
