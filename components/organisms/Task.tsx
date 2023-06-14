import { CheckIcon } from "../atoms/icons/Check";
import { Time } from "../atoms/icons/Time";
import { Paragraph } from "../atoms/typography/paragraph";
import { Span } from "../atoms/typography/span";

export const Task = () => {
  return (
    <div className="flex flex-col p-3">
      <Paragraph text="create new component" className="font-[Pt-regular]" />
      <div className="flex flex-wrap my-6">
        <Span
          text="Design system"
          className="rounded-[15px] border bg-[#4fcc25]  px-2 py-[5px] text-white text-[12px] font-[Pt-regular]"
        />
        <Span
          text="Design system"
          className="rounded-[15px] border bg-[#cf61a1]  px-2 py-[5px] text-white text-sm font-[Pt-regular]"
        />
        <Span
          text="Design system"
          className="rounded-[15px] border bg-[#8da377] px-2 py-[5px] text-white text-sm font-[Pt-regular]"
        />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Time />
          <span className="ml-[4px]">5 May</span>
        </div>
        <div className="flex items-center">
          <CheckIcon />
          <span className="ml-[4px]">3/3</span>
        </div>
      </div>
    </div>
  );
};
