const navUl = document.querySelector("#navUl");
const icon = document.querySelector("#icon")
const dropDownContent = document.querySelector("#dropDownContent");
icon.addEventListener("click", clickIcon)
window.addEventListener('resize', windowResize);
// icon.addEventListener("mouseover", mouseOverIcon)
// icon.addEventListener("mouseout", mouseOutIcon)
// let isClicked = false;
// let skip = false;

function clickIcon() {
    if(dropDownContent.classList.contains("dropDown")) {
        dropDownContent.style.display = "none";
        dropDownContent.classList.remove("dropDown");
    }else {
        dropDownContent.style.display = "flex";
        dropDownContent.classList.add("dropDown");
    }
}

function windowResize() {
    const mediaQuery = window.matchMedia("(min-width: 985px)");
    if(mediaQuery.matches) {
        if(dropDownContent.classList.contains("dropDown")) {
            dropDownContent.style.display = "none";
            dropDownContent.classList.remove("dropDown");
        }
    }        
}

// function clickIcon() {
//     if(isClicked) {
//         isClicked = false;
//         dropDownContent.style.display = "none";
//         dropDownContent.classList.remove("dropDown");
//         skip = true;
//     }else {
//         isClicked = true;
//     }
// }

// function mouseOverIcon() {
//     // isHovered = true;
//     if(!isClicked) {
//         if(dropDownContent.classList.contains("dropDown")) {
//             dropDownContent.style.display = "none";
//             dropDownContent.classList.remove("dropDown");
//         }else {
//             dropDownContent.style.display = "flex";
//             dropDownContent.classList.add("dropDown");
//         }
//     }
// }

// function mouseOutIcon(mediaQuery) {
//     if(mediaQuery.matches) {
//         if(dropDownContent.classList.contains("dropDown")) {
//             dropDownContent.style.display = "none";
//             dropDownContent.classList.remove("dropDown");
//         }
//     }        
// }