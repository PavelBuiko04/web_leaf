const canvas = document.getElementById('particles-bg');
const ctx = canvas.getContext('2d');
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
     width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
});

const particles = [];
const numParticles = 100;

for (let i = 0; i < numParticles; i++) {
    particles.push({
    x: Math.random() * width,
    y: Math.random() * height,
    radius: Math.random() * 2 + 1,
    dx: (Math.random() - 0.5) * 0.5,
    dy: (Math.random() - 0.5) * 0.5,
    color: Math.random() > 0.5 ? '#22C55F' : '#10B981'
    });}

            
function animate() {
    ctx.clearRect(0, 0, width, height);
    for (let p of particles) {
        p.x += p.dx;
        p.y += p.dy;

                // Обёртывание по краям экрана
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
        }
            requestAnimationFrame(animate);
}

animate();















// ...existing code...

document.addEventListener('DOMContentLoaded', function() {
    function initHowworkSlider() {
        const howwork = document.querySelector('.howwork');
        const blocksContainer = howwork.querySelector('.blocks');
        
        // Создаем контейнер для стрелок
        const arrows = document.createElement('div');
        arrows.className = 'howwork-slider-arrows';
        
        // Создаем стрелки
        const leftArrow = document.createElement('button');
        leftArrow.innerHTML = '←';
        leftArrow.className = 'slider-arrow left';
        
        const rightArrow = document.createElement('button');
        rightArrow.innerHTML = '→';
        rightArrow.className = 'slider-arrow right';
        
        // Стили для стрелок
        [leftArrow, rightArrow].forEach(arrow => {
            arrow.style.cssText = `
                width: 48px;
                height: 48px;
                border-radius: 50%;
                border: none;
                background: rgba(255,255,255,0.7);
                cursor: pointer;
                font-size: 24px;
                transition: background 0.3s;
                border: 1px solid #bbf7d450;
            `;
        });
        
        // Добавляем стрелки в контейнер
        arrows.appendChild(leftArrow);
        arrows.appendChild(rightArrow);
        
        // Добавляем контейнер со стрелками перед блоками
        howwork.appendChild(arrows); // Изменили здесь
        
        // Обработчики для стрелок
        leftArrow.addEventListener('click', () => {
            blocksContainer.scrollBy({
                left: -320,
                behavior: 'smooth'
            });
        });
        
        rightArrow.addEventListener('click', () => {
            blocksContainer.scrollBy({
                left: 320,
                behavior: 'smooth'
            });
        });
        
        // Drag functionality
        let isDragging = false;
        let startX;
        let scrollLeft;
        
        blocksContainer.addEventListener('mousedown', (e) => {
            isDragging = true;
            blocksContainer.classList.add('dragging');
            startX = e.pageX - blocksContainer.offsetLeft;
            scrollLeft = blocksContainer.scrollLeft;
        });
        
        blocksContainer.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            e.preventDefault();
            const x = e.pageX - blocksContainer.offsetLeft;
            const walk = (x - startX);
            blocksContainer.scrollLeft = scrollLeft - walk;
        });
        
        blocksContainer.addEventListener('mouseup', () => {
            isDragging = false;
            blocksContainer.classList.remove('dragging');
        });
        
        blocksContainer.addEventListener('mouseleave', () => {
            isDragging = false;
            blocksContainer.classList.remove('dragging');
        });
        
        // Touch events
        blocksContainer.addEventListener('touchstart', (e) => {
            startX = e.touches[0].pageX - blocksContainer.offsetLeft;
            scrollLeft = blocksContainer.scrollLeft;
        });
        
        blocksContainer.addEventListener('touchmove', (e) => {
            const x = e.touches[0].pageX - blocksContainer.offsetLeft;
            const walk = (startX - x);
            blocksContainer.scrollLeft = scrollLeft + walk;
        });
    }

    // Инициализация слайдера при загрузке и изменении размера окна
    if (window.innerWidth <= 840) {
        initHowworkSlider();
    }
    
    window.addEventListener('resize', () => {
        if (window.innerWidth <= 840) {
            const existing = document.querySelector('.howwork-slider-arrows');
            if (!existing) {
                initHowworkSlider();
            }
        } else {
            const arrows = document.querySelector('.howwork-slider-arrows');
            if (arrows) {
                arrows.remove();
            }
        }
    });
});