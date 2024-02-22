let menu_btn = document.querySelector("#hamburger");
let cancel_btn = document.querySelector("#cancel");
let nav_bar = document.querySelector("#nav-part2");
let home_page = document.querySelector("#section1");

let isMenuOpen = false;

menu_btn.addEventListener("click", toggle);
cancel_btn.addEventListener("click", toggleOff);

function toggle(){
    if(!isMenuOpen){
        menu_btn.style.display = "none";
        cancel_btn.style.display = "block";
        nav_bar.style.display = "flex";

        isMenuOpen = true;
        // home_page.style.display = "none";
        home_page.style.opacity = "0";
        // nav_bar.style.zIndex = "50";
    }
    else{
        menu_btn.style.display = "block";
    }
}

function toggleOff(){
    if(isMenuOpen){
        cancel_btn.style.display = "none";
        menu_btn.style.display = "block";
        nav_bar.style.display = "none";

        isMenuOpen = false;
        // home_page.style.display = "flex";
        home_page.style.opacity = "1";
        // nav_bar.style.zIndex = "-10";
    }
    else{
        cancel_btn.style.display = "block";
    }
}
// menu_btn.onclick( () => {
//     console.log = 1;
//     nav_bar.display = flex;
// });