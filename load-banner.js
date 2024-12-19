// Load and insert banner HTML
fetch('banner.html')
    .then(response => response.text())
    .then(data => document.querySelector('.banner-container').innerHTML = data);
