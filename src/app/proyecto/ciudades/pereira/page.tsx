import Link from "next/link";
import Image from "next/image";

export default function PereiraPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-rose-50 to-white p-8">
      <div className="max-w-4xl mx-auto">

        <header className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-5xl font-extrabold text-rose-700">Pereira</h1>
            <p className="mt-2 text-lg text-rose-600">
              Población aproximada: <span className="font-semibold">~470 mil</span>
            </p>
          </div>

          <div className="w-28 h-28 relative rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/pereira.png"
              alt="Pereira"
              fill
              className="object-cover transition-all duration-300 hover:scale-105"
            />
          </div>
        </header>

        <div className="rounded-2xl overflow-hidden shadow-lg mb-6 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1">
          <Image
            src="/pereira.png"
            alt="Pereira"
            width={1200}
            height={600}
            className="object-cover w-full h-72"
          />
        </div>

        <p className="text-gray-700 leading-relaxed">
          Pereira, corazón del Eje Cafetero, es conocida por su café, paisajes
          montañosos y ambiente progresista.
        </p>

        <section className="mt-8 bg-white rounded-xl shadow-lg p-6 border-l-4 border-rose-500 transition-all hover:-translate-y-1 hover:shadow-2xl">
          <h3 className="text-2xl font-bold text-rose-700 mb-3">📌 Datos rápidos</h3>
          <ul className="space-y-1 text-gray-700">
            <li><strong>Área:</strong> 702 km²</li>
            <li><strong>Altitud:</strong> 1.411 msnm</li>
            <li><strong>Clima:</strong> Templado — 21°C promedio</li>
          </ul>
        </section>

        <section className="mt-8 grid sm:grid-cols-2 gap-6">
          <article className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-rose-500 transition-all hover:scale-[1.05] hover:-translate-y-1 hover:shadow-2xl">
            <h2 className="text-2xl font-bold text-rose-700 mb-2">Catedral Nuestra Señora de la Pobreza</h2>
            <p className="text-gray-600">
              Impresionante arquitectura de madera que resalta en la región.
            </p>
          </article>

          <article className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-rose-500 transition-all hover:scale-[1.05] hover:-translate-y-1 hover:shadow-2xl">
            <h2 className="text-2xl font-bold text-rose-700 mb-2">Bioparque Ukumarí</h2>
            <p className="text-gray-600">
              Parque temático y ecológico con experiencias únicas de fauna.
            </p>
          </article>
        </section>

        <footer className="mt-8">
          <Link href="/proyecto/ciudades" className="text-rose-700 font-semibold hover:underline">
            ← Volver a ciudades
          </Link>
        </footer>
      </div>
    </main>
  );
}
