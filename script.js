const navLinks = document.querySelectorAll('header nav a');
const sections = document.querySelectorAll('section');
const portfolioSection = document.querySelector('.portfolio');
const portfolioDetails = document.querySelectorAll('.portfolio-detail');
const imgSlide = document.querySelector('.portfolio-carousel .img-slide');
const portfolioBtns = document.querySelectorAll('.portfolio-box .navigation .arrow-right, .portfolio-box .navigation .arrow-left');
const arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-left');
const resumeBtns = document.querySelectorAll('.resume-btn');
const resumeContent = document.querySelectorAll('.resume-detail'); 
const menuIcon = document.querySelector ('#menu-icon');
const navbar = document.querySelector ('header nav');
let index = 0;

menuIcon.addEventListener ('click', () => {
menuIcon.classList.toggle('bx-x');
navbar.classList.toggle ('active');
});


const activateNavLink = (section) => {
    navLinks.forEach(link => link.classList.remove('active'));
    if (section) {
        const activeLink = Array.from(navLinks).find(link => link.getAttribute('href') === `#${section.id}`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }
};

window.addEventListener('load', () => {
    const hash = window.location.hash;

    if (hash === "#portfolio") {
        const portfolioSection = document.getElementById("portfolio");

        if (portfolioSection) {
            const header = document.querySelector('header');
            header.classList.remove('active');
            sections.forEach(section => section.classList.remove('active'));
            portfolioSection.classList.add('active');
            portfolioSection.scrollIntoView({ behavior: "instant" });
            activateNavLink(portfolioSection);

            setTimeout(() => {
                header.classList.add('active');
            }, 100);
        }
    }
});


const activePage = () => {
    const header = document.querySelector('header');
    header.classList.remove('active');

    setTimeout(() => {
        header.classList.add('active');
    }, 1100);

    navLinks.forEach(link => link.classList.remove('active'));
    sections.forEach(section => section.classList.remove('active'));
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove ('active');
  

};



navLinks.forEach((link, idx) => {
    link.addEventListener('click', () => {
        if (!link.classList.contains('active')) {
            activePage();
            link.classList.add('active');
            sections[idx].classList.add('active');
            
          
            if (sections[idx].classList.contains('portfolio')) {
                portfolioDetails.forEach(detail => detail.classList.remove('active'));
                portfolioDetails[0].classList.add('active');
            }
        }
    });
});


const activePortfolio = () => {
    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;

    portfolioDetails.forEach(detail => detail.classList.remove('active'));
    portfolioDetails[index].classList.add('active');
};


arrowRight.addEventListener('click', () => {
    if (index < portfolioDetails.length - 1) {
        index++;
    } else {
        index = 0;
    }
    activePortfolio();
});

arrowLeft.addEventListener('click', () => {
    if (index > 0) {
        index--;
    } else {
        index = portfolioDetails.length - 1;
    }
    activePortfolio();
});


setTimeout(() => {
    portfolioDetails[0].classList.add('active');
}, 1100);


resumeBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        resumeBtns.forEach(button => button.classList.remove('active'));

        
        resumeContent.forEach(content => content.classList.remove('active'));

        btn.classList.add('active');

        
        const target = btn.textContent.trim().toLowerCase(); // 
        const targetContent = document.querySelector(`.resume-detail.${target}`);
        if (targetContent) {
            targetContent.classList.add('active');
        }
    });
});
