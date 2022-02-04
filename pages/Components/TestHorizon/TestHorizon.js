import TargetAudience from "../../LeftSideLinkListOption/TargetAudience";
import Tabs from "../TabsLeft/TabsLeft";

const Test_Horizontal_Layout = (props) => {
  return (
    <div className="flex">
      <div className="w-full">
        <Tabs />
      </div>
      <div className="w-2/12">
        <TargetAudience />
      </div>
    </div>
  );
};
export default Test_Horizontal_Layout;
