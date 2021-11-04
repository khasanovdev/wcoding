window.addEventListener('DOMContentLoaded', () => {

    const openBtn = document.querySelector('.open'),
        closeBtn = document.querySelector('.close'),
        navItems = document.querySelector('.nav-items2'),
        liElement = document.querySelector('.link1'),
        liElement2 = document.querySelector('.link2'),
        liElement3 = document.querySelector('.link3');

    openBtn.addEventListener('click', () => {
        openBtn.classList.add('d-none')
        closeBtn.classList.toggle('d-none')
        navItems.classList.add('trans')
    })
    closeBtn.addEventListener('click', () => {
        openBtn.classList.toggle('d-none')
        closeBtn.classList.add('d-none')
        navItems.classList.remove('trans')
    })
    liElement.addEventListener('click', () => {
        navItems.classList.remove('trans')
        openBtn.classList.remove('d-none')
        closeBtn.classList.toggle('d-none')
    })
    liElement2.addEventListener('click', () => {
        navItems.classList.remove('trans')
        openBtn.classList.remove('d-none')
        closeBtn.classList.toggle('d-none')
    })
    liElement3.addEventListener('click', () => {
        navItems.classList.remove('trans')
        openBtn.classList.remove('d-none')
        closeBtn.classList.toggle('d-none')
    })

    window.addEventListener('scroll', () => {
        let reveals = document.querySelectorAll('.reveal')

        for (let i = 0; i < reveals.length; i++) {
            let windowHeight = window.innerHeight;
            let revealTop = reveals[i].getBoundingClientRect().top;
            let revealPoint = 50;

            if (revealTop < windowHeight - revealPoint) {
                reveals[i].classList.add('active')
            }
        }
    })



})