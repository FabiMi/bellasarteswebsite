const zoomImg = document.getElementsByClassName("menueGridItem");
const imageClick = document.getElementsByClassName("foodImg");

// Define the zoomFood function
function zoomFood() {
  // Toggle the "zoomImg" class on the clicked image
  this.classList.toggle("zoomImg");
}

// Add a click event listener to each image in the zoomImg collection
for (let i = 0; i < zoomImg.length; i++) {
  zoomImg[i].addEventListener("click", zoomFood);
}


const zoomquesoFrito = document.querySelector("#quesoFrito");

zoomquesoFrito.addEventListener("click",  zoomFood);