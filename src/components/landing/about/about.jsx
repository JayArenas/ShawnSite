import React, { useEffect } from "react";
import WOW from "wowjs";
import "./aboutStyles.css";

const About = () => {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);

  return (
    <div
      className="container-fluid wow fadeIn"
      id="about"
      data-wow-duration="1.5s"
    >
      <div className="row">
        <div className="col-lg-6 has-img-bg"></div>
        <div className="col-lg-6">
          <div className="row justify-content-center text-wrapper">
            <div className="col-sm-8 py-5 my-5 text-container">
              <h2 className="mb-4">About Us</h2>
              <p>
                Our company is based on the belief that our customers' needs are
                of the utmost importance. Our entire team is committed to
                meeting those needs. ​We have been in the antique, auction and
                estate sale businesses combined for 20 years. We are a bonded,
                family owned and operated company, as well as, members of the
                Better Business Bureau. We will provide services for any estate
                need; including: moving, downsizing, or a death in the family. I
                Heart Estate Sales understands the dignity and great care your
                possessions need, and will handle every detail of the sale so
                you don't have to.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
