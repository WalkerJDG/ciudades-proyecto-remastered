import Link from "next/link";
import Image from "next/image";

export default function CaliPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-lime-50 to-white p-10">
      <div className="max-w-5xl mx-auto space-y-12">

        {/* HEADER */}
        <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h1 className="text-5xl font-black text-lime-700 tracking-tight">
              Cali
            </h1>
            <p className="mt-3 text-xl text-lime-600 font-medium">
              Población aproximada: <span className="font-semibold">~2.2 millones</span>
            </p>
          </div>

          <div className="relative w-36 h-36 rounded-2xl overflow-hidden shadow-xl border border-lime-200">
            <Image
              src="/cali.png"
              alt="Cali"
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </header>

        {/* HERO */}
        <div className="rounded-3xl overflow-hidden shadow-xl border border-lime-200 transition-transform duration-500 hover:scale-[1.01]">
          <Image
            src="/cali.png"
            alt="Cali"
            width={1400}
            height={700}
            className="w-full h-80 object-cover"
          />
        </div>

        {/* DESCRIPTION */}
        <section className="bg-white p-8 rounded-2xl shadow-md border border-lime-100 text-gray-700 text-lg leading-relaxed">
          Cali, conocida como la capital mundial de la salsa, es una ciudad vibrante
          llena de cultura, tradición, deporte y gastronomía única.
        </section>

        {/* DATOS */}
        <section className="bg-white p-8 rounded-2xl shadow-xl border-l-8 border-lime-500">
          <h2 className="text-3xl font-bold text-lime-700 mb-4">📌 Datos rápidos</h2>
          <ul className="space-y-2 text-gray-700 text-lg">
            <li><strong>Área:</strong> 564 km²</li>
            <li><strong>Altitud:</strong> 1.018 msnm</li>
            <li><strong>Clima:</strong> Cálido — 25°C promedio</li>
          </ul>
        </section>

        {/* LUGARES */}
        <section className="grid md:grid-cols-2 gap-8">
          <article className="bg-white p-8 rounded-2xl shadow-md border border-lime-100 transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
            <h3 className="text-2xl font-bold text-lime-700 mb-3">Cristo Rey</h3>
            <p className="text-gray-600 leading-relaxed">
              Monumento emblemático con vista panorámica de la ciudad.
            </p>
          </article>

          <article className="bg-white p-8 rounded-2xl shadow-md border border-lime-100 transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
            <h3 className="text-2xl font-bold text-lime-700 mb-3">Zoológico de Cali</h3>
            <p className="text-gray-600 leading-relaxed">
              Uno de los mejores zoológicos de Latinoamérica, ideal para
              explorar fauna y naturaleza.
            </p>
          </article>
        </section>

        {/* BACK */}
        <footer>
          <Link href="/proyecto/ciudades" className="text-lime-700 font-semibold text-lg hover:underline">
            ← Volver a ciudades
          </Link>
        </footer>
      </div>
    </main>
  );
}
