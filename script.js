const num=document.querySelector('.count')
const btn=document.querySelector('.random')

btn.addEventListener('click',clickon)

function clickon(e){
    num.innerHTML=Math.floor(Math.random() * 101);
      
}