import { IoMdAddCircle } from "react-icons/io";

const Section3 = () => {
  return (
    <>
      <div className="h-[50dvh] flex items-center spy-5 bg-blue-50 poppins">
        <div className="mx-8 lg:mx-16 bg-white border-2 border-solid border-gray-200 px-4 py-2 space-y-5 rounded-lg">
          <div className="flex items-center gap-5">
            <IoMdAddCircle size={25} className="text-blue-400" />
            <div className="text-lg font-semibold">Add Your own</div>
          </div>
          <p className="">
            Are you a teacher or expert? Do you sell or rent out equipment,
            venue or event tickets? Or, you know someone who should be on
            hobbycue? Go ahead and Add your Own page
          </p>
          <button className=" border-gray-500 border-solid border-2 px-3 py-2 bg-white rounded-lg">
            Add new
          </button>
        </div>
      </div>
    </>
  );
};

export default Section3;
