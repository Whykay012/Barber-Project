import { accordionItem } from "./accordionDate";
import { useContextFunc } from "./Context";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const Accordion = () => {
  const { toggleAccordion, accordion } = useContextFunc();

  return (
    <div>
      {accordionItem.map((item, index) => {
        const isActive = accordion === index;
        return (
          <div key={index} className="items">
            <div
              className={`items-contents ${isActive ? "active" : ""}`} // Dynamically set the class based on the active state
              onClick={() => toggleAccordion(index)}
            >
              <div className="item-title">
                <h3>{item.title}</h3>
              </div>
              <div className={`dynamic-arrow ${isActive ? "rotate" : ""}`}>
                {isActive ? <FaChevronUp /> : <FaChevronDown />}
              </div>
            </div>
            <div className={`accordion-toggle ${isActive ? "active" : ""}`}>
              <ul>
                {item.content.map((content, index) => (
                  <li className="show" key={index}>
                    <p>{content.name}</p>
                    <span>from ${content.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
