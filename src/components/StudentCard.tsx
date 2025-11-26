import Image from "next/image";

type Props = {
  name: string;
  program: string;
  img: string;
};

export default function StudentCard({ name, program, img }: Props) {
  return (
    <div className="
      group
      w-full 
      max-w-xl 
      mx-auto 
      bg-white 
      rounded-2xl 
      overflow-hidden 
      shadow-lg 
      border 
      border-gray-200
      hover:shadow-2xl 
      transform 
      transition-all 
      duration-500 
      hover:-translate-y-1
    ">
      {/* Imagen superior */}
      <div className="relative w-full h-72 overflow-hidden">
        <Image
          src={img}
          alt={name}
          fill
          className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Contenido */}
      <div className="p-6 space-y-3">
        <h2 className="text-2xl font-bold text-gray-900">{name}</h2>
        <p className="text-gray-600 text-lg">{program}</p>

        {/* Decoración inferior elegante */}
        <div className="h-[3px] w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
      </div>
    </div>
  );
}
