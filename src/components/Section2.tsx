import {
  FaCalendarCheck,
  FaCartShopping,
  FaPeopleGroup,
} from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";

const Section2 = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 poppins bg-blue-50 px-8 lg:px-16 py-10">
        <div className="space-y-4 border-2 border-solid border-violet-400 rounded-xl px-3 py-2 hover:bg-purple-500 hover:text-white hover:border-none">
          <div className="flex items-center gap-2">
            <FaPeopleGroup size={25} className="text-violet-700" />
            <p className=" text-lg font-semibold">People</p>
          </div>

          <p>
            Find a teacher, coach, or expert for your hobby interest in your
            locality. Find a partner, teammate, accompanist or collaborator.
          </p>
          <button className="border-2 border-gray-700 border-solid px-3 py-2 rounded-lg">
            Connect
          </button>
        </div>

        <div className="space-y-4 border-2 border-solid border-green-500 rounded-xl px-3 py-2 hover:bg-green-500 hover:text-white hover:border-none">
          <div className="flex items-center gap-2">
            <IoLocationSharp size={25} className="text-violet-700" />
            <p className=" text-lg font-semibold">Place</p>
          </div>
          <p>
            Find a class, school, playground, auditorium, studio, shop or an
            event venue. Book a slot at venues that allow booking through
            hobbycue.
          </p>
          <button className="border-2 border-gray-700 border-solid px-3 py-2 rounded-lg">
            Meet Up
          </button>
        </div>

        <div className="space-y-4 border-2 border-solid border-red-400 rounded-xl px-3 py-2 hover:bg-red-500 hover:text-white hover:border-none">
          <div className="flex items-center gap-2">
            <FaCartShopping size={25} className="text-violet-700" />
            <p className=" text-lg font-semibold">Product</p>
          </div>
          <p>
            Find equipment or supplies required for your hobby. Buy, rent or
            borrow from shops, online stores or from community members.
          </p>
          <button className="border-2 border-gray-700 border-solid px-3 py-2 rounded-lg">
            Get It
          </button>
        </div>

        <div className="space-y-4 border-2 border-solid border-blue-400 rounded-xl px-3 py-2 hover:bg-blue-500 hover:text-white hover:border-none">
          <div className="flex items-center gap-2">
            <FaCalendarCheck size={25} className="text-violet-700" />
            <p className=" text-lg font-semibold">Program</p>
          </div>
          <p>
            Find events, meetups and workshops related to your hobby. Register
            or buy tickets online.
          </p>
          <button className="border-2 border-gray-700 border-solid px-3 py-2 rounded-lg">
            Attend
          </button>
        </div>
      </div>
    </>
  );
};

export default Section2;
