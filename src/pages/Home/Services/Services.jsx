import banner from "../../../assets/home/banner6.jpg";
import service1 from "../../../assets/icons/icon1.png";
import service2 from "../../../assets/icons/icon2.png";
import service4 from "../../../assets/icons/icon4.png";
import service5 from "../../../assets/icons/icon5.png";
import service6 from "../../../assets/icons/icon6.png";
import service7 from "../../../assets/icons/icon7.png";

const WhyChooseUs = () => {
  const backgroundImageStyle = {
    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('${banner}')`,
  };

  return (
    <div
      className="bg-fixed bg-cover bg-center py-32 px-4"
      style={backgroundImageStyle}
    >
      <h1 className="text-center text-4xl md:text-5xl font-bold pb-3 text-white">
        Why Choose <span className="title-text">Escoffier</span>
      </h1>
      <div className="w-28 md:w-32 lg:w-40 h-1 bg-red-700 mx-auto"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
        <div className="card hover:bg-base-100 hover:bg-opacity-5 hover:shadow-2xl text-white">
          <img
            className="w-20 h-20 mx-auto mt-10"
            src={service1}
            alt="service"
          />
          <div className="card-body gap-0 p-5">
            <h2 className="text-xl font-bold text-center">
              Online or On-Campus
            </h2>
            <h4 className="text-center">123 Culinary Street, Foodville</h4>
          </div>
        </div>
        <div className="card hover:bg-base-100 hover:bg-opacity-5 hover:shadow-2xl text-white">
          <img
            className="w-20 h-20 mx-auto mt-10"
            src={service2}
            alt="service"
          />
          <div className="card-body gap-0 p-5">
            <h2 className="text-xl font-bold text-center">
              Business-Focused Curriculum
            </h2>
            <h4 className="text-center">Including Entrepreneurship</h4>
          </div>
        </div>
        <div className="card hover:bg-base-100 hover:bg-opacity-5 hover:shadow-2xl text-white">
          <img
            className="w-20 h-20 mx-auto mt-10"
            src={service4}
            alt="service"
          />
          <div className="card-body gap-0 p-5">
            <h2 className="text-xl font-bold text-center">Career Assistance</h2>
            <h4 className="text-center">Ongoing Support</h4>
          </div>
        </div>
        <div className="card hover:bg-base-100 hover:bg-opacity-5 hover:shadow-2xl text-white">
          <img
            className="w-20 h-20 mx-auto mt-10"
            src={service5}
            alt="service"
          />
          <div className="card-body gap-0 p-5">
            <h2 className="text-xl font-bold text-center">
              Heritage of Auguste Escoffier
            </h2>
            <h4 className="text-center">The Legendary Chef</h4>
          </div>
        </div>
        <div className="card hover:bg-base-100 hover:bg-opacity-5 hover:shadow-2xl text-white">
          <img
            className="w-20 h-20 mx-auto mt-10"
            src={service6}
            alt="service"
          />
          <div className="card-body gap-0 p-5">
            <h2 className="text-xl font-bold text-center">
              Sustainable Practices
            </h2>
            <h4 className="text-center">Featuring Farm to Table Experience</h4>
          </div>
        </div>
        <div className="card hover:bg-base-100 hover:bg-opacity-5 hover:shadow-2xl text-white">
          <img
            className="w-20 h-20 mx-auto mt-10"
            src={service7}
            alt="service"
          />
          <div className="card-body gap-0 p-5">
            <h2 className="text-xl font-bold text-center">
              Personalized Attention
            </h2>
            <h4 className="text-center">And Support</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
