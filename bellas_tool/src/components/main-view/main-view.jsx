import React from 'react';
import { MainFoodView } from '../main-food-view/main-food-view';     
import { MainDrinksView } from '../main-drinks-view/main-drinks-view.jsx';

export const MainView = () => {
  
return (
    <div className="main-view">
      
      <MainDrinksView />
    </div>
  );

};