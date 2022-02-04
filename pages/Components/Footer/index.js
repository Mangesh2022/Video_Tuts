import Newsletter from "../Newsletter/Newsletter";
import Logo from "../Logo/index";
import {
  getCommercialData,
  getHomeImprovementData,
  getResidencialData,
} from "../../../dummy-cleaning-site-data";

const Footer = () => {
  const CommercialData = getCommercialData();
  const ResidenccialData = getResidencialData();
  const HomeImprovementData = getHomeImprovementData();

  return (
    <>
      <Newsletter />
      <div className="bg-white border"></div>
      <div className="bg-gradient-to-r from-purple-800 to-violet-600 py-24">
        <div className="container mx-auto flex flex-row">Footer</div>
      </div>

      <div className="bg-gray-900">
        <div className="container mx-auto text-gray-600">All rights</div>
      </div>
    </>
  );
};

export default Footer;
