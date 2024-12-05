'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Scissors, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
            alt="Salon interior"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            {...fadeIn}
          >
            Tu belleza, nuestra pasión
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-gray-200"
            {...fadeIn}
            transition={{ delay: 0.2 }}
          >
            Expertos en crear el estilo perfecto que refleje tu personalidad
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            {...fadeIn}
            transition={{ delay: 0.4 }}
          >
            <Button size="lg" className="bg-white text-black hover:bg-gray-100">
              <Link href="/booking" className="hover:text-gray-600">
                Haz tu reserva
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            ¿Por qué elegirnos?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="flex flex-col items-center text-center p-6 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-black text-white py-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
            alt="Salon background"
            fill
            className="object-cover brightness-50"
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Transforma tu imagen hoy
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Nuestro equipo de expertos está listo para ayudarte a lograr el look que siempre has soñado
          </p>
          <Button size="lg" className="bg-white text-black hover:bg-gray-100">
            <Link href="/booking" className="hover:text-gray-600">
              Reserva tu cita
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}

const features = [
  {
    title: "Experiencia Premium",
    description: "Más de una década transformando estilos con los más altos estándares de calidad",
    icon: <Star className="w-8 h-8" />
  },
  {
    title: "Reservas Flexibles",
    description: "Sistema de reservas online 24/7 para tu comodidad",
    icon: <Calendar className="w-8 h-8" />
  },
  {
    title: "Atención Personalizada",
    description: "Cada cliente es único, y así es como tratamos tu estilo",
    icon: <Scissors className="w-8 h-8" />
  }
];