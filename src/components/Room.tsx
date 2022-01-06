import Room1 from "./assets/room1.jpg";
import Room2 from "./assets/room2.jpg";
import Room3 from "./assets/room3.jpg";
import "./Room.css";

const Room = () => {
  return (
    <div>
      <h1 id="yesevamain" className="mx-8 text-black text-3xl font-medium">
        Shop By Room
      </h1>
      <section className="text-gray-600 body-font">
        <div className="container  py-12 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="md:w-1/3">
              <div className="h-full  overflow-hidden">
                <img
                  className="lg:h-96 md:h-36 w-full object-cover object-center"
                  src={Room1}
                  alt="blog"
                />
                <div className="p-6">
                  <h2
                    id="yeseva"
                    className="relative z-50 bottom-16 tracking-widest text-xl title-font font-medium text-white mb-1"
                  >
                    Living Room
                  </h2>
                </div>
              </div>
            </div>
            <div className="md:w-1/3">
              <div className="h-full  overflow-hidden">
                <img
                  className="lg:h-96 md:h-36 w-full object-cover object-center"
                  src={Room3}
                  alt="blog"
                />
                <div className="p-6">
                  <h2
                    id="yeseva"
                    className="relative z-50 bottom-16 tracking-widest text-xl title-font font-medium text-white mb-1"
                  >
                    Bedroom
                  </h2>
                </div>
              </div>
            </div>
            <div className=" md:w-1/3">
              <div className="h-full overflow-hidden">
                <img
                  className="lg:h-96 md:h-36 w-full object-cover object-center"
                  src={Room2}
                  alt="blog"
                />
                <div className="p-6">
                  <h2
                    id="yeseva"
                    className="relative z-50 bottom-16 tracking-widest text-lg title-font font-medium text-white mb-1"
                  >
                    Dining Room
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Room;
