
document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu-toggle');
    const nav = document.querySelector('header nav');
    if(menuBtn && nav) {
        menuBtn.addEventListener('click', () => {
            nav.classList.toggle('open');
        });
        // ปิดเมนูเมื่อคลิกลิงก์
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => nav.classList.remove('open'));
        });
    }
});