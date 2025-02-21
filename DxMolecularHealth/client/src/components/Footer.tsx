import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">Acerca de</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/about">
                  <a className="text-gray-500 hover:text-gray-900">Sobre Nosotros</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-gray-500 hover:text-gray-900">Contacto</a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">Servicios</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/services">
                  <a className="text-gray-500 hover:text-gray-900">Todos los Servicios</a>
                </Link>
              </li>
              <li>
                <Link href="/portal">
                  <a className="text-gray-500 hover:text-gray-900">Portal del Paciente</a>
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">Contáctenos</h3>
            <p className="mt-4 text-gray-500">
              Email: info@dxmedica.com<br />
              Phone: (555) 123-4567<br />
              Address: 123 Medical Center Dr.<br />
              City, State 12345
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-center text-gray-400">&copy; 2024 Dx Médica. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
