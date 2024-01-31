document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('psyButton');
    let clickCount = 0;

    button.addEventListener('click', () => {
        clickCount++;
        if (clickCount === 3) {
            document.getElementById('styleSheet').href = 'psyStyle.css';
            setTimeout(() => {
                document.getElementById('styleSheet').href = 'style.css';
            }, 10000); // 10000 millisecondes = 10 secondes
        }
    });
});


