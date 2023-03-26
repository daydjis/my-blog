import React from "react";
import Header from "../component/header/header";
import FoodGenerator from "../component/food-generator/food-generator";

export const Profile = () => {
  return (
    <React.Fragment>
      <Header/>
      <FoodGenerator />
    </React.Fragment>
  );
};