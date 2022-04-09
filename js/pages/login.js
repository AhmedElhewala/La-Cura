// Array of imgs of the slider
let sliderImgs = [];
for (let i = 0; i < 9; i++) {
    sliderImgs.push(`landing${i}.jpg`);
}
// landing variable
let landing = document.querySelector(`.landing`);
let imgIndex = 0;
// color options variables
let optColors = Array.from(document.querySelectorAll(`.option .option-box ul.color > li`));
// go up button variables
let goUpBtn = document.querySelector(`.go-up`);
// main section variables
let mainSection = document.querySelector(`main .container`);
let mainLogo = document.querySelector(`main .container img`);
// localstorage values variables
let saveMainLogo = localStorage.getItem("main-logo");
// emerency section variables
let emerencyHead = document.querySelector(`.emergency .heading`);
let emerencyCont = document.querySelector(`.emergency .container`);
// health section variables
let healthHead = document.querySelector(`.health .heading`);
let healthNote = document.querySelector(`.health .container`);
// care section variables
let careHead = document.querySelector(`.care .heading`);
let careCont = document.querySelector(`.care .container`);
let careBoxOne = document.querySelector(`.care .container .care-box:first-of-type`);
let careBoxTwo = document.querySelector(`.care .container .care-box:nth-of-type(2)`);
let careBoxThree = document.querySelector(`.care .container .care-box:nth-of-type(3)`);
let careBoxFour = document.querySelector(`.care .container .care-box:last-of-type`);
// vets section variables
let vetHead = document.querySelector(`.vets .heading`);
let vetCont = document.querySelector(`.vets .container`);
// About us variables
let aboutHead = document.querySelector(`.about .heading`);
let aboutCont = document.querySelector(`.about .container`);
let aboutForm = document.querySelector(`.about .container form`);
let aboutData = document.querySelector(`.about .container .details`);

// Start check Localstorage
// main logo value
if (saveMainLogo !== null) {
    mainLogo.setAttribute("src", `assets/imgs/${saveMainLogo}`);
}
// sliding the landing background
setInterval(function() {
    if (imgIndex === 9) {
        imgIndex = 0;
    }
    landing.style.backgroundImage = `url("../../assets/imgs/${sliderImgs[imgIndex]}")`;
    imgIndex++;
}, 3000);
// click on a color option
optColors.forEach(li => {
    li.addEventListener("click", () => {
        mainLogo.setAttribute("src", `assets/imgs/${li.dataset.main}`);
        localStorage.setItem("main-logo", li.dataset.main);
    });
});
// showing the main section
window.onscroll = function() {
    if (window.scrollY >= window.innerHeight) {
        goUpBtn.classList.add("show");
    } else {
        goUpBtn.classList.remove("show");
    }
};
// click on go up button
goUpBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0
    });
});