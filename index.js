
let Bars = document.querySelector(".fa-bars")
let List = document.querySelector(".List")

Bars.addEventListener("click",()=>{
    List.classList.toggle("active")
   
})

let ClickUp = document.querySelector(".fa-angle-up")

onscroll = () =>{
    if(scrollY >= 100){
        ClickUp.style.visibility = 'visible'
    }else{
        ClickUp.style.visibility = 'hidden'
    }
}

ClickUp.addEventListener('click',()=>{
    scroll({
        top:0,
        left:0,
    })
})



let darkMode = document.querySelector(".darkMode")
let body = document.querySelector("body")

darkMode.addEventListener("click",()=>{
    body.classList.toggle("active")
})
