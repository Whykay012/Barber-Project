import React from "react";
import ServiceSection from "../../ServiceSection";
import CommentSection from "../../CommentSection";
import hero2 from "../../assets/images/hero2.jpg";
import AccordionSecton from "../../AccordionSecton";
const Service = () => {
  return (
    <>
      <header className="home-headerss">
        <div className="containerss">
          <h1>Service </h1>
          <img src={hero2} alt="Servive Hero Image" />
        </div>
      </header>
      <AccordionSecton />
      <ServiceSection />
      <CommentSection />
    </>
  );
};

export default Service;
