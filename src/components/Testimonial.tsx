import { FaPlay } from "react-icons/fa6";
import { RiDoubleQuotesL } from "react-icons/ri";

const Testimonial = () => {
  return (
    <>
      <div className="mx-8 lg:mx-16 my-10">
        <div className="bg-violet-100 px-3 py-5  space-y-5 ">
          <div className="flex gap-5 items-center">
            <RiDoubleQuotesL
              size={25}
              className="bg-violet-400 rounded-full p-1"
            />
            <p className="text-xl font-semibold">Testimonials</p>
          </div>
          <p>
            In a fast growing and ever changing city like Bangalore, it
            sometimes becomes very difficult to find or connect with like minded
            people. Websites like hobbycue.com is a great service which helps me
            get in touch with, communicate, connect, and exchange ideas with
            other dancers. It also provides the extra benefit of finding
            products and services that I can avail, which I can be assured is
            going to be of great quality as it comes recommended by people of
            the hobbycue community. To have discussions, to get visibility, and
            to be able to safely explore various hobbies and activities in my
            city, all under one roof, is an excellent idea and I highly
            recommend it.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="lg:hidden flex justify-center items-center gap-3">
              <div className="">
                <img src="/profile.png" alt="" className="w-12 rounded-full" />
              </div>
              <div className="space-y-1 col-span-2">
                <p className="text-violet-500 text-lg font-semibold">
                  Shubha Nagarajan
                </p>
                <p>Classical Dancer</p>
              </div>
            </div>
            <div className="col-span-2 flex gap-3 justify-between items-center bg-[#3b0e7548] py-2 px-2 rounded-md mt-5 lg:mt-0">
              <div className="flex items-center gap-3">
                <FaPlay
                  size={25}
                  className="bg-white text-black p-1 rounded-full"
                />
                <div className="h-[0.3rem] w-[8rem] lg:w-[40rem] bg-slate-300 rounded-lg"></div>
                <div className="">0:00</div>
              </div>

              <img
                src="/profile.png"
                className="w-6 lg:w-12 rounded-full "
                alt=""
              />
            </div>
            <div className="hidden lg:block">
              <div className="flex justify-center items-center gap-3">
                <div className="">
                  <img
                    src="/profile.png"
                    alt=""
                    className="w-6 lg:w-12 rounded-full"
                  />
                </div>
                <div className="space-y-2 col-span-2">
                  <p className="text-violet-500 text-lg font-semibold">
                    Shubha Nagarajan
                  </p>
                  <p>Classical Dancer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
