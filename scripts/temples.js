// Hamburger menu toggle
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("show");
  menuBtn.textContent = navMenu.classList.contains("show") ? "✖" : "☰";
});

// Set current year
document.getElementById("year").textContent = new Date().getFullYear();

// Set last modified with date & time
const lastModifiedDate = new Date(document.lastModified);
document.getElementById("lastModified").textContent = lastModifiedDate.toLocaleString();

