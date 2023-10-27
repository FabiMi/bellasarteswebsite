const cortain = document.querySelector("#closedCortain");

setTimeout(function(){
    cortain.style.opacity = 0;
    cortain.style.transition = "opacity 2s ease-in-out";
   
}, 1000);


setTimeout(function(){
    const closedCortain = document.querySelector("#closedCortain");
    closedCortain.style.zIndex = -2;
   
}, 3000);





const zoomImg = document.getElementsByClassName("foodGridItem");
const imageClick = document.getElementsByClassName("foodImg");


zoomFood = () => {
    imageClick.classList.toggle("zoomImg");
  }

zoomImg.addEventListener("click", zoomFood);


const zoomPimientos = document.querySelector("pimientos");

setTimeout(function(){
    zoomPimientos.classList.add('focusPimientos');
   
}, 2000);