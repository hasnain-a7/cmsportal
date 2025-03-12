/* eslint-disable react/prop-types */
import { TfiAlignJustify } from "react-icons/tfi";

import ProfileDropdown from "../OtherComponents/ProfileDropDown";

function Header(props) {
  return (
    <header className="bg-[#031F31] w-full h-[55px] sm:h-[60px] p-2 flex justify-between items-center text-white">
      <button
        className="  h-full items-center flex justify-center w-auto p-2 "
        onClick={props.toggleSidebar}
      >
        <div className="font-bold">
          <TfiAlignJustify
            size={30}
            className={`transition-transform duration-300 ease-in-out ${
              props.isSidebarOpen ? "rotate-90" : ""
            }`}
          />
        </div>
      </button>
      <div className="h-full items-center flex justify-center text size-14  p-1">
        <img src="/logo2.png" alt="University logo" />
      </div>
      <div className="h-full w-auto items-center flex justify-center p-4">
        <ProfileDropdown />
      </div>
    </header>
  );
}

export default Header;
