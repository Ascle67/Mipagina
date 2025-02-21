import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FileText, Calendar } from "lucide-react";
import type { TestResult } from "@shared/schema";
import { format } from "date-fns";

export default function Portal() {
  const [patientId, setPatientId] = useState("");
  const [searchId, setSearchId] = useState("");

  const { data: results, isLoading } = useQuery<TestResult[]>({
    queryKey: ["/api/results", searchId],
    enabled: !!searchId,
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchId(patientId);
  };

  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900">Portal del Paciente</h1>
          <p className="mt-4 text-xl text-gray-500">
            Acceda a sus resultados de forma segura en línea
          </p>
        </div>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <form onSubmit={handleSearch} className="flex gap-4">
              <Input
                value={patientId}
                onChange={(e) => setPatientId(e.target.value)}
                placeholder="Ingrese su ID de Paciente"
                className="flex-grow"
              />
              <Button type="submit">Ver Resultados</Button>
            </form>
          </CardContent>
        </Card>

        {searchId && (
          <div className="space-y-6">
            {isLoading ? (
              <Card>
                <CardContent className="p-6">Cargando resultados...</CardContent>
              </Card>
            ) : results?.length ? (
              results.map((result) => (
                <Card key={result.id} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="h-5 w-5" />
                      {result.testType}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Fecha</p>
                        <p className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          {format(new Date(result.resultDate), "d 'de' MMMM, yyyy")}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Estado</p>
                        <p className="capitalize">{result.status}</p>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      className="mt-4"
                      onClick={() => window.open(result.pdfUrl, "_blank")}
                    >
                      Ver Informe
                    </Button>
                  </CardContent>
                </Card>
              ))
            ) : (
              <Card>
                <CardContent className="p-6 text-center text-gray-500">
                  No se encontraron resultados para este ID de Paciente
                </CardContent>
              </Card>
            )}
          </div>
        )}
      </div>
    </div>
  );
}