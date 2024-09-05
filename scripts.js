// Smooth scrolling for navigation links
document.querySelectorAll('.nav-link').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth' });
  });
});

// Example of dynamically loading content if needed
function loadContent(sectionId, contentArray) {
  const section = document.getElementById(sectionId);
  const ul = document.createElement('ul');

  contentArray.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    ul.appendChild(li);
  });

  section.appendChild(ul);
}

// Example data loading (remove if not needed)
window.onload = function () {
  loadContent('section1', [
    "1. Al-Fatiha - Revealed in Makkah",
    "2. Al-Baqarah - Revealed in Madina",
    "3. Aal-E-Imran - Revealed in Madina",
    // Add more Surahs similarly
  ]);
};
