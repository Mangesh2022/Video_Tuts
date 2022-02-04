import Link from "next/link";
import LinkList from "../Components/LinkList/LinkList";
const CourseStructuring = () => {
  const LeftSideLinkListData = [
    {
      id: "100",
      title: "Course Planning",
      data1: "Target Audience",
      data2: "Course Structuring",
      data3: "Create a Test Video",
    },
    {
      id: "101",
      title: "Upload your Content",
      data1: "Record & Test",
      data2: "Add Curriculum",
      data3: "Preview Course",
    },
    {
      id: "102",
      title: "Publish your Course",
      data1: "Setup Landing Page",
      data2: "Add Pricing & Coupons",
      data3: "Final Touch & Messages",
    },
  ];

  return (
    <div className="w-full flex flex-row">
      <div className="border-r-2 border-gray-300 w-full flex p-2 flex-col justify-start h-screen bg-stone-200  ">
        <div className=" flex flex-col h-32">
          {LeftSideLinkListData.map((data) => {
            return (
              <LinkList
                key={""}
                title={data.title}
                data1={data.data1}
                data2={data.data2}
                data3={data.data3}
                id={data.id}
              />
            );
          })}

          <div className="mx-2 mt-8 mb-4 bg-stone-400 text-sm text-white text-center font-bold rounded-md py-3">
            Submit for Review
          </div>
          <Link href="/">
            <a className="text-sm pl-2 text-purple-700 flex justify-start text-center items-center align-middle">
              Why can&apos;t Submit ?
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseStructuring;
