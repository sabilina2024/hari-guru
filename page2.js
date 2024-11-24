const bgMusic = document.getElementById('bgMusic');
const playButton = document.getElementById('playMusic');
const readyBtn = document.getElementById('readyBtn');
const notReadyBtn = document.getElementById('notReadyBtn');

playButton.addEventListener('click', () => {
    if (bgMusic.paused) {
        bgMusic.play();
        playButton.textContent = 'Pause Music';
    } else {
        bgMusic.pause();
        playButton.textContent = 'Play Music';
    }
});

readyBtn.addEventListener('click', () => {
    window.location.href = 'page3.html';
});

notReadyBtn.addEventListener('click', () => {
    alert('😊 Ayo Bu/Pak, baca surat ini dari muridmu! ❌');
});