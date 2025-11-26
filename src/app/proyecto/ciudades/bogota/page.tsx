import Link from "next/link";
import Image from "next/image";

export default function BogotaPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-10">
      <div className="max-w-5xl mx-auto space-y-12">

        {/* HEADER */}
        <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h1 className="text-5xl font-black text-blue-700 tracking-tight">
              Bogotá
            </h1>
            <p className="mt-3 text-xl text-blue-600 font-medium">
              Población aproximada: <span className="font-semibold">~8 millones</span>
            </p>
          </div>

          <div className="relative w-36 h-36 rounded-2xl overflow-hidden shadow-xl border border-blue-200">
            <Image
              src="/bogota.png"
              alt="Bogotá"
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </header>

        {/* HERO */}
        <div className="rounded-3xl overflow-hidden shadow-xl border border-blue-200 transition-transform duration-500 hover:scale-[1.01]">
          <Image
            src="/bogota.png"
            alt="Bogotá"
            width={1400}
            height={700}
            className="w-full h-80 object-cover"
          />
        </div>

        {/* DESCRIPCIÓN */}
        <section className="bg-white p-8 rounded-2xl shadow-md border border-blue-100 text-gray-700 text-lg leading-relaxed">
          Bogotá, capital de Colombia, es una ciudad multicultural, académica y
          económica. Reconocida por su arquitectura moderna, su centro histórico
          (La Candelaria) y su oferta cultural inigualable.
        </section>

        {/* DATOS */}
        <section className="bg-white p-8 rounded-2xl shadow-xl border-l-8 border-blue-500">
          <h2 className="text-3xl font-bold text-blue-700 mb-4">📌 Datos rápidos</h2>
          <ul className="space-y-2 text-gray-700 text-lg">
            <li><strong>Área:</strong> 1.587 km²</li>
            <li><strong>Altitud:</strong> 2.640 msnm</li>
            <li><strong>Clima:</strong> Frío moderado — 13°C promedio</li>
          </ul>
        </section>

        {/* LUGARES */}
        <section className="grid md:grid-cols-2 gap-8">
          <article className="bg-white p-8 rounded-2xl shadow-md border border-blue-100 transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
            <h3 className="text-2xl font-bold text-blue-700 mb-3">Monserrate</h3>
            <p className="text-gray-600 leading-relaxed">
              Uno de los lugares icónicos de la ciudad, con una vista panorámica
              única desde los 3.152 metros de altura.
            </p>
          </article>

          <article className="bg-white p-8 rounded-2xl shadow-md border border-blue-100 transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
            <h3 className="text-2xl font-bold text-blue-700 mb-3">Museo del Oro</h3>
            <p className="text-gray-600 leading-relaxed">
              Exhibición única en el mundo con más de 34.000 piezas prehispánicas
              de oro y cerámica.
            </p>
          </article>
        </section>

        {/* BACK */}
        <footer>
          <Link href="/proyecto/ciudades" className="text-blue-700 font-semibold text-lg hover:underline">
            ← Volver a ciudades
          </Link>
        </footer>
      </div>
    </main>
  );
}
