const collapsibleText = document.querySelector(".collapsible-text");
const collapsible = document.querySelector(".collapsible");
const collapsibleText1 = document.querySelector(".collapsible-text1");
const collapsible1 = document.querySelector(".collapsible1");
const collapsibleText2 = document.querySelector(".collapsible-text2");
const collapsible2 = document.querySelector(".collapsible2");
const collapsibleText3 = document.querySelector(".collapsible-text3");
const collapsible3 = document.querySelector(".collapsible3");
const collapsibleText4 = document.querySelector(".collapsible-text4");
const collapsible4 = document.querySelector(".collapsible4");


collapsibleText.addEventListener("click", () => {
    collapsible.classList.toggle("reveal-text");
})
collapsibleText1.addEventListener("click", () => {
    collapsible1.classList.toggle("reveal-text1");
})
collapsibleText2.addEventListener("click", () => {
    collapsible2.classList.toggle("reveal-text2");
})
collapsibleText3.addEventListener("click", () => {
    collapsible3.classList.toggle("reveal-text3");
})
collapsibleText4.addEventListener("click", () => {
    collapsible4.classList.toggle("reveal-text4");
})

document.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");
    if (window.scrollY > 0) {
        nav.classList.add("scrolled")
    } else {
        nav.classList.remove("scrolled")
    }
})

const homeOpt = document.querySelector(".home-options");
const bar = document.querySelector(".bar");
const close = document.querySelector(".close");

if(bar) {
    bar.addEventListener("click", () => {
        homeOpt.classList.toggle("active")
    })
}
if(close) {
    close.addEventListener("click", () => {
        homeOpt.classList.remove("active")
    })
}