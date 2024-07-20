

const item = document.querySelector(".item");

const ss = document.querySelector(".ss");

item.addEventListener("click", () => {
  ss.classList.toggle("add")
})

let slideIndex = 0;
showSlides(); 

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}




const fasolid = document.querySelectorAll(".fa-solid")

for (let i = 0; i < fasolid.length; i++) {
  fasolid[i].addEventListener("click", () => {
    fasolid[i].classList.toggle("red")
  })
}


















