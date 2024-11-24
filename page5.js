const messages = [
    "Selamat Hari Guru! Di hari istimewa ini, kami ingin mengucapkan terima kasih yang tulus kepada semua guru yang telah berjuang dengan sepenuh hati dalam mendidik dan membimbing kami.",
    "Dedikasi, kesabaran, dan cinta yang Anda tunjukkan setiap hari telah memberikan dampak yang besar dalam kehidupan kami, setiap pelajaran dan nasihat yang Anda berikan menjadi bekal berharga untuk menghadapi masa depan",
    "Selamat Hari Guru Nasional"
];

const animatedMessage = document.querySelector('.animated-message');

messages.forEach((message, index) => {
    setTimeout(() => {
        const p = document.createElement('p');
        p.textContent = message;
        p.style.animation = 'fadeIn 1s ease-in';
        animatedMessage.appendChild(p);
    }, index * 1000);
});