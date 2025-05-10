const buttons = {
    navCircle : document.getElementById('nav-circle'),
    heroSection : document.getElementById('hero-section'),
    upArrow : document.getElementById('up-arrow-button'),
    setAnimations : function() {
        this.upArrow.addEventListener('click', () => {
            this.navCircle.classList.remove('expand-animation');
            this.heroSection.classList.remove('expand-animation-reverse');
            void this.navCircle.offsetWidth;
            void this.heroSection.offsetWidth;
            this.navCircle.classList.add('expand-animation');
            this.heroSection.classList.add('expand-animation-reverse');
        });
    },
}

document.addEventListener("DOMContentLoaded", () => {
    buttons.setAnimations();
});
