const getPosition = () => {
    navigator.geolocation.getCurrentPosition(position => {
        ymaps.ready(function () {
            var myMap = new ymaps.Map('map', {
                    center: [position.coords.latitude, position.coords.longitude],
                    zoom: 9
                }, {
                    searchControlProvider: 'yandex#search'
                }),
                myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                    hintContent: 'Я тут',
                    balloonContent: 'Пытаюсь определить свое место положение'
                }, {
                    iconLayout: 'default#image',
                    iconImageHref: './images/m.png',
                    iconImageSize: [30, 30]
                })
            myMap.geoObjects
                .add(myPlacemark)
        });
    })
}

getPosition();