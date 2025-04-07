import about2 from "./assets/images/about2.jpg.webp";
import Accordion from "./functionalities/Accordion";
const AccordionSecton = () => {
  return (
    <div className="accordion-section">
      <div className="accordion-price-list">
        <div className="line"></div>
        <h1>All We Do for You</h1>
        <div className="accordion-content">
          <Accordion />
        </div>
      </div>
      <div className="accordion-img">
        <img src={about2} alt="ACCORDION IMAGE" />
      </div>
    </div>
  );
};

export default AccordionSecton;
