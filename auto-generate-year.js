// Keeps the footer copyright year current without manual edits.
// The year hardcoded in the HTML is a fallback for visitors with JavaScript disabled.
document.addEventListener('DOMContentLoaded', function () {
    var yearEl = document.getElementById('copyright-year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
});
