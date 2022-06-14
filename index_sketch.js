const pos = document.documentElement;
const gameTag = document.querySelector(".textbox h1 span:nth-child(1)");
const cookieTag = document.querySelector(".puzzle");
const puzzleTag = document.querySelector(".puzzlebutton");
const cookiepuzzleTag = document.querySelector(".cookies img:nth-child(9)")
const cookie1 = document.querySelector(".cookies img:nth-child(1)");
const cookie2 = document.querySelector(".cookies img:nth-child(2)");
const cookie3 = document.querySelector(".cookies img:nth-child(3)");
const cookie4 = document.querySelector(".cookies img:nth-child(4)");
const cookie5 = document.querySelector(".cookies img:nth-child(5)");
const cookie6 = document.querySelector(".cookies img:nth-child(6)");
const cookie7 = document.querySelector(".cookies img:nth-child(7)");
const cookie8 = document.querySelector(".cookies img:nth-child(8)");
const oneCookie = document.querySelector(".cookies img:nth-child(10)")

const menuTag = document.querySelector(".user img:nth-child(2)");
const asideTag = document.querySelector("aside");

pos.addEventListener("mousemove", function(event){

    pos.style.setProperty('--x', event.clientX + "px");
    pos.style.setProperty('--y', event.clientY + "px");
})

gameTag.addEventListener("click",function(){
    gameTag.style.animation = 'none';
    cookieTag.style.transform = 'translateY(750px)';
    if(cookieTag.style.transform = 'translateY(750px)'){
        cookieTag.style.transform = 'translateY(750px) rotate(-62deg)';
    }
    cookieTag.addEventListener("mouseover",function(){
        cookieTag.style.transition = 'none';
        cookieTag.style.left = '-9.765625vw';
        cookieTag.style.top = '-8.13802083vw';
        cookieTag.style.transform = 'translate(var(--x), var(--y))';
        puzzleTag.style.display = 'block';
        puzzleTag.style.zIndex = '3';
    })
})

puzzleTag.addEventListener("mouseenter",function(){

    cookieTag.style.display = 'none';
    cookiepuzzleTag.style.display = 'block';
    cookie1.style.animation = 'clear1 1s 1';
    cookie1.style.transform = 'translate(1.302083vw, 1.302083vw)';
    cookie2.style.animation = 'clear2 1s 1';
    cookie2.style.transform = 'translate(1.302083vw, 0)';
    cookie3.style.animation = 'clear3 1s 1';
    cookie3.style.transform = 'translate(1.302083vw, -1.302083vw)';
    cookie4.style.animation = 'clear4 1s 1';
    cookie4.style.transform = 'translate(0, -1.302083vw)';
    cookie5.style.animation = 'clear5 1s 1';
    cookie5.style.transform = 'translate(-1.302083vw, -1.302083vw)';
    cookie6.style.animation = 'clear6 1s 1';
    cookie6.style.transform = 'translate(-1.302083vw, 0)';
    cookie7.style.animation = 'clear7 1s 1';
    cookie7.style.transform = 'translate(-1.302083vw, 1.302083vw)';
    cookie8.style.animation = 'clear8 1s 1';
    cookie8.style.transform = 'translate(0, 1.302083vw)';
    oneCookie.style.opacity = '1';
})

menuTag.addEventListener("click", function(){
    asideTag.classList.add("selected");
})

asideTag.addEventListener("click",function(){
    asideTag.classList.remove("selected");
})