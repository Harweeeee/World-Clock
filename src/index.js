function display() {
    let cities = document.querySelector('#cities')
    let citySelected = cities.options[cities.selectedIndex].value
    let cityName = cities.options[cities.selectedIndex].text
    if (citySelected === 'Select a city...') {
        return
    }
    let dateTime = moment.tz(citySelected).format('LL[, at] LTS')

    alert(`It is currently ${dateTime} in ${cityName}`)
}

cities.addEventListener('change', display)
