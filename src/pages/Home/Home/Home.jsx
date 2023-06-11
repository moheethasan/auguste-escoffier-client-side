import Banner from "../Banner/Banner";
import HiringCompanies from "../HiringCompanies/HiringCompanies";
import Services from "../Services/Services";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      {/*TODO: popular classes section */}
      {/*TODO: popular instructors section */}
      <HiringCompanies></HiringCompanies>
      <Services></Services>
    </>
  );
};

export default Home;
