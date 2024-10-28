
document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('a[href^="#"]');

    for (let link of links) {
        link.addEventListener("click", function(e) {
            e.preventDefault(); 
            const targetId = link.getAttribute("href"); 
            const targetElement = document.querySelector(targetId); 
            
            
            if (targetId === "#anjali") {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth" 
                });
            } else {
                
                const targetPosition = targetElement.offsetTop; 
                const previousContainer = targetElement.previousElementSibling; 

                
                if (previousContainer) {
                    const scrollToPosition = previousContainer.offsetTop + previousContainer.offsetHeight - 160; 
                    window.scrollTo({
                        top: scrollToPosition, 
                        behavior: "smooth" 
                    });
                } else {
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: "smooth" 
                    });
                }
            }
        });
    }
});


const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");


hamburger.addEventListener("click", function() {
    navLinks.classList.toggle("active");
});
