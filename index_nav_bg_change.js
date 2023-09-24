window.addEventListener("scroll",function(){
    let head =document.getElementById("header");
    if(window.scrollY>0){
        head.classList.add("header-nav");
    }else{
        head.classList.remove("header-nav");
    }
});