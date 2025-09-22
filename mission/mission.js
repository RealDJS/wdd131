let modeSelect = document.querySelector("#themeSelector");
let logo = document.querySelector(".logo");

function changeTheme() {
   let selectTheme = modeSelect.value;
   if (selectTheme == "dark") {
      document.body.classList.add("dark");
      logo.src = "byui-logo_white.png";
   } else {
      document.body.classList.remove("dark");
      logo.src = "byui-logo_blue.webp";
   }
}

modeSelect.addEventListener("change", changeTheme);
