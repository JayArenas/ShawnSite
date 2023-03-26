import React from "react";
import {BsHeartFill} from 'react-icons/bs';
import "./headerStyles.css";

const Header = () => {

  const iconStyles = {
    color: "red" 
  }
  
  return (
  <div className="header-container">
    <div className="overlay text-center">
      <h4 className="display-1 text-white font-weight-bold my-3">
        I  <BsHeartFill style={iconStyles}/> 
      </h4>
      <h2 className="display-3 text-white mb-5"> Estate Sales</h2>
      <a href="#gallery" className="btn btn-lg btn-danger">View Past Sales</a>
      
    </div>
  </div>
  )
};

export default Header; 