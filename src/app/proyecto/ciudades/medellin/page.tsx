import Link from "next/link";
import Image from "next/image";

export default function MedellinPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50 to-white p-10">
      <div className="max-w-5xl mx-auto space-y-12">

        {/* ==== HEADER ==== */}
        <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h1 className="text-5xl font-black text-emerald-700 tracking-tight">
              Medellín
            </h1>

            <p className="mt-3 text-xl text-emerald-600 font-medium">
              Población aproximada:{" "}
              <span className="font-semibold">~2.5 millones</span>
            </p>
          </div>

          <div className="relative w-36 h-36 rounded-2xl overflow-hidden shadow-xl border border-emerald-200">
            <Image
              src="/medellin.png"
              alt="Medellín"
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </header>

        {/* ==== HERO IMAGE ==== */}
        <div className="rounded-3xl overflow-hidden shadow-xl border border-emerald-200 transition-transform duration-500 hover:scale-[1.01]">
          <Image
            src="/medellin.png"
            alt="Ciudad de Medellín"
            width={1400}
            height={700}
            className="w-full h-80 object-cover"
          />
        </div>

        {/* ==== DESCRIPCIÓN ==== */}
        <section className="bg-white p-8 rounded-2xl shadow-md border border-emerald-100 leading-relaxed text-gray-700 text-lg">
          Medellín es reconocida por su innovación, su clima templado y su
          ubicación entre montañas. La ciudad se ha convertido en uno de los
          centros culturales, turísticos y económicos más importantes del país,
          destacándose por su movilidad, tecnología y calidad de vida.
        </section>

        {/* ==== DATOS RÁPIDOS ==== */}
        <section className="bg-white p-8 rounded-2xl shadow-xl border-l-8 border-emerald-500">
          <h2 className="text-3xl font-bold text-emerald-700 mb-4">
            📌 Datos rápidos
          </h2>

          <ul className="space-y-2 text-gray-700 text-lg">
            <li>
              <strong>Área:</strong> 382 km²
            </li>
            <li>
              <strong>Altitud:</strong> 1.475 msnm
            </li>
            <li>
              <strong>Clima:</strong> Templado — 22°C promedio
            </li>
          </ul>
        </section>

        {/* ==== LUGARES DESTACADOS ==== */}
        <section className="grid md:grid-cols-2 gap-8">
          {/* CARD 1 */}
          <article className="bg-white rounded-2xl p-8 shadow-md border border-emerald-100 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 hover:border-emerald-300">
            <h3 className="text-2xl font-bold text-emerald-700 mb-3">
              Parque Arví
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Un enorme parque ecológico perfecto para caminatas, gastronomía y
              actividades culturales rodeadas de naturaleza.
            </p>
          </article>

          {/* CARD 2 */}
          <article className="bg-white rounded-2xl p-8 shadow-md border border-emerald-100 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 hover:border-emerald-300">
            <h3 className="text-2xl font-bold text-emerald-700 mb-3">
              Plaza Botero
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Punto emblemático de la ciudad, donde se encuentran las icónicas
              esculturas del maestro Fernando Botero.
            </p>
          </article>
        </section>

        {/* ==== BACK BUTTON ==== */}
        <footer>
          <Link
            href="/proyecto/ciudades"
            className="inline-block text-emerald-700 font-semibold text-lg hover:underline hover:text-emerald-900 transition-colors"
          >
            ← Volver a ciudades
          </Link>
        </footer>
      </div>
    </main>
  );
}
