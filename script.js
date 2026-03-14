document.getElementById('thought').addEventListener('click', () => {
    document.getElementById('overlay').classList.add('show');
});
document.getElementById('close').addEventListener('click', () => {
    document.getElementById('overlay').classList.remove('show');
});
document.getElementById('overlay').addEventListener('click', (e) => {
    if (e.target === document.getElementById('overlay'))
    document.getElementById('overlay').classList.remove('show');
});