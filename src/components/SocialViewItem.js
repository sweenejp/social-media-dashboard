import React from "react";

function SocialViewItem(props) {
  let banner = "";
  switch (props.label) {
    case "Facebook":
      banner = "social-view-item social-view-item--facebook";
      break;
    case "Twitter":
      banner = "social-view-item social-view-item--twitter";
      break;
    case "Instagram":
      banner = "social-view-item social-view-item--instagram";
      break;
    case "YouTube":
      banner = "social-view-item social-view-item--youtube";
      break;
    default:
      banner = "social-view-item";
      break;
  }

  return (
    <div className={banner}>
      <div className="social-view-item__flex">
        <img className="social-view-item__logo" src={props.logo} alt="" />
        <p className="social-view-item__handle">{props.handle}</p>
      </div>
      <p className="social-view-item__data">
        {props.followers.toLocaleString("en-us")}
      </p>
      <p className="social-view-item__data-label">{props.followersLabel}</p>
      <div className="change">
        <p
          className={
            props.followersChange < 0
              ? "change__text change--negative"
              : "change__text"
          }
        >
          {Math.abs(props.followersChange).toLocaleString("en-us")} Today
        </p>
        <img
          className="change__icon"
          src={
            props.followersChange < 0
              ? "./images/icon-down.svg"
              : "./images/icon-up.svg"
          }
          alt=""
        />
      </div>
    </div>
  );
}

export default SocialViewItem;
