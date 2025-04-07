import { data } from "./pages/home/homeData";
import serviceSectionImage from "./assets/images/section-bg.jpg";

const ServiceSection = () => {
  return (
    <div className="service-container">
      <div className="service-sectionImg">
        <img src={serviceSectionImage} alt="SECTION-IMAGE" />
      </div>

      {data.map((datas, index) => {
        const { title, details, image } = datas;
        return (
          <div className="service-display" key={index}>
            <div className="xtra">
              <img src={image} alt={title} />
              <h3>{title}</h3>
              <p>{details}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ServiceSection;
