const apiKey = 'ba916fb4e5924beab11125540231902'





const query = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=London`

// fetch(query).then((response) => {
//     return response.json()
// }).then((data) => {
//     console.log(data)
// })


/* Получаем название города */

const header = document.querySelector('.header')
const form = document.querySelector('#form');

const input = document.querySelector('#inputCity');

function removeCard(){
    const prevCard = document.querySelector('.card').remove();
    if (prevCard)
        prevCard.remove();
}



function showError(errorMessage){
    const html = `<div class="card">${data.error.message}</div>`;

    header.insertAdjacentHTML('afterend', html);
}


/* Слушаем отправку формы */


form.onsubmit = function (e) {
    // отменяем отправку формы
    e.preventDefault();

    // берем значение импута обрезаем пробулы

    let city = input.value.trim();

    //делакм запрос на сервер
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    //выполняем запрос
    fetch(url).then((response) => {
        return response.json();
    }).then((data) => {

        // проверка на ошибку
        if (data.error) {

            removeCard();

            showError(data.error.message);




        } else {
            const prevCard = document.querySelector('.card');
            if (prevCard)
                prevCard.remove();
            // разметка для карточки

            const html = `<div class="card">
      
    
            <h2 class="card-city">${data.location.name}<span>${data.location.country}</span></h2>
      
      
            <div class="card-weather">
              <div class="card-value">${data.current.temp_c}<sup>°c</sup></div>
              <img class="card-img" src="./images/example.svg" alt="">
            </div>
      
            <div class="card-description">${data.current.condition.text}</div>
      
      
      
          </div>`;
            // отображаем карточку на стр

            header.insertAdjacentHTML('afterend', html);
        }

        console.log(data);

        // удаляем старыекарточки


    });
}