import React, { useEffect, useState } from "react";
import ServiceCard from "./serviceCard";

import "./servicesStyles.css";

const EstateServices = (props) => {
  let jsonData = props.data.services;
  console.log("jsonData props---->", jsonData);
  const [cardInfo, setCardInfo] = useState({
    cards: {
      cardImage: "https://tinyurl.com/mt3rf7b",
      cardTitle: "First Service",
      cardText: "This is the service information",
    },
    cardComponents: [],
  });

  const mapCards = (data, index) => {
    return (
      <React.Fragment>
        <ServiceCard card={data} key={"List" + data.id + index} />
      </React.Fragment>
    );
  };

  useEffect(() => {
    let cards = jsonData;
    console.log("useffect cards--->", cards);
    setCardInfo((prevState) => {
      let mappedCards = { ...prevState };
      mappedCards.cards.cardImage = cards.img;
      mappedCards.cards.cardTitle = cards.serviceName;
      mappedCards.cards.cardText = cards.serviceDescription;
      mappedCards.cards.cardComponents = cards.map(mapCards);
      return mappedCards;
    });
  }, [jsonData]);

  return (
    <div className="container-fluid bg-dark text-light py-5 text-center wow fadeIn">
      <div className="service-content" id="pills-tabContent">
        <h1 className="service-text">Serviced</h1>
        <div
          className="service-pane fade show active"
          id="foods"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          <div className="row">{cardInfo.cards.cardComponents}</div>
        </div>
      </div>
    </div>
  );
};

export default EstateServices;
