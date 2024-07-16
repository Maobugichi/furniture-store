/*const prev = document.getElementsByClassName('prev')

const next = document.getElementsByClassName('next')


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n)
}

function currentSlide(n) {
  showSlides(slideIndex = n)
}

function showSlides(n) {
  let i;

  let slides = document.getElementsByClassName('mySlides')

  let dots = document.getElementsByClassName('dots')

  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'
  }

 slides[slideIndex-1].style.display = 'block'
dots[slideIndex-1].className += 'active'
}

prev.addEventListener('click', () => {
  plusSlides(-1)
})

next.addEventListener('click', () => {
  plusSlides(1)
})*/

alert("hello")


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


var typed = new Typed('.chair-h1', {
  strings: ['Looking For the Perfect Chair?','Browse through our Chair Category...', 'Exclusive chairs just for You'],
  typeSpeed: 50,
  backspeed: 1000,
  backDelay: 1200,
  loop:true
});


const btn = document.querySelectorAll('.add')

let count = 0


for (i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click' , function ()  {
   var newPick = this.getAttribute('id')
    const id = '#' + newPick

    const animate = document.querySelector(id)
    animate.classList.add('opa')
    setTimeout(
      function () {
        animate.classList.remove('opa')
      }
      ,1000)
  


     if (this.innerText === '+1') {
        if (count >= 10) {
        alert('cart is full')
       } else {
        count++
       }
      
     } else if (this.innerText === '-1') {
      if (count <= 0) {
        alert('cart is empty')
       } else {
        count--
       }
     }

   
      console.log(count)
  })
  
}









