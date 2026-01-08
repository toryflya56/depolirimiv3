import type React from 'react';
import { createContext, useContext, useState, useMemo } from 'react';
import { type Service, type Barber } from '@/models/common';

interface BookingState {
  service: Service | null;
  barber: Barber | null;
  dateTime: Date | null;
}

interface BookingContextType {
  booking: BookingState;
  setService: (service: Service | null) => void;
  setBarber: (barber: Barber | null) => void;
  setDateTime: (dateTime: Date | null) => void;
  resetBooking: () => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [booking, setBooking] = useState<BookingState>({
    service: null,
    barber: null,
    dateTime: null,
  });

  const setService = (service: Service | null) => setBooking((prev) => ({ ...prev, service }));
  const setBarber = (barber: Barber | null) => setBooking((prev) => ({ ...prev, barber }));
  const setDateTime = (dateTime: Date | null) => setBooking((prev) => ({ ...prev, dateTime }));
  const resetBooking = () => setBooking({ service: null, barber: null, dateTime: null });

  const contextValue = useMemo(
    () => ({
      booking,
      setService,
      setBarber,
      setDateTime,
      resetBooking,
    }),
    [booking]
  );

  return <BookingContext.Provider value={contextValue}>{children}</BookingContext.Provider>;
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (context === undefined) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};
