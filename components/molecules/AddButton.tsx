import { FC, MouseEventHandler } from "react";

import { Add } from "../atoms";

interface IPropsButton {
  onClick: MouseEventHandler<HTMLDivElement> | undefined;
}

export const AddButton: FC<IPropsButton> = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="flex justify-center drop-shadow-lg border-2 border-dashed mt-5 rounded p-3 cursor-pointer"
    >
      <Add />
    </div>
  );
};
