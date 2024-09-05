document.addEventListener('DOMContentLoaded', () => {
    const dropdownButton = document.getElementById('dropdownButton');
    const dropdownMenu = document.getElementById('dropdownMenu');
  
    // Toggle dropdown visibility
    dropdownButton.addEventListener('click', () => {
      const isVisible = !dropdownMenu.classList.contains('hidden');
      dropdownMenu.classList.toggle('hidden', isVisible);
      dropdownButton.setAttribute('aria-expanded', !isVisible);
    });
  
    // Hide dropdown when clicking outside
    document.addEventListener('click', (event) => {
      if (!dropdownButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.classList.add('hidden');
        dropdownButton.setAttribute('aria-expanded', 'false');
      }
    });
  
    // Optional: Keyboard accessibility for pressing "Enter" or "Space" to open dropdown
    dropdownButton.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        dropdownButton.click();
      }
    });
  });
  