const menuBtn = document.querySelector("#header .menu-button");
const closeBtn = document.querySelector(
  "#header .header-link-list .close-button"
);
const menu = document.querySelector("#header .header-link-list");

menuBtn.addEventListener("click", () => {
  menu.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("active");
});

const bannerSlider = new Swiper("#banner .banner-slider .swiper", {
  direction: "horizontal",
  speed: 5000,
  slidesPerView: 1,
  spaceBetween: 40,
  loop: true,
  autoplay: {
    delay: 1,
  },
  breakpoints: {
    767: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1199: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});
const roadmapSlider = new Swiper("#roadmap .roadmap-slider .swiper", {
  direction: "horizontal",
  speed: 500,
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    767: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
