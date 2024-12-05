'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Scissors, Palette, Sparkles } from 'lucide-react';

const services = [
  {
    icon: <Scissors className="w-8 h-8" />,
    title: "Corte y Peinado",
    description: "Cortes personalizados y peinados para todas las ocasiones",
    price: "Desde 25€"
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Coloración",
    description: "Tintes, mechas y técnicas de color innovadoras",
    price: "Desde 45€"
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "Tratamientos",
    description: "Tratamientos capilares para revitalizar tu cabello",
    price: "Desde 35€"
  }
];

export default function ServicesPage() {
  return (
    <main className="flex-grow py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">Nuestros Servicios</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ofrecemos una amplia gama de servicios de peluquería para ayudarte a lucir y sentirte mejor
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="p-6 h-full flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>
                <p className="text-lg font-semibold">{service.price}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}