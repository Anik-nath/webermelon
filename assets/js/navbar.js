const menuBtn = document.getElementById("menu-btn");
const navMenu = document.getElementById("nav-menu");

menuBtn.addEventListener("click", () => {
  if (navMenu.style.display === "none" || navMenu.style.display === "") {
    navMenu.style.display = "flex"; 
  } else {
    navMenu.style.display = "none"; 
  }
});
