console.log('%c 🌟 ยินดีต้อนรับสู่หน้าแรก!', 'font-size: 18px; color: #2c3e50; font-weight: bold;');

window.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 โหลดหน้าเว็บเสร็จเรียบร้อยแล้ว');

    const items = document.querySelectorAll('article ul li');
    console.log(`📋 มีทั้งหมด ${items.length} รายการในบทความ`);
});

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        if (this.getAttribute('href') === '#') {
            e.preventDefault();
            console.log(`🔗 คลิกที่: ${this.textContent.trim()}`);
        }
    });
});