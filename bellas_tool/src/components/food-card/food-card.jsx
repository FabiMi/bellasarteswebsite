export const FoodCard = (foodItem, onBackClick ) => {
    
     return (
       
        <div>
           <button onClick={onBackClick}>Back</button>
          <div>
            <img src={foodItem.image} />
          </div>
          <div>
            <span>Title: </span>
            <span>{foodItem.title}</span>
          </div>
          <div>
              <span>Description: </span>
              <span>{foodItem.description}</span>
          </div>
          <div>
            <span>Preis: </span>
            <span>{foodItem.price}</span>
          </div>
        </div>
      );
    };