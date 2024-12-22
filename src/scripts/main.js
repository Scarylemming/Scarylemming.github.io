// Function to set theme
function setTheme(isLight) {
    document.body.classList.toggle('light-theme', isLight);
    document.querySelector('header').classList.toggle('light-theme', isLight);
    document.querySelector('footer').classList.toggle('light-theme', isLight);
    document.querySelectorAll('nav ul li a').forEach(function(link) {
        link.classList.toggle('light-theme', isLight);
    });
    document.getElementById('logo-dark').style.display = isLight ? 'none' : 'block';
    document.getElementById('logo-light').style.display = isLight ? 'block' : 'none';
    document.getElementById('theme-toggle').textContent = isLight ? 'Dark Theme' : 'Light Theme';
    document.querySelector('.theme-toggle').classList.toggle('light-theme', isLight);
    document.querySelector('.language-toggle').classList.toggle('light-theme', isLight);
    
    // Store theme preference
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
}

// Theme toggle event listener
document.getElementById('theme-toggle').addEventListener('click', function() {
    const isLightTheme = !document.body.classList.contains('light-theme');
    setTheme(isLightTheme);
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

// Initialize both theme and language when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Initialize theme
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
        setTheme(storedTheme === 'light');
    }

    // Initialize language
    const storedLang = localStorage.getItem('preferredLanguage');
    if (storedLang) {
        setLanguage(storedLang);
    }
});