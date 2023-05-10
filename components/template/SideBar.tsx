import { ItemList } from "../molecules/ItemList";
import { Home } from "../atoms/icons/Home";
import { HeaderText } from "../atoms/heading/title";

const SideBar = () => {
  return (
    <div className="flex flex-col bg-[--color-darker] p-5 rounded-s-lg">
      <div className="text-white text-4xl ml-6">
        <HeaderText headerSize="1" text="Trello" />
      </div>
      <div className="mt-10">
        <div className="mt-8">
          <ItemList text="Dashboard" icon={<Home />} />
        </div>
        <div className="mt-8">
          <ItemList text="List" icon={<Home />} />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
