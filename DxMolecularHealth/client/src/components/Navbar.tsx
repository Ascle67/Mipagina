import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Beaker } from "lucide-react"; // Replaced Flask with Beaker

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <a className="flex items-center">
                <span className="text-2xl font-bold text-primary">Dx Médica</span>
              </a>
            </Link>
          </div>

          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <Link href="/services" className="text-gray-700 hover:text-primary"> {/* Removed nested <a> */}
              Servicios
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-primary"> {/* Removed nested <a> */}
              Blog
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary"> {/* Removed nested <a> */}
              Contacto
            </Link>
            <Link href="/portal">
              <Button variant="outline">Portal del Paciente</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}