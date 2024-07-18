const faSolid = document.querySelectorAll(".fa-solid")

for (let i = 0; i < faSolid.length; i++) {
  faSolid[i].addEventListener('click', () => {
    faSolid[i].classList.toggle("red")
    console.log(faSolid[i])
  })
}


var typed = new Typed('.typed', {
  strings: ['Shop More.', ' For Less.'],
  typeSpeed: 70,
  backspeed: 70,
  backDelay: 1200,
  loop:true
});

/**/



