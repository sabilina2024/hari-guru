document.getElementById('loginForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const teacherName = document.getElementById('teacherName').value;
    
    try {
        const response = await fetch('teachers.json');
        const data = await response.json();
        
        if (data.teachers.includes(teacherName)) {
            alert('🎉 Selamat! Ibu/Bapak ada dalam daftar ucapan! 🎉');
            localStorage.setItem('currentTeacher', teacherName);
            window.location.href = 'page2.html';
        } else {
            alert('😊 Maaf, coba masukkan nama lengkap ya! ❌');
        }
    } catch (error) {
        console.error('Error:', error);
    }
});