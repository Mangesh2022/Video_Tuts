import Button from "../Button/index";
const Newsletter = () => {
  return (
    <div className="bg-gradient-to-l from-purple-800 to-purple-800 via-pink-700 text-white">
      <div className="container flex-row flex mx-auto items-center align-middle  py-2 ">
        <div className="w-1/4 text-xl ml-10 ">Sign up to Newsletter</div>
        <div className="w-1/4 text-sm ">
          ...and receive 20 coupon On first Booking
        </div>
        <div className="w-2/4  ml-40 flex flex-row justify-end align-middle items-center ">
          <div className="mr-2  border w-full  bg-white text-gray-500 text-base p-1 rounded-sm text-left">
            <input placeholder="Enter your email address" />
          </div>
          <Button>Send</Button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
