// header tags
let header = document.querySelector(".header");
let headerLogo = header.querySelector(".header__img");
let headerH3 =  header.querySelector(".header__h3");
let headerH2 =  header.querySelector(".header__h2");
let headerH4 =  header.querySelector(".header__h4");
let headerButton =  header.querySelector(".header__button");

// Visitor tags
let visitor = document.querySelector(".visitor");
let visitorH1 = visitor.querySelector(".visitor__h1");
let visitorOne = visitor.querySelector(".visitor__section--one");
let visitorTwo = visitor.querySelector(".visitor__section--two");


// About tags
let about = document.querySelector(".about");
let aboutH1 = about.querySelector(".about__h1");
let aboutOne = about.querySelector(".about__section--one");
let aboutTwo = about.querySelector(".about__section--two");

// Features tags
let features = document.querySelector(".features");
let featuresH1 = features.querySelector(".features__h1");
let featuresOne = features.querySelector(".features__section--one");
let featuresTwo = features.querySelector(".features__section--two");

// Features sections
let featureSectionOne = features.querySelector(".features__section--one");
let featureSvgOne = featureSectionOne.querySelector(".features__svg");
let featuresH2One = featureSectionOne.querySelector(".features__h2");
let featuresPOne = featureSectionOne.querySelector(".features__p");

let featureSectionTwo = features.querySelector(".features__section--two");
let featureSvgTwo = featureSectionTwo.querySelector(".features__svg");
let featuresH2Two = featureSectionTwo.querySelector(".features__h2");
let featuresPTwo = featureSectionTwo.querySelector(".features__p");

let featureSectionThree = features.querySelector(".features__section--three");
let featureSvgThree = featureSectionThree.querySelector(".features__svg");
let featuresH2Three = featureSectionThree.querySelector(".features__h2");
let featuresPThree = featureSectionThree.querySelector(".features__p");

let featureSectionFour = features.querySelector(".features__section--four");
let featureSvgFour = featureSectionFour.querySelector(".features__svg");
let featuresH2Four = featureSectionFour.querySelector(".features__h2");
let featuresPFour = featureSectionFour.querySelector(".features__p");


window.addEventListener("DOMContentLoaded", (event) => {
    headerH3.classList.add("show");
    setTimeout(() => {
        headerH2.classList.add("show");
    }, 500);
    setTimeout(() => {
        headerH4.classList.add("show");
    }, 1000);
    setTimeout(() => {
        headerButton.classList.add("show");
    }, 1500);
    setTimeout(() => {
        headerLogo.classList.add("show");
    }, 2000);
});

const addEffect = (entradas) => {
    entradas.forEach((entrada) => {
        if(entrada.isIntersecting){
            entrada.target.classList.add("show");
        }
    });
}

const observerEffects = new IntersectionObserver(addEffect, {
    root: null,
    rootMargin: "-10%",
    threshold: 0.5
});


observerEffects.observe(visitorH1);
observerEffects.observe(visitorOne);
observerEffects.observe(visitorTwo);

observerEffects.observe(aboutH1);
observerEffects.observe(aboutOne);
observerEffects.observe(aboutTwo);

observerEffects.observe(featuresH1);
observerEffects.observe(featuresOne);
observerEffects.observe(featuresTwo);

observerEffects.observe(featureSvgOne);
observerEffects.observe(featuresH2One);
observerEffects.observe(featuresPOne);

observerEffects.observe(featureSvgTwo);
observerEffects.observe(featuresH2Two);
observerEffects.observe(featuresPTwo);

observerEffects.observe(featureSvgThree);
observerEffects.observe(featuresH2Three);
observerEffects.observe(featuresPThree);

observerEffects.observe(featureSvgFour);
observerEffects.observe(featuresH2Four);
observerEffects.observe(featuresPFour);