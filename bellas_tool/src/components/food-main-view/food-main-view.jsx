import React, { useState } from "react";
import { FoodCard } from "../food-card/food-card";
import { FoodView } from "../food-view/food-view";

export const FoodMainView = () => {

    const [foodItems, setFoodItems] = useState([
        { id: 1, title: "Patatas Bravas",image:
        "https://images-na.ssl-images-amazon.com/images/I/51InjRPaF7L._SX377_BO1,204,203,200_.jpg", description: "A dish of fried potato dices served with a spicy tomato sauce.", price: "5.00" },
    
        { id: 2, title: "Albondigas", image:"https://images-na.ssl-images-amazon.com/images/I/51InjRPaF7L._SX377_BO1,204,203,200_.jpg", description: "Meatballs in a tomato sauce.", price: "5.00" },
        { id: 3, title: "Pimientos", image:"https://images-na.ssl-images-amazon.com/images/I/51InjRPaF7L._SX377_BO1,204,203,200_.jpg", description: "Fried green peppers.", price: "5.00" },
        { id: 4, title: "Chpirones", image:"https://images-na.ssl-images-amazon.com/images/I/51InjRPaF7L._SX377_BO1,204,203,200_.jpg", description: "Fried baby squid.", price: "5.00" },
        { id: 5, title: "Paella", image:"https://images-na.ssl-images-amazon.com/images/I/51InjRPaF7L._SX377_BO1,204,203,200_.jpg", description: "A rice dish with seafood.", price: "5.00" }
    ]);


   const [selectedFoodItem, setSelectedFoodItem] = useState(null);

   if  ( selectedFoodItem ) {
    return ( <FoodView foodItem={selectedFoodItem} />);

   if (foodItems.length === 0) return <div>There are no food items.</div>;
   }

   return (
    <div>
        {foodItems.map((foodItem) => (
            <FoodCard key={foodItem.id}  foodItems={foodItem}  onFoodItemClick={(newSelectedFoodItem) => {
                setSelectedFoodItem(newSelectedFoodItem); }}/>
               
          )) }
    </div>  
   );
}; ;
   



  
  
