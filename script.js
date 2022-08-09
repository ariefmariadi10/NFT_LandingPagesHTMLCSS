const responsive = {
  0: {
    items: 1,
  },
  320: {
    items: 1,
  },
  560: {
    items: 2,
  },
  960: {
    items: 3,
  },
};
const navToggler = document.querySelector(".overlay_open");
const navCloser = document.querySelector(".overlay_close");
navToggler.addEventListener("click", navToggle);
navCloser.addEventListener("click", navClose);

function navToggle() {
  navToggler.classList.toggle("active");
  const nav = document.querySelector(".nav__smallscreen_overlay");
  nav.classList.toggle("open");
  if (nav.classList.contains("open")) {
    nav.style.display = "flex";
  } else {
    nav.removeAttribute("style");
  }
}

function navClose() {
  navCloser.classList.toggle("active");
  const nav = document.querySelector(".nav__smallscreen_overlay");
  nav.classList.toggle("close");
  if (nav.classList.contains("close")) {
    nav.style.display = "none";
  } else {
    nav.removeAttribute("style");
  }
}

$(".owl-carousel").owlCarousel({
  loop: true,
  autoplay: false,
  autoplayTimeout: 1000,
  dots: false,
  nav: true,
  navText: [
    $(".owl-navigation .owl-nav-prev"),
    $(".owl-navigation .owl-nav-next"),
  ],
  responsive: responsive,
});
