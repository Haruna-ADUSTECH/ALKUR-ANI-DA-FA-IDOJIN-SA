// Smooth Scrolling Effect for Navigation Links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 50,
            behavior: 'smooth'
        });
    });
});

// Form Submission Alert
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Godiya! Saƙonku ya samu nasarar aikawa.');
});
