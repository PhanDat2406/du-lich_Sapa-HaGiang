var slideIndex = 0;

showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex+=n);
}

function showSlides(n)
{
    var slides = document.getElementsByClassName("mySliders");
    if(n > slides.length -1) slideIndex = 0;
    if(n < 0) slideIndex = slides.length - 1 ;
    for (var i =0; i < slides.length ; i++)
    {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}


