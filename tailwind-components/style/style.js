const hamburger = document.getElementById('hamburger');
const menuHamburger = document.getElementById('menuHamburger');
const btnClose = document.getElementById('btnClose');

hamburger.addEventListener('click', () => {
    menuHamburger.classList.remove('hidden');
    hamburger.classList.add('hidden');
});

btnClose.addEventListener('click', () => {
    menuHamburger.classList.add('hidden');
    hamburger.classList.remove('hidden');
})

const btnBeranda = document.getElementById('btnBeranda');
const btnProgram = document.getElementById('btnProgram');
const beranda = document.getElementById('beranda');
const program = document.getElementById('program');

btnProgram.addEventListener('click', () => {
    beranda.classList.add('hidden');
    program.classList.remove('hidden');
});

btnBeranda.addEventListener('click', () => {
    beranda.classList.remove('hidden');
    program.classList.add('hidden');
});