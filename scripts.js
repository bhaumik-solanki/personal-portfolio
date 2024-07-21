// Tab Switching Script
document.addEventListener('DOMContentLoaded', () => {
    // Get all tab buttons and tab panes
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanes = document.querySelectorAll('.tab-pane');

    // Function to handle tab switching
    function switchTab(targetId) {
        // Remove active class from all tab buttons and panes
        tabButtons.forEach(button => button.classList.remove('tab-button-active'));
        tabPanes.forEach(pane => pane.classList.remove('tab-pane-active'));

        // Add active class to the selected tab button and pane
        const targetButton = document.querySelector(`.tab-button[data-target="${targetId}"]`);
        const targetPane = document.querySelector(targetId);

        if (targetButton) targetButton.classList.add('tab-button-active');
        if (targetPane) targetPane.classList.add('tab-pane-active');
    }

    // Add click event listeners to tab buttons
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            switchTab(targetId);
        });
    });

    // Set default tab to be active (Education)
    switchTab('#education');
});

// Filter Project Cards Script
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-button');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');

            filterButtons.forEach(btn => btn.classList.remove('filter-button-active'));
            button.classList.add('filter-button-active');

            projectCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});

// Typed.js Initialization
var typed = new Typed('.my-name', {
    strings: ['', 'Bhaumik Solanki,'],
    typeSpeed: 50,
});
