// Check if JS is connected
console.log("Script loaded successfully");

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Simple alert for contact button (placeholder)
function showMessage() {
    alert("Thanks for visiting my portfolio!");
}
