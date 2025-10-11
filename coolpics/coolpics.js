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
window.addEventListener("resize", handleResize);

// Build a Modal
const gallery = document.querySelector(".gallery");

function viewHandler(event) {
   if (event.target.tagName === "IMG") {
      const clickedImageSrc = event.target.getAttribute("src");
      const largeImageSrc = clickedImageSrc.replace("-sm", "-full");
      const altText = event.target.getAttribute("alt");
      viewerTemplate(largeImageSrc, altText);
   }
}

function viewerTemplate(src, alt) {
   //dialog element
   const html = `
   <dialog class="viewer">
      <div class="image-container">
         <button class="close-viewer" data-action="close">X</button>
         <img src="${src}" alt="${alt}">
      </div>
   </dialog>
   `;
   document.body.insertAdjacentHTML("beforeend", html);
   document.querySelector(".viewer").showModal();
}

function closeViewer() {
   const viewer = document.querySelector(".viewer");
   if (viewer) {
      // Check if the viewer exists before trying to close it
      viewer.close();
      viewer.remove();
   }
}

function modalManager(event) {
   // Check if the clicked element has the 'data-action="close"' attribute
   const isCloseButton = event.target.dataset.action === "close";

   // Check if the clicked element is the dialog backdrop itself
   const isBackdrop = event.target.classList.contains("viewer");

   if (isCloseButton || isBackdrop) {
      closeViewer();
   }
}

gallery.addEventListener("click", viewHandler);
document.body.addEventListener("click", modalManager);
