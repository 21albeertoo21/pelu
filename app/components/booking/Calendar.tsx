'use client';

import { useState, useContext } from 'react';
import { Calendar as CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

interface CalendarProps {
  selectedDate: Date | undefined;
  onDateSelect: (date: Date | undefined) => void;
}

export function Calendar({ selectedDate, onDateSelect }: CalendarProps) {
  const [date, setDate] = useState<Date | undefined>(selectedDate);

  const handleDateSelect = (newDate: Date | undefined) => {
    setDate(newDate);
    onDateSelect(newDate);
  };

  return (
    <div className="flex flex-col space-y-4">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              'w-full justify-start text-left font-normal',
              !date && 'text-muted-foreground'
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? format(date, 'PPP', { locale: es }) : <span>Selecciona una fecha</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <CalendarComponent
            mode="single"
            selected={date}
            onSelect={handleDateSelect}
            initialFocus
            disabled={(date) => {
              // Deshabilitar fechas pasadas y domingos
              const today = new Date();
              today.setHours(0, 0, 0, 0);
              return date < today || date.getDay() === 0;
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}