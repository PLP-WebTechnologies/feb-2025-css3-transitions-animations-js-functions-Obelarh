const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("mouseover", () => {
    button.style.backgroundColor = "white";
    button.style.color = "#04AA6D";
  });

  button.addEventListener("mouseout", () => {
    button.style.backgroundColor = "#04AA6D";
    button.style.color = "white";
  });
});

document.addEventListener('DOMContentLoaded', () => {
    const animatedButton = document.getElementById('animatedButton');
    const animationTarget = document.getElementById('animationTarget');
    const clickPreferenceKey = 'buttonClicked';

    // Function to store user preference in localStorage
    function storePreference(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
        console.log(`Preference stored: ${key} - ${value}`);
    }

    // Function to retrieve user preference from localStorage
    function getPreference(key) {
        const storedValue = localStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : null;
    }

    // Check if the button has been clicked before
    const wasButtonClicked = getPreference(clickPreferenceKey);
    if (wasButtonClicked) {
        console.log('Button was clicked previously.');
        animationTarget.textContent = "I've been Deleted!";
    }

    // Function to trigger the animation
    function triggerAnimation() {
        animationTarget.classList.add('animate-fade');
        animationTarget.textContent = 'Animation triggered!';

        // Store the click preference
        storePreference(clickPreferenceKey, true);

        // Remove the animation class after it finishes (optional)
        setTimeout(() => {
            animationTarget.classList.remove('animate-fade');
            animationTarget.textContent = ''; // Or reset to another state
            animationTarget.style.opacity = 1;
            animationTarget.style.transform = 'scale(1)';
        }, 1000);
    }

    // Event listener to trigger animation on button click
    animatedButton.addEventListener('click', triggerAnimation);
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1 // Trigger when 10% of the element is visible
  });
  
  document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
  });

  