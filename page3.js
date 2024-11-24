const photos = [
    'guru1.jpg',
    'guru2.jpg',
    'guru3.jpg'
    // Add more photo paths
];

const photoContainer = document.querySelector('.photo-container');

photos.forEach(photo => {
    const img = document.createElement('img');
    img.src = photo;
    img.classList.add('animated-photo');
    photoContainer.appendChild(img);
});

document.getElementById('nextBtn').addEventListener('click', () => {
    window.location.href = 'page4.html';
});