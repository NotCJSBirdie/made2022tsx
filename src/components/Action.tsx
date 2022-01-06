import Action1 from "./assets/Action1.jpg";
import Action2 from "./assets/Action2.jpg";
import Action3 from "./assets/Action3.jpg";
import "./Action.css";

const Action = () => {
  return (
    <div className="flex flex-col pt-12">
      <div className="w-full text-center">
        <h1 id="yesevamain" className="text-3xl">
          All you need to create your happy place
        </h1>
      </div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-5 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="h-full  border-opacity-60  overflow-hidden">
                <img
                  className="lg:h-auto md:h-36 w-full object-cover object-center"
                  src={Action1}
                  alt="blog"
                />
                <div className="py-6 pr-6">
                  <h1
                    id="yeseva"
                    className="title-font text-2xl font-medium text-gray-900 mb-3"
                  >
                    Visit our showrooms
                  </h1>
                  <p id="mont" className="leading-relaxed mb-3">
                    See you favourite MADE items and try before you buy.
                  </p>
                  <div className="flex items-center flex-wrap underline ">
                    <p id="mont">Find your nearest showroom</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full  border-opacity-60  overflow-hidden">
                <img
                  className="lg:h-auto md:h-36 w-full object-cover object-center"
                  src={Action2}
                  alt="blog"
                />
                <div className="py-6 pr-6">
                  <h1
                    id="yeseva"
                    className="title-font text-2xl font-medium text-gray-900 mb-3"
                  >
                    See it in your space
                  </h1>
                  <p id="mont" className="leading-relaxed mb-3">
                    View 3D products in your room with our free i0S app.
                  </p>
                  <div className="flex items-center flex-wrap underline ">
                    <p id="mont">Download the app</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-auto  border-opacity-60  overflow-hidden">
                <img
                  className="lg:h-auto md:h-36 w-full object-cover object-center"
                  src={Action3}
                  alt="blog"
                />
                <div className="py-6 pr-6">
                  <h1
                    id="yeseva"
                    className="title-font text-2xl font-medium text-gray-900 mb-3"
                  >
                    Free design advice
                  </h1>
                  <p id="mont" className="leading-relaxed mb-3">
                    Get tailored style or product advice from our showroom team.
                  </p>
                  <div className="flex items-center flex-wrap underline ">
                    <p id="mont">Book an appointment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Action;
