import { FC, ReactElement } from "react";
import { Paragraph as P } from "../atoms/typography/paragraph";

interface IItemProps {
  icon: ReactElement;
  text: string;
}

export const ItemList: FC<IItemProps> = ({ icon, text }) => {
  return (
    <div className="flex items-center ml-3 cursor-pointer hover:bg-[--color-gray] py-2 px-3 rounded-xl mr-7">
      {icon}
      <P className="ml-4 text-[--color-bright] font-bold text-xl" text={text} />
    </div>
  );
};
