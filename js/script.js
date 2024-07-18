// 헤더 메뉴 (생물) 리스트 호버
$(document).ready(function(){
    $(".header-menu-wrap > ul > li").mouseover(function(){
        // console.log(this);
        $(this).find(".submenu").stop().slideDown(200);
    }).mouseout(function(){
        $(this).find(".submenu").stop().slideUp(200);
    });

    // 헤더 메뉴 (더보기) 리스트 호버
    $(".addMenubar").mouseover(function(){
        // console.log(this);
        $(this).find(".submenu").stop().slideDown(200);
    }).mouseout(function(){
        $(this).find(".submenu").stop().slideUp(200);
    });
});



//  검색창 클릭
// const searchIcon = document.getElementById("search-icon");
// const searchHover = document.getElementById("searchWindow");

// searchIcon.onclick = function(){
//     searchHover.classList.toggle("openSearchWindow");
// };



// 모바일 헤더
// window.addEventListener("click", function(){
//     const remove = document.querySelector(".return-Icon");
//     const mbMenuIcon = document.querySelector(".mb-Icon");
//     const mbMenu = document.querySelector(".mb-header > .addMenubar > .submenu");

//     if(onclick = remove){
//         mbMenu.classList.add("mb-view")
//     }else{
//         mbMenu.classList.remove("mb-view")
//     }
//     if(onclick = mbMenuIcon){
//         mbMenu.classList.remove("mb-view")
//     }else{
//         mbMenu.classList.add("mb-view")
//     }
// })



// const remove = document.querySelector(".return-Icon");
// const mbMenuIcon = document.querySelector(".mb-Icon");
// const mbMenu = document.querySelector(".mb-header > .addMenubar > .submenu");
// mbMenuIcon.onclick = function(){
//     // alert("안녕하세요")
//     this.classList.remove("mb-view")
// }
// remove.onclick = function(){
//     // alert("안녕하세요")
//     this.classList.add("mb-view")
// }
// 스크롤 비활성화
window.onload =function(){
const body = document.querySelector("body");
const mbMenu = document.querySelector(".mb-submenu");
const remove = document.querySelector(".return-Icon");

function controlScroll(isOpen) {
    if (isOpen) {
        body.style.overflow = "hidden";
        } else {
        body.style.overflow = "auto";
        }
}

const isOpen = true;
controlScroll(isOpen);
remove.addEventListener("click",function(){
    mbMenu.style.display = "none"
    controlScroll(false);
});
};



// 심청 소개란
window.addEventListener("scroll", function introScroll(){
    const introTxt = document.querySelector(".introduce-wrap");
                // getBoundingClientRect()자바스크립트 메서드
            // 이미지 요소의 경계상자의 정보제공
    const introPosition = introTxt.getBoundingClientRect().top;

    const windowHeight = window.innerHeight;

    if(introPosition < windowHeight && introPosition > 0){
        introTxt.classList.add("view");
    }else{
        introTxt.classList.remove("view");
    }
})


window.onload = function () {
    const searchIcon = document.querySelector(".search-icon");
    const searchHover =document.querySelector("#searchWindow");
    searchIcon.onclick = function(){
        searchHover.classList.toggle("openSearchWindow");
    }
    // 오늘의 추천 생물
    const swPop = new Swiper(".popular_list", {
        slidesPerView: 2,
        // grid: {
        //     rows: 1,
        //     fill: "row",
        //     },
        spaceBetween: 0,
        breakpoints: {
            600: {
            slidesPerView: 3,
            slidesPerGroup: 1,
            },
            760: {
            slidesPerGroup:3,
            slidesPerView: 3,
            },
            1080: {
                slidesPerGroup:4,
                slidesPerView: 4,
            },
            1280 :{
                slidesPerGroup:5,
                slidesPerView: 5,
            }
        },
        loop: true,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".sale-object .swiper-button-next",
            prevEl: ".sale-object .swiper-button-prev",
        },
    });

    //하단 상품 리스트
    const swUnder = new Swiper(".sale_card",{
        slidesPerView: 2,
        // grid: {
        //     rows: 1,
        //     fill: "row",
        //     },
        spaceBetween: 0,
        breakpoints: {
            480: {
            slidesPerView: 2,
            },
            760: {
            slidesPerView: 3,
            slidesPerGroup:2,
            },
            1080:{
                slidesPerView: 4,
                slidesPerGroup:2,
            }
        },
        loop: true,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
    })

    
};

$(document).ready(function(){
    $(function(){
        $(".etx-tabmenu > li > p").click(function(){
            // console.log(this);
            // console.log는 변수가 작용하고 있는지 F12번에 내역을 남겨줌 
            $(this).parent().addClass("active").siblings().removeClass("active");
        });
    });
});




