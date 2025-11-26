import Image from "next/image";
import React from "react";
import Link from "next/link";

type Props = {
  name: string;
  image: string; // ruta en /public, ejemplo "/medellin.png"
  href: string;  // link a la página estática
};

const CityCard: React.FC<Props> = ({ name, image, href }) => {
  return (
    <Link href={href} className="group block rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-white transform transition-all duration-300 hover:scale-[1.05] hover:-translate-y-1 hover:shadow-2xl">
      <div className="relative h-56 w-full">
        <Image src={image} alt={name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute left-4 bottom-4">
          <span className="bg-white/90 px-3 py-1 rounded-full text-sm font-semibold shadow-md">{name}</span>
        </div>
      </div>

      <div className="p-4">
        <p className="text-sm text-gray-600">Ver página de {name}</p>
      </div>
    </Link>
  );
};

export default CityCard;
