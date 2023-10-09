// const list = document.querySelectorAll('.list-menu ul li');
const menuIcon = document.querySelector('.menu-icon');
const offCanvas = document.querySelector('.off-canvas');
const closeIcon = document.querySelector('.close-icon');
const hero = document.querySelector('.hero');

menuIcon.onclick = () => {
    offCanvas.style.display = 'block';
    closeIcon.style.transform = 'rotate(180deg)';
    closeIcon.style.display = 'block';
    menuIcon.style.display = 'none';
    hero.style.opacity = '0';
    document.body.style.overflow = 'hidden';
    
    setTimeout(() => {
        offCanvas.style.opacity = '1';
        closeIcon.style.opacity = '1';
        closeIcon.style.transform = 'scale(1)';
    }, 300);
}

closeIcon.onclick = () => {
    closeIcon.style.transform = 'rotate(-180deg)';
    document.body.style.overflow = 'auto';
    
    setTimeout(() => {
        offCanvas.style.display = 'none';
        closeIcon.style.display = 'none';
        menuIcon.style.display = 'block';
        hero.style.opacity = '1';
        offCanvas.style.opacity = '0';
        closeIcon.style.opacity = '0';
        closeIcon.style.transform = 'scale(0)';
    }, 300);
}

window.onresize = () => {
    if (window.innerWidth >= 992) {
        offCanvas.style.display = 'none';
        closeIcon.style.display = 'none';
        hero.style.opacity = '1';
        document.body.style.overflow = 'auto';
        menuIcon.style.display = 'none';
    } else {
        menuIcon.style.display = 'block';
    }
}

// list.forEach(li => {
//     li.addEventListener('mouseenter', () => {
//         const pseudoStyle = window.getComputedStyle(li, '::after');
//         setTimeout(() => {
//             pseudoStyle.opacity = '1';
//         }, 300);
//     });
// })