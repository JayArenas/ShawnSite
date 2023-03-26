import React from "react";
import './servicesStyles.css';

const ServiceCard = (props) => {
    let img  = props.card.img
    
  return (
    <div className="col-md-4" >
      <div className="card bg-transparent my-3 my-md-0 service-card" key={props.card.id}>
        <img
          src={props.card.img}
          alt={`Card 1`}
          className="rounded-0 card-img-top mg-responsive"
        />
        <div className="card-body">
          <h1 className="text-center mb-4">
            <p className="badge badge-primary">
              {props.card.serviceName}
            </p>
          </h1>
          <h4 className="pt20 pb20">{props.card.price}</h4>
          <p className="text-white">
            {props.card.serviceDescription}
          </p>
        </div>
         <div className="service-overlay" style={{backgroundImage: {img}}}>
            <div className="overlay-text"><a href={props.card.serviceName}>Click For More</a></div>
         </div>
      </div>
    </div>
  );
};

export default ServiceCard;
