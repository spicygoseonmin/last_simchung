// 헤더 메뉴 (생물) 리스트 호버
$(document).ready(function(){
    $(".header-menu-wrap > ul > li").mouseover(function(){
        // console.log(this);
        $(this).find(".submenu").stop().slideDown(200);
    }).mouseout(function(){
        $(this).find(".submenu").stop().slideUp(200);
    });
});

// 헤더 메뉴 (더보기) 리스트 호버
$(document).ready(function(){
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

window.onload = function () {
    const searchIcon = document.querySelector(".search-icon");
    const searchHover =document.querySelector("#searchWindow");
    searchIcon.onclick = function(){
        searchHover.classList.toggle("openSearchWindow");
    }

    const swPop = new Swiper(".popular_list", {
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
            slidesPerView: 5,
            },
        },
        loop: true,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".sale-object.swiper-button-next",
            prevEl: ".sale-object.swiper-button-prev",
        },
    });

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
            slidesPerView: 4,
            },
        },
        loop: true,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
    })
};

