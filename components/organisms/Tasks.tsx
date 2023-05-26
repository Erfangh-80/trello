import { ReactElement, FC } from "react";
import { Paragraph } from "../atoms/typography/paragraph";
import ArrowRight from "../atoms/icons/ArrowRight";
import { Task } from "./Task";
import { AddButton } from "../molecules/AddButton";
import More from "../atoms/icons/More";

interface ITaskProps {
  title: string;
}

export const Tasks: FC<ITaskProps> = (props) => {
  return (
    <div className="bg-white bg-opacity-30 backdrop-blur-md drop-shadow-xl rounded rounded-lg py-2">
      <div className="flex items-center justify-between px-3 py-5 cursor-pointer">
        <div className="flex">
          <ArrowRight />
          <Paragraph text={props?.title} className="ml-2 font-[Pt-bold]" />
        </div>
        <div>
          <More />
        </div>
      </div>
      <div className="bg-neutral-200 w-[90%] mx-auto rounded py-2 mb-2">
        <div className="shadow-[0_35px_60px_-15px_rgba(0,0,0,0.2)]">
          <div className="bg-white m-3 drop-shadow-xl rounded-lg">
            <Task />
          </div>
          <div className="bg-white m-3 drop-shadow-xl rounded-lg">
            <Task />
          </div>
          <div className="bg-white m-3 drop-shadow-xl rounded-lg">
            <Task />
          </div>
        </div>
        <div className="bg-white drop-shadow-xl m-2 rounded-lg">
          <AddButton />
        </div>
      </div>
    </div>
  );
};
