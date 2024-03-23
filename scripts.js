document.addEventListener('DOMContentLoaded', function() {
    var aboutSection = document.getElementById('about');
    var popoutMenu = document.querySelector('.popout-menu');
    
    aboutSection.addEventListener('click', function() {
        popoutMenu.classList.toggle('expanded');
    });
});