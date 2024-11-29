
    // Function to show a specific section and hide others
    function showSection(sectionId) {
        // Hide all sections within the main content area
        const sections = document.querySelectorAll('.main-content > div');
        sections.forEach(section => {
            section.style.display = 'none';
        });

        // Show the selected section
        document.getElementById(sectionId).style.display = 'block';

        // If the skills section is displayed, animate the progress bars
        if (sectionId === 'skills') {
            const progressBars = document.getElementById(sectionId).querySelectorAll('.progress');
            progressBars.forEach(bar => {
                // Extract width value directly from the style or set a fallback
                const skillLevel = bar.style.width || '0%';
                bar.style.setProperty('--progress-width', skillLevel);
                bar.style.width = '0%'; // Reset the width to 0 for the animation to work
                bar.style.animation = 'fillProgress 2s ease-in-out forwards';
                bar.style.width = skillLevel; // Trigger the width change for the animation
            });
        }
    }

    // Ensure the DOM is fully loaded before running the script
    document.addEventListener('DOMContentLoaded', function() {
        // Show the "about" section by default on page load
        showSection('about');
    });
