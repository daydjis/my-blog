import React from "react";
import Header from "../component/header/header";
import Weather from "../component/weather-report/wether";

export const WeatherPage = () => {
    
  return (
    <React.Fragment>
      <Header/>
      <Weather />
    </React.Fragment>
  );
};