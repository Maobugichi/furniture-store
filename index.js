
window.addEventListener('scroll', function () {

  const opt =  document.querySelectorAll('.opt-div')

  for (i = 0;i < opt.length;i++) {
    opt[i].classList.add('opacity')
  }
     

 
})

let count = 0

const font = document.querySelectorAll('.font')

for (i = 0;i < font.length;i++) {
  font[i].addEventListener('click', function () {

    count++

    alert('item added to cart')
    console.log(count)
  })
}


console.log('hello')


const zaxis =  document.querySelector('.zaxis')
const product = document.querySelectorAll('.product')

const img = document.querySelectorAll('.z-img')


for (i = 0;i < product.length; i++) {
  product[i].addEventListener('click', function (e) {
   zaxis.classList.toggle('yaxis')

   let para = this.innerHTML

      
        zaxis.innerHTML = `
        <p>${para}</p>
        `
    
   console.log (imgSrc)
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



