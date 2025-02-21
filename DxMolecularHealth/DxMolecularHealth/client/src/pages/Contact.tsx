import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { insertContactMessageSchema } from "@shared/schema";
import type { InsertContactMessage } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      createdAt: new Date(),
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertContactMessage) => {
      await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Mensaje enviado",
        description: "Nos pondremos en contacto con usted lo antes posible.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Error",
        description: "No se pudo enviar el mensaje. Por favor, inténtelo de nuevo.",
        variant: "destructive",
      });
    },
  });

  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900">Contáctenos</h1>
          <p className="mt-4 text-xl text-gray-500">
            Comuníquese con nuestro equipo de profesionales médicos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Información de Contacto</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Dirección</h3>
                  <p className="text-gray-600">
                    123 Medical Center Dr.<br />
                    Ciudad, Estado 12345
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold">Teléfono</h3>
                  <p className="text-gray-600">(555) 123-4567</p>
                </div>
                <div>
                  <h3 className="font-semibold">Correo Electrónico</h3>
                  <p className="text-gray-600">info@dxmedica.com</p>
                </div>
                <div>
                  <h3 className="font-semibold">Horario</h3>
                  <p className="text-gray-600">
                    Lunes - Viernes: 8:00 AM - 6:00 PM<br />
                    Sábado: 9:00 AM - 1:00 PM
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Envíenos un Mensaje</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit((data) => mutation.mutate(data))}
                  className="space-y-6"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nombre</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Correo Electrónico</FormLabel>
                        <FormControl>
                          <Input type="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mensaje</FormLabel>
                        <FormControl>
                          <Textarea rows={4} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={mutation.isPending}
                  >
                    {mutation.isPending ? "Enviando..." : "Enviar Mensaje"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}