/* MOBILE MENU CONTROLLER */

$('.has-child > a').on("click",function(e){
    e.preventDefault();
    $(this).parent().toggleClass("active");
})

$('.mobile-icon').on("click",function(e){
    e.preventDefault();
    $('html').toggleClass("menu-mobile-open");
});