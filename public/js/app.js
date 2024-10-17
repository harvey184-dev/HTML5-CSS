window.onscroll = function () {
    const header2 = document.querySelector('.header2');
    const scrollTop = window.scrollY;

    if (scrollTop > 50) {
        header2.style.top = '0';
    } else {
        header2.style.top = '58.4px';
    }
};

let currentIndex = 0;
const banners = document.querySelectorAll('.banner');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    banners.forEach((banner, i) => {
        banner.style.display = (i === index) ? 'block' : 'none';
    });

    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % banners.length;
    showSlide(currentIndex);
}

function currentSlide(index) {
    currentIndex = index;
    showSlide(currentIndex);
}

showSlide(currentIndex);

setInterval(nextSlide, 3000);
