export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-lg font-bold mb-4">Contacto</h3>
            <p>123 Calle Peluquería</p>
            <p>Ciudad, País</p>
            <p>Teléfono: (123) 456-7890</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Horarios</h3>
            <p>Lunes - Viernes: 9am - 8pm</p>
            <p>Sábado: 9am - 6pm</p>
            <p>Domingo: Cerrado</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              {/* Social media links will be added later */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}