const slides = [
    {image: 'assets/images/slideshow/booki.png', tagline: "Website For <span>Booki</span>"},
    {image: 'assets/images/slideshow/ohmyfood.jpg', tagline: "Website For <span>Ohmyfood</span>"},
    {image: 'assets/images/slideshow/printit.jpg', tagline: "Website For <span>Print It!</span>"}
]


let currentIndex = 0

function navigateSlides(direction) {
	currentIndex = (currentIndex + direction + slides.length) % slides.length
	updateBanner()
}

function updateBanner() {
    let bannerImage = document.querySelector(".hero__banner")
    let tagLineElement = document.querySelector(".hero__banner__tagline")
        
    bannerImage.src = slides[currentIndex].image
    tagLineElement.innerHTML = slides[currentIndex].tagline  // Fix the property name here
}

function startAutoScroll() {
    autoScroll = setInterval(() => {
        navigateSlides(1);
    }, 3000);
}


// // Var Decs
// let arrowLeft = document.querySelector(".hero__arrow--left")
// let arrowRight = document.querySelector(".hero__arrow--right")
// console.log(arrowLeft)
// console.log(arrowRight)


// arrowLeft.addEventListener("click", () => navigateSlides(-1))
// arrowRight.addEventListener("click", () => navigateSlides(1))

startAutoScroll();

