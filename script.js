// script.js
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('psyButton');
    let clickCount = 0;

    button.addEventListener('click', () => {
        clickCount++;
        if (clickCount === 3) {
            const stylesheet = document.getElementById('styleSheet');
            stylesheet.setAttribute('href', 'psyStyle.css');

            // Revenir à style.css après 10 secondes
            setTimeout(() => {
                stylesheet.setAttribute('href', 'style.css');
            }, 10000); // 10000 millisecondes = 10 secondes
        }
    });
});

