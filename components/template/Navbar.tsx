import { ItemList } from "../molecules/ItemList";
import { Home } from "../atoms/icons/Home";
import { HeaderText } from "../atoms/heading/title";
import { Logo } from "../atoms/icons/Logo";
import Image from "next/image";

const Navbar = () => {

  return (
    <div className="flex shadow-[0_15px_40px_15px_#0000004c] justify-between px-7 py-5">
      <ul className="flex px-3">
        <li className="px-4  font-bold">Home</li>
        <li className="px-4  font-bold">Contact Us</li>
        <li className="px-4  font-bold">About Us</li>
      </ul>
      <div>
        <Image src={""} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
