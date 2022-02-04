import {getStepsData} from "../../../dummy-cleaning-site-data";
import StepCard from "../../Components/CourseCards/CourseCards";
import Button from "../../Components/Button/index";
import CourseCards from "../../Components/CourseCards/CourseCards";
const New_Arrivals = () => {
  const stepsData = getStepsData();

  return (
    <div className=" container  mx-auto h-auto  my-8">
      <div className=" flex flex-row mr-2 ">
        <div className="flex-col w-2/6  flex justify-center align-top items-start text-left ml-4">
          <div className="text-4xl font-bold">Browse our New Addtions</div>
          <div className="text-base mt-4 text-gray-700 font-medium">
            Cum doctus civibus efficiantur in imperdiet deterruisset. Cum doctus
            civibus efficiantur in imperdiet deterruisset.
          </div>
        </div>
        <div className="flex w-4/6 full flex-row">
          {stepsData.map((data) => (
            <CourseCards title={data.title} desc={data.description} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default New_Arrivals;
