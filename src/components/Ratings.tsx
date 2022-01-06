import RatingsCarousel from "./RatingsCarousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./Ratings.css";

const Ratings = () => {
  return (
    <div>
      <section className="text-black body-font overflow-hidden bg-gray-100">
        <div className="container px-5 py-5 mx-auto">
          <div className="lg:w-full mx-auto flex flex-wrap">
            <div className="lg:w-2/6 w-full lg:h-auto h-64 object-cover object-center">
              <div className="pt-24">
                <h1 id="yesevamain" className="text-4xl text-black font-medium">
                  Rated Excellent by you
                </h1>
              </div>
              <div className="pt-5">
                <h2 id="mont" className="text-lg">
                  Designs and service you can trust - just ask our customers.
                </h2>
              </div>
              <div className="pt-5 text-black">
                <h2 id="mont" className="text-lg">
                  84,435 reviews from <span className="mx-1"></span>
                  <FontAwesomeIcon icon={faStar} color="green" />
                  <span className="mx-1"></span>
                  <span className="font-medium">Trustpilot</span>
                </h2>
              </div>
            </div>
            <div className="lg:w-4/6 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <RatingsCarousel />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ratings;
