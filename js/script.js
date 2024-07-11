$(document).ready(function(){
    $(".header-menu > .wrap > ul > li").mouseover(function(){
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
};

