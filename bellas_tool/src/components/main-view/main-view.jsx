import React from 'react';
import { useState } from "react";
import { FoodCard } from '../food-card/food-card';  

export const MainView = () => {
  
return (
    <div className="main-view">
      <FoodCard foodItems />
    </div>
  );

};