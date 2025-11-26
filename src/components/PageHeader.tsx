import React from "react";

type Props = {
  title: string;
  subtitle?: string;
};

const PageHeader: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <header className="w-full py-10 text-center">
      <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">{title}</h1>
      {subtitle && <p className="mt-3 text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">{subtitle}</p>}
      <div className="mt-6 flex items-center justify-center">
        <span className="w-20 h-1 rounded-full bg-gradient-to-r from-indigo-600 to-rose-500" />
      </div>
    </header>
  );
};

export default PageHeader;
