// Add event listener to each list item in the side nav
document.querySelectorAll('.side-nav ul li').forEach(item => {
    item.addEventListener('click', function() {
        // Remove the 'active' class from all items
        document.querySelectorAll('.side-nav ul li').forEach(li => li.classList.remove('active'));

        // Add the 'active' class to the clicked item
        this.classList.add('active');
    });
});
