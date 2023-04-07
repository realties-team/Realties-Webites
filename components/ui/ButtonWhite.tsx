import React, { Children } from "react";

type Props = {
  children: React.ReactNode;
  className: string;
};

const ButtonWhite = ({ children, className }: Props) => {
  return (
    <button className="px-10 py-2 border-2 rounded-lg bg-white border-colBlue04 ">
      {children}
    </button>
  );
};

export default ButtonWhite;
