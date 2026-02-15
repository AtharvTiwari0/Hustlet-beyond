function navigateTo(pageId) {
    // Sabhi sections chhupao
    document.querySelectorAll('section').forEach(sec => {
        sec.style.display = 'none';
        sec.classList.remove('active');
    });

    // Chuninda section dikhao
    const target = document.getElementById(pageId);
    target.style.display = 'flex';
    setTimeout(() => {
        target.classList.add('active');
    }, 10);

    // Page ke top par scroll karein
    window.scrollTo(0, 0);
}

// "Other" option check karne ke liye function
function checkOther(select) {
    const otherInput = document.getElementById('otherInput');
    if(select.value === 'other') {
        otherInput.style.display = 'block';
        otherInput.setAttribute('required', 'true');
    } else {
        otherInput.style.display = 'none';
        otherInput.removeAttribute('required');
    }
}
