export const FoodCard = (props) => {
    // Access title and price from prop
        const { foodItems, onFoodItemClick } = props;
        return <div onClick={() => onFoodItemClick(foodItems)}>{foodItems.title}</div>;
                <div>{foodItems.price}</div>;
     };
