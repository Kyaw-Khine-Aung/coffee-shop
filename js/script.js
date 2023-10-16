const menuContainer = document.getElementsByClassName("menu-container")[0];
const menuBar = document.getElementById("bar-btn");

menuBar.addEventListener("click", () => {
    menuContainer.classList.toggle("active");
    searchForm.classList.remove("active");
    coffeeContainer.classList.remove("active");
})

const searchForm = document.querySelector(".search-form");
const searchBtn = document.querySelector("#search-btn");

searchBtn.addEventListener("click", () => {
    searchForm.classList.toggle("active");
    menuContainer.classList.remove("active"); 
    coffeeContainer.classList.remove("active");
})

const coffeeContainer = document.querySelector(".coffe-bean-container");
const cartBtn = document.querySelector("#cart-btn");

cartBtn.addEventListener("click", () => {
    coffeeContainer.classList.toggle("active");
    menuContainer.classList.remove("active"); 
    searchForm.classList.remove("active");
})

window.onscroll = () => {
    menuContainer.classList.remove("active"); 
    searchForm.classList.remove("active");
    coffeeContainer.classList.remove("active");
}

const shoppingIcon = document.getElementsByClassName("firstShopIcon")[0];
const heartIcon = document.querySelector(".firstHeartIcon");
const eyeIcon = document.querySelector(".firstEyeIcon");

const secondShoppingIcon = document.getElementsByClassName("secondShopIcon")[0];
const secondHeartIcon = document.querySelector(".secondHeartIcon");
const secondEyeIcon = document.querySelector(".secondEyeIcon");

const thirdShoppingIcon = document.getElementsByClassName("thirdShopIcon")[0];
const thirdHeartIcon = document.querySelector(".thirdHeartIcon");
const thirdEyeIcon = document.querySelector(".thirdEyeIcon");


// react function
function addReact(reactIcon) {
    const exitClass = reactIcon.classList.contains("colorRedActive");
    if (exitClass) {
        reactIcon.classList.remove("colorRedActive");
    }else {
        reactIcon.classList.add("colorRedActive");
    }
}

shoppingIcon.addEventListener("click", () => {
    // const exitClass = shoppingIcon.classList.contains("colorRedActive");
    // if (exitClass) {
    //     shoppingIcon.classList.remove("colorRedActive");
    // }else {
    //     shoppingIcon.classList.add("colorRedActive");
    // }
    addReact(shoppingIcon);
})

heartIcon.addEventListener("click", () => {
    // const exitClass = heartIcon.classList.contains("colorRedActive");
    // if (exitClass) {
    //     heartIcon.classList.remove("colorRedActive");
    // }else {
    //     heartIcon.classList.add("colorRedActive");
    // }
    addReact(heartIcon);
})

eyeIcon.addEventListener("click", () => {
    // const exitClass = eyeIcon.classList.contains("colorRedActive");
    // if (exitClass) {
    //     eyeIcon.classList.remove("colorRedActive");
    // }else {
    //     eyeIcon.classList.add("colorRedActive");
    // }
    addReact(eyeIcon);
})

secondShoppingIcon.addEventListener("click", () => {
    addReact(secondShoppingIcon);
})

secondHeartIcon.addEventListener("click", () => {
    addReact(secondHeartIcon);
})

secondEyeIcon.addEventListener("click", () => {
    addReact(secondEyeIcon);
})

thirdShoppingIcon.addEventListener("click", () => {
    addReact(thirdShoppingIcon);
})

thirdHeartIcon.addEventListener("click", () => {
    addReact(thirdHeartIcon);
})

thirdEyeIcon.addEventListener("click", () => {
    addReact(thirdEyeIcon);
})
