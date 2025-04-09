import hero1 from "../../assets/images/hero1.jpg";
import AboutSection from "../../AboutSection";
import AccordionSecton from "../../AccordionSecton";
import ServiceSection from "../../ServiceSection";
import InstraSection from "../../InstraSection";
import CommentSection from "../../CommentSection";
import "./about.css";

const About = () => {
  return (
    <div>
      <div className="home-headerss">
        <div className="containerss">
          <h1>About Us </h1>
          <img src={hero1} alt="About Image" />
        </div>
      </div>
      <AboutSection />
      <AccordionSecton />
      <ServiceSection />
      <InstraSection />
      <CommentSection />
    </div>
  );
};

export default About;
