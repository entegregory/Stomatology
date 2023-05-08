document.addEventListener('DOMContentLoaded', function () {
    const languageSelect = document.getElementById('language-select');
    const langButtons = document.querySelectorAll('[data-lang]');

    function updateLanguage(language) {
        langButtons.forEach(button => {
            const newText = button.dataset['lang' + language.charAt(0).toUpperCase() + language.slice(1)];
            if (newText) {
                button.textContent = newText;
            }
        });
    }

    languageSelect.addEventListener('change', function () {
        const selectedLanguage = this.value;
        updateLanguage(selectedLanguage);
    });
});
