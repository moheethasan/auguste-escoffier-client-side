import { Fade } from "react-awesome-reveal";
import company1 from "../../../assets/company/company1.png";
import company2 from "../../../assets/company/company2.png";
import company3 from "../../../assets/company/company3.png";
import company4 from "../../../assets/company/company4.png";
import company5 from "../../../assets/company/company5.png";
import company6 from "../../../assets/company/company6.png";
import company7 from "../../../assets/company/company7.png";
import company8 from "../../../assets/company/company8.png";

const HiringCompanies = () => {
  return (
    <div className="container mx-auto py-10 mb-20">
      <h1 className="text-center text-4xl md:text-5xl font-bold pb-3">
        <span className="title-text">
          Company that Hire Escoffier Graduates
        </span>
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-5 lg:gap-8 xl:gap-10 mt-24 px-4">
        <Fade duration={2000} delay={100} cascade>
          <img
            className="w-full mx-auto bg-white p-5 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl"
            src={company1}
            alt="company"
          />
        </Fade>
        <Fade duration={2000} delay={100} cascade>
          <img
            className="w-full mx-auto bg-white p-5 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl"
            src={company2}
            alt="company"
          />
        </Fade>
        <Fade duration={2000} delay={100} cascade>
          <img
            className="w-full mx-auto bg-white p-5 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl"
            src={company3}
            alt="company"
          />
        </Fade>
        <Fade duration={2000} delay={100} cascade>
          <img
            className="w-full mx-auto bg-white p-5 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl"
            src={company4}
            alt="company"
          />
        </Fade>
        <Fade duration={2000} delay={100} cascade>
          <img
            className="w-full mx-auto bg-white p-5 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl"
            src={company5}
            alt="company"
          />
        </Fade>
        <Fade duration={2000} delay={100} cascade>
          <img
            className="w-full mx-auto bg-white p-5 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl"
            src={company6}
            alt="company"
          />
        </Fade>
        <Fade duration={2000} delay={100} cascade>
          <img
            className="w-full mx-auto bg-white p-5 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl"
            src={company7}
            alt="company"
          />
        </Fade>
        <Fade duration={2000} delay={100} cascade>
          <img
            className="w-full mx-auto bg-white p-5 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl"
            src={company8}
            alt="company"
          />
        </Fade>
      </div>
    </div>
  );
};

export default HiringCompanies;
