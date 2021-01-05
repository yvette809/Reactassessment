import React from "react";

const SeasonDisplay = (props) => {
  const seasonConfig = {
    summer: {
      text: "Let's Hit the beach!",
      iconName: "sun",
    },
    winter: {
      text: "Burr it is cold",
      iconName: "snowflake",
    },
  };

  const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
      return lat > 0 ? "summer" : "winter";
    } else {
      return lat < 0 ? "winter" : "summer";
    }
  };

  const season = getSeason(props.lat, new Date().getMonth());
  const {text, iconName}= seasonConfig[season]
  

  return (
    <>
      <i className={`${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`${iconName} icon`} />
    </>
  );
};

export default SeasonDisplay;
