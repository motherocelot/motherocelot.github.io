document.addEventListener('DOMContentLoaded', function() {
    var boxes = document.querySelectorAll('.box');
    boxes.forEach(function(box) {
        box.addEventListener('click', function() {
            // Toggle the 'expanded' class for the clicked box
            this.classList.toggle('expanded');

            // Collapse all other boxes except the clicked one
            boxes.forEach(function(otherBox) {
                if (otherBox !== box) {
                    otherBox.classList.remove('expanded');
                }
            });
        });
    });
});
