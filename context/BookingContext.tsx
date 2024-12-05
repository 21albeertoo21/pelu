'use client';

import { createContext, ReactNode } from 'react';

interface BookingContextType {
  selectedDate: Date | undefined;
  onDateSelect: (date: Date | undefined) => void;
}

export const BookingContext = createContext<BookingContextType>({
  selectedDate: undefined,
  onDateSelect: () => {},
});

export function BookingProvider({ children }: { children: ReactNode }) {
  return (
    <BookingContext.Provider value={{
      selectedDate: undefined,
      onDateSelect: () => {},
    }}>
      {children}
    </BookingContext.Provider>
  );
} 