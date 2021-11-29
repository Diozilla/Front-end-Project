let scrolling= document.querySelector(".scrolling");
let stickyNav= document.querySelector(".stickybar")
let body= document.querySelector("html,body")
window.addEventListener("scroll" , ()=>{
if(body.scrollTop >= 100){
    scrolling.style.display= "block"
    scrolling.addEventListener("click" , ()=>{
        window.scrollTo(0 , 0)
    })
}else{
    scrolling.style.display= "none"
}
})
// ---------stickybar--------
window.addEventListener("scroll" , ()=>{
    if(body.scrollTop >= 100){
        stickyNav.style.display= "block"
        if(stickyNav.classList.contains("animate__fadeOutUp")){
            stickyNav.classList.remove("animate__animated","animate__fadeOutUp")
        }
        stickyNav.classList.add("animate__animated","animate__fadeInDown")
        
    }else{
        stickyNav.style.display= "block"
        if(stickyNav.classList.contains("animate__fadeInDown")){
            stickyNav.classList.remove("animate__animated","animate__fadeInDown")
        }
        stickyNav.classList.remove("animate__animated","animate__fadeInDown")
        stickyNav.classList.add("animate__animated","animate__fadeOutUp")
        
    }
})
// add active class
let linkItem= document.querySelectorAll(".nav-link")
for (let index = 0; index < linkItem.length; index++) {
    linkItem[index].addEventListener("click" , ()=>{
        // loop for removing class
        for (let i = 0; i < linkItem.length; i++) {
        linkItem[i].classList.remove("active")
            
        }
linkItem[index].classList.add("active")
    });
}


// accordion
let accordionHeader = document.querySelectorAll(".accordion-header")
for (let index = 0; index < accordionHeader.length; index++) {
    accordionHeader[index].addEventListener("click" , ()=>{
        if(accordionHeader[index].nextElementSibling.classList.contains("show")){
            accordionHeader[index].nextElementSibling.classList.remove("show")
        }else{
            accordionHeader[index].nextElementSibling.classList.add("show")
        }
    });
    
}
// slider
