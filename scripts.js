const convertButton = document.querySelector(".button-converter");
const currencySelect = document.querySelector(".currency-select");

function convertValues() {
    const inputCurrencyValue = document.querySelector(".currency-input").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")// valor em reais
    const currencyValueConverted = document.querySelector(".currency-value")// valor em dolares

    const dolarToday = 5.25
    const euroToday = 6.45

    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "euro") {
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


convertButton.addEventListener("click", convertValues)