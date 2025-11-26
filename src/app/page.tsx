import StudentCard from "@/components/StudentCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-16 bg-gray-50">

      {/* Contenedor central con fondo blanco, sin gradiente azul */}
      <div className="w-full max-w-4xl flex flex-col items-center text-center gap-8 p-8 bg-white rounded-3xl shadow-xl animate-[fadeIn_1s_ease]">
        
        {/* Tarjeta del Estudiante */}
        <div className="animate-[fadeIn_0.8s_ease]">
          <StudentCard
            name="Juan Daniel Gómez Correa"
            program="Técnico en Programación de Software • SENA"
            img="/yo.png"
          />
        </div>

        {/* Texto de bienvenida */}
        <p className="text-2xl text-gray-800 max-w-2xl leading-relaxed mt-4">
          ¡Hola! Soy estudiante del SENA y este es mi proyecto web desarrollado 
          con <span className="font-semibold text-indigo-700">Next.js</span>, 
          <span className="font-semibold text-indigo-700"> TailwindCSS</span> y 
          componentes diseñados y construidos a mano.  
          Cada página está pensada con un enfoque único al diseño moderno y eficiente.
        </p>

        {/* Botón de acción */}
        <div>
          <Link href="/proyecto">
            <Button className="px-12 py-6 text-lg bg-indigo-600 text-white rounded-xl shadow-lg hover:bg-indigo-700 hover:shadow-2xl transition duration-300 transform hover:scale-110">
              Ir al Proyecto
            </Button>
          </Link>
        </div>

        {/* Footer con mensaje de autor */}
        <footer className="mt-12 text-sm text-gray-600">
          <p>Desarrollado por Juan Daniel Gómez Correa</p>
        </footer>
      </div>
    </div>
  );
}
