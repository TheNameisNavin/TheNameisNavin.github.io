// script.js
document.querySelectorAll('.hover-sound').forEach(link => {
    link.addEventListener('mouseover', () => {
        const sound = document.getElementById('hover-sound');
        sound.play();
    });
});
