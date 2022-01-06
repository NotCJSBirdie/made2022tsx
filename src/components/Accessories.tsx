import AccessoriesPic from "./assets/accessories.jpg";
import "./Accessories.css";

const Accessories = () => {
  return (
    <div>
      <section className="text-black body-font overflow-hidden">
        <div className="container mx-auto">
          <div className="-my-8 divide-y-2 divide-gray-100">
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="ml-8 md:w-64 md:mb-0 mb-6 flex-grow flex flex-col border-t-2 border-gray-400">
                <span className="font-semibold title-font text-gray-700">
                  <h1 id="top" className="pr-12 pt-8 pb-4 text-4xl">
                    The Art of Accessorising
                  </h1>
                </span>
                <span id="bottom" className="mt-1 text-gray-500 text-md">
                  Creating your dream home? The you'll know it's all in the
                  details. From statement lamps and eye-catching wall art to
                  plush textiles and scented candles, we'll help you get the
                  little things right - and deliver them fast on express
                  dispatch.
                </span>
                <div className="my-8"></div>
                <button className="w-32 text-left">
                  <span
                    id="bottom"
                    className="mt-1 text-gray-500 text-sm border-b-2 border-gray-700 py-1"
                  >
                    Shop now
                  </span>
                </button>
              </div>
              <div className="ml-4 md:flex-grow">
                <img
                  src={AccessoriesPic}
                  alt="accessories"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Accessories;
