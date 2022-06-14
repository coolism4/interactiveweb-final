const menuTag = document.querySelector(".user img:nth-child(2)");
const asideTag = document.querySelector("aside");

menuTag.addEventListener("click", function(){
    asideTag.classList.add("selected");
})

asideTag.addEventListener("click",function(){
    asideTag.classList.remove("selected");
})

const principles = [
    {
      title: "블랙홀과 3만원", 
      writter:"김규삼, 혜원 | 수요웹툰 | 개그", 
      inform: "지구멸망 한달 전, 블랙홀에 빨려들어가 얄짤없이 망하게 생긴 인류. 노스트라 생명에서 인류를 구원할 보험을 출시했다!"
    },
    {
        title: "김부장", 
        writter:"박태준 만화회사, 정종택 | 화요웹툰 | 액션", 
        inform: "“제발 안경 쓴 아저씨는 건들지 말자…” 오직 자신의 딸 '민지'를 위해 특수요원직을 관두고 평범함을 선택한 가장 김부장..."
      },
      {
        title: "신도림", 
        writter:"오세형 | 화요웹툰 | 스토리, 액션", 
        inform: "세상이 무너지고 세워진 지하도시 신도림그곳에 들어가지 못하고 생존한 소년들이 지하도시의 비밀을 파헤친다"
      },
      {
        title: "더 복서", 
        writter:"정지훈 | 목요웹툰 | 액션", 
        inform: "재능있는 복서를 찾던 전설적인 트레이너 K는 기묘한 소년을 발견한다. 그의 충격적인 재능을 축복일까, 저주일까?!"
      }
  ]

  const titleTag = document.querySelector(".left h1");
  const writterTag = document.querySelector(".writter");
  const informTag = document.querySelector(".inform");
  const bannerTag = document.querySelector(".banner");
  const bannerImg = document.querySelector(".right img");

  const circleS = document.querySelectorAll(".page .circle");

  let currentNumber = 0;

  bannerTag.addEventListener("click",function(){

    console.log(currentNumber);
    currentNumber = currentNumber - 1;

    if(currentNumber < 0){
        currentNumber = 3;
      }

    titleTag.innerHTML = principles[currentNumber].title;
    writterTag.innerHTML = principles[currentNumber].writter;
    informTag.innerHTML = principles[currentNumber].inform;


    bannerTag.style.background = `url(webtoonimg/backgroundimg${currentNumber}.png) center center`;
    bannerTag.style.backgroundSize = 'cover';
    bannerImg.src = `webtoonimg/banner${currentNumber}.png`;

    if(currentNumber > 2){
        circleS[currentNumber].style.opacity = '1';
        circleS[0].style.opacity = '0.4';
    }

    if(currentNumber > 1 && currentNumber < 3){
        circleS[currentNumber].style.opacity = '1';
        circleS[3].style.opacity = '0.4';
    }

    if(currentNumber > 0 && currentNumber < 2){
        circleS[currentNumber].style.opacity = '1';
        circleS[2].style.opacity = '0.4';
    }

    if(currentNumber < 1){
        circleS[currentNumber].style.opacity = '1';
        circleS[1].style.opacity = '0.4';
    }


  })

  const headerTag = document.querySelector("header");
  const recommendTag = document.querySelector(".recommend");
  const cardsTag = document.querySelectorAll(".card");
  const effectTag = document.querySelector(".appeareffect");
  const effectTag2 = document.querySelector(".appeareffect2");
  const cardtitle = document.querySelector(".recommend h1");
  const daysTag = document.querySelector(".days");
  const webtoonimg = document.querySelectorAll(".webtoon")
  const webtoon1 = document.getElementById("webtoon1");
  const webtoon2 = document.getElementById("webtoon2");
  const webtoon3 = document.getElementById("webtoon3");
  const webtoon4 = document.getElementById("webtoon4");
  const webtoon5 = document.getElementById("webtoon5");
  const webtoon6 = document.getElementById("webtoon6");
  const hovereffect1 = document.getElementById("hovereffect1")
  const hovereffect2 = document.getElementById("hovereffect2")
  const hovereffect3 = document.getElementById("hovereffect3")
  const hovereffect4 = document.getElementById("hovereffect4")
  const hovereffect5 = document.getElementById("hovereffect5")
  const hovereffect6 = document.getElementById("hovereffect6")

  webtoon1.addEventListener("mouseenter",function(){
    hovereffect1.style.opacity = '1';
  })

  webtoon1.addEventListener("mouseleave",function(){
    hovereffect1.style.opacity = '0';
  })

  webtoon2.addEventListener("mouseenter",function(){
    hovereffect2.style.opacity = '1';
  })

  webtoon2.addEventListener("mouseleave",function(){
    hovereffect2.style.opacity = '0';
  })

  webtoon3.addEventListener("mouseenter",function(){
    hovereffect3.style.opacity = '1';
  })

  webtoon3.addEventListener("mouseleave",function(){
    hovereffect3.style.opacity = '0';
  })

  webtoon4.addEventListener("mouseenter",function(){
    hovereffect4.style.opacity = '1';
  })

  webtoon4.addEventListener("mouseleave",function(){
    hovereffect4.style.opacity = '0';
  })

  webtoon5.addEventListener("mouseenter",function(){
    hovereffect5.style.opacity = '1';
  })

  webtoon5.addEventListener("mouseleave",function(){
    hovereffect5.style.opacity = '0';
  })

  webtoon6.addEventListener("mouseenter",function(){
    hovereffect6.style.opacity = '1';
  })

  webtoon6.addEventListener("mouseleave",function(){
    hovereffect6.style.opacity = '0';
  })

  window.addEventListener("scroll",function(){

    const scrollY = this.window.scrollY;

    let delay = 0.25;
    let delay2 = 0.25;

    if(scrollY > bannerTag.offsetHeight/1.2){
        headerTag.style.background = '#333';

        effectTag.style.width = '100%';
        cardtitle.style.opacity ='1';

        for(let i = 0; i<cardsTag.length; i++){
            cardsTag[i].style.animation = `appear 0.5s ${delay}s both`
            delay+=0.5
        }
    } else{
        headerTag.style.background = 'none';
        cardsTag[i].style.animation = '0';
    }

    if(scrollY > recommendTag.offsetTop + recommendTag.offsetHeight){
        daysTag.style.opacity = '1';
        effectTag2.style.width = '100%';

        for(let i = 0; i<webtoonimg.length; i++){
            webtoonimg[i].style.animation = `make 0.5s ${delay2}s both`
            delay2+=0.5
        }
    }else{
        webtoonimg[i].style.animation = '0';
    }
  })

  const monday = document.querySelector(".monday");
  const tuesday = document.querySelector(".tuesday");
  const wednesday = document.querySelector(".wednesday");
  const thursday = document.querySelector(".thursday");
  const friday = document.querySelector(".friday");
  const saturday = document.querySelector(".saturday");
  const sunday = document.querySelector(".sunday");
  
  monday.addEventListener("click",function(){
    monday.style.background = '#333';
    monday.style.color = '#01D358';
    tuesday.style.background = 'none';
    tuesday.style.color = '#C0C0C0';
    wednesday.style.background = 'none';
    wednesday.style.color = '#C0C0C0';
    thursday.style.background = 'none';
    thursday.style.color = '#C0C0C0';
    friday.style.background = 'none';
    friday.style.color = '#C0C0C0';
    saturday.style.background = 'none';
    saturday.style.color = '#C0C0C0';
    sunday.style.background = 'none';
    sunday.style.color = '#C0C0C0';
  })

  tuesday.addEventListener("click",function(){
    monday.style.background = 'none';
    monday.style.color = '#C0C0C0';
    tuesday.style.background = '#333';
    tuesday.style.color = '#01D358';
    wednesday.style.background = 'none';
    wednesday.style.color = '#C0C0C0';
    thursday.style.background = 'none';
    thursday.style.color = '#C0C0C0';
    friday.style.background = 'none';
    friday.style.color = '#C0C0C0';
    saturday.style.background = 'none';
    saturday.style.color = '#C0C0C0';
    sunday.style.background = 'none';
    sunday.style.color = '#C0C0C0';
  })

  wednesday.addEventListener("click",function(){
    monday.style.background = 'none';
    monday.style.color = '#C0C0C0';
    tuesday.style.background = 'none';
    tuesday.style.color = '#C0C0C0';
    wednesday.style.background = '#333';
    wednesday.style.color = '#01D358';
    thursday.style.background = 'none';
    thursday.style.color = '#C0C0C0';
    friday.style.background = 'none';
    friday.style.color = '#C0C0C0';
    saturday.style.background = 'none';
    saturday.style.color = '#C0C0C0';
    sunday.style.background = 'none';
    sunday.style.color = '#C0C0C0';
  })

  thursday.addEventListener("click",function(){
    monday.style.background = 'none';
    monday.style.color = '#C0C0C0';
    tuesday.style.background = 'none';
    tuesday.style.color = '#C0C0C0';
    wednesday.style.background = 'none';
    wednesday.style.color = '#C0C0C0';
    thursday.style.background = '#333';
    thursday.style.color = '#01D358';
    friday.style.background = 'none';
    friday.style.color = '#C0C0C0';
    saturday.style.background = 'none';
    saturday.style.color = '#C0C0C0';
    sunday.style.background = 'none';
    sunday.style.color = '#C0C0C0';
  })

  friday.addEventListener("click",function(){
    monday.style.background = 'none';
    monday.style.color = '#C0C0C0';
    tuesday.style.background = 'none';
    tuesday.style.color = '#C0C0C0';
    wednesday.style.background = 'none';
    wednesday.style.color = '#C0C0C0';
    thursday.style.background = 'none';
    thursday.style.color = '#C0C0C0';
    friday.style.background = '#333';
    friday.style.color = '#01D358';
    saturday.style.background = 'none';
    saturday.style.color = '#C0C0C0';
    sunday.style.background = 'none';
    sunday.style.color = '#C0C0C0';
  })

  saturday.addEventListener("click",function(){
    monday.style.background = 'none';
    monday.style.color = '#C0C0C0';
    tuesday.style.background = 'none';
    tuesday.style.color = '#C0C0C0';
    wednesday.style.background = 'none';
    wednesday.style.color = '#C0C0C0';
    thursday.style.background = 'none';
    thursday.style.color = '#C0C0C0';
    friday.style.background = 'none';
    friday.style.color = '#C0C0C0';
    saturday.style.background = '#333';
    saturday.style.color = '#01D358';
    sunday.style.background = 'none';
    sunday.style.color = '#C0C0C0';
  })
  
  sunday.addEventListener("click",function(){
    monday.style.background = 'none';
    monday.style.color = '#C0C0C0';
    tuesday.style.background = 'none';
    tuesday.style.color = '#C0C0C0';
    wednesday.style.background = 'none';
    wednesday.style.color = '#C0C0C0';
    thursday.style.background = 'none';
    thursday.style.color = '#C0C0C0';
    friday.style.background = 'none';
    friday.style.color = '#C0C0C0';
    saturday.style.background = 'none';
    saturday.style.color = '#C0C0C0';
    sunday.style.background = '#333';
    sunday.style.color = '#01D358';
  })

  const leftbutton = document.querySelector("leftbutton");
  const rightButton = document.querySelector("rightButton");
  const page1 = document.querySelector(".page1");
  const page2 = document.querySelector(".page2");

  rightButton.addEventListener("click",function(){
    page1.style.transform = 'translateX(-100%)';
    page2.style.transform = 'translateX(-100%)';
  })