import Button from "../../Components/Button/index";
import Image from "next/dist/client/image";
import Link from "next/dist/client/link";

const Banner = () => {
  return (
    <div className="my-20 relative  z-20">
      <div className=" flex py-20 relative bg-violet-900 bg-opacity-80 h-92 px-20 justify-center items-center align-middle text-center">
        <div className="container  flex flex-row mx-auto">
          <div className="flex flex-col ml-4 justify-start text-left  w-1/2">
            <div className="text-white text-4xl font-bold text-justify ">
              <Link href="/testpage">
                <a>See How it Works</a>
              </Link>
            </div>
            <div className="text-white text-lg leading-7  pr-4 mt-4">
              Whether you are dealing with your daily busy office schedule or
              not able to take out the extra time from your college, you can
              still Up-Skill yourself with Learnfly. Access latest topics
              anytime, anywhere from any device on the move. You really
              don&apos;t have to attend the physical classroom.
            </div>
            <div className="text-white text-xl mt-4">
              See how &ldquo;Tim&rdquo; made it happen{" "}
            </div>
          </div>
          <div className="w-1/2 mr-4 text-white flex-row flex justify-center align-middle text-center items-center">
            M
          </div>
        </div>
      </div>
      <div className="absolute  top-0 left-0 h-full -z-10  w-full">
        <Image
          src={"/images/bannerbottm.jpg"}
          layout="fill"
          className="object-cover rounded-md object-top h-92   "
          //className="object-cover object-center"
        />
      </div>
    </div>
  );
};

export default Banner;
