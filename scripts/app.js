const triggers = document.querySelectorAll('.cool > li');
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

function handleEnter() {
    // console.log('ENTER!');
    this.classList.add('trigger-enter');
    setTimeout(() => {
        if(this.classList.contains('trigger-enter')) {
            this.classList.add('trigger-enter-active');
        }
    }, 100);
    
    background.classList.add('open');

    const dropdown = this.querySelector('.dropdown');
    const dropdownCoords = dropdown.getBoundingClientRect();
    const navCoords = nav.getBoundingClientRect();

    coords = {
        width: dropdownCoords.width,
        height: dropdownCoords.height,
        top: dropdownCoords.top - navCoords.top,
        left: dropdownCoords.left - navCoords.left
    }
    background.style.setProperty('width', `${coords.width}px`);
    background.style.setProperty('height', `${coords.height}px`);
    background.style.setProperty('left', `${coords.left}px`);
    background.style.setProperty('top', `${coords.top}px`);
}

function handleLeave() {
    this.classList.remove('trigger-enter');
    setTimeout(() => {
        this.classList.remove('trigger-enter-active');
    }, 150);
    background.classList.remove('open');

}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));