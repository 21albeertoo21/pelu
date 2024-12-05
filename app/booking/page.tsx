'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { BookingForm } from '../components/booking/BookingForm';
import { Calendar } from '../components/booking/Calendar';

export default function BookingPage() {
  const [selectedDate, setSelectedDate] = useState<Date>();

  return (
    <div className="min-h-screen flex flex-col relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <main className="flex-grow relative z-10 mt-16">
          <div className="container mx-auto px-4 py-8">
          <div className="flex justify-center">
            <h1 className="text-4xl font-bold mb-10">Reserva tu cita</h1>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
              <BookingForm />
            </div>
            </div>
          </div>
        </main>
      </motion.div>
    </div>
  );
}