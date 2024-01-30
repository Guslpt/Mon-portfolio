// script.js
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('psyButton');
    let clickCount = 0;

    button.addEventListener('click', () => {
        clickCount++;
        if (clickCount === 3) {
            document.getElementById('styleSheet').setAttribute('href', 'psyStyle.css');
        }
    });
});
