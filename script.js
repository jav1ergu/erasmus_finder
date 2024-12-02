// Select all buttons with the class "mark-interesting"
document.querySelectorAll('.mark-interesting').forEach((button) => {
    button.addEventListener('click', () => {
        // Find the corresponding link element (the previous sibling in the same list item)
        const link = button.previousElementSibling;

        // Check if the link is already marked as interesting
        if (link.style.color === 'green') {
            // Revert to default style
            link.style.color = ''; // Reset to CSS defaults
            link.style.fontWeight = ''; // Reset to CSS defaults
        } else {
            // Apply green color and bold font
            link.style.color = 'green';
            link.style.fontWeight = 'bold';
        }
    });
});

// Add functionality to hide and unhide the list
const toggleButton = document.getElementById('toggle-list');
const list = document.getElementById('list');

toggleButton.addEventListener('click', () => {
    if (list.style.display === 'none') {
        list.style.display = 'block'; // Show the list
        toggleButton.textContent = 'Hide List'; // Update button text
    } else {
        list.style.display = 'none'; // Hide the list
        toggleButton.textContent = 'Show List'; // Update button text
    }
});
