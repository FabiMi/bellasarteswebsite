
import React, { useState } from "react";

export const FoodView = (props) => {

    const [foodItems, setFoodItems] = useState([
        { id: 1, title: "Patatas Bravas",image:
        "https://images-na.ssl-images-amazon.com/images/I/51InjRPaF7L._SX377_BO1,204,203,200_.jpg", description: "A dish of fried potato dices served with a spicy tomato sauce.", price: "5.00" },
    
        { id: 2, title: "Albondigas", image:"https://images-na.ssl-images-amazon.com/images/I/51InjRPaF7L._SX377_BO1,204,203,200_.jpg", description: "Meatballs in a tomato sauce.", price: "5.00" },
        { id: 3, title: "Pimientos", image:"https://images-na.ssl-images-amazon.com/images/I/51InjRPaF7L._SX377_BO1,204,203,200_.jpg", description: "Fried green peppers.", price: "5.00" },
        { id: 4, title: "Chpirones", image:"https://images-na.ssl-images-amazon.com/images/I/51InjRPaF7L._SX377_BO1,204,203,200_.jpg", description: "Fried baby squid.", price: "5.00" },
        { id: 5, title: "Paella", image:"https://images-na.ssl-images-amazon.com/images/I/51InjRPaF7L._SX377_BO1,204,203,200_.jpg", description: "A rice dish with seafood.", price: "5.00" }
    ]);

  
  
  
    return (
        <div>
            {foodItems.map((foodItem) => {
                return  <div key={foodItem.id}><img src={foodItem.image}/>{foodItem.title}, Beschreibung: {foodItem.description}, Preis: {foodItem.price}</div>;
            })}
        </div>
    );
}