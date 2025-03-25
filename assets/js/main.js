// Dark Mode Toggle
document.addEventListener('DOMContentLoaded', () => {
  const darkModeToggle = document.getElementById('darkModeToggle');
  const body = document.body;

  // Initialize dark mode state
  let isDarkMode = localStorage.getItem('darkMode') === 'enabled';
  if (isDarkMode) {
    body.classList.add('dark-mode');
    darkModeToggle.textContent = 'Light Mode';
  }

  darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    isDarkMode = body.classList.contains('dark-mode');
    
    // Save preference to localStorage
    localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
    darkModeToggle.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
  });

  // Download Handlers
  document.getElementById('download-cv').addEventListener('click', function(e) {
    e.preventDefault();
    triggerDownload('assets/docs/C:\Users\OlidAli\Desktop\Olid's Portfolio\Olid CV.pdf', 'Olid's CV.pdf');
  });

  document.getElementById('download-resume').addEventListener('click', function(e) {
    e.preventDefault();
    triggerDownload('assets/docs/Olid_Resume.pdf', 'Olid_Ali_Resume.pdf');
  });

  function triggerDownload(filePath, fileName) {
    const link = document.createElement('a');
    link.href = filePath;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  // Initialize Hero Carousel
  const heroCarousel = new bootstrap.Carousel('#heroCarousel', {
    interval: 5000,
    wrap: true
  });

  // Initialize Gallery Carousel
  const galleryCarousel = new bootstrap.Carousel('#galleryCarousel', {
    interval: 3000,
    wrap: true
  });

  // Smooth Scroll
  document.querySelectorAll('a.scrollto').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });
});