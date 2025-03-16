const nav = document.querySelector(".nav-section");
const featureNav = document.getElementById("features");
const companyNav = document.getElementById("company");
const featuresList = document.getElementById("features-list");
const companyList = document.getElementById("company-list");
const menuBtn = document.querySelector(".menu");
const closeBtn = document.querySelector(".close-menu");
const firstArrow = document.getElementById("first-arrow");
const secondArrow = document.getElementById("second-arrow");
const overlay = document.getElementById("overlay");

// Add click event to features nav
featureNav.addEventListener("click", () => {
  featuresList.classList.toggle("showFeatures");
  firstArrow.classList.toggle("rotate");
});

// Add click event to company nav
companyNav.addEventListener("click", () => {
  companyList.classList.toggle("showCompany");
  secondArrow.classList.toggle("rotate");
});

// Add click event to menu button
menuBtn.addEventListener("click", () => {
  nav.classList.add("show");
  overlay.classList.add("active");
});

// Add click event to close menu button
closeBtn.addEventListener("click", () => {
  nav.classList.remove("show");
  overlay.classList.remove("active");
});
