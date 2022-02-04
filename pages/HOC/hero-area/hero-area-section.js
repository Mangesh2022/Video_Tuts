import Image from "next/image";

const Hero_Area = () => {
  return (
    <>
      <div className="w-full h-auto flex flex-col justify-center align-middle text-center items-center relative ">
        <div className="bg-gradient-to-r from-pink-700 to-purple-800 w-full h-full relative z-10 opacity-60 ">
          <div className="w-1/2 h-72 my-28 bg-pink-200 relative bg-opacity-50 shadow-lg  m-auto p-4 rounded-lg ">
            <div className=" my-6 ">
              <h1 className="text-4xl font-bold text-black  text-center">
                Get Certified : Get Ahead
              </h1>
              <p className="text-xl text-gray-700 text-center mt-2">
                Access thousands of online courses. Learn any topic, anytime.
              </p>
            </div>
            <div className=" relative mt-2">
              <input
                type=""
                name=""
                className=" py-4 px-4 text-black-400 text-sm pl-4 rounded-md w-full"
              />
              <button className="text-base">
                <i className="fal fa-search"></i>
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center text-center align-middle w-full  ">
            <div className=" -mt-56 z-20 bg-white p-4 rounded-full">||</div>
          </div>
        </div>

        <div className=" top-0 left-0 h-full   w-full absolute">
          <Image
            src={"/images/banner1.jpg"}
            layout="fill"
            className="object-cover object-top"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Hero_Area;
