import React from "react";

type Props = {
  children: React.ReactNode;
};

const Button = ({ children }: Props) => {
  return <button className="px-10 py-2 rounded-lg ">{children}</button>;
};

export default Button;
