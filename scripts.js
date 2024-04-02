// Get all accordion headings
var accordionHeadings = document.querySelectorAll('.accordion-heading');

// Add click event listener to each accordion heading
accordionHeadings.forEach(function(heading) {
  heading.addEventListener('click', function() {
    // Toggle the 'active' class on the clicked heading
    this.classList.toggle('active');
  });
});
