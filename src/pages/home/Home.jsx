import StarRating from "./StarRating";
import Header from "../../Header";
import AboutSection from "../../AboutSection";
import BarberSection from "../../BarberSection";
import AccordionSecton from "../../AccordionSecton";
import ServiceSection from "../../ServiceSection";
import InstraSection from "../../InstraSection";
import CommentSection from "../../CommentSection";
import "./home.css";
const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <AboutSection />
      <BarberSection />
      <AccordionSecton />
      <ServiceSection />
      <InstraSection />
      <CommentSection />
    </div>
  );
};

export default Home;
