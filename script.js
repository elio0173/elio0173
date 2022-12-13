const text1_options = [
    "Quarantine",
    "No Name Project",
    "Neu i Argila",
    "Selected Work",
];
const text2_options = [
    "2020",
    "2016",
    "2018",
    "2019 - 2020"
];

const text_links = [
    "http://eliohung.com/aau/wnm601/m14/quarantine/index.html",
    "http://eliohung.com/aau/wnm601/m14/noname/noname.html",
    "http://eliohung.com/aau/wnm601/m14/neu/neu.html",
    "http://eliohung.com/aau/wnm601/m14/sw/selectedwork.html"
];

const color_options = ["#EBB9D2", "#79a6d3", "#6CE5B1", "#FE9968",];
const image_options = [
    "news.jpg",
    "sir.jpeg",
    "purple.jpeg",
    "woods.jpeg",
];
var i = 0;
const currentOptionText1 = document.getElementById("current-option-text1");
const currentOptionText2 = document.getElementById("current-option-text2");
const currentOptionImage = document.getElementById("image");
const carousel = document.getElementById("carousel-wrapper");
const mainMenu = document.getElementById("menu");
const optionPrevious = document.getElementById("previous-option");
const optionNext = document.getElementById("next-option");

currentOptionText1.innerText = text1_options[i];
currentOptionText1.href = text_links[i];
currentOptionText2.innerText = text2_options[i];
currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
mainMenu.style.background = color_options[i];

optionNext.onclick = function () {
    i = i + 1;
    i = i % text1_options.length;
    currentOptionText1.dataset.nextText = text1_options[i];
    currentOptionText1.href = text_links[i];
    currentOptionText2.dataset.nextText = text2_options[i];

    mainMenu.style.background = color_options[i];
    carousel.classList.add("anim-next");

    setTimeout(() => {
        currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
    }, 455);

    setTimeout(() => {
        currentOptionText1.innerText = text1_options[i];
        currentOptionText1.href = text_links[i];
        currentOptionText2.innerText = text2_options[i];
        carousel.classList.remove("anim-next");
    }, 650);
};

optionPrevious.onclick = function () {
    if (i === 0) {
        i = text1_options.length;
    }
    i = i - 1;
    currentOptionText1.dataset.previousText = text1_options[i];

    currentOptionText2.dataset.previousText = text2_options[i];

    mainMenu.style.background = color_options[i];
    carousel.classList.add("anim-previous");

    setTimeout(() => {
        currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
    }, 455);

    setTimeout(() => {
        currentOptionText1.innerText = text1_options[i];
        currentOptionText1.href = text_links[i];
        currentOptionText2.innerText = text2_options[i];
        carousel.classList.remove("anim-previous");
    }, 650);
};

var getslide = $('.main-box li').length - 1;

var slidecal = 30 / getslide + '%';

$('.box').css({ "width": slidecal });

$('.box').click(function () {
    $('.box').removeClass('active');
    $(this).addClass('active');
});