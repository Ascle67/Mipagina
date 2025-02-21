import Hero from "@/components/Hero";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Microscope, TestTube, FileText, Clock } from "lucide-react";

export default function Home() {
  const features = [
    {
      title: "Diagnóstico Avanzado",
      description: "Servicios de patología molecular y diagnóstico de última generación",
      icon: Microscope,
    },
    {
      title: "Medicina de Precisión",
      description: "Enfoque diagnóstico personalizado para mejores resultados de tratamiento",
      icon: TestTube,
    },
    {
      title: "Resultados en Línea",
      description: "Acceso seguro a resultados a través de nuestro portal de pacientes",
      icon: FileText,
    },
    {
      title: "Resultados Rápidos",
      description: "Resultados confiables cuando más los necesita",
      icon: Clock,
    },
  ];

  return (
    <div>
      <Hero />

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Nuestros Servicios
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              Soluciones diagnósticas integrales para proveedores de salud y pacientes
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => (
                <Card key={feature.title}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <feature.icon className="h-6 w-6 text-primary" />
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}