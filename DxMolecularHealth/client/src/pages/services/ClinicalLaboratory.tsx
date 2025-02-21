import { Card, CardContent } from "@/components/ui/card";
import { TestTube, Microscope, Beaker, HeartPulse } from "lucide-react";

export default function ClinicalLaboratory() {
  const features = [
    {
      title: "Análisis de Sangre",
      description: "Pruebas completas de sangre para evaluar la salud general y detectar condiciones específicas.",
      icon: TestTube,
    },
    {
      title: "Análisis de Orina",
      description: "Evaluación de la función renal y detección de alteraciones metabólicas y otras condiciones.",
      icon: Beaker,
    },
    {
      title: "Pruebas Especializadas",
      description: "Análisis específicos para condiciones médicas complejas y seguimiento de tratamientos.",
      icon: Microscope,
    },
    {
      title: "Monitoreo de Salud",
      description: "Seguimiento periódico de marcadores de salud para prevención y control de enfermedades.",
      icon: HeartPulse,
    },
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900">Laboratorio Clínico</h1>
          <p className="mt-4 text-xl text-gray-500">
            Análisis precisos y confiables para el diagnóstico y seguimiento de su salud
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Servicios Integrales de Laboratorio
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Nuestro laboratorio clínico ofrece una amplia gama de pruebas diagnósticas
              utilizando tecnología de última generación y siguiendo los más altos
              estándares de calidad. Nuestro equipo de profesionales garantiza
              resultados precisos y oportunos para apoyar las decisiones médicas.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Beneficios de Nuestro Servicio
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Resultados rápidos y precisos
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Tecnología de última generación
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Personal altamente capacitado
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Acceso en línea a resultados
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {features.map((feature) => (
              <Card key={feature.title} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <feature.icon className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Áreas de Especialización
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Química Clínica</h3>
              <p className="text-gray-600">
                Análisis de metabolitos, electrolitos, enzimas y otros componentes
                químicos en sangre y otros fluidos corporales.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Hematología</h3>
              <p className="text-gray-600">
                Estudio completo de células sanguíneas y trastornos de la coagulación
                para diagnóstico y seguimiento de condiciones hematológicas.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Inmunología</h3>
              <p className="text-gray-600">
                Evaluación del sistema inmune y diagnóstico de enfermedades
                autoinmunes, alergias y otras condiciones inmunológicas.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Microbiología</h3>
              <p className="text-gray-600">
                Identificación de microorganismos causantes de infecciones y
                determinación de sensibilidad a antibióticos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
