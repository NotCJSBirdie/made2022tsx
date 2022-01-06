import "./InstagramCarousel.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Instagram1 from "./assets/instagram1.jpg";
import Instagram2 from "./assets/instagram2.jpg";
import Instagram3 from "./assets/instagram3.jpg";
import Instagram4 from "./assets/instagram4.jpg";
import Instagram5 from "./assets/instagram5.jpg";
import Instagram6 from "./assets/instagram6.jpg";

const handleDragStart = (e: any) => e.preventDefault();

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 4 },
};

const items = [
  <div className="m-8 ">
    <div>
      <img
        className=""
        src={Instagram1}
        onDragStart={handleDragStart}
        role="presentation"
      />
    </div>
    <div className="flex flex-row justify-between pt-4">
      <h1 id="user">@kintheuk</h1>
    </div>
  </div>,
  <div className="m-8 ">
    <div>
      <img
        className=""
        src={Instagram2}
        onDragStart={handleDragStart}
        role="presentation"
      />
    </div>
    <div className="flex flex-row justify-between pt-4">
      <h1 id="user">@josephinerais</h1>
    </div>
  </div>,
  <div className="m-8 ">
    <div>
      <img
        className=""
        src={Instagram3}
        onDragStart={handleDragStart}
        role="presentation"
      />
    </div>
    <div className="flex flex-row justify-between pt-4">
      <h1 id="user">@god_is_a_neutral</h1>
    </div>
  </div>,
  <div className="m-8 ">
    <div>
      <img
        className=""
        src={Instagram4}
        onDragStart={handleDragStart}
        role="presentation"
      />
    </div>
    <div className="flex flex-row justify-between pt-4">
      <h1 id="user">@camillepinkroses</h1>
    </div>
  </div>,
  <div className="m-8 ">
    <div>
      <img
        className=""
        src={Instagram5}
        onDragStart={handleDragStart}
        role="presentation"
      />
    </div>
    <div className="flex flex-row justify-between pt-4">
      <h1 id="user">@aylevinterior</h1>
    </div>
  </div>,
  <div className="m-8 ">
    <div>
      <img
        className=""
        src={Instagram6}
        onDragStart={handleDragStart}
        role="presentation"
      />
    </div>
    <div className="flex flex-row justify-between pt-4">
      <h1 id="user">@aylevinterior</h1>
    </div>
  </div>,
];

const InstagramCarousel = () => {
  return (
    <div>
      <AliceCarousel
        responsive={responsive}
        mouseTracking
        items={items}
        disableDotsControls
        disableButtonsControls
      />
    </div>
  );
};

export default InstagramCarousel;
