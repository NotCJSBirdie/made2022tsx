import "./App.css";
import Carousel from "./components/Carousel";
import Header from "./components/Header";
import HeroGallery from "./components/HeroGallery";
import HeroGallery2 from "./components/HeroGallery2";
import Favorites from "./components/Favorites";
import Accessories from "./components/Accessories";
import Instagram from "./components/Instagram";
import Room from "./components/Room";
import Tips from "./components/Tips";
import Ratings from "./components/Ratings";
import Action from "./components/Action";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import Sale from "./components/Sale";

function App() {
  return (
    <div className="overflow-hidden">
      <Sale />
      <Header />
      <HeroGallery />
      <HeroGallery2 />
      <Favorites />
      <Accessories />
      <Instagram />
      <Room />
      <Tips />
      <Ratings />
      <Action />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
