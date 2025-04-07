import instra1 from "./assets/images/instra1.jpg";
import instra2 from "./assets/images/instra2.jpg";
import instra3 from "./assets/images/instra3.jpg";
import instra4 from "./assets/images/instra4.jpg";
import instra5 from "./assets/images/instra5.jpg";
import instra6 from "./assets/images/instra6.jpg";

const InstraSection = () => {
  return (
    <div className="instra">
      <div className="instra-item">
        <div className="instra-images">
          <img src={instra1} alt="INSTRA1" />
        </div>
      </div>
      <div className="instra-item">
        <div className="instra-images">
          <img src={instra2} alt="INSTRA2" />
        </div>
      </div>
      <div className="instra-item">
        <div className="instra-images">
          <img src={instra3} alt="INSTRA3" />
        </div>
      </div>
      <div className="instra-item">
        <div className="instra-images">
          <img src={instra4} alt="INSTRA4" />
        </div>
      </div>
      <div className="instra-item">
        <div className="instra-images">
          <img src={instra5} alt="INSTRA5" />
        </div>
      </div>
      <div className="instra-item">
        <div className="instra-images">
          <img src={instra6} alt="INSTRA6" />
        </div>
      </div>
    </div>
  );
};

export default InstraSection;
