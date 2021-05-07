/* eslint-disable no-unused-vars */
/* eslint-disable func-style */
/* eslint-disable require-jsdoc */

let container = null;

function createContainer() {
    el = document.createElement("div");
    el.setAttribute("id", "carousel");
    el.setAttribute("class", "carousel");
    document.querySelector("body").appendChild(el);
    container = document.querySelector("#carousel")
}


function createSlides(n) {
    slides = document.createElement("ul");
    slides.setAttribute("class", "slides");
    for (i = 0; i < n; i++) {
        let slideItem = document.createElement("li");
        let slideLink = document.createElement("a");
        slideItem.setAttribute("class", i === 0 ? "slides__item active" : "slides__item");
        slideLink.setAttribute("href", "#");
        slideItem.appendChild(slideLink);
        slides.appendChild(slideItem);
    }

    container.appendChild(slides);
}


function createIndicators(n) {
    const indicator = document.createElement("div");
    indicator.setAttribute("class", "indicators");
    container.appendChild(indicator);
    for (i = 0; i < n; i++) {
        let spanIndicator = document.createElement("span");
        spanIndicator.setAttribute("class", i === 0 ? "indicators__item active" : "indicators__item");
        spanIndicator.setAttribute("data-slide-to", i);
        indicator.appendChild(spanIndicator);
    }
    container.appendChild(indicator);
}


function createControls() {
    const controlContainer = document.createElement("div");
    controlContainer.setAttribute("class", "controls");
    container.appendChild(controlContainer);

    let itemDivPrev = document.createElement("div");
    itemDivPrev.setAttribute("class", "controls__item controls__prev");
    controlContainer.appendChild(itemDivPrev);
    let itemPrevI = document.createElement("i");
    itemPrevI.setAttribute("class", "fas fa-chevron-left");
    itemDivPrev.appendChild(itemPrevI);

    let itemDivNext = document.createElement("div");
    itemDivNext.setAttribute("class", "controls__item controls__next");
    controlContainer.appendChild(itemDivNext);
    let itemNextI = document.createElement("i");
    itemNextI.setAttribute("class", "fas fa-chevron-right");
    itemDivNext.appendChild(itemNextI);

    let itemDivPause = document.createElement("div");
    itemDivPause.setAttribute("class", "controls__item controls__pause");
    controlContainer.appendChild(itemDivPause);
    let itemPauseI = document.createElement("i");
    itemPauseI.setAttribute("class", "fas fa-play");
    itemDivPause.appendChild(itemPauseI);

}


function createStyle() {
    let style = document.createElement("style");
    let styleCode = `
    .controls,
    .slides {
      position: relative;
    }
    .indicators {
      display: flex;
    }
    .indicators__item {
      display: block;
      width: 40px;
      height: 40px;
      background-color: blue;
      margin: 5px;
          }`;
    style.innerHTML = styleCode;
    container.appendChild(style);
}

let prevIndicator = null;

function indicatorsClick(e) {
    let target = e.target;
    if (target.classList.contains("indicators__item")) {
        target.style.backgroundColor = "red";
        if (prevIndicator !== null) prevIndicator.removeAttribute("style");
        prevIndicator = target;
    }
}

function setListener() {
    let indicatorsContainer = document.querySelector("div.indicators");
    indicatorsContainer.addEventListener("click", indicatorsClick);
}


function createCarousel(slidesCount = 5) {
    container = document.querySelector('#carousel');
    createSlides(slidesCount);
    createIndicators(slidesCount);
    createControls();
    createStyle();
    setListener();
}

createCarousel();