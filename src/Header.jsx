import scissors from "./assets/images/scissors.svg";
import heroImg from "./assets/images/h1_hero1.jpg";

const Header = () => {
  return (
    <header className="home-header">
      <div className="container">
        <img src={scissors} alt="HEADER ICON" className="iconss" />
        <h2>WE'RE THE LAST OF BREED</h2>
        <p>Achieve Your Dream Style</p>
        <button className="btn-header">Book Now</button>
      </div>
      <div className="heros-img">
        <img src={heroImg} alt="HERO IMAGE" className="responsive-img" />
      </div>
    </header>
  );
};

export default Header;
