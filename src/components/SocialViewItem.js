import React from "react";

function SocialViewItem(props) {
  let banner = "";
  switch (props.label) {
    case "Facebook":
      banner = "social-view social-view--facebook";
      break;
    case "Twitter":
      banner = "social-view social-view--twitter";
      break;
    case "Instagram":
      banner = "social-view social-view--instagram";
      break;
    case "YouTube":
      banner = "social-view social-view--youtube";
      break;
    default:
      banner = "social-view";
      break;
  }

  return (
    <div className={banner}>
      <div className="social-view__flex">
        <img className="social-view__logo" src={props.logo} alt="" />
        <p className="social-view__handle">{props.handle}</p>
      </div>
      <p className="social-view__data">{props.followers}</p>
      <p className="social-view__data-label">{props.followersLabel}</p>
      <div className="change">
        <p
          className={
            props.followersChange < 0
              ? "change__text change--negative"
              : "change__text"
          }
        >
          {Math.abs(props.followersChange)} Today
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
