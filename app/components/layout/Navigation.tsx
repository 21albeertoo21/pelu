'use client';

import Link from 'next/link';

export default function Navigation() {
  return (
    <nav>
      <ul className="flex space-x-6">
        <li><Link href="/" className="hover:text-gray-600">Home</Link></li>
        <li><Link href="/services" className="hover:text-gray-600">Servicios</Link></li>
        <li><Link href="/booking" className="hover:text-gray-600">Haz tu reserva</Link></li>
        <li><Link href="/contact" className="hover:text-gray-600">Contacto</Link></li>
      </ul>
    </nav>
  );
}