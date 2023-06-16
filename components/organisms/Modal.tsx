import { FC, RefObject, ChangeEvent  } from "react";

import {
  CheckIcon,
  DateIcon,
  ListIcon,
  Span,
  TagIcon,
  TitleIcon,
  Input
} from "../atoms";

interface IPropsModal {
  modalRef: RefObject<HTMLDivElement>;
}

export const Modal: FC<IPropsModal> = ({ modalRef }) => {

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {

  }

  return (
    <div
      ref={modalRef}
      className="fixed w-[33%] z-10 mx-auto bg-[var(--color-white)] flex inset-x-2 mt-10 shadow-[0_0_50px_5px_rgba(0,0,0,.44)] rounded-lg"
    >
      <div className="w-full flex flex-col py-7 px-6 mt-5">
        <div className="flex flex-col mb-10">
          <div className="flex items-center">
            <TitleIcon className="w-5 h-5 mr-3" />
            <Span text="Title" className="text-[var(--color-primary)] text-xl font-bold" />
          </div>
          <div className="mt-4">
            <Span text="Task1" className="bg-[var(--color-light)] py-2 px-3 rounded-md" />
          </div>
        </div>
        <div className="flex flex-col mb-10">
          <div className="flex items-center">
            <ListIcon className="w-5 h-5 mr-3" />
            <Span
              text="Description"
              className="text-[var(--color-primary)] text-xl font-bold"
            />
          </div>
          <div className="mt-4">
            <Span
              text="Add Task Description"
              className="bg-[var(--color-light)] py-2 px-3 rounded-md"
            />
          </div>
        </div>
        <div className="flex flex-col mb-10">
          <div className="flex items-center">
            <DateIcon className="w-5 h-5 mr-3" />
            <span className="text-[var(--color-primary)] text-xl font-bold">Date</span>
          </div>
          <div className="mt-3">
            <Input
              type="date"
              className="py-2 px-3 rounded-md border-2 border-stone-300"
              onChange={changeHandler}
              placeholder=""
              value=""
            />
          </div>
        </div>
        <div className="flex flex-col mb-10">
          <div className="flex items-center">
            <TagIcon className="w-5 h-5 mr-3" />
            <Span text="Labels" className="text-[var(--color-primary)] text-xl font-bold" />
          </div>
          <div className="flex ml-5 mt-4">
            <Span
              text=""
              className="block bg-[#a8193d] w-5 h-5 rounded-full ml-3"
            />
            <Span
              text=""
              className="block bg-[#4fcc35] w-5 h-5 rounded-full ml-3"
            />
            <Span
              text=""
              className="block bg-[#1ebf3a] w-5 h-5 rounded-full ml-3"
            />
            <Span
              text=""
              className="block bg-[#8da377] w-5 h-5 rounded-full ml-3"
            />
            <Span
              text=""
              className="block bg-[#9975bd] w-5 h-5 rounded-full ml-3"
            />
            <Span
              text=""
              className="block bg-[#cf61a1] w-5 h-5 rounded-full ml-3"
            />
            <Span
              text=""
              className="block bg-[#240959] w-5 h-5 rounded-full ml-3"
            />
          </div>
          <div className="mt-4">
            <Span text="Add Label" className="bg-[var(--color-light)] py-2 px-3 rounded-md" />
          </div>
        </div>
        <div className="flex flex-col mb-7">
          <div className="flex items-center">
            <CheckIcon className="w-5 h-5 mr-3" />
            <Span text="Tasks" className="text-[var(--color-primary)] text-xl font-bold" />
          </div>
          <div className="w-full my-3">
            <div className="w-full h-[2px] border border-stone-500 p-2 rounded-xl"></div>
          </div>
          <div className="mt-5">
            <Span
              text="Add a Task"
              className="bg-[var(--color-light)] py-2 px-3 rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
