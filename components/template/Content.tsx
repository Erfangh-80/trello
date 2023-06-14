import { useState } from "react";
import { AddButton } from "../molecules/AddButton";
import { Tasks } from "../organisms/Tasks";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

const Content = () => {
  const { isShow } = useSelector((state: RootState) => state.modal);
  return (
    <div className={`w-full ${isShow ? "opacity-75" : null} min-h-screen bg-[url('/assets/images/background.jpg')] bg-center bg-cover p-10`}>
      <div className="grid grid-cols-5 gap-4">
        <div>
          <Tasks title="Discover" />
        </div>
        <div>
          <Tasks title="Doing" />
        </div>
        <div>
          <Tasks title="In-Review" />
        </div>
        <div>
          <Tasks title="Completed" />
        </div>
        <div>
          <Tasks title="done" />
        </div>
      </div>
    </div>
  );
};

export default Content;
