export const DrinksCard = (props) => {
    // Access title and price from prop
        const { drinkItems, onDrinkItemClick } = props;
        return <div onClick={() => onDrinkItemClick(drinkItems)}>{drinkItems.title} <input placeholder={drinkItems.price}></input></div>;
                
     };
