import { FC, ReactElement } from "react";

import { Paragraph as P } from "../atoms";

interface IItemProps {
  icon: ReactElement;
  text: string;
}

export const ItemList: FC<IItemProps> = ({ icon, text }) => {
  return (
    <div className="flex items-center cursor-pointer py-4 px-3 rounded-xl mx-2">
      {icon}
      <P className="ml-3 font-bold text-xl" text={text} />
    </div>
  );
};
