// Select all tab links and tab content sections
const tabLinks = document.querySelectorAll('.tab-link');
const tabContents = document.querySelectorAll('.tab-content');

// Function to handle tab switching
tabLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Remove 'active' class from all tabs and contents
        tabLinks.forEach(tab => tab.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        // Add 'active' class to the clicked tab and corresponding content
        link.classList.add('active');
        document.getElementById(link.getAttribute('data-tab')).classList.add('active');
    });
});
