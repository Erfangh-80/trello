import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Paragraph } from "../atoms/typography/paragraph";
import ArrowRight from "../atoms/icons/ArrowRight";
import { Task } from "./Task";
import { AddButton } from "../molecules/AddButton";
import More from "../atoms/icons/More";
import { RootState } from "@/redux/store";
import { setIsShow } from "@/redux/features/modal/ModalSlice";

interface ITaskProps {
  title: string;
}

export const Tasks: FC<ITaskProps> = (props) => {
  const { isShow } = useSelector((state: RootState) => state.modal);
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(setIsShow());
  };

  return (
    <div className="bg-white bg-opacity-30 backdrop-blur-md drop-shadow-xl rounded-lg py-1">
      <div className="flex items-center justify-between px-3 py-5 cursor-pointer">
        <div className="flex">
          <ArrowRight />
          <Paragraph text={props?.title} className="ml-2 font-[Pt-bold]" />
        </div>
        <div>
          <More />
        </div>
      </div>
      <div className=" w-[100%] mx-auto rounded ">
        <div className="bg-white m-3 drop-shadow-xl rounded-lg">
          <Task />
        </div>
        <div className="bg-white m-3 drop-shadow-xl rounded-lg">
          <Task />
        </div>
        <div className="bg-white m-3 drop-shadow-xl rounded-lg">
          <Task />
        </div>
        <div className="bg-white drop-shadow-xl m-2 rounded-lg">
          <AddButton onClick={clickHandler} />
        </div>
      </div>
    </div>
  );
};
