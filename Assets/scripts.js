// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const navItems = document.querySelectorAll('.nav-item');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Handle dropdown menus on mobile
navItems.forEach(item => {
    const link = item.querySelector('.nav-link');
    if (item.querySelector('.dropdown-menu')) {
        link.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                item.classList.toggle('active');
            }
        });
    }
});

// Close menu when link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        if (!link.querySelector('.dropdown-arrow')) {
            navMenu.classList.remove('active');
        }
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('nav')) {
        navMenu.classList.remove('active');
    }
});

// Update year in footer
document.getElementById('year').textContent = new Date().getFullYear();
