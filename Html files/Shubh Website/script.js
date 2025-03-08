// Function to scroll to a specific section
function scrollToSection(sectionId) {
    // Change the hash in the URL to the ID of the section
    window.location.hash = sectionId;

    // Scroll to the section with a smooth animation
    document.querySelector(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

// Add event listeners to the buttons for navigation
document.getElementById('next-education').addEventListener('click', function() {
    scrollToSection('#projects-publications');
});

document.getElementById('go-back-projects').addEventListener('click', function() {
    scrollToSection('#education');
});

document.getElementById('go-back-academic').addEventListener('click', function() {
    scrollToSection('#projects-publications');
});

document.getElementById('next-experience').addEventListener('click', function() {
    scrollToSection('#contact-details');
});

document.getElementById('go-home').addEventListener('click', function() {
    scrollToSection('#home');
});

// Optional: To keep the page from reloading when clicking the links in the navigation
document.querySelectorAll('nav a').forEach(function(anchor) {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        scrollToSection(this.getAttribute('href'));
    });
});
