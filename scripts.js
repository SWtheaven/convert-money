const convertButton = document.querySelector(".button-converter");
const currencySelectFirst = document.querySelector(".currency-select-first");


function convertValues() {
    const inputCurrencyValue = document.querySelector(".currency-input").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")// valor em reais
    const currencyValueConverted = document.querySelector(".currency-value")// valor em dolares

    const dolarToday = 5.25
    const euroToday = 6.45

    if (currencySelectFirst.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelectFirst.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR',
        }).format(inputCurrencyValue / euroToday)

    }


    currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',

    }).format(inputCurrencyValue)



}

function changeCurrancy() {
    const currencyDolar = document.getElementById("currency-dolar")
    const currencyReal = document.getElementById("currency-real")
    const currencyEuro = document.getElementById("currency-euro")
    const currencyImage = document.querySelector(".logo-converted")

    if (currencySelectFirst.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assets/estados-unidos (1) 1.png"

    }
    if (currencySelectFirst.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }
    if (currencySelectFirst.value == "real") {
        currencyName.innerHTML = "Real"
        currencyImage.src = "./assets/brasil 2.png"
    }

    convertValues()
}


currencySelectFirst.addEventListener("change", changeCurrancy)
convertButton.addEventListener("click", convertValues)