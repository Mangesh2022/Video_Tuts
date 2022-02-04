import Dropdown from "../../Components/Dropdown/Dropdown";
import Button from "../Button";
import Link from "next/link";
import {useState} from "react";

const Header = () => {
  const [selected, setSelected] = useState("Browse Category");
  return (
    <>
      <header>
        <div className=" z-10 border-b border-gray-200 py-4">
          <div className="container  mx-auto px-4">
            <div className="flex justify-between ">
              <div className="flex flex-col justify-center text-center items-center align-middle">
                <Link href="/">
                  <img src="images/logo.png" className="h-8 " />
                </Link>
                <div className="text-xs">Eduba Pvt Ltd</div>
              </div>
              <div className="flex items-center ml-24">
                <div className="relative">
                  <div className="py-1 px-8   text-black-500 font-500 text-sm">
                    <a>
                      <Dropdown selected={selected} setSelected={setSelected} />
                    </a>
                  </div>
                </div>
                <div className="flex flex-row items-center ml-2 shadow-2xl   rounded-md overflow-hidden">
                  <div className="border flex w-96">
                    <input
                      type="text"
                      className=" py-3  px-3 text-black-400 text-sm pl-4"
                      placeholder="Search for Product"
                    />
                    <button className=" text-base items-end justify-end align-top text-right w-full py-2 px-4 flex">
                      <i className="">O</i>
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex justify-end items-center  flex-1">
                <Button>Sign In</Button>
                <Button type="primery">Sign Up</Button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
