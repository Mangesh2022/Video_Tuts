import Image from "next/dist/client/image";
import Link from "next/link";

const CourseCards = (props) => {
  if (props.countInRow === "4") {
    return (
      <>
        <div className="  flex  w-1/4  h-80 rounded-md  my-10  flex-col  ">
          <div className=" flex flex-row ">
            <div className="bg-gray-600 rounded-md w-1/4 ">
              <img
                src="../images/py-banner5.jpg "
                className="h-full rounded-md object-center"
              />
            </div>
            <div className="flex flex-col ml-4  ">
              <div className="flex flex-col ">
                <div className="text-lg capitalize mb-1 font-bold text-purple-800">
                  {props.title1}Course title New
                </div>
                <div className="text-xs text-gray-500 mb-4">
                  {props.date}300 Student
                </div>
              </div>
              <div className="flex flex-row  justify-between">
                <div className="flex text-base font-semibold justify-end">
                  {props.price}1999/-
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="  flex  w-1/3 h-80 rounded-md border ml-6  flex-col  ">
          <div className="flex   h-2/3  rounded-t-md  flex-row">
            <div className="relative flex ">
              <div className="relative flex bg-gray-900 h-50 rounded-t-md  bg-opacity-40 z-20  ">
                <div className="  pr-1 ml-2 flex flex-col justify-center items-start align-middle text-right  w-2/4">
                  <div className="text-sm font-extralight w-full  text-gray-200">
                    {props.category}Category
                  </div>
                  <div className="text-white text-xl w-full  ">
                    {props.title1}Course Title
                  </div>

                  <div className="text-gray-300  text-xs ">
                    {props.desc1}Course Description: new course in the list now
                    available
                  </div>
                </div>
              </div>
              <div className=" top-0 left-0 h-full absolute z-10 w-full ">
                <Image
                  src={"/images/banner1.jpg"}
                  layout="fill"
                  className="object-cover rounded-md object-center  "
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col mx-4 my-4 ">
            <div className="flex flex-col my-2">
              <div className="text-xs text-gray-500">
                Updated on: {props.date}16 Nov 2021
              </div>
              <div className="text-lg mb-2 font-semibold">
                {props.title1}Course title New
              </div>
            </div>
            <div className="flex flex-row  justify-between">
              <div className="text-purple-500 align-middle text-sm font-semibold text-center items-center ">
                ||{props.videolength}36 courses
              </div>
              <div className="flex text-base font-semibold justify-end">
                {props.price}1999/-
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default CourseCards;
