import Image from "next/image";
import React from "react";

type Props = {
  src: string;
  alt: string;
  className?: string;
};

const ImageWrapper: React.FC<Props> = ({ src, alt, className }) => {
  return (
    <div className={`relative w-full h-64 rounded-2xl overflow-hidden shadow-lg transition-transform duration-500 hover:scale-105 ${className ?? ""}`}>
      <Image src={src} alt={alt} fill className="object-cover" />
    </div>
  );
};

export default ImageWrapper;
