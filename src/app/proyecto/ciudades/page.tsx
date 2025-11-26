import GridContainer from "@/components/GridContainer";
import CityCard from "@/components/CityCard";
import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CiudadesPage() {
  const ciudades = [
    { name: "Medellín", image: "/medellin.png", href: "/proyecto/ciudades/medellin" },
    { name: "Bogotá", image: "/bogota.png", href: "/proyecto/ciudades/bogota" },
    { name: "Cali", image: "/cali.png", href: "/proyecto/ciudades/cali" },
    { name: "Cartagena", image: "/cartagena.png", href: "/proyecto/ciudades/cartagena" },
    { name: "Bucaramanga", image: "/bucaramanga.png", href: "/proyecto/ciudades/bucaramanga" },
    { name: "Pereira", image: "/pereira.png", href: "/proyecto/ciudades/pereira" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 p-10">

      {/* Encabezado */}
      <PageHeader
        title="Ciudades de Colombia"
        subtitle="Explora las ciudades disponibles en este proyecto."
      />

      {/* Grid de las ciudades */}
      <GridContainer>
        {ciudades.map((c) => (
          <div className="transform transition-transform duration-500 hover:scale-105" key={c.name}>
            <CityCard name={c.name} image={c.image} href={c.href} />
          </div>
        ))}
      </GridContainer>

      {/* Botón Volver a Proyecto */}
      <div className="flex justify-center mt-8">
        <Link href="/proyecto">
          <Button className="px-8 py-4 text-lg bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition duration-300">
            Volver a Proyecto
          </Button>
        </Link>
      </div>
    </main>
  );
}
