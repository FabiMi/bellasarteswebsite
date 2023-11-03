import React, { useState } from "react";
import { FoodView } from "../food-view/food-view";

export const FoodCard = (props) => {
    // Access title and price from props
    const { title, price } = props;
  
    return (
      <div>
        <h2>{title}</h2>
        <p>Price: {price}</p>
        {/* You can access title and price here */}
      </div>
    );
  };