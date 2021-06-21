import React from "react";
import Categories from "./Categories";

const HomeScreen = ({ navigation }) => {
  return (
    <div>
      <div className="homeHeader">
        <p>Garage-Swap</p>
      </div>
      <Categories />
    </div>
  );
};

export default HomeScreen;
