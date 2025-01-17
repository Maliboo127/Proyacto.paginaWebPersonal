let celsiusInput = document.querySelector('#celsius > input')
let fahrenheitInput = document.querySelector('#fahrenheit > input')
let kelvinInput = document.querySelector('#kelvin > input')
let rankineInput = document.querySelector('#rankine > input')  // Nuevo campo de Rankine

let btn = document.querySelector('.button button')

function roundNumber(number){
    return Math.round(number*100)/100
}

/* Celcius a Fahrenheit, Kelvin y Rankine */
celsiusInput.addEventListener('input', function(){
    let cTemp = parseFloat(celsiusInput.value)
    let fTemp = (cTemp*(9/5)) + 32
    let kTemp = cTemp + 273.15
    let rTemp = (cTemp + 273.15) * (9/5)  // Cálculo de Rankine

    fahrenheitInput.value = roundNumber(fTemp)
    kelvinInput.value = roundNumber(kTemp)
    rankineInput.value = roundNumber(rTemp)
})

/* Fahrenheit a Celcius, Kelvin y Rankine */
fahrenheitInput.addEventListener('input', function(){
    let fTemp = parseFloat(fahrenheitInput.value)
    let cTemp = (fTemp - 32) * (5/9)
    let kTemp = (fTemp - 32) * (5/9) + 273.15
    let rTemp = fTemp + 459.67  // Cálculo de Rankine

    celsiusInput.value = roundNumber(cTemp)
    kelvinInput.value = roundNumber(kTemp)
    rankineInput.value = roundNumber(rTemp)
})

/* Kelvin a Celcius, Fahrenheit y Rankine */
kelvinInput.addEventListener('input', function(){
    let kTemp = parseFloat(kelvinInput.value)
    let cTemp = kTemp - 273.15
    let fTemp = (kTemp - 273.15) * (9/5) + 32
    let rTemp = kTemp * (9/5)  // Cálculo de Rankine

    celsiusInput.value = roundNumber(cTemp)
    fahrenheitInput.value = roundNumber(fTemp)
    rankineInput.value = roundNumber(rTemp)
})

/* Rankine a Celcius, Fahrenheit y Kelvin */
rankineInput.addEventListener('input', function(){
    let rTemp = parseFloat(rankineInput.value)
    let cTemp = (rTemp - 491.67) * (5/9)
    let fTemp = rTemp - 459.67
    let kTemp = rTemp * (5/9)  // Cálculo de Kelvin

    celsiusInput.value = roundNumber(cTemp)
    fahrenheitInput.value = roundNumber(fTemp)
    kelvinInput.value = roundNumber(kTemp)
})

/* Botón para limpiar todos los campos */
btn.addEventListener('click', () => {
    celsiusInput.value = ""
    fahrenheitInput.value = ""
    kelvinInput.value = ""
    rankineInput.value = ""  // Limpiar Rankine
})
