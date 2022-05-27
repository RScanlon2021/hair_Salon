const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");
const menuIcon = document.querySelector(".menu-icon");

navToggle.addEventListener("click", (e) => {
  const visibility = primaryNav.getAttribute("data-visible");

  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
    menuIcon.style.WebkitTransitionDuration = "1s";
    menuIcon.style.webkitTransform = "rotate(180deg)";
  } else if (visibility === "true") {
    primaryNav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
    menuIcon.style.WebkitTransitionDuration = "1s";
    menuIcon.style.webkitTransform = "rotate(0deg)";
  }
});
