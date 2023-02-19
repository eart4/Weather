const apiKey = 'ba916fb4e5924beab11125540231902'





const query = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=London`

// fetch(query).then((response) => {
//     return response.json()
// }).then((data) => {
//     console.log(data)
// })


/* Получаем название города */


const form = document.querySelector('#form');

const input = document.querySelector('#inputCity');
let city;

/* Слушаем отправку формы */


form.onsubmit = function (e) {
    // отменяем отправку формы
    e.preventDefault();

    // берем значение импута обрезаем пробулы

    city = input.value.trim();

    //делакм запрос на сервер
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

        //выполняем запрос
        fetch(url).then((response) => {
        return response.json()
    }).then((data) => {
        console.log(data)
    })
}