window.addEventListener('scroll', function() {
    var topBar = document.querySelector('.top-bar');
    if (window.pageYOffset > 0) {
        topBar.style.top = '-80px';
        topBar.style.top = '0';
    }
});
