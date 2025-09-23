// Selecting the "back" button from the footer (which is the button that takes you back to the portfolio)
const backButton = document.querySelector('.footer-link'); // This should select the back button in your footer

// Add event listener to the back button
if (backButton) {
    backButton.addEventListener('click', (event) => {
        event.preventDefault(); // Prevents the default behavior of the <a> tag (i.e., page reload)
        
        // Make sure we're navigating to the #portfolio section of indexgr.html
        window.location.href = 'indexgr.html#portfolio'; // This will load the indexgr.html file and scroll to the #portfolio section
    });
}

// Navigation section variables
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

let index = 0;

// Function to activate the navigation link
const activateNavLink = (section) => {
    navLinks.forEach(link => link.classList.remove('active'));
    if (section) {
        const activeLink = Array.from(navLinks).find(link => link.getAttribute('href') === `#${section.id}`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }
};

// Handle loading the page based on the hash in the URL
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

// Function to deactivate previous page
const activePage = () => {
    const header = document.querySelector('header');
    header.classList.remove('active');

    setTimeout(() => {
        header.classList.add('active');
    }, 1100);

    navLinks.forEach(link => link.classList.remove('active'));
    sections.forEach(section => section.classList.remove('active'));
};

// Handle navigation link clicks
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

// Portfolio carousel functions (for left and right arrow buttons)
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

// Set initial active detail for portfolio section
setTimeout(() => {
    portfolioDetails[0].classList.add('active');
}, 1100);

// Handle resume section functionality
resumeBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        resumeBtns.forEach(button => button.classList.remove('active'));
        resumeContent.forEach(content => content.classList.remove('active'));

        btn.classList.add('active');

        const target = btn.textContent.trim().toLowerCase();
        const targetContent = document.querySelector(`.resume-detail.${target}`);
        if (targetContent) {
            targetContent.classList.add('active');
        }
    });
});
