const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const auto = false;

const nextSlide = () => {
    const currentEl = document.querySelector('.current');
    currentEl.classList.remove('current');
    if (currentEl.nextElementSibling) {
        currentEl.nextElementSibling.classList.add('current');
    } else {
        slides[0].classList.add('current');
    }
    setTimeout(() => {
        currentEl.classList.remove('current');
    }, 200)
}

const prevSlide = () => {
    const currentEl = document.querySelector('.current');
    currentEl.classList.remove('current');
    if (currentEl.previousElementSibling) {
        currentEl.previousElementSibling.classList.add('current');
    } else {
        slides[slides.length - 1].classList.add('current');
    }
    setTimeout(() => {
        currentEl.classList.remove('current');
    }, 200)
}

prev.addEventListener('click', () => {
    prevSlide();
})

next.addEventListener('click', () => {
    nextSlide();
});


if (auto) {
    setInterval(() => {
        nextSlide();
    }, 5000);
}

