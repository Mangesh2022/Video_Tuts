import Link from "next/dist/client/link";
const Section1 = () => {
  return (
    <div className="my-14 container   mx-auto">
      <div className=" flex mx-24">
        <div className="w-1/2 pl-4  relative">
          <div className="  top-0 left-0 h-full -z-10  w-full">
            <img
              src={"../images/lf-img.png"}
              layout="fill"
              className=""
              //className="object-cover object-center"
            />
          </div>
        </div>
        <div className="w-1/2 pr-4  flex-col flex justify-center align-middle items-start text-left">
          <div className="text-4xl tracking-widest text-black font-semibold">
            <Link href="/Setup_Landing_Page">
              <a>
                Our platform adapts as per your device & internet connectivity
              </a>
            </Link>
          </div>
          <div className="  text-justify pr-10 py-10 leading-6">
            Enjoy smooth streaming of on-demand video lectures today from top
            instructors in subjects like business, computer science, data
            science, language learning, & more.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
