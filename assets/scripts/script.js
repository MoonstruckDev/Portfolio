const slides = [
    {image: 'https://picsum.photos/1280/720?random=2', tagline: "Website For Booki"},
    {image: 'https://picsum.photos/1280/720?random=3', tagline: "Website For Ohmyfood"},
    {image: 'https://picsum.photos/1280/720?random=4', tagline: "Website For Print It!"}
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
    }, 5000);
}


// Var Decs
let arrowLeft = document.querySelector(".hero__arrow--left")
let arrowRight = document.querySelector(".hero__arrow--right")
console.log(arrowLeft)
console.log(arrowRight)


arrowLeft.addEventListener("click", () => navigateSlides(-1))
arrowRight.addEventListener("click", () => navigateSlides(1))

startAutoScroll();

