document.addEventListener('DOMContentLoaded', function() {
    var boxes = document.querySelectorAll('.box');
    boxes.forEach(function(box) {
        box.addEventListener('click', function() {
            // Toggle the 'expanded' class when clicked
            this.classList.toggle('expanded');

            boxes.forEach(function(otherBox)) {
                if (otherBox !== box) {
                    otherBox.classList.remove('expanded');
                }
            }
        });
    });
});