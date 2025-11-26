import Link from "next/link";
import Image from "next/image";

export default function CartagenaPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-white p-8">
      <div className="max-w-4xl mx-auto">

        <header className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-5xl font-extrabold text-yellow-700">Cartagena</h1>
            <p className="mt-2 text-lg text-yellow-600">
              Población aproximada: <span className="font-semibold">~1 millón</span>
            </p>
          </div>

          <div className="w-28 h-28 relative rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/cartagena.png"
              alt="Cartagena"
              fill
              className="object-cover transition-all duration-300 hover:scale-105"
            />
          </div>
        </header>

        <div className="rounded-2xl overflow-hidden shadow-lg mb-6 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1">
          <Image
            src="/cartagena.png"
            alt="Cartagena"
            width={1200}
            height={600}
            className="object-cover w-full h-72"
          />
        </div>

        <p className="text-gray-700 leading-relaxed">
          Cartagena es uno de los destinos turísticos más importantes del país,
          conocida por su centro histórico, hermosas playas y su arquitectura colonial.
        </p>

        <section className="mt-8 bg-white rounded-xl shadow-lg p-6 border-l-4 border-yellow-500 transition-all hover:-translate-y-1 hover:shadow-2xl">
          <h3 className="text-2xl font-bold text-yellow-700 mb-3">📌 Datos rápidos</h3>
          <ul className="space-y-1 text-gray-700">
            <li><strong>Área:</strong> 573 km²</li>
            <li><strong>Altitud:</strong> 2 msnm</li>
            <li><strong>Clima:</strong> Tropical — 28°C promedio</li>
          </ul>
        </section>

        <section className="mt-8 grid sm:grid-cols-2 gap-6">
          <article className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-yellow-500 transition-all hover:scale-[1.05] hover:-translate-y-1 hover:shadow-2xl">
            <h2 className="text-2xl font-bold text-yellow-700 mb-2">Ciudad Amurallada</h2>
            <p className="text-gray-600">
              Patrimonio histórico lleno de cultura, gastronomía y arquitectura colonial.
            </p>
          </article>

          <article className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-yellow-500 transition-all hover:scale-[1.05] hover:-translate-y-1 hover:shadow-2xl">
            <h2 className="text-2xl font-bold text-yellow-700 mb-2">Castillo San Felipe</h2>
            <p className="text-gray-600">
              Fortaleza histórica con recorridos guiados y vistas panorámicas.
            </p>
          </article>
        </section>

        <footer className="mt-8">
          <Link href="/proyecto/ciudades" className="text-yellow-700 font-semibold hover:underline">
            ← Volver a ciudades
          </Link>
        </footer>
      </div>
    </main>
  );
}
