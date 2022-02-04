import CourseStructuring from "../../LeftSideLinkListOption/CourseStructuring";
import TargetAudience from "../../LeftSideLinkListOption/TargetAudience";

const Horizontal_Layout = (props) => {
  return (
    <div className="flex">
      <div className="w-2/12 ">
        <CourseStructuring />
      </div>
      <div className="flex w-full flex-col justify-start items-center align-middle text-left">
        <main>{props.children}</main>
      </div>
      <div className="w-2/12">
        <TargetAudience />
      </div>
    </div>
  );
};
export default Horizontal_Layout;
