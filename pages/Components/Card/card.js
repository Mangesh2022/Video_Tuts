import Image from "next/dist/client/image";
const Card = (props) => {
  return (
    <>
      <div className="w-1/4 flex flex-col justify-center align-middle text-center ">
        <div className="  m-3  shadow-xl  flex flex-col justify-center text-center">
          <div className=" relative  h-56 ">
            <div className=" bg-gray-900 rounded-md relative flex flex-col justify-center text-center align-middle items-center h-full bg-opacity-70 hover:opacity-50 hover:bg-purple-600  z-20 ">
              <div className="absolute ">
                <div className="text-white    text-xl  font-bold  h-full  ">
                  {props.title}
                </div>
                <div className="text-white text-sm h-full  ">{props.desc}</div>
              </div>
            </div>
            <div className=" top-0 left-0 h-full   w-full absolute">
              <Image
                src={"/images/banner1.jpg"}
                layout="fill"
                className="object-cover rounded-md object-center h-60"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
