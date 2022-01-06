import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./RatingsCarousel.css";
import Ratings1 from "./assets/ratings1.jpg";
import Ratings2 from "./assets/ratings2.jpg";
import Ratings3 from "./assets/ratings3.jpg";
import Ratings4 from "./assets/ratings4.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const handleDragStart = (e: any) => e.preventDefault();

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 2 },
};

const items = [
  <div className="m-8 ">
    <div>
      <img
        className=""
        src={Ratings1}
        onDragStart={handleDragStart}
        role="presentation"
      />
    </div>
    <div className="my-4"></div>
    <div className="flex flex-row justify-between pt-4 w-1/3">
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
    </div>
    <div className="my-4"></div>
    <div>
      <p id="mont">
        Made was the only place I could find exactly what I needed at a
        reasonable price and quality. I love it!{" "}
      </p>
    </div>
    <div className="pt-20">
      <p id="mont">Eric</p>
    </div>
  </div>,
  <div className="m-8 ">
    <div>
      <img
        className=""
        src={Ratings2}
        onDragStart={handleDragStart}
        role="presentation"
      />
    </div>
    <div className="my-4"></div>
    <div className="flex flex-row justify-between pt-4 w-1/3">
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
    </div>
    <div className="my-4"></div>
    <div>
      <p id="mont">
        Excellent product, delivered sooner than said. Smooth easy purchase,
        Ilaria lamp looks beautiful.
      </p>
    </div>
    <div className="pt-20">
      <p id="mont">Klaudia</p>
    </div>
  </div>,
  <div className="m-8 ">
    <div>
      <img
        className=""
        src={Ratings3}
        onDragStart={handleDragStart}
        role="presentation"
      />
    </div>
    <div className="my-4"></div>
    <div className="flex flex-row justify-between pt-4 w-1/3">
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
    </div>
    <div className="my-4"></div>
    <div>
      <p id="mont">
        I love my product very much. It was good as the company said. Thank you
        very much! Also, I would recommend you to try it!
      </p>
    </div>
    <div className="pt-20">
      <p id="mont">Martyna</p>
    </div>
  </div>,
  <div className="m-8 ">
    <div>
      <img
        className=""
        src={Ratings4}
        onDragStart={handleDragStart}
        role="presentation"
      />
    </div>
    <div className="my-4"></div>
    <div className="flex flex-row justify-between pt-4 w-1/3">
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
    </div>
    <div className="my-4"></div>
    <div>
      <p id="mont">
        I love my product very much. It was good as the company said. Thank you
        very much! Also, I would recommend you to try it!
      </p>
    </div>
    <div className="pt-20">
      <p id="mont">Martyna</p>
    </div>
  </div>,
];
const RatingsCarousel = () => {
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

export default RatingsCarousel;
