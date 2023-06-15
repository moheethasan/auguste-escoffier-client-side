import Banner from "../Banner/Banner";
import HiringCompanies from "../HiringCompanies/HiringCompanies";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import Services from "../Services/Services";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <PopularClasses></PopularClasses>
      {/* <PopularInstructors></PopularInstructors> */}
      <HiringCompanies></HiringCompanies>
      <Services></Services>
    </>
  );
};

export default Home;
