const buttons = {
    navCircle : document.getElementById('nav-circle'),
    heroSection : document.getElementById('hero-section'),
    upArrow : document.getElementById('up-arrow-button'),
    downArrow: document.getElementById('down-arrow-button'),
    setAnimations : function() {
        this.upArrow.addEventListener('click', () => {
            this.navCircle.classList.remove('expand-animation');
            this.navCircle.classList.remove('expand-animation-reverse');
            this.heroSection.classList.remove('expand-animation-reverse');
            this.heroSection.classList.remove('expand-animation');
            void this.navCircle.offsetWidth;
            void this.heroSection.offsetWidth;
            this.navCircle.classList.add('expand-animation');
            this.heroSection.classList.add('expand-animation-reverse');
        });
        this.downArrow.addEventListener('click', () => {
            this.navCircle.classList.remove('expand-animation');
            this.navCircle.classList.remove('expand-animation-reverse');
            this.heroSection.classList.remove('expand-animation-reverse');
            this.heroSection.classList.remove('expand-animation');
            void this.navCircle.offsetWidth;
            void this.heroSection.offsetWidth;
            this.navCircle.classList.add('expand-animation-reverse');
            this.heroSection.classList.add('expand-animation');
        });
    },
}

document.addEventListener("DOMContentLoaded", () => {
    buttons.setAnimations();
});
