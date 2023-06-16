import React, { FC } from "react";

interface IBadgeProps {
  className: string;
  text: string;
}

export const Span: FC<IBadgeProps> = ({ className, text }) => {
  return <span className={className}>{text}</span>;
};
