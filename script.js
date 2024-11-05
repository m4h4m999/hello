const rabbit = document.getElementById('rabbit');

// Function to make the rabbit jump on click
rabbit.addEventListener('click', () => {
  rabbit.classList.add('jump');
  
  // Remove the jump class after the animation ends
  setTimeout(() => {
    rabbit.classList.remove('jump');
  }, 300); // Duration should match the CSS transition time
});
