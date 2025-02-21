import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Microscope, TestTube, Dna, Briefcase, Clipboard, Brain } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import SearchStudies from "@/components/SearchStudies";

export default function Services() {
  const services = [
    {
      title: "Patología Molecular",
      description: "Pruebas moleculares avanzadas para diagnóstico preciso de enfermedades y planificación de tratamientos personalizados.",
      icon: Dna,
      link: "/services/molecular-pathology",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Laboratorio Clínico",
      description: "Servicios completos de análisis incluyendo estudios de sangre, orina y pruebas diagnósticas especializadas.",
      icon: TestTube,
      link: "/services/clinical-laboratory",
      image: "https://images.unsplash.com/photo-1579165466741-7f35e4755660?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Anatomía Patológica",
      description: "Análisis experto de muestras de tejido para diagnóstico de enfermedades y detección de cáncer.",
      icon: Microscope,
      link: "/services/anatomic-pathology",
      image: "https://images.unsplash.com/photo-1581093583449-8255a7d46e66?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Diagnóstico de Cáncer",
      description: "Pruebas especializadas para diagnóstico, estadificación y monitoreo del tratamiento del cáncer.",
      icon: Clipboard,
      link: "/services/cancer-diagnostics",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Medicina de Precisión",
      description: "Enfoques diagnósticos personalizados basados en perfiles genéticos y moleculares.",
      icon: Brain,
      link: "/services/precision-medicine",
      image: "https://images.unsplash.com/photo-1576671081837-49000212a370?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Servicios Corporativos",
      description: "Soluciones diagnósticas adaptadas para proveedores de salud e instituciones.",
      icon: Briefcase,
      link: "/services/corporate-services",
      image: "https://images.unsplash.com/photo-1576093776525-f9d0486c3332?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
  ];

  return (
    <div>
      {/* Hero Section con imagen de fondo */}
      <div 
        className="relative py-24 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900">Nuestros Servicios</h1>
            <p className="mt-4 text-xl text-gray-500">
              Soluciones diagnósticas integrales impulsadas por tecnología de vanguardia
            </p>
          </div>
        </div>
      </div>

      {/* Servicios Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link key={service.title} href={service.link}>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer overflow-hidden">
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{
                    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), url(${service.image})`,
                  }}
                />
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <service.icon className="h-6 w-6 text-primary" />
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 mb-4">{service.description}</p>
                  <Button variant="outline" className="w-full">
                    Ver más detalles
                  </Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Catálogo de Estudios */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Catálogo de Estudios</h2>
            <p className="mt-4 text-xl text-gray-500">
              Busque entre nuestra amplia gama de pruebas diagnósticas
            </p>
          </div>
          <SearchStudies />
        </div>

        {/* Control de Calidad con imagen */}
        <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-8 bg-gray-50 rounded-lg p-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Control de Calidad
            </h2>
            <p className="text-gray-600">
              Nuestro laboratorio mantiene los más altos estándares de calidad y precisión. 
              Estamos completamente acreditados y cumplimos con todos los requisitos 
              regulatorios pertinentes. Nuestro equipo de profesionales experimentados 
              garantiza resultados confiables y un servicio excepcional.
            </p>
          </div>
          <div 
            className="h-64 bg-cover bg-center rounded-lg"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1581093458791-4b041a98425f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')`,
            }}
          />
        </div>
      </div>
    </div>
  );
}