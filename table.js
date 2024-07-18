const faSolid = document.querySelectorAll(".fa-solid")

for (let i = 0; i < faSolid.length; i++) {
  faSolid[i].addEventListener('click', () => {
    faSolid[i].classList.toggle("red")
    console.log(faSolid[i])
  })
}