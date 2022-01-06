import InstagramCarousel from "./InstagramCarousel";
import "./Instagram.css";

const Instagram = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-7 py-24 mx-auto">
          <div className="flex flex-wrap justify-between items-center w-full mb-4">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1
                id="top"
                className="sm:text-3xl text-2xl font-medium title-font mb-2 text-black"
              >
                Shop on Instagram
              </h1>
              <h2
                id="bottom"
                className="sm:text-md text-md  title-font mb-2 text-black"
              >
                Less than humble about your abode? Mention @madedotcom in your
                photos and we'll feature the best pics on our site.
              </h2>
            </div>
            <div className="text-right ">
              <button className="w-24">
                <p
                  id="bottom"
                  className="lg:w-full w-full leading-relaxed text-black p-1 border-b-2 border-black text-sm "
                >
                  View Gallery
                </p>
              </button>
            </div>
          </div>
          <div className=" -m-4">
            <InstagramCarousel />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Instagram;
