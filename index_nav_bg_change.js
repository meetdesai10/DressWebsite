let moon = document.getElementById("moon");
window.addEventListener("scroll", function () {
  let head = document.getElementById("header");
  if (window.scrollY > 0) {
    if (moon.classList.contains("bi-moon")) {
      head.classList.add("header-nav");
    } else {
        head.classList.add("header-nav-dark");
    }
  } else {
    head.classList.remove("header-nav");
    head.classList.remove("header-nav-dark");
  }
});
