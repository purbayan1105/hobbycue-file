import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { CgSearch } from "react-icons/cg";
import { CiShoppingCart } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import {
  IoIosArrowDown,
  IoIosArrowUp,
  IoIosNotifications,
  IoMdMenu,
} from "react-icons/io";
import { IoNotifications } from "react-icons/io5";
import { MdExplore, MdStars } from "react-icons/md";
import { PiTagFill, PiTagLight } from "react-icons/pi";

const Navbar = () => {
  const [isExplore, setExplore] = useState(false);
  return (
    <>
      <div className=" hidden lg:grid grid-cols-2 items-center h-[10dvh] mx-8">
        <div className="grid grid-cols-2 items-center">
          <img
            src="/hobbycue full logo.png"
            alt="hobbycue logo"
            className="w-80"
          />
          <div className="border-2 border-solid border-slate-200 relative w-80 h-10 rounded-lg bg-gray-100">
            <input
              type="search"
              name=""
              id=""
              className="outline-none border-none pl-3 px-2 py-1 bg-gray-100 rounded-md w-[85%]"
              placeholder="Search here..."
            />
            <button className="bg-purple-600 text-white absolute right-0 w-[15%] h-full rounded-r-md border-4 border-solid border-purple-600">
              <BiSearch className="mx-3" />
            </button>
          </div>
        </div>
        <div className=" flex justify-evenly items-center gap-8">
          <div
            className="flex items-center gap-2 relative cursor-pointer "
            onClick={() => setExplore(!isExplore)}>
            <MdExplore size={25} className="text-purple-600" />
            <p>Explore</p>
            {isExplore ? <IoIosArrowDown /> : <IoIosArrowUp />}

            {isExplore && (
              <div className="absolute z-40 bg-white w-64 space-y-5 top-14 px-2 py-2">
                <div className="border-b-2 border-gray-200 border-solid">
                  People- Community
                </div>
                <div className="border-b-2 border-gray-200 border-solid">
                  Places- Venues
                </div>
                <div className="border-b-2 border-gray-200 border-solid">
                  Program- Events
                </div>
                <div className="border-b-2 border-gray-200 border-solid">
                  Product- Stores
                </div>
                <div className="border-b-2 border-gray-200 border-solid">
                  Blogs-{" "}
                </div>
              </div>
            )}
          </div>
          <div className="flex items-center gap-2">
            <MdStars size={25} className="text-purple-600" />
            <p>Hobbies</p>
            <IoIosArrowDown />
          </div>
          <div className="">
            <PiTagFill size={25} className="text-purple-600" />
          </div>
          <div className="">
            <IoIosNotifications size={25} className="text-purple-600" />
          </div>
          <div className="">
            <FaCartShopping size={25} className="text-purple-600" />
          </div>
          <div className="border-2 z-20 border-purple-600 border-solid rounded-lg px-4 py-2">
            <p>Sign in</p>
          </div>
        </div>
      </div>

      {/* for mobile, could be cone together on the same code, but due to lack of time, I found this one more time saving */}
      <div className="grid grid-cols-2 lg:hidden h-[10dvh] items-center gap-5 mx-3">
        <div className="col-span-1">
          <img src="/hobbycue full logo.png" alt="" />
        </div>
        <div className="flex justify-center gap-5">
          <CgSearch size={25} />
          <IoNotifications size={25} />
          <IoMdMenu size={25} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
