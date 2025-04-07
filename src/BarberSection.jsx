import barber1 from "./assets/images/barber1.jpg.webp";
import barber2 from "./assets/images/barber2.jpg.webp";
import barber3 from "./assets/images/barber3.jpg.webp";
import barber4 from "./assets/images/barber4.jpg.webp";
import barber5 from "./assets/images/barber5.jpg.webp";
import barber6 from "./assets/images/barber6.jpg.webp";

const BarberSection = () => {
  return (
    <main className="main">
      <div className="barber-section">
        <div className="barber-img">
          <img src={barber1} alt="BARBER1" />
        </div>
        <div className="barber-img">
          <img src={barber2} alt="BARBER2" />
        </div>
        <div className="barber-img">
          <img src={barber3} alt="BARBER3" />
        </div>
        <div className="barber-img">
          <img src={barber4} alt="BARBER4" />
        </div>
        <div className="barber-img">
          <img src={barber5} alt="BARBER5" />
        </div>
        <div className="barber-img">
          <img src={barber6} alt="BARBER6" />
        </div>
      </div>
      <div className="barber-price">
        <div className="line"></div>
        <h1>OUR TOP PRICES</h1>
        <hr />
        <div className="prices">
          <p>Special Beard Treatment</p>
          <span>From $40</span>
        </div>
        <div className="prices">
          <p>Special Beard Treatment</p>
          <span>From $40</span>
        </div>
        <div className="prices">
          <p>Color your Beard</p>
          <span>From $40</span>
        </div>
        <div className="prices">
          <p>Wax your Beard</p>
          <span>From $40</span>
        </div>
        <div className="prices">
          <p>Wax your Beard</p>
          <span>From $40</span>
        </div>
      </div>
    </main>
  );
};

export default BarberSection;
