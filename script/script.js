function toggleMenu() {
  const navUl = document.querySelector("nav ul");
  navUl.classList.toggle("active");

  // Optional: animate hamburger bars (toggle a class)
  const hamburger = document.querySelector(".hamburger-menu");
  hamburger.classList.toggle("active");
}