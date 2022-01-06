import "./HeroGallery.css";

const HeroGallery = () => {
  return (
    <div>
      <section className="text-gray-600 body-font m-0">
        <div className="container  mx-auto">
          <div className="flex flex-wrap m-0 text-center bg-blue-600">
            <div className="bg-red-800 sm:w-1/2 m-0 ">
              <h2
                id="sale1"
                className="title-font text-6xl font-medium text-white px-48 pt-48 pb-16 mt-6 mb-3 scale-150"
              >
                F L A S H <br />S A L E
              </h2>
              <p id="dining" className="leading-relaxed text-white text-2xl">
                Dining
              </p>
              <button
                id="limited"
                className="flex mx-auto mt-6 text-white  border-0 py-1 px-2 focus:outline-none hover:bg-gray-400  border-b-2 border-white text-lg"
              >
                Limited Time Only
              </button>
              <div className="my-48"></div>
            </div>
            <div className="bg-green-800 sm:w-1/2 m-0 ">
              <h2
                id="sale1"
                className="title-font text-2xl font-medium text-white px-48 pt-48 pb-16 mt-6 mb-3 scale-150"
              ></h2>
              <p className="leading-relaxed text-white text-2xl"></p>
              <button className="flex mx-auto mt-6 text-white  border-0 py-1 px-2 focus:outline-none hover:bg-gray-400 text-2xl"></button>
              <div className="m-48 opacity-0">
                _______________________________
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroGallery;
