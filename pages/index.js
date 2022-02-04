import Hero_Area from "./HOC/hero-area/hero-area-section";
import New_Arrivals from "./HOC/NewArrivals/NewArrivals";
import Services_section from "./HOC/Services_section/Services_section";
import CourseList from "./HOC/CourseList/CourseList";
import Banner from "./HOC/Banner/Banner";
import Section1 from "./HOC/Section1/Section1.";

const Home = () => {
  return (
    <>
      <Hero_Area />
      <Services_section />
      <New_Arrivals />
      <Banner />
      <CourseList />
      <Section1 />
    </>
  );
};

export default Home;
