import React from "react";

function OverviewItem(props) {
  return (
    <div className="overview-item">
      <img 
        src={props.logo} 
        alt="" 
      />
      <h2 
        className="overview-item__label">{props.label}
      </h2>
      <p 
        className="overview-item__data">{props.amount}
      </p>
      <div className="change">
        <p 
          className={props.change < 0 ? 
          "change__text change--negative" : 
          "change__text"}>
          {Math.abs(props.change)}%
        </p>
        <img 
          className="change__icon" 
          src={props.change < 0 ? "./images/icon-down.svg" : "./images/icon-up.svg"} 
          alt="" />
      </div>
    </div>
  );
}

export default OverviewItem;
