// Manage Menu item visibility
const menuButton = document.querySelector(".menu-button");

function menuToggle() {
   const menu = document.querySelector(".menu");
   menu.classList.toggle("hide");
}

menuButton.addEventListener("click", menuToggle);

function handleResize() {
   const menu = document.querySelector(".menu");
   if (window.innerWidth > 1000) {
      menu.classList.remove("hide");
   } else {
      menu.classList.add("hide");
   }
}

handleResize();
innerWidth.addEventListener("resize", handleResize());
