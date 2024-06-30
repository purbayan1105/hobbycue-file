const AboveFooter = () => {
  return (
    <>
      <div className="bg-blue-50 h-[60dvh] px-16 relative">
        <img
          src="/newimg.png"
          alt=""
          className="absolute bottom-0 w-[80%] lg:w-[60rem] left-[2rem]  lg:left-60"
        />
        <div className="poppins italic font-semibold pt-10">
          <span className="text-xl">Your</span>
          <span className="text-violet-700 text-xl"> Hobbey</span>
          <span className="text-xl">, Your </span>
          <span className="text-blue-500 text-xl"> Community</span>
        </div>
        <div className="mt-8">
          <button className="bg-purple-600 px-3 py-2 rounded-lg text-white">
            Get Statrted
          </button>
        </div>
      </div>
    </>
  );
};

export default AboveFooter;
