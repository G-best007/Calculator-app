const screen = document.querySelector('.screen')
const btns = document.querySelectorAll('.btn')
const del = document.querySelector('.del')
const reset = document.querySelector('.reset')
const equal = document.querySelector('.equal')
const buttons = document.querySelector('.buttons')

// function addclasstobtn(nodes, classnametoadd) {
//   nodes.forEach((item)=>{
//     item.classList.add(classnametoadd)
//   })
// }

// function removeclassfrmbtn(node, classnametoremove) {
//   node.forEach((items)=>{
//     items.classList.remove(classnametoremove)
//   })
// }

btns.forEach(function(btn){
  btn.addEventListener('click', function(e){
   let numbers = e.currentTarget.getAttribute("data-num");
   
   screen.value += numbers
   
  })
})



equal.addEventListener('click',function () {
 
 if (screen.value === '') {
  alert('Input a value')
 }else{
  let value = eval(screen.value)
  screen.value = value
 }

})


reset.addEventListener('click', function () {
  screen.value = ''
})


del.addEventListener('click',function () {
  screen.value = screen.value.slice(0, -1);
})

// background
const parentCont = document.querySelector('.parentcont')
const radio = document.querySelectorAll('.radio')
const center = document.querySelector('.center')
const head = document.querySelector('.head')
const switchbcg = document.querySelector('.switch')

const delTwo = document.querySelector('.deltwo')
const delThree = document.querySelector('.delthree')
const resetTwo = document.querySelector('.resettwo')
const resetThree = document.querySelector('.resetthree')
const equalTwo = document.querySelector('.equaltwo')
const equalThree = document.querySelector('.equalthree')


const arrRadio = [...radio]
arrRadio.forEach((items, idx)=>{
  items.addEventListener('click', ()=>{
    items.style.opacity = '1'

    
    if (idx === 0) {
      parentCont.style.background = 'var(--Very-dark-desaturated-blue-1)'
      screen.style.background = 'var(--Very-dark-desaturated-blue-3)'
      center.style.background = 'var(--Very-dark-desaturated-blue-3)'
      head.classList.add('themeone')
      switchbcg.classList.add('themeone')
      btns.forEach((btn) => {
        btn.classList.add('themeone')
        btn.classList.remove('themethree')
        btn.classList.remove('themetwo')
      })
      reset.classList.remove('themetwo')
      del.classList.remove('themetwo')
      equal.classList.remove('themetwo')
      screen.classList.remove('themetwo')
      head.classList.remove('themetwo')
      switchbcg.classList.remove('themetwo')

      reset.classList.remove('themethree')
      del.classList.remove('themethree')
      equal.classList.remove('themethree')
      screen.classList.remove('themethree')
      head.classList.remove('themethree')
      switchbcg.classList.remove('themethree')


      // hover
      reset.style.cursor = 'pointer'
      del.style.cursor = 'pointer'
     
      
      
  
    }else if(idx === 1){
      parentCont.style.background = 'var(--Very-light-gray)'
      screen.style.background = 'var(--Light-gray)'
      center.style.background = 'var(--Grayish-red)'
      head.classList.add('themetwo')

      btns.forEach((btn)=>{
        btn.classList.add('themetwo')
        btn.classList.remove('themethree')
        btn.classList.remove('themeone')
      })

      reset.classList.add('themetwo')
      del.classList.add('themetwo')
      equal.classList.add('themetwo')
      screen.classList.add('themetwo')
      switchbcg.classList.add('themetwo')


      reset.classList.remove('themethree')
      del.classList.remove('themethree')
      equal.classList.remove('themethree')
      screen.classList.remove('themethree')
      head.classList.remove('themethree')
      switchbcg.classList.remove('themethree')



        // hover
      
      resetTwo.addEventListener('hover', () => {
        reset.style.background = 'var(--Very-dark-cyan)'
        reset.style.cursor = 'pointer'

      })
      
      
      

      

    }else{
      parentCont.style.background = 'var(--Very-dark-violet-1)'
      screen.style.background = 'var(--Very-dark-violet-2)'
      center.style.background = 'var(--Very-dark-violet-2)'
      head.classList.add('themethree')

      btns.forEach((btn) => {
        btn.classList.add('themethree')
        btn.classList.remove('themetwo')
      })

      reset.classList.add('themethree')
      del.classList.add('themethree')
      equal.classList.add('themethree')
      screen.classList.add('themethree')
      switchbcg.classList.add('themethree')

    }
    
    
    arrRadio.filter((radios)=>{
      return radios != items
    }).forEach((item)=>{
      item.style.opacity = '0'
    })

    

  })
})






