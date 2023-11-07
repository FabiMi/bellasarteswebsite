

export const FoodView = ({props}) => {


  // Access title and price from prop
  const { foodItems, onFoodItemClick } = props;
  return <div onClick={() => onFoodItemClick(foodItems)}>{foodItems.title} <input placeholder={foodItems.price}></input></div>;
          
};