const li = document.querySelectorAll(".section-three ul li")
let ul = document.querySelector(".section-three ul ")
const liWidth = ul.querySelector(" li").offsetWidth
const rigth = document.querySelector("#rigth")
const left = document.querySelector("#left")
const toggler = document.querySelector(".toggler")
const navLink =document.querySelector(".nav-link")
const navLinkSm = document.querySelector(".nav-link-toggler")
const formButton = document.querySelector('.footer-container form [type="submit"]')
console.log(formButton)
toggler.addEventListener("click",(e)=>{
    toggler.classList.toggle("active-toggler")
    if(toggler.classList.contains("active-toggler")){
        navLink.classList.add("nav-link-toggler")
        // navLinkSm.style.display="block"
    }else{
        navLink.classList.remove("nav-link-toggler")
        // navLinkSm.style.display="none"
    }
})

formButton.addEventListener("click",(e)=>{
e.preventDefault()
})





rigth.addEventListener("click",()=>{
    ul.scrollLeft += liWidth
console.log(ul.scrollLeft)
})
left.addEventListener("click",()=>{
    ul.scrollLeft += -liWidth
})

if(ul.scrollLeft === liWidth*4 ){
    rigth.style.display='none'
}

