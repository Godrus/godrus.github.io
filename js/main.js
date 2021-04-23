// Добавление обработчиков событий
const toggleSwitch = document.querySelector('.daynight .neu-checkbox');

toggleSwitch.addEventListener('change', switchTheme, false);

// Сохранение предпочтения пользователя для будущих посещений
function switchTheme({
    target
}) {
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

function showTableElement(row) {
  var x = document.getElementById(row);
  if (x.style.display === "none") {
    x.style.display = "table-row";
  } else {
    x.style.display = "none";
  }
}

function sortTable() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("myTable");
  switching = true;
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[0];
      y = rows[i + 1].getElementsByTagName("TD")[0];
      //check if the two rows should switch place:
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        //if so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

function sendGET() {

    // Отправка запроса и получение ответа
    // 1. Создаем новый объект XMLHttpRequest
    const xhr = new XMLHttpRequest(); // Инициаализация XMLHttpRequest, отвечает за вызов AJAX
    // При изменении состояния onreadystatechange вызов функции
    xhr.onreadystatechange = function () {
        /*
        if (xhr.readyState === 4) { // Если код ответа 4, то зпрос завершен и был получен ответ
            if (xhr.status === 200) { // Если 200, то нет ошибки
                // вывести результат
                alert(xhr.status + ': ' + xhr.responseText);
            } else {
                // обработать ошибку
                alert(xhr.status + ': ' + xhr.statusText);
            }
        }*/
        xhr.onload = function(){
            alert('Загружено:' + xhr.status + '<br>' + xhr.response);
        };
    };

    const queryString = window.location.search;
    console.log(queryString);

    // 2. Конфигурируем его: GET-запрос на URL
    xhr.open('get', 'https://ghibliapi.herokuapp.com/films', false); // https://httpbin.org/get https://webhook.site/19fd8d70-e96d-4b58-bb95-d519cee89cad
    console.log(xhr.statusText);
    // 3. Отсылаем заапрос
    xhr.send();
}

// Tree View functions
function tree_toggle(event) {
  event = event || window.event;
  var clickedElem = event.target || event.srcElement;

  if (!hasClass(clickedElem, 'TV-expand')) { return; }

  var node = clickedElem.parentNode;
  if (hasClass(node, 'TV-leaf')) { return; }

  var newClass = hasClass(node, 'TV-open') ? 'TV-closed' : 'TV-open';
  var re = /(^|\s)(TV-open|TV-closed)(\s|$)/;
  node.className = node.className.replace(re, '$1' + newClass + '$3');
}

function hasClass(elem, className){ 
  return new RegExp("(^|\\s)" + className + "(\\s|$)").test(elem.className);
}
