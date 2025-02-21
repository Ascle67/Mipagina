import { Card, CardContent } from "@/components/ui/card";
import { Dna, Microscope, TestTube, Brain } from "lucide-react";

export default function MolecularPathology() {
  const features = [
    {
      title: "Diagnóstico Molecular",
      description: "Identificación precisa de alteraciones genéticas y moleculares para personalizar el tratamiento.",
      icon: Dna,
    },
    {
      title: "Biomarcadores Predictivos",
      description: "Análisis de marcadores moleculares para predecir la respuesta a terapias específicas.",
      icon: TestTube,
    },
    {
      title: "Monitoreo de la Enfermedad",
      description: "Seguimiento molecular de la progresión de la enfermedad y respuesta al tratamiento.",
      icon: Microscope,
    },
    {
      title: "Medicina Personalizada",
      description: "Adaptación del tratamiento basado en el perfil molecular único de cada paciente.",
      icon: Brain,
    },
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900">Patología Molecular</h1>
          <p className="mt-4 text-xl text-gray-500">
            Tecnología de vanguardia para diagnósticos precisos y tratamientos personalizados
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Tecnología Avanzada en Diagnóstico Molecular
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Nuestro laboratorio utiliza las técnicas más avanzadas en patología molecular para 
              proporcionar diagnósticos precisos y orientar tratamientos personalizados. Combinamos 
              experiencia clínica con tecnología de última generación para ofrecer resultados 
              confiables y oportunos.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Beneficios de la Patología Molecular
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Diagnóstico preciso de enfermedades genéticas y moleculares
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Identificación de alteraciones genéticas específicas
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Selección optimizada de tratamientos dirigidos
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Monitoreo efectivo de la respuesta al tratamiento
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
            Aplicaciones Clínicas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Oncología</h3>
              <p className="text-gray-600">
                Identificación de mutaciones específicas para selección de terapias dirigidas,
                pronóstico y monitoreo de la enfermedad residual mínima.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Enfermedades Hereditarias</h3>
              <p className="text-gray-600">
                Diagnóstico molecular de síndromes genéticos y evaluación de riesgo familiar
                para enfermedades hereditarias.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Enfermedades Infecciosas</h3>
              <p className="text-gray-600">
                Detección y caracterización de patógenos mediante técnicas moleculares avanzadas
                para un diagnóstico rápido y preciso.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Farmacogenética</h3>
              <p className="text-gray-600">
                Análisis de variantes genéticas que influyen en la respuesta a medicamentos
                para optimizar la selección y dosificación del tratamiento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}