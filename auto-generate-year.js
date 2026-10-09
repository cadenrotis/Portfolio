// Keeps the footer copyright year current without manual edits.
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
});
