import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation"; // Usado para manejar la ciudad no encontrada

const ciudadesValidas = [
  "Medellín", "Bogotá", "Cali", "Cartagena", "Bucaramanga", "Pereira"
];

export default function DynamicCityPage({ params }: { params: { nombre: string } }) {
  const { nombre } = params; // Desestructuración del parámetro

  const ciudadValida = ciudadesValidas.includes(nombre);

  if (!ciudadValida) {
    return (
      <div className="text-center p-6">
        <h1 className="text-4xl font-bold mb-6 text-red-500">
          Ciudad no encontrada
        </h1>
        <div className="mb-6">
          <Image
            src="/error.png"
            alt="Ciudad no encontrada"
            width={400}
            height={400}
            className="mx-auto"
          />
        </div>
        <p className="text-lg text-gray-600 mb-6">
          Lo siento, la ciudad que buscas no está disponible en este proyecto.
        </p>
        <Link href="/proyecto/ciudades" className="block mt-6 text-blue-600 underline">
          ← Volver a ciudades
        </Link>
      </div>
    );
  }

  return (
    <div className="text-center p-6">
      <h1 className="text-4xl font-bold mb-6">
        Ciudad dinámica: {nombre}
      </h1>

      <Card className="max-w-xl mx-auto">
        <CardContent className="p-6 text-gray-700">
          Esta página demuestra el uso de rutas dinámicas en Next.js usando el parámetro <strong>{nombre}</strong>.
        </CardContent>
      </Card>
    </div>
  );
}
