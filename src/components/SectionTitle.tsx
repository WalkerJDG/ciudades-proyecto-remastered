import React from "react";

type Props = { title: string };

const SectionTitle: React.FC<Props> = ({ title }) => {
  return (
    <div className="w-full mb-6 text-left">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">{title}</h2>
      <div className="mt-2 w-16 h-1 rounded-full bg-gradient-to-r from-indigo-600 to-rose-500" />
    </div>
  );
};

export default SectionTitle;
