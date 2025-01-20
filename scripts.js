// Slideshow
const slides = document.querySelectorAll('.slideshow img');
let currentSlide = 0;

function showNextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

setInterval(showNextSlide, 3000);

// Contador de Anos, Meses, Semanas e Dias
const startDate = new Date('2022-02-24');
const counterElement = document.getElementById('days-counter');

function updateCounter() {
    const today = new Date();
    let diffTime = today - startDate;

    const years = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365));
    diffTime -= years * 1000 * 60 * 60 * 24 * 365;

    const months = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 30));
    diffTime -= months * 1000 * 60 * 60 * 24 * 30;

    const weeks = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 7)); // Corrigido para calcular semanas corretamente
    diffTime -= weeks * 1000 * 60 * 60 * 24 * 7;

    const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (counterElement) {
        counterElement.textContent = `${years} anos e ${months} meses`;
    }
}

updateCounter();


// Chuva de Emojis
const emojiRainContainer = document.querySelector('.emoji-rain');
const emojis = ['❤️', '😘', '🎉'];

function createEmoji() {
    const emoji = document.createElement('div');
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.classList.add('emoji');
    emoji.style.left = Math.random() * 100 + 'vw';
    emoji.style.animationDuration = Math.random() * 2 + 3 + 's';
    emojiRainContainer.appendChild(emoji);

    setTimeout(() => {
        emoji.remove();
    }, 5000);
}

if (emojiRainContainer) {
    setInterval(createEmoji, 300);
}

// Ajuste de volume da música
document.getElementById('background-music').volume = 0.5; // 50% do volume