import { FC } from "react";

interface IProps {
  headerSize: "1" | "2" | "3" | "4" | "5" | "6";
  text?: string;
}

export const HeaderText: FC<IProps> = ({ headerSize, text = "" }) => {
  const headerType = {
    "1": () => <h1>{text}</h1>,
    "2": () => <h2>{text}</h2>,
    "3": () => <h3>{text}</h3>,
    "4": () => <h4>{text}</h4>,
    "5": () => <h5>{text}</h5>,
    "6": () => <h6>{text}</h6>,
  };

  return headerType[headerSize]();
};
