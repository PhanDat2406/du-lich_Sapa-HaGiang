var slideIndex = 0;

showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex+=n);
}

function showSlides(n)
{
    let slides = document.getElementsByClassName("mySliders");
    if(n > slides.length -1) slideIndex = 0;
    if(n < 0) slideIndex = slides.length - 1 ;
    for (let i =0; i < slides.length ; i++)
    {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}


function toggleMenu(event) {
    event.preventDefault(); // tránh nhảy trang

    let parent = event.target.parentElement;
    let submenu = parent.querySelector(".sub-nav");

    submenu.style.display =
        submenu.style.display === "block" ? "none" : "block";
}


