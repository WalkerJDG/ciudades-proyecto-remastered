import SectionTitle from "@/components/SectionTitle";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ContactoPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-100">
      
      {/* Contenedor del formulario */}
      <div className="max-w-xl mx-auto bg-white p-10 rounded-3xl shadow-xl border border-gray-200 animate-[fadeIn_0.8s_ease]">

        {/* Título de sección */}
        <SectionTitle title="Contáctame" />

        {/* Introducción al formulario */}
        <p className="text-center text-lg text-gray-600 mb-6">
          ¿Tienes alguna pregunta o comentario? ¡Estaré feliz de recibir tu mensaje!
        </p>

        {/* Formulario */}
        <form className="flex flex-col gap-6">
          <Input placeholder="Nombre completo" className="focus:ring-2 focus:ring-blue-500" />
          <Input placeholder="Correo electrónico" type="email" className="focus:ring-2 focus:ring-blue-500" />
          <Textarea placeholder="Mensaje" className="min-h-[150px] focus:ring-2 focus:ring-blue-500" />

          {/* Botón Enviar */}
          <Button className="px-6 py-5 text-lg bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition duration-300">
            Enviar
          </Button>
        </form>

        {/* Botón Volver a Proyecto */}
        <div className="mt-6 text-center">
          <Link href="/proyecto">
            <Button className="px-6 py-5 text-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition duration-300">
              Volver a Proyecto
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
