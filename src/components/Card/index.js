/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./card.css";

const Card = ({ imgUrl, info, linkMore, portal }) => {
  return (
    <div className="card">
      <div className="container-data">
        <img src={imgUrl} alt="newImg" />
        <span>{info}</span>
        <p>{portal}</p>
        <a className='link' href={linkMore} target="_blank">ver mas</a>
      </div>
    </div>
  );
};

export { Card };
