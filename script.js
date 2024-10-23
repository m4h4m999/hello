// Get the rabbit element
const rabbit = document.getElementById('rabbit');

// Add event listener for mouse click
rabbit.addEventListener('click', () => {
    // Make the rabbit "jump" by moving up and then back down
    rabbit.style.transform = `translateY(-50px)`; // Move the rabbit up 50px

    // After a short delay, move it back to the original position
    setTimeout(() => {
        rabbit.style.transform = `translateY(0)`; // Return to the original position
    }, 300); // 300ms delay for the jump effect
});


