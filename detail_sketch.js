const page1 = document.getElementById("page1");
const img1 = document.getElementById("detailimg1");
const page2 = document.getElementById("page2");
const page3 = document.getElementById("page3");
const page4 = document.getElementById("page4");
const img4 = document.getElementById("detailimg4");
const page5 = document.getElementById("page5");

window.addEventListener("scroll",function(){

    const scrollY = this.window.scrollY;

    if(scrollY > page2.offsetTop/8){
        page1.style.opacity = '1';
        img1.style.animation = 'bound 1s 1';
    }

    if(scrollY > page3.offsetTop/2){
        page2.style.opacity = '1';
    }

    if(scrollY > page4.offsetTop/2){
        page3.style.transition = 'all 2s';
        page3.style.opacity = '1';
    }

    if(scrollY > page5.offsetTop/1.5){
        page4.style.opacity = '1';
        img4.style.transform = 'scale(0.7)'
    }

    if(scrollY > page5.offsetTop){
        page5.style.opacity = '1';
        page5.style.background = '#F6C5C1'
    }

})