import React, { FC } from "react";

interface IProps {
  text: string;
  className: string;
}

export const Paragraph: FC<IProps> = ({ text, className }) => {
  return <p className={className}>{text}</p>;
};

