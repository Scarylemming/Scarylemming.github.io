document.getElementById('theme-toggle').addEventListener('click', function() {
    const isLightTheme = document.body.classList.toggle('light-theme');
    document.querySelector('header').classList.toggle('light-theme');
    document.querySelector('footer').classList.toggle('light-theme');
    document.querySelectorAll('nav ul li a').forEach(function(link) {
        link.classList.toggle('light-theme');
    });
    document.getElementById('logo-dark').style.display = isLightTheme ? 'none' : 'block';
    document.getElementById('logo-light').style.display = isLightTheme ? 'block' : 'none';
    this.textContent = isLightTheme ? 'Dark Theme' : 'Light Theme';
    document.querySelector('.theme-toggle').classList.toggle('light-theme');
    document.querySelector('.language-toggle').classList.toggle('light-theme');
});

// Update language toggle event listener
document.getElementById('language-toggle').addEventListener('click', function() {
    const isEnglish = document.documentElement.lang === 'en';
    const newLang = isEnglish ? 'fr' : 'en';
    setLanguage(newLang);
});

// Function to set language
function setLanguage(lang) {
    document.documentElement.lang = lang;
    localStorage.setItem('preferredLanguage', lang);
    
    document.getElementById('flag-en').style.display = lang === 'en' ? 'block' : 'none';
    document.getElementById('flag-fr').style.display = lang === 'fr' ? 'block' : 'none';
    
    document.querySelectorAll('[data-en]').forEach(function(element) {
        element.textContent = lang === 'en' ? 
            element.getAttribute('data-en') : 
            element.getAttribute('data-fr');
    });
}

// Initialize language from stored preference
document.addEventListener('DOMContentLoaded', function() {
    const storedLang = localStorage.getItem('preferredLanguage');
    if (storedLang) {
        setLanguage(storedLang);
    }
    
    // ...existing theme initialization code...
});