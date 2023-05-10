$(document).ready(function () {
    function setLanguage(lang) {
        $('[data-lang]').each(function () {
            let key = 'data-lang-' + lang;
            let translation = $(this).attr(key);
            if (translation) {
                $(this).text(translation);
            }
        });
    }

    let currentLang = 'ru';
    setLanguage(currentLang);

    $('.menu-button').on('click', function () {
        let lang = $(this).data('lang-' + currentLang);
        if (lang) {
            setLanguage(lang);
            currentLang = lang;
        }
    });
});
