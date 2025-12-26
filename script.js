document.addEventListener("DOMContentLoaded", function () {
  AOS.init({ duration: 1000, once: true });

  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const links = document.querySelectorAll(".nav-links a");

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      const icon = menuToggle.querySelector("i");
      if (navLinks.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
      } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
      }
    });
  }

  links.forEach((link) => {
    link.addEventListener("click", () => navLinks.classList.remove("active"));
  });
});
