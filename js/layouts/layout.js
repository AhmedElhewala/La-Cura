// preloader variable
let preLoad = `.preload`;
// profile variables
let profile = `header .container .profile`;
let profileArrow = `header .container .profile .caret`;
let profileMenu = `.profile-pop`;
// navbar variables
let navBar = `nav`;
let navMenu = `header .container .toggle-menu`;
// color options variable
let optColors = Array.from(document.querySelectorAll(`.option .option-box ul.color > li`));
let optionBox = `.option`;
let optBtn = `.option .option-icon`;
let optIcon = `.option .option-icon > svg`;
// header & footer logo variables
let headerLogo = document.querySelector(`header .container .logo-icon img`);
let footerLogo = document.querySelector(`footer .container .top .end-wish img`);
// theme mood variables
let themeBox = `.theme`;
let themeIcon = `.theme > svg`;
let themeIconSvg = document.querySelector(`.theme > i`);
// Emergency variables
let emergencyQue = `.emergency .container .emergency-faq .faq-box div.faq-que`;
let emergencyAns = `.emergency .container .emergency-faq .faq-box div.faq-ans`;
let emergencyArrow = `.emergency .container .emergency-faq .faq-box div.faq-que svg`;
// Health variables
let healthQue = `.health .container .health-faq .faq-box div.que-box`;
let healthAsn = `.health .container .health-faq .faq-box div.ans-box`;
let healthArrow = `.health .container .health-faq .faq-box div.que-box svg`;
// Vets variables
let vetCard = `.vets .container .vet-content .vet-box`;
// localstorage values variables
let saveLogo = localStorage.getItem("logo-color");
let saveColor = localStorage.getItem("option-color");
let saveThemeStat = localStorage.getItem("theme-status");
let saveThemeIcn = localStorage.getItem("theme-icon");
let saveThemeBG = localStorage.getItem("theme-background");
let saveThemeClr = localStorage.getItem("theme-color");

// Fade preloader out
$(document).ready(() => {
    $(preLoad).fadeOut("slow");
});
// Start check Localstorage
// color option value
if (saveColor !== null) {
    document.documentElement.style.setProperty("--option-color", saveColor);
    optColors.forEach(li => {
        if (li.dataset.color == saveColor) {
            li.classList.add("active");
        } else {
            if (li.classList.contains("active")) {
                li.classList.remove("active");
            }
        }
    });
}
// logo color value
if (saveLogo !== null) {
    headerLogo.setAttribute("src", `assets/imgs/${saveLogo}`);
    footerLogo.setAttribute("src", `assets/imgs/${saveLogo}`);
}
// theme mood value
if (saveThemeStat !== null) {
    if (!$(themeBox).hasClass(saveThemeStat)) {
        $(themeBox).toggleClass("light dark");
    }
}
// theme icon value
if (saveThemeIcn !== null) {
    themeIconSvg.className = `fa-solid ${saveThemeIcn}`;
}
// theme background color value
if (saveThemeBG !== null) {
    $("body").get(0).style.setProperty("--theme-background", saveThemeBG);
}
// theme color value
if (saveThemeClr !== null) {
    $("body").get(0).style.setProperty("--theme-color", saveThemeClr);
}
// End check Localstorage
// Toggle profile menu
$(profile).on("click", function() {
    toggleProfile();
});
// Toggle navbar menu
$(navMenu).on("click", function() {
    toggleNav();
});
// Fade navbar in after resizeing
$(window).on("resize", function() {
    if ($(document).width() >= 767) {
        $(navBar).slideDown("fast");
    } else {
        $(navBar).slideUp("fast");
        if ($(navMenu).hasClass("open")) {
            $(navMenu).removeClass("open");
        }
    }
});
// click on a color option
optColors.forEach(li => {
    li.style.backgroundColor = li.dataset.color;
    li.addEventListener("click", () => {
        document.documentElement.style.setProperty("--option-color", li.dataset.color);
        headerLogo.setAttribute("src", `assets/imgs/${li.dataset.logo}`);
        footerLogo.setAttribute("src", `assets/imgs/${li.dataset.logo}`);
        localStorage.setItem("option-color", li.dataset.color);
        localStorage.setItem("logo-color", li.dataset.logo);
        optColors.forEach(clr => {
            if (clr.classList.contains("active")) {
                clr.classList.remove("active");
            }
        });
        li.classList.add("active");
        $(optionBox).removeClass("open");
        $(optIcon).removeClass("fa-spin");
    })
});
// toggle colors option box
$(optBtn).on("click", function() {
    $(optionBox).toggleClass("open");
    $(optIcon).toggleClass("fa-spin");
});
// click on theme mood box
$(themeBox).on("click", function() {
    if ($(themeBox).hasClass("light")) {
        $("body").get(0).style.setProperty("--theme-background", "#fff");
        $("body").get(0).style.setProperty("--theme-color", "#333");
        localStorage.setItem("theme-status", "dark");
        localStorage.setItem("theme-icon", "fa-moon");
        localStorage.setItem("theme-background", "#fff");
        localStorage.setItem("theme-color", "#333");
    } else if ($(themeBox).hasClass("dark")) {
        $("body").get(0).style.setProperty("--theme-background", "#333");
        $("body").get(0).style.setProperty("--theme-color", "#fff");
        localStorage.setItem("theme-status", "light");
        localStorage.setItem("theme-icon", "fa-sun");
        localStorage.setItem("theme-background", "#333");
        localStorage.setItem("theme-color", "#fff");
    }
    $(themeBox).toggleClass("light dark");
    $(themeIcon).toggleClass("fa-sun fa-moon");
});
// Close opened menu by clicking Escape key
$(document).on("keydown", function(e) {
    if (e.key == "Escape") {
        if ($(profileMenu).css("display") == "block") {
            $(profileMenu).slideUp("fast");
            $(profileArrow).removeClass("fa-caret-up").addClass("fa-caret-down");
        } else if ($(navBar).css("display") == "block") {
            $(navBar).slideUp("fast");
            $(navMenu).removeClass("open");
        }
    }
});
// Close opened menu by clicking document body
$(document).on("click", function(e) {
    if ($(profileMenu).find(e.target).length == 0 && $(profile).find(e.target).length == 0 && e.target != $(profile)[0]) {
        if ($(profileMenu).css("display") == "block") {
            $(profileMenu).slideUp("fast");
            $(profileArrow).removeClass("fa-caret-up").addClass("fa-caret-down");
        }
    }
    if ($(navMenu).find(e.target).length == 0 && $(navBar).find(e.target).length == 0 && e.target != $(navMenu)[0]) {
        if ($(navMenu).hasClass("open")) {
            $(navBar).slideUp("fast");
            $(navMenu).removeClass("open");
        }
    }
    if ($(optionBox).find(e.target).length == 0 && $(optBtn).find(e.target).length == 0 && e.target != $(optionBox)[0]) {
        if ($(optionBox).hasClass("open")) {
            $(optionBox).removeClass("open");
            $(optIcon).removeClass("fa-spin");
        }
    }
});
// Toggle profile function
function toggleProfile() {
    if ($(navMenu).hasClass("open")) {
        $(navBar).slideUp("fast");
        $(navMenu).removeClass("open");
    }
    $(profileMenu).slideToggle("fast");
    $(profileArrow).toggleClass("fa-caret-down fa-caret-up");
}
// Toggle Navbar function
function toggleNav() {
    if ($(profileMenu).css("display") == "block") {
        $(profileMenu).slideUp("fast");
        $(profileArrow).removeClass("fa-caret-up").addClass("fa-caret-down");
    }
    $(navBar).slideToggle("fast");
    $(navMenu).toggleClass("open");
};
// clicking on Emergency FAQ question
$(emergencyQue).on("click", function() {
    $(this).next(emergencyAns).toggleClass("show");
    $(this).toggleClass("open");
    if ($(this).next(emergencyAns).hasClass("show")) {
        $(this).children(emergencyArrow).removeClass("fa-caret-down").addClass("fa-caret-up");
    } else {
        $(this).children(emergencyArrow).removeClass("fa-caret-up").addClass("fa-caret-down");
    }
    if ($(this).parent().siblings().children(emergencyAns).hasClass("show")) {
        $(this).parent().siblings().children(emergencyQue).removeClass("open");
        $(this).parent().siblings().children(emergencyAns).removeClass("show");
        $(this).parent().siblings().children(emergencyQue).children(emergencyArrow).removeClass("fa-caret-up").addClass("fa-caret-down");
    }
});
// clicking on Health FAQ question
$(healthQue).on("click", function() {
    $(this).next(healthAsn).toggleClass("show");
    $(this).toggleClass("open");
    if ($(this).next(healthAsn).hasClass("show")) {
        $(this).children(healthArrow).removeClass("fa-eye-slash").addClass("fa-eye");
    } else {
        $(this).children(healthArrow).removeClass("fa-eye").addClass("fa-eye-slash");
    }
    if ($(this).parent().siblings().children(healthAsn).hasClass("show")) {
        $(this).parent().siblings().children(healthQue).removeClass("open");
        $(this).parent().siblings().children(healthAsn).removeClass("show");
        $(this).parent().siblings().children(healthQue).children(healthArrow).removeClass("fa-eye").addClass("fa-eye-slash");
    }
});
// clicking on vet card
$(vetCard).on("click", function() {
    $(this).toggleClass("flipped");
    if ($(this).siblings().hasClass("flipped")) {
        $(this).siblings().removeClass("flipped");
    }
});