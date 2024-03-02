function handleResizeWindow() {
    const tableCloth = document.getElementById('tableCloth');

    if (window.innerWidth <= 1017) {
        tableCloth.style.backgroundImage = "url('')";
        tableCloth.classList.remove('shadow-xl', 'rounded-full');
    } else {
        tableCloth.style.backgroundImage = "url('assets/tableCloth.jpg')";
        tableCloth.classList.add('shadow-xl', 'rounded-full');
    }
}
handleResizeWindow();
window.addEventListener('resize', handleResizeWindow);


function handleScroll() {
    const arrowUp = document.getElementById('arrowUp');
    const scroll = window.scrollY;

    if (scroll > 700) {
        arrowUp.classList.remove('hidden');
    } else {
        arrowUp.classList.add('hidden');
    }
}
handleScroll();
window.addEventListener('scroll', handleScroll);