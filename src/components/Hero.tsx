import { useState } from "react";
import Login from "./Login";
import Signin from "./Signin";

const Hero = () => {
  const [selectedForm, setSelectedForm] = useState("signin");

  const renderedContent = () => {
    switch (selectedForm) {
      case "login":
        return <Login />;
      case "siginin":
        return <Signin />;
      default:
        return <Signin />;
    }
  };

  return (
    <>
      <div className="bg-violet-100 h-[140vh] lg:h-[80dvh]  poppins relative">
        <div className="absolute  bottom-0 z-10 block lg:hidden">
          <img src="/bgvector.png" alt="" className="w-[40rem] py-0" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 relative">
          <div className="absolute top-[27rem] lg:top-[9.5rem] lg:left-28 hidden lg:block">
            <img src="/bgvector.png" alt="" className="w-[40rem] py-0" />
          </div>
          <div className="flex flex-col justify-center mt-16 ml-8 space-y-5">
            <div className="italic text-4xl font-semibold">
              <span>Explore your</span>
              <span className="text-blue-600"> hobby</span>
              <span> or</span>
              <span className="text-violet-500"> passion</span>
            </div>
            <div className="text-md lg:text-lg">
              <p>
                Sign-in to interact with a community of fellow hobbyists and an
                eco-system of experts, teachers, suppliers, classes, workshops,
                and places to practice, participate or perform. Your hobby may
                be about visual or performing arts, sports, games, gardening,
                model making, cooking, indoor or outdoor activities…
              </p>
              <br />
              <p className="hidden lg:block">
                If you are an expert or a seller, you can Add your Listing and
                promote yourself, your students, products, services or events.
                Hop on your hobbyhorse and enjoy the ride.
              </p>
            </div>
          </div>
          <div className="">
            <div className="flex gap-5 justify-center items-center mt-6">
              <div
                className={`text-violet-700 text-lg font-bold cursor-pointer ${
                  selectedForm === "signin"
                    ? "underline underline-offset-2"
                    : ""
                }`}
                onClick={() => setSelectedForm("signin")}>
                Sign In
              </div>
              <div
                className={`text-violet-700 text-lg font-bold cursor-pointer ${
                  selectedForm === "login" ? "underline underline-offset-2" : ""
                }`}
                onClick={() => setSelectedForm("login")}>
                Join In
              </div>
            </div>
            {renderedContent()}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
