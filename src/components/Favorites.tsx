import Carousel from "./Carousel";
import "./Favorites.css";

const Favorites = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-4">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1
                id="flash"
                className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900"
              >
                Our flash sale favorites
              </h1>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500"></p>
          </div>
          <div className=" -m-4">
            <Carousel />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Favorites;
