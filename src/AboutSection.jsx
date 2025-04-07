import about from "./assets/images/about1.jpg.webp";
import checkMark from "./assets/images/right-arrow.svg";

const AboutSection = () => {
  return (
    <section className="about-sections">
      <div className="about">
        <article className="write-up">
          <div className="write-content">
            <img src={checkMark} alt="CHECK MARK" />
            <p>
              Be the majority have suffered alteration in some form, by injected
              humour.
            </p>
          </div>
          <div className="write-content">
            <img src={checkMark} alt="CHECK MARK" />
            <p>
              Psum available be the majority have suffered alteration in some
              form, by injected humour.
            </p>
          </div>
          <div className="write-content">
            <img src={checkMark} alt="CHECK MARK" />
            <p>
              Available be the majority have suffered alteration in some form,
              by injected humour.
            </p>
          </div>
          <div className="write-content">
            <img src={checkMark} alt="CHECK MARK" />
            <p>
              Humour available be the majority have suffered alteration in some
              form, by injected.
            </p>
          </div>
        </article>
      </div>

      <div className="about-imgs">
        <img src={about} alt="ABOUT IMAGE" />
      </div>

      <div className="about-stories">
        <div className="join">
          <div className="about-line"></div>
          <h1>ABOUT OUR STORY</h1>
        </div>
        <p>
          There are many variations of passages of Lorem Ipsum available be the
          majority have suffered alteration in some form, by injected humour or
          randomised words.
        </p>
        <button className="about-btn">Book Now</button>
      </div>
    </section>
  );
};

export default AboutSection;
