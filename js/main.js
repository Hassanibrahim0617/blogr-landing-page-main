dropDown = document.querySelector(".fa-chevron-down")
scrollUp = document.querySelector(".fa-chevron-up")
productNav = document.querySelector("productBtn")
// const dropDownNav = () => {
// console.log(click.Target);
// scrollUp.classList.remove("productContent")
// const productNav = "scrollUp"
// };
productNav.addEventListener("click", () =>{
    scrollUp.classList.toggle("productContentNav");
    
});


