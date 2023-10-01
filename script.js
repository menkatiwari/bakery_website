const searchIcon=document.querySelector('.search-icon')
const searchForm=document.querySelector('.search-form')
const menuIcon=document.querySelector('.menu-icon')
const navbar=document.querySelector('.navbar')

searchIcon.addEventListener("click",()=>{
    searchForm.classList.add("active");
    cartItemsContainer.classList.remove("active");
    navbar.classList.remove("active");

});

menuIcon.addEventListener("click",()=>{
    navbar.classList.add("active");
    searchForm.classList.remove("active");
    cartItemsContainer.classList.remove("active");

});

const cartIcon=document.querySelector('.cart-icon')
const cartItemsContainer=document.querySelector('.cart-items-container')

cartIcon.addEventListener("click",()=>{
    cartItemsContainer.classList.add("active");
    searchForm.classList.remove("active");
    navbar.classList.remove("active");

});
window.onscroll=()=>{
    cartItemsContainer.classList.remove("active");
    searchForm.classList.remove("active");
    navbar.classList.remove("active");

}