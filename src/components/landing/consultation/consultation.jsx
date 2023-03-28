import React from "react";
import "./consultationStyles.css";

const Consultation = () => {
  return (
    <div className="container-fluid has-bg-overlay text-center text-light has-height-lg middle-items" id="consultation">
      <div className="">
        <h2 className="consult-title mb-5">Book A Consult</h2>
        <div className="row mb-5">
          <div className="col-sm-6 col-md-3 col-xs-12 my-2">
            <input
              type="text"
              id="consult-name"
              className="form-control form-control-lg custom-form-control"
              placeholder="Full Name"
            />
          </div>
          <div className="col-sm-6 col-md-3 col-xs-12 my-2">
            <input
              type="email"
              id="consult-email"
              className="form-control form-control-lg custom-form-control"
              placeholder="email"
            />
          </div>
          <div className="col-sm-6 col-md-3 col-xs-12 my-2">
            <input
              type="date"
              id="consult-date"
              className="form-control form-control-lg custom-form-control"
              placeholder="12/12/12"
            />
          </div>
          <div className="col-sm-6 col-md-3 col-xs-12 my-2">
            <input
              type="time"
              id="consult-time"
              className="form-control form-control-lg custom-form-control"
              placeholder="11:59:00"
            />
          </div>
        </div>
      </div>
    </div>
  );
};


export default Consultation;
