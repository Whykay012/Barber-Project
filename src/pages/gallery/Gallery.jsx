import hero3 from "../../assets/images/hero3.jpg";
import instra1 from "../../assets/images/instra1.jpg";
import instra2 from "../../assets/images/instra2.jpg";
import instra3 from "../../assets/images/instra3.jpg";
import instra4 from "../../assets/images/instra4.jpg";
import instra5 from "../../assets/images/instra5.jpg";
import instra6 from "../../assets/images/instra6.jpg";
import "./gallery.css";
const Gallery = () => {
  return (
    <div>
      <header className="home-headerss">
        <div className="containerss">
          <h1>Gallery</h1>
          <img src={hero3} alt="Gallery Hero Image" />
        </div>
      </header>
      <div className="gallery-img">
        <div className="line"></div>
        <h2>GALLERY</h2>
      </div>
      <div className="img-display">
        <div className="gal-instra">
          <div className="gal-instra-item">
            <div className="gal-instra-images">
              <img src={instra1} alt="gal-instra1" />
            </div>
          </div>
          <div className="gal-instra-item">
            <div className="gal-instra-images">
              <img src={instra2} alt="gal-instra2" />
            </div>
          </div>
          <div className="gal-instra-item">
            <div className="gal-instra-images">
              <img src={instra3} alt="gal-instra3" />
            </div>
          </div>
          <div className="gal-instra-item">
            <div className="gal-instra-images">
              <img src={instra4} alt="gal-instra4" />
            </div>
          </div>
          <div className="gal-instra-item">
            <div className="gal-instra-images">
              <img src={instra5} alt="gal-instra5" />
            </div>
          </div>
          <div className="gal-instra-item">
            <div className="gal-instra-images">
              <img src={instra6} alt="gal-instra6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
