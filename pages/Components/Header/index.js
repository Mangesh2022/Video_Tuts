import Dropdown from "../../Components/Dropdown/Dropdown";
import Button from "../Button";
import {useState} from "react";

const Header = () => {
  const [selected, setSelected] = useState("Browse Category");
  return (
    <>
      <header>
        <div class=" z-10 border-b border-gray-200 py-4">
          <div class="container  mx-auto px-4">
            <div class="flex justify-between ">
              <div class="flex flex-col justify-center text-center items-center align-middle">
                <a href="/">
                  <img src="images/logo.png" className="h-8 " />
                </a>
                <div className="text-xs">Eduba Pvt Ltd</div>
              </div>
              <div class="flex items-center ml-24">
                <div class="relative">
                  <div class="py-1 px-8   text-black-500 font-500 text-sm">
                    <a>
                      <Dropdown selected={selected} setSelected={setSelected} />
                    </a>
                  </div>
                </div>
                <div class="flex flex-row items-center ml-2 shadow-2xl   rounded-md overflow-hidden">
                  <div class="border flex w-96">
                    <input
                      type="text"
                      class=" py-3  px-3 text-black-400 text-sm pl-4"
                      placeholder="Search for Product"
                    />
                    <button class=" text-base items-end justify-end align-top text-right w-full py-2 px-4 flex">
                      <i class="">O</i>
                    </button>
                  </div>
                </div>
              </div>

              <div class="flex justify-end items-center  flex-1">
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
