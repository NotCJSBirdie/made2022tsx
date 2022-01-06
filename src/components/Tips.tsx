import TipsCarousel from "./TipsCarousel";
import "./Tips.css";

const Tips = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-5 mx-auto">
          <div className="text-center flex flex-wrap justify-center items-center w-full mb-4">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1
                id="yesevamain"
                className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900"
              >
                Discover handy tips and styling inspiration
              </h1>
            </div>
          </div>
          <div className=" -m-4">
            <TipsCarousel />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tips;
