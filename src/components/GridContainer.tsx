import React from "react";

type Props = { children: React.ReactNode };

const GridContainer: React.FC<Props> = ({ children }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-2 sm:px-0">
      {children}
    </div>
  );
};

export default GridContainer;
