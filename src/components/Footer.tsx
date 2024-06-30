import {
  FaFacebook,
  FaGooglePlusG,
  FaInstagram,
  FaPinterestP,
  FaTelegram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { IoMailOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <>
      <div className="poppins  grid grid-col-1 space-y-4 lg:grid-cols-4 my-10 px-8 lg:px-16 ">
        <div className="">
          <div className="flex justify-between items-center">
            <div className="font-semibold mb-3">Hobbycue</div>
            <IoIosArrowDown className="lg:hidden mr-2" />
          </div>

          <div className="">About Us</div>
          <div className="">Our Services</div>
          <div className="">Work With Us</div>
          <div className="">Faq</div>
          <div className="">Contact Us</div>
        </div>
        <div className="">
          <div className="flex justify-between items-center">
            <div className="font-semibold mb-3">How Do I</div>
            <IoIosArrowDown className="lg:hidden mr-2" />
          </div>
          <div className="">Sign Up</div>
          <div className="">Add Listing</div>
          <div className="">Claim Listing</div>
          <div className="">Post A Query</div>
          <div className="">Add A Blogpost</div>
          <div className="">Other Queries</div>
        </div>
        <div className="">
          <div className="flex justify-between items-center">
            <div className="font-semibold mb-3">Quick Links</div>
            <IoIosArrowDown className="lg:hidden mr-2" />
          </div>
          <div className="">Listing</div>
          <div className="">Blogposts</div>
          <div className="">Shop/Store</div>
          <div className="">Community</div>
        </div>
        <div className="">
          <div className="flex justify-between items-center">
            <div className="font-semibold mb-3">Social Media</div>
            <IoIosArrowDown className="lg:hidden mr-2" />
          </div>
          <div className="flex justify-start items-center lg:gap-6 gap-4">
            <FaFacebook size={20} className="bg-gray-300 rounded-full p-1" />
            <FaTwitter size={20} className="bg-gray-300 rounded-full p-1" />
            <FaInstagram size={20} className="bg-gray-300 rounded-full p-1" />
            <FaPinterestP size={20} className="bg-gray-300 rounded-full p-1" />
            <FaGooglePlusG size={20} className="bg-gray-300 rounded-full p-1" />
            <FaYoutube size={20} className="bg-gray-300 rounded-full p-1" />
            <FaTelegram size={20} className="bg-gray-300 rounded-full p-1" />
            <IoMailOutline size={20} className="bg-gray-300 rounded-full p-1" />
          </div>
          <div className="font-semibold mt-6">Invite Friends</div>
          <div className="border-2 border-solid border-slate-200 relative w-80 h-10 rounded-lg bg-gray-100 mt-2">
            <input
              type="search"
              name=""
              id=""
              className="outline-none border-none pl-3 px-2 py-1 bg-gray-100 rounded-md w-[80%]"
              placeholder="Email Id"
            />
            <button className="bg-purple-600 text-white absolute right-0 w-[20%] h-full rounded-r-md border-4 border-solid border-purple-600">
              Invite
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
