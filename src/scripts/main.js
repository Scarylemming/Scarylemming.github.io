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

document.getElementById('language-toggle').addEventListener('click', function() {
    const isEnglish = document.documentElement.lang === 'en';
    document.documentElement.lang = isEnglish ? 'fr' : 'en';
    document.getElementById('flag-en').style.display = isEnglish ? 'block' : 'none';
    document.getElementById('flag-fr').style.display = isEnglish ? 'none' : 'block';
    document.querySelectorAll('[data-en]').forEach(function(element) {
        element.textContent = isEnglish ? element.getAttribute('data-fr') : element.getAttribute('data-en');
    });
});