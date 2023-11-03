export const FoodCard = (props) => {
    // Access title and price from prop
        const { price, foodItems, onFoodItemClick } = props;
        return <div onClick={() => onFoodItemClick(foodItems)}>{foodItems.title} {foodItems.price}</div>;
                
     };
