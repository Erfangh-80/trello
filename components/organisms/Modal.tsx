import { CheckIcon } from "../atoms/icons/Check";
import { DateIcon } from "../atoms/icons/Date";
import { ListIcon } from "../atoms/icons/List";
import { TagIcon } from "../atoms/icons/Tag";
import { TitleIcon } from "../atoms/icons/Title";

export const Modal = () => {

  return (
    <div className="fixed w-[33%] z-10 mx-auto bg-white flex inset-x-2 mt-10 shadow-[0_0_50px_5px_rgba(0,0,0,.44)] rounded-lg">
      <div className="w-full flex flex-col py-7 px-6 mt-5">
        <div className="flex flex-col mb-10">
          <div className="flex items-center">
            <TitleIcon className="w-5 h-5 mr-3" />
            <span className="text-[#17394d] text-xl font-bold">Title</span>
          </div>
          <div className="mt-4">
            <span className="bg-[#eee] py-2 px-3 rounded-md">Task1</span>
          </div>
        </div>
        <div className="flex flex-col mb-10">
          <div className="flex items-center">
            <ListIcon className="w-5 h-5 mr-3" />
            <span className="text-[#17394d] text-xl font-bold">
              Description
            </span>
          </div>
          <div className="mt-4">
            <span className="bg-[#eee] py-2 px-3 rounded-md">
              Add Task Description
            </span>
          </div>
        </div>
        <div className="flex flex-col mb-10">
          <div className="flex items-center">
            <DateIcon className="w-5 h-5 mr-3" />
            <span className="text-[#17394d] text-xl font-bold">Date</span>
          </div>
          <div className="mt-3">
            <input
              type="date"
              className="py-2 px-3 rounded-md border-2 border-stone-300	"
            />
          </div>
        </div>
        <div className="flex flex-col mb-10">
          <div className="flex items-center">
            <TagIcon className="w-5 h-5 mr-3" />
            <span className="text-[#17394d] text-xl font-bold">Labels</span>
          </div>
          <div className="flex ml-5 mt-4">
            <span className="block bg-[#a8193d] w-5 h-5 rounded-full ml-3"></span>
            <span className="block bg-[#4fcc35] w-5 h-5 rounded-full ml-3"></span>
            <span className="block bg-[#1ebf3a] w-5 h-5 rounded-full ml-3"></span>
            <span className="block bg-[#8da377] w-5 h-5 rounded-full ml-3"></span>
            <span className="block bg-[#9975bd] w-5 h-5 rounded-full ml-3"></span>
            <span className="block bg-[#cf61a1] w-5 h-5 rounded-full ml-3"></span>
            <span className="block bg-[#240959] w-5 h-5 rounded-full ml-3"></span>
          </div>
          <div className="mt-4">
            <span className="bg-[#eee] py-2 px-3 rounded-md">Add Label</span>
          </div>
        </div>
        <div className="flex flex-col mb-7">
          <div className="flex items-center">
            <CheckIcon className="w-5 h-5 mr-3" />
            <span className="text-[#17394d] text-xl font-bold">Tasks</span>
          </div>
          <div className="w-full my-3">
            <div className="w-full h-[2px] border border-stone-500 p-2 rounded-xl"></div>
          </div>
          <div className="mt-5">
            <span className="bg-[#eee] py-2 px-3 rounded-md">Add a Task</span>
          </div>
        </div>
      </div>
    </div>
  );
};
