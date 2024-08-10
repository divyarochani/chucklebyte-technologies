// Smooth scrolling for the Call-to-Action button
document.querySelector('.btn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    const targetSection = document.querySelector('#inquiry'); // Change '#inquiry' to the actual section ID you want to scroll to

    targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});

// Adding a hover animation to the Call-to-Action button
const ctaButton = document.querySelector('.animated-btn');

ctaButton.addEventListener('mouseover', function() {
    this.classList.add('hovered');
});

ctaButton.addEventListener('mouseout', function() {
    this.classList.remove('hovered');
});

// Adding a class for hover effect in the CSS
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
    .hovered {
        transform: scale(1.2);
        transition: transform 0.3s ease;
    }
`, styleSheet.cssRules.length);
