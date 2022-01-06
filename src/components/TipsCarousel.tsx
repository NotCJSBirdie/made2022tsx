import "./TipsCarousel.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Tips1 from "./assets/tips1.jpg";
import Tips2 from "./assets/tips2.jpg";
import Tips3 from "./assets/tips3.jpg";
import Tips4 from "./assets/tips4.jpg";
import Tips5 from "./assets/tips5.jpg";
import Tips6 from "./assets/tips6.jpg";

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
        src={Tips1}
        onDragStart={handleDragStart}
        role="presentation"
      />
    </div>
    <div className="flex flex-row justify-between pt-4">
      <h1 id="mont">Wine lovers' tips on dressing the dinner table</h1>
    </div>
  </div>,
  <div className="m-8 ">
    <div>
      <img
        className=""
        src={Tips2}
        onDragStart={handleDragStart}
        role="presentation"
      />
    </div>
    <div className="flex flex-row justify-between pt-4">
      <h1 id="mont">
        Let's stick together: picking statement furniture that lasts
      </h1>
    </div>
  </div>,
  <div className="m-8 ">
    <div>
      <img
        className=""
        src={Tips3}
        onDragStart={handleDragStart}
        role="presentation"
      />
    </div>
    <div className="flex flex-row justify-between pt-4">
      <h1 id="mont">Exploring a set designer's old-meets-new apartment</h1>
    </div>
  </div>,
  <div className="m-8 ">
    <div>
      <img
        className=""
        src={Tips4}
        onDragStart={handleDragStart}
        role="presentation"
      />
    </div>
    <div className="flex flex-row justify-between pt-4">
      <h1 id="mont">Get(table) set for Christmas</h1>
    </div>
  </div>,
  <div className="m-8 ">
    <div>
      <img
        className=""
        src={Tips5}
        onDragStart={handleDragStart}
        role="presentation"
      />
    </div>
    <div className="flex flex-row justify-between pt-4">
      <h1 id="mont">
        Changing traditions is a new way to host a Christmas dinner
      </h1>
    </div>
  </div>,
  <div className="m-8 ">
    <div>
      <img
        className=""
        src={Tips6}
        onDragStart={handleDragStart}
        role="presentation"
      />
    </div>
    <div className="flex flex-row justify-between pt-4">
      <h1 id="mont">And the rest goes on right here...</h1>
    </div>
  </div>,
];
const TipsCarousel = () => {
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

export default TipsCarousel;
