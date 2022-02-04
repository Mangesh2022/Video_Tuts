import {useState} from "react";
import Page1 from "../../DetailPage/Page1";
import Page2 from "../../DetailPage/Page2";
import Page3 from "../../DetailPage/Page3";
import Link from "next/dist/client/link";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="flex flex-row   relative ">
      <div className="w-2/12 h-screen flex mx-1 border-r-2 relative justify-start text-left items-start align-top p-2 flex-col">
        <div className="py-2 flex flex-col text-sm justify-start align-top text-left items-start ">
          <div className="py-4 text-gray-900   font-extrabold tracking-wider ">
            Course Planning
          </div>

          <button
            className={
              toggleState === 1 ? " text-gray-700 py-1" : " text-gray-700 py-1"
            }
            onClick={() => toggleTab(1)}
          >
            Target Audience
          </button>
          <button
            className={
              toggleState === 2 ? " text-gray-700 py-1" : " text-gray-700 py-1"
            }
            onClick={() => toggleTab(2)}
          >
            Course Structuring
          </button>
          <button
            className={
              toggleState === 3 ? " text-gray-700 py-1" : " text-gray-700 py-1"
            }
            onClick={() => toggleTab(3)}
          >
            Create a Test Video
          </button>
        </div>
        <div className="py-2 flex flex-col text-sm justify-start align-top text-left items-start mx-1">
          <div className="py-4 text-gray-900   font-extrabold tracking-wider ">
            Upload your Content
          </div>
          <button
            className={
              toggleState === 4 ? " text-gray-700 py-1" : " text-gray-700 py-1"
            }
            onClick={() => toggleTab(4)}
          >
            Record & Test
          </button>
          <button
            className={
              toggleState === 5 ? " text-gray-700 py-1" : " text-gray-700 py-1"
            }
            onClick={() => toggleTab(5)}
          >
            Add Curriculum
          </button>
          <button
            className={
              toggleState === 6 ? " text-gray-700 py-1" : " text-gray-700 py-1"
            }
            onClick={() => toggleTab(6)}
          >
            Preview Course
          </button>
        </div>
        <div className="py-2 w-full flex flex-col text-sm justify-start align-top text-left items-start ">
          <div className="py-4 text-gray-900   font-extrabold tracking-wider ">
            Publish your Course
          </div>

          <button
            className={
              toggleState === 7 ? " text-gray-700 py-1" : " text-gray-700 py-1"
            }
            onClick={() => toggleTab(7)}
          >
            Setup Landing Page{" "}
          </button>
          <button
            className={
              toggleState === 8 ? " text-gray-700 py-1" : " text-gray-700 py-1"
            }
            onClick={() => toggleTab(8)}
          >
            Add Pricing & Coupons{" "}
          </button>
          <button
            className={
              toggleState === 9
                ? " text-gray-700 py-1 bg-gray-100  w-full flex justify-start"
                : " text-gray-700 py-1   w-full flex justify-start"
            }
            onClick={() => toggleTab(9)}
          >
            Final Touch & Messages{" "}
          </button>
        </div>
        <div className="mt-8 mx-auto w-full mb-4 bg-stone-400 text-sm text-white text-center font-bold rounded-md py-3">
          Submit for Review
        </div>
        <Link href="/">
          <a className="text-sm pl-2 text-purple-700 flex justify-start text-center items-center align-middle">
            Why can&apos;t Submit ?
          </a>
        </Link>
      </div>

      <div className="h-screen w-10/12 m-4">
        <div className={toggleState === 1 ? "block " : " hidden absolute"}>
          <Page1 />
        </div>

        <div className={toggleState === 2 ? "block " : " hidden absolute"}>
          <Page2 />
        </div>

        <div className={toggleState === 3 ? "block " : " hidden absolute"}>
          <Page3 />
        </div>
        <div className={toggleState === 4 ? "block " : " hidden absolute"}>
          <Page2 />
        </div>
        <div className={toggleState === 5 ? "block " : " hidden absolute"}>
          <Page1 />
        </div>
        <div className={toggleState === 6 ? "block " : " hidden absolute"}>
          <Page2 />
        </div>
        <div className={toggleState === 7 ? "block " : " hidden absolute"}>
          <Page1 />
        </div>
        <div className={toggleState === 8 ? "block " : " hidden absolute"}>
          <Page2 />
        </div>
        <div className={toggleState === 9 ? "block " : " hidden absolute"}>
          <Page1 />
        </div>
      </div>
    </div>
  );
}

export default Tabs;
