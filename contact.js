function submitForm(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !subject || !message) {
        alert('กรุณากรอกข้อมูลให้ครบถ้วนทุกช่องที่มีเครื่องหมาย *');
        return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('กรุณากรอกอีเมลให้ถูกต้อง');
        return false;
    }

    const messageDiv = document.getElementById('formMessage');
    messageDiv.style.display = 'block';

    messageDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });

    document.getElementById('contactForm').reset();

    setTimeout(() => {
        messageDiv.style.display = 'none';
    }, 5000);

    console.log('📨 ส่งข้อความสำเร็จ!');
    console.log(`👤 ชื่อ: ${name}, 📧 อีเมล: ${email}, 📝 หัวข้อ: ${subject}`);

    return false;
}

console.log('📧 ยินดีต้อนรับสู่หน้าติดต่อ!');