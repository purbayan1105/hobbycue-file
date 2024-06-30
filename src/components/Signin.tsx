import { useState } from "react";
import { FaEye, FaEyeSlash, FaFacebook, FaLock } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <div className="mt-16 mx-5 space-y-4 poppins">
        <div className="lg:flex justify-center hidden">
          <div className="space-y-5">
            <div className="grid grid-cols-5 lg:w-96 border-2 border-violet-700 border-solid items-center px-3 py-1 rounded-lg">
              <FcGoogle size={25} />
              <p className="col-span-4 text-center">Continue with Google </p>
            </div>
            <div className="grid grid-cols-5 lg:w-96 border-2 border-violet-700 border-solid items-center px-3 py-1 rounded-lg">
              <FaFacebook className="text-blue-500" size={25} />
              <p className="col-span-4 text-center">Continue with Facebook </p>
            </div>
          </div>
        </div>
        <div className="lg:flex items-center gap-2 justify-center hidden">
          <div className="h-[0.2rem] w-[4rem] lg:w-[7rem] bg-gray-500 rounded-xl"></div>
          <p>Or Connect With</p>
          <div className="h-[0.2rem] w-[4rem] lg:w-[7rem] bg-gray-500 rounded-xl"></div>
        </div>
        <div className=" space-y-5 flex justify-center items-center">
          <div className="lg:w-96 space-y-5">
            <div className="">
              <input
                type="email"
                name=""
                id=""
                placeholder="Enter your email"
                className="relative w-full py-2 px-2 rounded-lg"
              />
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name=""
                id=""
                placeholder="Enter Password"
                className="relative w-full py-2 px-2 rounded-lg"
              />
              {showPassword ? (
                <FaEyeSlash
                  className="absolute right-3 bottom-3"
                  onClick={() => setShowPassword(!showPassword)}
                />
              ) : (
                <FaEye
                  className="absolute right-3 bottom-3"
                  onClick={() => setShowPassword(!showPassword)}
                />
              )}
            </div>
            <div className="flex justify-between items-center gap-6">
              <div className="flex items-center gap-2">
                <input type="checkbox" name="" id="" />
                <div className="text-sm">Remember Me</div>
              </div>
              <div className="flex justify-end items-center gap-2">
                <FaLock className="text-gray-600" />
                <p className="text-sm">Forgot Password ?</p>
              </div>
            </div>
            <div className="flex items-center gap-2 justify-center lg:hidden">
              <div className="h-[0.2rem] w-[4rem] lg:w-[7rem] bg-gray-500 rounded-xl"></div>
              <p>Or Connect With</p>
              <div className="h-[0.2rem] w-[4rem] lg:w-[7rem] bg-gray-500 rounded-xl"></div>
            </div>
            <div className="lg:w-96 border-gray-500 border-2 border-solid py-2 rounded-lg">
              <button className="w-full">
                <p className="font-bold">Continue </p>
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center lg:hidden">
          <div className="space-y-5  w-80 lg:w-96">
            <div className="grid grid-cols-5 border-2 border-violet-700 border-solid items-center px-3 py-1 rounded-lg">
              <FcGoogle size={25} />
              <p className="col-span-4 text-center">Continue with Google </p>
            </div>
            <div className="grid grid-cols-5  border-2 border-violet-700 border-solid items-center px-3 py-1 rounded-lg">
              <FaFacebook className="text-blue-500" size={25} />
              <p className="col-span-4 text-center">Continue with Facebook </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
