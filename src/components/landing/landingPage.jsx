import React from "react";
import Header from "./header/header";
import About from "./about/about";
import Consultation from "./consultation/consultation";
import Services from "./services/services";



const Landing = (props) => {

  return (
    <>
      <Header />
      <About />
      <Services {...props}/>
      <Consultation />
      
    </>
  );
};

export default Landing;
