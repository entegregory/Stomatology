document.addEventListener('DOMContentLoaded', function () {
    const languageSelect = document.getElementById('language-select');

    languageSelect.addEventListener('change', function () {
        const selectedLanguage = this.value;
        changeLanguage(selectedLanguage);
    });

    function changeLanguage(language) {
        const elements = document.querySelectorAll('[data-lang]');

        elements.forEach(function (element) {
            const langContent = element.getAttribute(`data-lang-${language}`);
            if (langContent) {
                element.textContent = langContent;
            }
        });
    }
});
