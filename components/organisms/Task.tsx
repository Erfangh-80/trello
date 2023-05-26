import { Edit } from "../atoms/icons/Edit";
import { Time } from "../atoms/icons/Time";
import { Paragraph } from "../atoms/typography/paragraph";
import { Badge } from "../atoms/typography/span";

export const Task = () => {
  return (
    <div className="flex flex-col p-3">
      <Paragraph text="create new component" className="font-[Pt-regular]" />
      <div className="flex flex-wrap my-6">
        <Badge
          text="Design system"
          className="rounded-[15px] border bg-teal-700  px-2 py-[5px] text-white text-sm font-[Pt-regular]"
        />
        <Badge
          text="Design system"
          className="rounded-[15px] border bg-purple-600  px-2 py-[5px] text-white text-sm font-[Pt-regular]"
        />
        <Badge
          text="Design system"
          className="rounded-[15px] border bg-pink-400 px-2 py-[5px] text-white text-sm font-[Pt-regular]"
        />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Time />
          <span className="ml-[4px]">5 May</span>
        </div>
        <div className="flex items-center">
          <Edit />
          <span className="ml-[4px]">3/3</span>
        </div>
      </div>
    </div>
  );
};
