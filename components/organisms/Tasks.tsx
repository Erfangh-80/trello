import { FC } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { setIsShow } from "@/redux/features/modal/ModalSlice";

import { ArrowRight, More, Paragraph as P } from "../atoms";
import { Task } from "./Task";
import { AddButton } from "../molecules/AddButton";

interface ITaskProps {
  title: string;
}

export const Tasks: FC<ITaskProps> = (props) => {
  const dispatch = useDispatch<AppDispatch>();

  const clickHandler = () => {
    dispatch(setIsShow());
  };

  return (
    <div className="bg-[var(--color-white)] bg-opacity-30 backdrop-blur-md drop-shadow-xl rounded-lg py-1">
      <div className="flex items-center justify-between px-3 py-5 cursor-pointer">
        <div className="flex">
          <ArrowRight />
          <P text={props?.title} className="ml-2 font-[Pt-bold]" />
        </div>
        <div>
          <More />
        </div>
      </div>
      <div className=" w-[100%] mx-auto rounded ">
        <div className="bg-[var(--color-white)] m-3 drop-shadow-xl rounded-lg">
          <Task />
        </div>
        <div className="bg-[var(--color-white)] m-3 drop-shadow-xl rounded-lg">
          <Task />
        </div>
        <div className="bg-[var(--color-white)] m-3 drop-shadow-xl rounded-lg">
          <Task />
        </div>
        <div className="bg-[var(--color-white)] drop-shadow-xl m-2 rounded-lg">
          <AddButton onClick={clickHandler} />
        </div>
      </div>
    </div>
  );
};
