let bar=document.querySelector(".fa-bars");
let nav=document.querySelector(".navigation");
bar.addEventListener("click",function(){
    nav.classList.toggle("navigation-toggle");
})
let icon=document.querySelector(".bi-moon");
let sec3=document.querySelector(".section3");
let sec4=document.querySelector(".section4");
let sec8=document.querySelector(".section8");
icon.addEventListener("click",function(){
    document.body.classList.toggle("darkmode");
    sec3.classList.toggle("section3-dark");
    sec4.classList.toggle("section4-dark");
    sec8.classList.toggle("section8-dark");
    if(document.body.classList.contains("darkmode")==true){
        icon.classList.remove("bi-moon");
        icon.classList.add("bi-brightness-high");
    }else{
        icon.classList.remove("bi-brightness-high");
        icon.classList.add("bi-moon");
    }
});

// ************** slider **************************
$(document).ready(function () {
    $(".bxslider").bxSlider({
      mode: "fade",
      speed: 1000,
      randomStart: true,
      infiniteLoop: true,
      captions: false,
      pager: false,
      pagerType: "full",
      controls: false,
      auto: true,
      autoHover: false,
    });
  });