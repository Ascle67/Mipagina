import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Search } from "lucide-react";

const studies = [
  // Anatomía Patológica
  { 
    category: "Anatomía Patológica", 
    name: "Biopsia por congelación",
    description: "Examen rápido de tejido durante la cirugía para determinar la presencia de células cancerosas y guiar la extensión de la cirugía."
  },
  { 
    category: "Anatomía Patológica", 
    name: "Biopsia convencional",
    description: "Estudio detallado del tejido para diagnosticar cáncer, determinar el tipo y grado del tumor."
  },
  { 
    category: "Anatomía Patológica", 
    name: "Citología",
    description: "Análisis de células individuales para detectar cambios precancerosos o malignos."
  },
  { 
    category: "Anatomía Patológica", 
    name: "Autopsia",
    description: "Examen completo del cuerpo después de la muerte para determinar la causa y manera de muerte."
  },

  // Inmunohistoquímica
  { 
    category: "Inmunohistoquímica", 
    name: "Ki-67",
    description: "Marcador de proliferación celular que ayuda a determinar la agresividad del tumor y su pronóstico."
  },
  { 
    category: "Inmunohistoquímica", 
    name: "HER2",
    description: "Proteína que puede estar sobreexpresada en algunos cánceres de mama. Su presencia determina el uso de terapias dirigidas."
  },
  { 
    category: "Inmunohistoquímica", 
    name: "Receptores hormonales (RE/RP)",
    description: "Determina si el tumor responde a hormonas, lo que influye en la elección del tratamiento hormonal."
  },
  { 
    category: "Inmunohistoquímica", 
    name: "PD-L1",
    description: "Biomarcador que predice la respuesta a la inmunoterapia en diversos tipos de cáncer."
  },
  { 
    category: "Inmunohistoquímica", 
    name: "ALK",
    description: "Marcador importante en cáncer de pulmón que determina la elegibilidad para terapias dirigidas específicas."
  },
  { 
    category: "Inmunohistoquímica", 
    name: "CD20",
    description: "Marcador de células B, útil en el diagnóstico y pronóstico de linfomas."
  },
  { 
    category: "Inmunohistoquímica", 
    name: "CD3",
    description: "Marcador de células T, importante en el diagnóstico de linfomas y otras enfermedades."
  },

  // Biología Molecular
  { 
    category: "Biología Molecular", 
    name: "EGFR",
    description: "Mutaciones que pueden determinar la respuesta a terapias dirigidas en cáncer de pulmón."
  },
  { 
    category: "Biología Molecular", 
    name: "BRAF",
    description: "Mutación común en melanoma y otros cánceres que permite el uso de terapias dirigidas específicas."
  },
  { 
    category: "Biología Molecular", 
    name: "KRAS",
    description: "Gen frecuentemente mutado en cáncer colorrectal que influye en la selección del tratamiento."
  },
  { 
    category: "Biología Molecular", 
    name: "NRAS",
    description: "Mutación relevante en melanoma y leucemias que ayuda a determinar opciones de tratamiento específicas."
  },
  { 
    category: "Biología Molecular", 
    name: "PCR para HPV",
    description: "Detecta la presencia de virus del papiloma humano, factor de riesgo para cáncer cervical."
  },
  { 
    category: "Biología Molecular", 
    name: "Secuenciación NGS",
    description: "Análisis genómico completo que identifica múltiples mutaciones para personalizar el tratamiento."
  },
  { 
    category: "Biología Molecular", 
    name: "MSI (Inestabilidad Microsatelital)",
    description: "Biomarcador predictivo de respuesta a inmunoterapia en diversos tipos de cáncer."
  },
];

export default function SearchStudies() {
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleStudies, setVisibleStudies] = useState(studies);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    const filtered = studies.filter(study => 
      study.name.toLowerCase().includes(term.toLowerCase()) ||
      study.category.toLowerCase().includes(term.toLowerCase()) ||
      study.description.toLowerCase().includes(term.toLowerCase())
    );
    setVisibleStudies(filtered);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="relative mb-6">
        <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
        <Input
          type="text"
          placeholder="Buscar estudios (ej: biopsia, Ki-67, EGFR...)"
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          className="pl-10 py-6"
        />
      </div>

      {visibleStudies.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {visibleStudies.map((study, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <p className="text-sm text-primary mb-1">{study.category}</p>
                <h3 className="font-medium mb-2">{study.name}</h3>
                <p className="text-sm text-gray-600">{study.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">
          No se encontraron estudios que coincidan con su búsqueda
        </p>
      )}
    </div>
  );
}