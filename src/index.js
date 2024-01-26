function alert() {
    let cities = document.querySelector('#cities')
    let citySelected = cities.options[cities.selectedIndex].value
    let cityMap = {
        paris: moment.tz('Europe/Paris'),
        tokyo: moment.tz('Asia/Tokyo'),
        sydney: moment.tz('Australia/Sydney'),
    }
    let dateTime = cityMap[citySelected].format('LL[, at] LTS')

    if (citySelected === cityMap[citySelected]) {
        alert(`Hi`)
    }
}

cities.addEventListener('change', alert)
