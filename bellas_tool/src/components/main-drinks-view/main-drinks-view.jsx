import React, { useState } from "react";
import { DrinksCard } from "../drinks-card/drinks-card";
import { DrinksView } from "../drinks-view/drinks-view";

export const MainDrinksView = () => {

    const [drinkItems, setDrinkItems] = useState([
        { id: 1, title: "Patatas Bravas",image:
        "https://images-na.ssl-images-amazon.com/images/I/51InjRPaF7L._SX377_BO1,204,203,200_.jpg", description: "A dish of fried potato dices served with a spicy tomato sauce.", price: "5.00" },
    
        { id: 2, title: "Albondigas", image:"https://images-na.ssl-images-amazon.com/images/I/51InjRPaF7L._SX377_BO1,204,203,200_.jpg", description: "Meatballs in a tomato sauce.", price: "5.00" },
        { id: 3, title: "Pimientos", image:"https://images-na.ssl-images-amazon.com/images/I/51InjRPaF7L._SX377_BO1,204,203,200_.jpg", description: "Fried green peppers.", price: "5.00" },
        { id: 4, title: "Chpirones", image:"https://images-na.ssl-images-amazon.com/images/I/51InjRPaF7L._SX377_BO1,204,203,200_.jpg", description: "Fried baby squid.", price: "6.00" },
        { id: 5, title: "Paella", image:"https://images-na.ssl-images-amazon.com/images/I/51InjRPaF7L._SX377_BO1,204,203,200_.jpg", description: "A rice dish with seafood.", price: "5.00" }
    ]);


   const [selectedDrinkItem, setSelectedDrinkItem] = useState(null);

   if  ( selectedDrinkItem ) {
    return ( <DrinksView drinkItem={selectedDrinkItem} onBackClick={()=> setSelectedDrinkItem(null)}/>);

   if (drinkItems.length === 0) return <div>There are no drink items.</div>;
   }

   return (
    <div>
        {drinkItems.map((drinkItem) => (
            <DrinksCard key={drinkItem.id}   drinkItems={drinkItem}  onDrinkItemClick={(newSelectedDrinkItem) => {
                setSelectedDrinkItem(newSelectedDrinkItem); }}/>  
          )) }
    </div>  
   );
}; ;
   



  
  
