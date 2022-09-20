// choose color option
let colorOption = document.getElementById("color-option");
let setting = document.getElementById("setting");
let linksPart = document.getElementById("links");
let sideBarPart = document.getElementById("side-bar");
let activeLinkStatuse = false;
let colorOptionStatus = false;

colorOption.onclick = () => {
    setting.classList.toggle("active-setting");
}


// change background color

let modeBtn = document.getElementById("mode-btn");
let backgroundMode = document.getElementById("background-mode");
let items = document.querySelectorAll(".item");
let moreInfo = document.getElementById("more-info");
let backgroundStatuseBlack = true;


let changeBackgroundMode = () => {
    document.body.classList.toggle("active-background-mode");
    // linksPart.classList.toggle("active-background-mode");
    moreInfo.classList.toggle("active-color");
    items.forEach(item => item.classList.toggle("active-color"));
    if (backgroundStatuseBlack) {
        backgroundMode.innerHTML = ` <ion-icon name="moon-outline" onclick="changeBackgroundMode()"></ion-icon>`;
        links.style.backgroundColor = " rgb(217, 237, 243)";
        sideBarPart.style.backgroundColor = " rgb(217, 237, 243)";
        backgroundStatuseBlack = false;
    }
    else {
        backgroundMode.innerHTML = ` <ion-icon name="sunny-outline" onclick="changeBackgroundMode()"></ion-icon> `;
        links.style.backgroundColor = " rgb(53, 53, 53) ";
        sideBarPart.style.backgroundColor = " rgb(53, 53, 53) ";
        backgroundStatuseBlack = true;
    }
}

// variables

let colorTxt = document.querySelectorAll(".color-txt");
let allIcons = document.querySelectorAll(".item");
let allColors = document.querySelectorAll(".color");
let beforeImg = document.querySelector(".before");
let afterImg = document.querySelector(".after");
let beforeLogo = document.querySelector(".before-logo");
let afterLogo = document.querySelector(".after-logo");
let elementsBackgroundColor = document.querySelectorAll(".color-bg");
let elementsBorderColor = document.querySelectorAll(".border-color");
let activeLink = document.querySelectorAll(".active-link");
let defualtActiveLinkColor = "rgb(211, 119, 137)";
let carts = document.querySelectorAll(".cart");
let cartIcons = document.querySelectorAll("cart-icon");




let ColorsCollection = [
    {
        id: "color1",
        color: "rgb(184, 134, 199)"
    },
    {
        id: "color2",
        color: "cadetblue"
    },
    {
        id: "color3",
        color: "darkorange"
    },
    {
        id: "color4",
        color: "crimson"
    },
    {
        id: "color5",
        color: "rgb(29, 250, 176)"
    },
];

// functions 

let changeColor = (selectedColor) => {
    colorTxt.forEach(item => {
        item.style.color = selectedColor;})
}

 let changeActiveLink = (selectedColor) => {
     allIcons.forEach(item => {
         activeLink.forEach(a => {
             a.style.color = selectedColor;
              })
              item.addEventListener("click", () => {
                      allIcons.forEach(x => {
                          x.classList.remove("active-link");
                      });
                  item.classList.add("active-link");
                  item.style.color = selectedColor;
                  allIcons.forEach(x=>console.log(x))
                  })
     })
 }


let checkFunction = () => {
    if (activeLinkStatuse === false) {
        allIcons.forEach(item => {
            item.addEventListener("click", () => {
                allIcons.forEach(x => {
                    x.classList.remove("active-link")
                });
                item.classList.add("active-link");
                item.style.color = defualtActiveLinkColor; 
            })
        }) 
    }
}

checkFunction();


// let changeBorderColorLogo = (selectedColor) => {
//     beforeLogo.style.borderTopColor= selectedColor;
//         beforeLogo.style.borderLeftColor= selectedColor;
//         afterLogo.style.borderBottomColor= selectedColor;
//     afterLogo.style.borderRightColor = selectedColor;
// }

let mouseOverIconsColor = (selectedColor) => {
    // icons mouseover and mouseout
    allIcons.forEach((item) => {
        item.addEventListener("mouseover", () => {
            item.style.color = selectedColor;
        })
        item.addEventListener("mouseout", () => {
            item.style.color = ""
        })
    })
        
    // carts
    if (colorOptionStatus) {
        carts.forEach((item) => {
            item.addEventListener("mouseover", () => {
                let selectedItem = item.querySelector(".cart-icon");
                selectedItem.style.backgroundColor = selectedColor;
                selectedItem.style.color = "#fff";
            })
            item.addEventListener("mouseout", () => {
                let selectedItem = item.querySelector(".cart-icon");
                selectedItem.style.backgroundColor = "";
                selectedItem.style.color = selectedColor;
            })
        })
    }
    else {
        carts.forEach(item => {
            item.addEventListener("mouseover", () => {
                let selectedItem = item.querySelector(".cart-icon");
                selectedItem.classList.add("color-bg");
                selectedItem.style.color = "#fff";

            })
            item.addEventListener("mouseout", () => {
                let selectedItem = item.querySelector(".cart-icon");
                selectedItem.classList.remove("color-bg");
                selectedItem.style.color = "";
            })
        })
    }
}

let changeBackgroundColor = (selectedColor) => {
    elementsBackgroundColor.forEach(item => item.style.backgroundColor = selectedColor)
}

let changeBorderColor = (selectedColor) => {
    elementsBorderColor.forEach(item=> item.style.borderColor = selectedColor)
}
mouseOverIconsColor();

let colorsOption = () => {
    allColors.forEach(item => {
        item.addEventListener("click", () => {
            activeLinkStatuse = true;
            colorOptionStatus = true;
        result = ColorsCollection.find(x => {
            if (x.id === item.id) {
                return x.color;
            }
         })    
        changeColor(result.color);
        // changeBorderColorLogo(result.color);
        changeBackgroundColor(result.color);
        changeBorderColor(result.color);  
        changeActiveLink(result.color); 
        mouseOverIconsColor(result.color);    
        })
    })
}
colorsOption();

let allMiddles = document.querySelectorAll(".middle")

// console.log(allMiddles[0].dataset.id);

let changeMiddleContainer = () => {
    allIcons.forEach(item => {
        item.addEventListener("click", () => {
            allMiddles.forEach(x => {
                if (x.dataset.id === item.id) {
                    allMiddles.forEach(y => {
                        y.classList.remove("change-middle");
                        x.classList.add("change-middle")
                        sideBarToggle();
                    })
                }
            })
        })
    })
}
changeMiddleContainer();

let links = document.querySelector(".links");

let sideBarToggle = () => {
    let width = document.body.clientWidth;
    if(width <= 768){
        links.classList.toggle("side-bar-active");
    }
    else{
        return
    }
}