var translations = {
    'ru': {
        'title': 'Стоматология',
        'address': 'Адрес: улица Примеров, дом 123, город Примеров',
        'services': 'Услуги',
        'prices': 'Цены',
        'about': 'О нас',
        'info': 'Дополнительная информация: здесь может быть информация о вашей клинике или услугах.',
    },
    'en': {
        'title': 'Dentistry',
        'address': 'Address: Example Street, 123, Example City',
        'services': 'Services',
        'prices': 'Prices',
        'about': 'About Us',
        'info': 'Additional info: here can be some information about your clinic or services.',
    },
    'kz': {
        'title': 'Стоматология',
        'address': 'Мекен-жайы: Мысалы көше, 123, Мысалы қала',
        'services': 'Қызметтер',
        'prices': 'Бағалар',
        'about': 'Біз туралы',
        'info': 'Қосымша ақпарат: мұнда сіздің клиникаңыз немесе қызметтеріңіз туралы ақпарат болуы мүмкін.',
    },
    'ky': {
        'title': 'Стоматология',
        'address': 'Дарек: Мисалдуу көчө, 123, Мисалдуу шаар',
        'services': 'Кызмат көрсөтүүлөр',
        'prices': 'Баалар',
        'about': 'Биз жөнүндө',
        'info': 'Кошумча маалымат: бул жерде клиникаңыз же кызматтарыңыз жөнүндө маалымат болушу мүмкүн.',
    }
}

var currentLanguage = 'ru';

function translate(language) {
    var elements = document.querySelectorAll('[data-translate]');

    elements.forEach(function (element) {
        element.innerText = translations[language][element.dataset.translate];
    });
}

document.getElementById('languageButton').addEventListener('click', function () {
    if (currentLanguage === 'ru') {
        currentLanguage = 'en';
    } else if (currentLanguage === 'en') {
        currentLanguage = 'kz';
    } else if (currentLanguage === 'kz') {
        currentLanguage = 'ky';
    } else {
        currentLanguage = 'ru';
    }

    translate(currentLanguage);
});
