const menu = document.getElementById("menu");
menu.addEventListener("click", () => {
    toggleMenu()
});
function toggleMenu(){
    const nav = document.querySelector(".cont-nav-responsividade-header");
    const bar1 = document.querySelector(".bar1");
    const bar2 = document.querySelector(".bar2");
    const bar3 = document.querySelector(".bar3");
    const containerNav = document.querySelector(".cont-responsividade-header");

    menu.classList.toggle('change');

    if (menu.classList.contains('change')){
        nav.style.display = 'flex';
        containerNav.style.width = "50%";
        containerNav.style.height = "100%"
        bar1.style.transform ="rotateZ(45deg)";
        bar2.style.transform ="rotateZ(-45deg)";
        bar3.style.opacity = "0";
        bar1.style.translate = "0px 0px";
        bar2.style.translate = "0px 0px";
        containerNav.style.border = "5px solid var(--color2-color)";
        containerNav.style.boxShadow = "0px 0px 20px  black";
    } else{
        containerNav.style.width = "5%";
        containerNav.style.right = "0";
        containerNav.style.height = "0%"
        nav.style.right = "10%";
        nav.style.display = 'none';
        bar1.style.transform ="none";
        bar2.style.transform ="none";
        bar3.style.opacity = "1";
        bar1.style.translate = "0px 15px";
        bar2.style.translate = "0px -15px";
        containerNav.style.border = "none";
        containerNav.style.boxShadow = "none";
    }
}
