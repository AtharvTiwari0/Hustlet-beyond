function navigateTo(pageId) {
    // Hide all sections
    document.querySelectorAll('section').forEach(sec => {
        sec.classList.remove('active');
        sec.style.display = 'none';
    });

    // Show target section
    const target = document.getElementById(pageId);
    target.style.display = 'flex';
    setTimeout(() => {
        target.classList.add('active');
    }, 50);

    window.scrollTo(0, 0);
}

// Form Submission handling
const form = document.getElementById('contact-form');
if(form) {
    form.addEventListener('submit', function(e) {
        // Formspark will handle the redirect, but we can show a message
        document.getElementById('success-msg').style.display = 'block';
    });
}