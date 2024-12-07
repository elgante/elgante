import HeroSection from "../HeroSection";
import MySkills from "../MySkills";
import AboutMe from "../AboutMe";
import MyPortfolio from "../MyPortfolio";
//import Testimonials from "../Testimonials";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
//import GraphicDesignePortfolio from "../GraphicDesignGallery";

export default function Home() {
  return (
    //react fragments to avoid empty divs
    //add Testimonials
    <>
      <HeroSection />
      <MyPortfolio />

      <AboutMe />
      <MySkills />
      <ContactMe />
      <Footer />
    </>
  );
}
