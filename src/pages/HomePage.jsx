import HeroSection from "../components/HeroSection";
import FeatureSection from "../components/FeatureSection";
import Gallery from "../components/Gallery";
import Cta from "../components/Cta";
import Product from "../components/Product";

function HomePage() {
  return (
    <div>
      <HeroSection />
      <Product />
      <FeatureSection />
      <Gallery />
      <Cta />
    </div>
  );
}

export default HomePage;
