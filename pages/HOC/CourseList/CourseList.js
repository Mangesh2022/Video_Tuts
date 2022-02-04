import {getStepsData} from "../../../dummy-cleaning-site-data";
import StepCard from "../../Components/CourseCards/CourseCards";
import Button from "../../Components/Button/index";
import CourseCards from "../../Components/CourseCards/CourseCards";
const CourseList = () => {
  const stepsData = getStepsData();

  return (
    <div className=" container  mx-auto h-auto  my-8">
      <div className="  mx-4  ">
        <div className="flex-col   flex justify-center align-middle items-center text-center ">
          <div className="text-4xl font-bold">Featured topics by category</div>
        </div>
        <div className="flex full flex-row">
          {stepsData.map((data) => (
            <CourseCards
              title={data.title}
              countInRow="4"
              desc={data.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseList;
