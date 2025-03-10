document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Button Click Events
    document.querySelectorAll("button").forEach(button => {
        button.addEventListener("click", function() {
            if (this.id === "Next") {
                window.scrollBy({
                    top: window.innerHeight,
                    behavior: "smooth"
                });
            } else if (this.id === "Go Back") {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            }
        });
    });

    // Fix broken external links
    document.querySelectorAll("a[target='_main']").forEach(link => {
        if (!link.href.startsWith("http")) {
            link.href = "https://" + link.href;
        }
    });
});
