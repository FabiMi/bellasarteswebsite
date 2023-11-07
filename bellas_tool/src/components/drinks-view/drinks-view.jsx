export const DrinksView = ({ drinkItem, onBackClick }) => {


    return (
       
      <div>
         <button onClick={onBackClick}>Back</button>
        <div>
          <img src={drinkItem.image} />
        </div>
        <div>
          <span>Title: </span>
          <span>{drinkItem.title}</span>
        </div>
        <div>
            <span>Description: </span>
            <span>{drinkItem.description}</span>
        </div>
        <div>
          <span>Preis: </span>
          <span>{drinkItem.price}</span>
        </div>
      </div>
    );
  };