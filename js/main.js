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

window.onscroll = function (e) {
  primaryNav.setAttribute("data-visible", false);
  navToggle.setAttribute("aria-expanded", false);
  menuIcon.style.WebkitTransitionDuration = "1s";
  menuIcon.style.webkitTransform = "rotate(0deg)";
};

//////SCROLLING FUNCITONALITY

const scrollSections = document.querySelectorAll(".nav__link");

scrollSections.forEach(function (el) {
  el.addEventListener("click", function (e) {
    e.preventDefault();
    const id = this.getAttribute("href");

    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  });
});

//BACK TO TOP SCROLL BTN
const backToTopBtn = document.querySelector(".scroll-to-top");

backToTopBtn.addEventListener("click", (e) => {
  e.preventDefault();
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

window.onresize = function (event) {
  const icons = document.querySelectorAll(".nav-icon");
  //   console.log("x: " + window.innerWidth + "      y: " + window.innerHeight);

  for (icon of icons) {
    if (window.innerWidth <= 880 && window.innerWidth >= 800) {
      icon.classList.add("hide");
    } else {
      icon.classList.remove("hide");
    }
  }
};

const slides = document.querySelectorAll(".slide");
const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");

let currentSlide = 0;
const maxSlide = slides.length;

const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};
goToSlide(0);

const nextSlide = function () {
  if (currentSlide === maxSlide - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }

  goToSlide(currentSlide);
};

const prevSlide = function () {
  if (currentSlide === 0) {
    currentSlide = maxSlide - 1;
  } else {
    currentSlide--;
  }

  goToSlide(currentSlide);
};

btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", prevSlide);
