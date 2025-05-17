const elementTools = {
    /* areas */
    navCircle : document.getElementById('nav-circle'),
    heroSection : document.getElementById('hero-section'),
    container: document.querySelector('.nav-link-container'),
    /* buttons */
    upArrow : document.getElementById('up-arrow-button'),
    downArrow: document.getElementById('down-arrow-button'),
    navButtons : document.querySelectorAll('.nav-link'), //for applying universal stuff
    aboutButton : document.getElementById('about-button'),
    skillsButton : document.getElementById('skills-button'),
    expButton : document.getElementById('exp-button'),
    projectsButton : document.getElementById('projects-button'),
    wipButton : document.getElementById('wip-button'),
    /* planets */
    solarSystem: document.getElementById('solar-system'),

    setNavEffects : function(hoverCell, rotCell, time) {
        hoverCell.addEventListener("mouseenter", (event) => {
            rotCell.style.opacity = '1';
        });
        hoverCell.addEventListener("mouseleave", (event) => {
           rotCell.style.opacity = '0';
        });

        hoverCell.addEventListener("click", (event)=> {
            rotCell.style.animationPlayState = 'paused';
            rotCell.style.borderRadius = '0%';
        });
    },


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

        //Adding rotation to nav buttons
        let allNavButtons = [...this.navButtons];
        allNavButtons.map(button => this.setRotations(button.parentElement, button, 'transparent', 
            'rgba(255,255,255,.03)', 'transparent', '', 'rotate3d(0,0,0,0deg)'));

        //Adding rotation to solar system
        this.setRotations(this.solarSystem.parentElement, this.solarSystem, 'transparent', 
            'transparent', 'transparent', 'translate(-50%,-50%)', 'rotate3d(1,0,0,75deg)');

        //Adding hover effect to planets
        this.setNavEffects(this.aboutButton, this.solarSystem.querySelector('#mercury-selected'), '30s');
        this.setNavEffects(this.skillsButton, this.solarSystem.querySelector('#venus-selected'), '36s');
        this.setNavEffects(this.expButton, this.solarSystem.querySelector('#earth-selected'), '42s');
        this.setNavEffects(this.projectsButton, this.solarSystem.querySelector('#mars-selected'), '48s');
        this.setNavEffects(this.wipButton, this.solarSystem.querySelector('#jupiter-selected'), '54s');

    },

    //Adds event listeners to each added cell for reactive rotation transitions
    //Written from scratch for other personal project
    setRotations : function(containerCell, rotationCell, cellColor, gradColor, boxShadowColor, pos, rotate) {
        let cell_info = containerCell.getBoundingClientRect();
        let originX;
        let originY;

        containerCell.addEventListener("mousemove", (event) => {
                cell_info = containerCell.getBoundingClientRect();
                originX = cell_info.left + (cell_info.width/2);
                originY = cell_info.top + (cell_info.height/2);
                let distance = Math.sqrt(((event.clientX - originX)**2) + ((event.clientY - originY)**2));
                let deg = distance / (cell_info.width/2) * 30;

                let rotY = (event.clientX - originX) / (cell_info.width/2);
                let rotX = -1 * (event.clientY - originY) / (cell_info.height/2);

                rotationCell.style.transform = `${pos} ${rotate} rotate3d(${rotX},${rotY},0,${deg}deg)`;
                rotationCell.style.backgroundImage = `linear-gradient(${deg * 9}deg, ${cellColor}, ${gradColor})`;
                rotationCell.style.boxShadow = `${-5 * rotY}px ${5 * rotX}px ${boxShadowColor}`;
            },
        );
        containerCell.addEventListener("mouseleave", (event)=> {
                rotationCell.style.transform = `${pos} ${rotate}`;
                rotationCell.style.backgroundImage = '';
                rotationCell.style.boxShadow = '';
            },
        );
    },

    
}

document.addEventListener("DOMContentLoaded", () => {
    elementTools.setAnimations();
});
