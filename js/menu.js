const menuButton = document.querySelector(".menuButton");
const menu = document.querySelector(".menuBody");
const closeMenu = document.querySelector(".closeButtomMenu");
const nav = document.querySelector(".nav");
const openResTool = document.querySelector(".reserveToolButton");
const reserveTool = document.getElementById("reservationTool");


 showMenu = () => {
  menuButton.setAttribute("hidden", "");
  menu.removeAttribute("hidden");
}


 hideMenu = () => {
  menu.setAttribute("hidden", "");
  menuButton.removeAttribute("hidden", "");
}



showResTool = () => {
  reserveTool.classList.toggle("reservationToolIsHidden");
}




menuButton.addEventListener("click", showMenu);
closeMenu.addEventListener("click", hideMenu);
openResTool.addEventListener("click", showResTool);




var prevScrollPos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;


  if (prevScrollPos < currentScrollPos) {
    // user has scolled down
    nav.classList.add('isHidden');
    nav.classList.remove('isVisible');
    menuButton.classList.add('menuButtonHidden');
    menuButton.classList.remove('menuButtonVisible');
    menu.setAttribute("hidden", "");
    menuButton.removeAttribute("hidden", "");
  } else {
    // user has scrolled up
    nav.classList.add('isVisible');
    nav.classList.remove('isHidden');
    menuButton.classList.remove('menuButtonHidden');
    menuButton.classList.add('menuButtonVisible');
  }

  // update previous scroll position
  prevScrollPos = currentScrollPos;
};