import React from "react";

type Props = {
  children: React.ReactNode;
};

const Button = ({ children }: Props) => {
  return (
    <button className="bg-colRed01 px-4 py-2 rounded-full  ">{children}</button>
  );
};

export default Button;
