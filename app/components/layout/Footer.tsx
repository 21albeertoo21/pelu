export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-7">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-2 gap-8 text-center">
          <div>
            <h3 className="text-lg font-bold mb-3">Horarios</h3>
            <div className="text-sm">
              <p>Lunes - Viernes: 9am - 8pm</p>
              <p>Sábado: 9am - 6pm</p>
              <p>Domingo: Cerrado</p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Síguenos</h3>
            <div className="flex space-x-4">
              {/* Social media links will be added later */}
            </div>
          </div>
        </div>
        
        {/* Copyright section */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Peluquería Cristina Andrés. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}