// Добавление обработчиков событий
const toggleSwitch = document.querySelector('.daynight input[type="checkbox"]');

toggleSwitch.addEventListener('change', switchTheme, false);

// Сохранение предпочтения пользователя для будущих посещений
function switchTheme({target}) {
    if (target.checked) {
        document.documentElement.dataset.theme = 'dark';
        localStorage.setItem('theme', 'dark'); //add this
    } else {
        document.documentElement.dataset.theme = 'light';
        localStorage.setItem('theme', 'light'); //add this
    }
}

// Проверка сохраненных пользовательских настроек, если таковые имеются, при загрузке веб-сайта.
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function sendGET() {

    // Отправка запроса и получение ответа
    // 1. Создаем новый объект XMLHttpRequest
    var xhr = new XMLHttpRequest();

    // 2. Конфигурируем его: GET-запрос на URL
    xhr.open('get', 'https://httpbin.org/get', false);

    // 3. Отсылаем заапрос
    xhr.send();

    // 4. Если код ответа сервера не 200, то это ошибка
    if (xhr.status != 200) {
        // обработать ошибку
        alert(xhr.status + ': ' + xhr.statusText)
    } else {
        // вывести результат
        alert(xhr.responseText);
    }
}
