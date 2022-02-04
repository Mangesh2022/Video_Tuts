import Link from "next/link";
import Description from "../Description/Description";

const LinkList = (props) => {
  function CourseStructuringHandler() {
    const tom = "this is the tom";
  }
  return (
    <div>
      <div className="text-gray-800 font-bold text-sm mt-4 mb-2">
        {props.title}
      </div>
      <button onClick={CourseStructuringHandler}>
        <a className="w-full ">
          <div className="px-1 text-sm w-full flex flex-col justify-center text-left align-middle items-start py-2 text-gray-500">
            {props.data1}
          </div>
        </a>
      </button>

      <Link href="/page1">
        <a className="w-full ">
          <div className="px-1 text-sm w-full flex flex-col justify-center text-left align-middle items-start py-2 text-gray-500">
            {props.data2}
          </div>
        </a>
      </Link>
      <Link href="/">
        <a className="w-full ">
          <div className="px-1 text-sm w-full flex flex-col justify-center text-left align-middle items-start py-2 text-gray-500">
            {props.data3}
          </div>
        </a>
      </Link>
    </div>
  );
};

export default LinkList;
