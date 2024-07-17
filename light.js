
  const swiper = new Swiper('.swiper', {
    loop:true,
    
    spaceBetween: 10,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    breakpoints: {
     0: {
      slidesPerView: 1
     },
     620: {
      slidesPerView: 3
     },
     1180: {
      slidesPerView: 4
     }
    
  }
  
  
  });
  





const faSolid = document.querySelectorAll(".fa-solid")

for (let i = 0; i < faSolid.length; i++) {
  faSolid[i].addEventListener('click', () => {
    faSolid[i].classList.toggle("red")
    console.log(faSolid[i])
  })
}