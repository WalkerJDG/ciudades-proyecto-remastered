import PageHeader from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ProyectoPage() {
  return (
    <div className="max-w-7xl mx-auto px-8 py-16 bg-gray-50">

      {/* HERO */}
      <div className="bg-white py-20 px-10 rounded-2xl shadow-2xl mb-16">
        <PageHeader title="Proyecto de Ciudades" />

        <p className="text-center text-gray-600 max-w-3xl mx-auto text-lg mt-4">
          Explora ciudades de Colombia con rutas estáticas, dinámicas y componentes
          personalizados. Cada página cuenta con un diseño moderno, limpio y profesional.
        </p>

        <div className="flex justify-center gap-8 mt-12">

          {/* Botón para volver al Home */}
          <Link href="/">
            <Button variant="outline" className="px-8 py-4 text-lg hover:bg-blue-600 hover:text-white border-blue-600 transition duration-300">
              Inicio
            </Button>
          </Link>

          <Link href="/proyecto/ciudades">
            <Button className="px-8 py-4 text-lg bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition duration-300">
              Ver Ciudades
            </Button>
          </Link>

          <Link href="/proyecto/contacto">
            <Button variant="secondary" className="px-8 py-4 text-lg hover:bg-gray-200 transition duration-300">
              Contacto
            </Button>
          </Link>
        </div>
      </div>

      {/* FEATURES */}
      <h2 className="text-4xl font-semibold text-center mb-12 text-gray-700 animate-[fadeIn_1s_ease]">¿Qué ofrece este proyecto?</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        <Card className="p-6 shadow-xl hover:shadow-2xl transition duration-300">
          <h3 className="text-xl font-semibold mb-3 text-indigo-600">Rutas Dinámicas</h3>
          <p className="text-gray-600">
            Sistema de navegación flexible con parámetros dinámicos para cada ciudad.
          </p>
        </Card>

        <Card className="p-6 shadow-xl hover:shadow-2xl transition duration-300">
          <h3 className="text-xl font-semibold mb-3 text-indigo-600">Diseño Moderno</h3>
          <p className="text-gray-600">
            Cada página tiene un estilo único que mejora la experiencia visual.
          </p>
        </Card>

        <Card className="p-6 shadow-xl hover:shadow-2xl transition duration-300">
          <h3 className="text-xl font-semibold mb-3 text-indigo-600">Datos Reales</h3>
          <p className="text-gray-600">
            Información clara, confiable y bien estructurada para cada ciudad.
          </p>
        </Card>
      </div>

      {/* IMAGE DECORATIVA */}
      <div className="flex justify-center">
        <div className="relative w-96 h-64">
          <Image
            src="/colombia.png"
            alt="Mapa de Colombia"
            fill
            className="object-contain opacity-90 drop-shadow-2xl"
          />
        </div>
      </div>

    </div>
  );
}
