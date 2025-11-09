// document.addEventListener('DOMContentLoaded', function() {
//       document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//         anchor.addEventListener('click', function(e) {
//           e.preventDefault();
//           document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//           });
//         });
//       });
// });


// рассчитывает top для точек по соответствующим .timeline-item (по индексу)
// function positionDots() {
//   const items = document.querySelectorAll('.timeline-item');
//   const dots = document.querySelectorAll('.dot');
//   items.forEach((item, i) => {
//     const dot = dots[i];
//     if (!dot) return;
//     const offset = i === 0 ? 33 : 28; // первый +70, остальные +200
//     const top = item.offsetTop + offset;
//     dot.style.position = 'absolute';
//     dot.style.top = top + 'px';
//     // при необходимости dot.style.left = '63px';
//   });
// }
// window.addEventListener('load', positionDots);
// window.addEventListener('resize', positionDots);

// function positionDots() {
//   const bullets = Array.from(document.querySelectorAll('.timeline-bullet'));
//   const dots = Array.from(document.querySelectorAll('.dot'));
//   if (!bullets.length || !dots.length) return;

//   bullets.forEach((bullet, i) => {
//     // сначала пытаемся найти dot по data-index, иначе по индексу
//     const bIndex = bullet.dataset.index ?? String(i);
//     let dot = dots.find(d => (d.dataset.index ?? '') === bIndex);
//     if (!dot) dot = dots[i];
//     if (!dot) return;

//     const bRect = bullet.getBoundingClientRect();
//     // вычисляем координаты относительно документа
//     const top = bRect.top + window.scrollY + bRect.height / 2;
//     const left = bRect.left + window.scrollX + bRect.width / 2;

//     dot.style.position = 'absolute';
//     dot.style.top = Math.round(top) + 'px';
//     dot.style.left = Math.round(left) + 'px';
//     dot.style.transform = 'translate(-50%, -50%)';
//     dot.style.pointerEvents = 'none';
//   });
// }

// window.addEventListener('load', positionDots);
// window.addEventListener('resize', positionDots);
// window.addEventListener('scroll', positionDots);
// document.addEventListener('DOMContentLoaded', positionDots);
