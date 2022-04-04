// MAPS
function getYaMap(){
    if (typeof ymaps === 'undefined'){
        return;
    }
    ymaps.ready(function () {
        var myMap = new ymaps.Map('ymap', {
            center: [43.55919, 39.773233],
            zoom: 13.5
        }, {
            searchControlProvider: 'yandex#search'
        }),
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            balloonContent: 'АК "Моравия"'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/map/icon-big.svg',
            iconImageSize: [50, 57],
            iconImageOffset: [-10, -38]
        }),
        myPlacemark1 = new ymaps.Placemark([43.556355, 39.769675], {
            balloonContent: 'Ордженикидзе',
        }, {
           iconLayout: 'default#imageWithContent',
           iconImageHref: 'img/map/icon-1.svg',
           iconImageSize: [30, 34],
           iconImageOffset: [-24, -24],
       }),
        myPlacemark2 = new ymaps.Placemark([43.563887, 39.774957], {
            balloonContent: 'Военный санаторий, трамвай',
        }, {
           iconLayout: 'default#imageWithContent',
           iconImageHref: 'img/map/icon-2.svg',
           iconImageSize: [30, 34],
           iconImageOffset: [-24, -24],
       }),
        myPlacemark3 = new ymaps.Placemark([43.572261, 39.768148], {
            balloonContent: 'Остановка городского транспорта',
        }, {
           iconLayout: 'default#imageWithContent',
           iconImageHref: 'img/map/icon-3.svg',
           iconImageSize: [30, 34],
           iconImageOffset: [-24, -24],
       }),
        myPlacemark4 = new ymaps.Placemark([43.564972, 39.777086], {
            balloonContent: 'Пляж',
        }, {
           iconLayout: 'default#imageWithContent',
           iconImageHref: 'img/map/icon-4.svg',
           iconImageSize: [30, 34],
           iconImageOffset: [-24, -24],
       }),
        myPlacemark5 = new ymaps.Placemark([43.572320, 39.730634], {
            balloonContent: 'Дендрарий, Зимний театр',
        }, {
           iconLayout: 'default#imageWithContent',
           iconImageHref: 'img/map/icon-5.svg',
           iconImageSize: [30, 34],
           iconImageOffset: [-24, -24],
       }),
        myPlacemark6 = new ymaps.Placemark([43.580510, 39.719702], {
            balloonContent: 'Центр Сочи (Морской вокзал)'
        }, {
           iconLayout: 'default#imageWithContent',
           iconImageHref: 'img/map/icon-6.svg',
           iconImageSize: [30, 34],
           iconImageOffset: [-24, -24],
       }),
        myPlacemark7 = new ymaps.Placemark([43.548364, 39.813145], {
            balloonContent: 'Агурские водопады',
        }, {
           iconLayout: 'default#imageWithContent',
           iconImageHref: 'img/map/icon-7.svg',
           iconImageSize: [30, 34],
           iconImageOffset: [-24, -24],
       }),
        myPlacemark8 = new ymaps.Placemark([43.557910, 39.778254], {
            balloonContent: 'Агурские водопады',
        }, {
           iconLayout: 'default#imageWithContent',
           iconImageHref: 'img/map/icon-8.svg',
           iconImageSize: [30, 34],
           iconImageOffset: [-24, -24],
       });
        myMap.geoObjects
        .add(myPlacemark)
        .add(myPlacemark1)
        .add(myPlacemark2)
        .add(myPlacemark3)
        .add(myPlacemark4)
        .add(myPlacemark5)
        .add(myPlacemark6)
        .add(myPlacemark7)
        .add(myPlacemark8);
        myMap.behaviors.disable('scrollZoom');
    });
};


function getYaMapOne(){
    if (typeof ymaps === 'undefined'){
        return;
    }
    ymaps.ready(function () {
        var myMap2 = new ymaps.Map('ymap-2', {
            center: [43.594496, 39.723044],
            zoom: 14
        }, {
            searchControlProvider: 'yandex#search'
        }),
        myPlacemark = new ymaps.Placemark(myMap2.getCenter(), {
            balloonContent: 'Сочи, ул. Московская, 22, 7 этаж, офис 76'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/contacts/location.svg',
            iconImageSize: [68, 78],
            iconImageOffset: [-10, -10]
        });
        myMap2.geoObjects.add(myPlacemark);
        myMap2.behaviors.disable('scrollZoom');
    });
};

function getYaMapTwo(){
    if (typeof ymaps === 'undefined'){
        return;
    }
    ymaps.ready(function () {
        var myMap3 = new ymaps.Map('ymap-3', {
            center: [43.559301, 39.773547],
            zoom: 14
        }, {
            searchControlProvider: 'yandex#search'
        }),
        myPlacemark = new ymaps.Placemark(myMap3.getCenter(), {
            balloonContent: 'Сочи, Курортный пр., 96Г'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/contacts/location.svg',
            iconImageSize: [68, 78],
            iconImageOffset: [-10, -10]
        });
        myMap3.geoObjects.add(myPlacemark);
        myMap3.behaviors.disable('scrollZoom');
    });
};


setTimeout(function(){
    let elemOne = document.createElement('script');
    elemOne.src = 'https://api-maps.yandex.ru/2.1/?&lang=ru-RU&onload=getYaMap';
    document.querySelector('body').appendChild(elemOne);
}, 3000);
setTimeout(function(){
    let elemTwo = document.createElement('script');
    elemTwo.src = 'https://api-maps.yandex.ru/2.1/?&lang=ru-RU&onload=getYaMapOne';
    document.querySelector('body').appendChild(elemTwo);
}, 3000);
setTimeout(function(){
    let elemThree = document.createElement('script');
    elemThree.src = 'https://api-maps.yandex.ru/2.1/?&lang=ru-RU&onload=getYaMapTwo';
    document.querySelector('body').appendChild(elemThree);
}, 3000);