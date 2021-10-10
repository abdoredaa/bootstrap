    let upperBar = document.querySelector(".upper-bar").clientHeight,
    navBar = document.querySelector(".navbar").clientHeight,
    slidebar = document.querySelector(".slider");
    let num = window.innerHeight - (upperBar + navBar);
    slidebar.style.height = num + "px";
let imageSlider = document.querySelectorAll(".slider .carousel-item").forEach(img => {
    img.style.height = num + "px";
});
