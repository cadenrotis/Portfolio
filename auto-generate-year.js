// Keeps the footer copyright year current and powers the "Back to top" button.
// The year hardcoded in the HTML is a fallback for visitors with JavaScript disabled.

// This event is called once the browser has fully loaded the HTML for a page
document.addEventListener('DOMContentLoaded', function () {
    // Find the element with id copyright-year, which is located at the beginning of each page's footer
    var yearEl = document.getElementById('copyright-year');

    // If the copyright year element isn't found for some reason, skip setting the year.
    // There is a static fallback value that will be used for the year.
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    // --- Back to top button ---
    // Built here instead of in every page's HTML so all pages share one definition.
    // With JavaScript disabled the button simply never appears, which is fine
    // because the nav is already at the top of every page.
    var SCROLL_THRESHOLD = 300; // pixels scrolled before the button appears

    var topBtn = document.createElement('button');
    topBtn.id = 'back-to-top';
    topBtn.type = 'button';
    topBtn.setAttribute('aria-label', 'Back to top'); // for screen readers to tell them what the button does
    topBtn.textContent = '\u2191'; // up arrow
    document.body.appendChild(topBtn);

    // Show the button once the reader has scrolled a little, hide it again at the
    // top. The body class it toggles also reserves footer space (see style.css)
    // so the button never covers the footer content.
    function updateButtonVisibility() {
        document.body.classList.toggle('is-scrolled', window.scrollY > SCROLL_THRESHOLD);
    }

    // set the correct state on load, e.g. after a refresh.
    updateButtonVisibility(); 

    // Anytime the page is scrolled, check if the button should be shown or hidden. The { passive: true }
    // option is used to improve performance by telling the browser that the event handler
    // will not call preventDefault().
    window.addEventListener('scroll', updateButtonVisibility, { passive: true });

    // When the "Back to top" button is clicked, scroll to the top of the page smoothly.
    topBtn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
