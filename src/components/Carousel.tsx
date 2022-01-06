import "./Carousel.css";
import Favorite1 from "./assets/favorite1.jpg";
import Favorite2 from "./assets/favorite2.jpg";
import Favorite3 from "./assets/favorite3.jpg";
import Favorite4 from "./assets/favorite4.jpg";
import Favorite5 from "./assets/favorite5.jpg";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

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
        src={Favorite1}
        onDragStart={handleDragStart}
        role="presentation"
      />
    </div>
    <div id="top" className="flex flex-row justify-between pt-4">
      <h1>Hollie</h1>
      <h1>
        <span className="mr-2 text-red-700">£29</span>
        <span className="line-through text-gray-600">£29</span>
      </h1>
    </div>
    <div id="bottom" className="py-1">
      <h1>Set of 6 Ribbed Glass Tumblers</h1>
    </div>
  </div>,
  <div className="m-8 ">
    <div>
      <img
        className=""
        src={Favorite2}
        onDragStart={handleDragStart}
        role="presentation"
      />
    </div>
    <div id="top" className="flex flex-row justify-between pt-4">
      <h1>Lucien</h1>
      <h1>
        <span className="mr-2 text-red-700">£599</span>
        <span className="line-through text-gray-600">£749</span>
      </h1>
    </div>
    <div id="bottom" className="py-1">
      <h1>6-8 Extending Dining Table, Light Mango Wood</h1>
    </div>
  </div>,
  <div className="m-8 ">
    <div>
      <img
        className=""
        src={Favorite3}
        onDragStart={handleDragStart}
        role="presentation"
      />
    </div>
    <div id="top" className="flex flex-row justify-between pt-4">
      <h1>Taryn</h1>
      <h1>
        <span className="mr-2 text-red-700">£69</span>
        <span className="line-through text-gray-600">£89</span>
      </h1>
    </div>
    <div id="bottom" className="py-1">
      <h1>12-piece Porcelain Dinner Set, White & Gold</h1>
    </div>
  </div>,
  <div className="m-8 ">
    <div>
      <img
        className=""
        src={Favorite4}
        onDragStart={handleDragStart}
        role="presentation"
      />
    </div>
    <div id="top" className="flex flex-row justify-between pt-4">
      <h1>Amalyn</h1>
      <h1>
        <span className="mr-2 text-red-700">£29</span>
        <span className="line-through text-gray-600">£29</span>
      </h1>
    </div>
    <div id="bottom" className="py-1">
      <h1>Set of 2 Dining Chairs</h1>
    </div>
  </div>,
  <div className="m-8 ">
    <div>
      <img
        className=""
        src={Favorite5}
        onDragStart={handleDragStart}
        role="presentation"
      />
    </div>
    <div id="top" className="flex flex-row justify-between pt-4">
      <h1>Hollie</h1>
      <h1>
        <span className="mr-2 text-red-700">£29</span>
        <span className="line-through text-gray-600">£29</span>
      </h1>
    </div>
    <div id="bottom" className="py-1">
      <h1>Set of 6 Ribbed Glass Tumblers</h1>
    </div>
  </div>,
  <div className="m-8 ">
    <div>
      <img
        className=""
        src={Favorite1}
        onDragStart={handleDragStart}
        role="presentation"
      />
    </div>
    <div id="top" className="flex flex-row justify-between pt-4">
      <h1>Lucien</h1>
      <h1>
        <span className="mr-2 text-red-700">£29</span>
        <span className="line-through text-gray-600">£29</span>
      </h1>
    </div>
    <div id="bottom" className="py-1">
      <h1>Set of 6 Ribbed Glass Tumblers</h1>
    </div>
  </div>,
];

const Carousel = () => {
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

export default Carousel;
