let isActive = false;
console.log("aaaaaaaa")
const allElseContent = document.getElementsByTagName("section")
const navbarCont = document.querySelector(".nav1-main-container")
const navbar = document.querySelectorAll(".nav1-container")
const toggler = document.querySelector(".toggler1")
const togglerClickeable = document.querySelector(".toggle-icon1")
document.addEventListener("click", function (event) {
    // If user clicks inside the element, do nothing
    if (event.target.closest(".toggle-icon1") && !isActive) {
        console.log("Navbar abierto")
        navbarCont.style.fontSize = "270%"
        navbarCont.style.flexDirection = "Column"
        isActive = true
        for (let item of navbar) {
            item.style.display = "block"
            item.style.margin = "40px 0"
            console.log(item)
        }
        for (let item of allElseContent) {
            item.style.display = "none"
            console.log(item)
        }
    } else if (!event.target.closest(".nav1-container") && isActive) {
        console.log("Navbar cerrado")
        navbarCont.style.flexDirection = "row"
        isActive = false
        for (let item of allElseContent) {
            item.style.display = "flex"
            console.log(item)
        }
        for (let item of navbar) {
            item.style.display = "none"
            console.log(item)
        }

    }


})