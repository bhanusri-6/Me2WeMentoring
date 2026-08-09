import AboutSection from '../Components/Home/AboutSection'
import HeroSection from '../Components/Home/HeroSection'
import Testimonals from '../Components/Home/Testimonals'
import Systemsection from '../Components/Home/Systemsection'
import Network from '../Components/Home/Network'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");

      setTimeout(() => {
        const element = document.getElementById(id);

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
    }
  }, [location]);
  return (
    <div>
        <HeroSection/>
        <AboutSection/>
        <Systemsection />
        <Network/>
        <Testimonals/>
    </div>
  )
}

export default Home
