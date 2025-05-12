const convertButton = document.querySelector(".button-converter");
const currencySelect = document.querySelector(".currency-select");

function convertValues() {
    const inputCurrencyValue = document.querySelector(".currency-input").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")// valor em reais
    const currencyValueConverted = document.querySelector(".currency-value")// valor em dolares

    const dolarToday = 5.70
    const euroToday = 6.31
    const libraToday = 7.51
    const bitcoinToday = 581642.38
    const ieneToday = 0.038

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
    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'GBP',
        }).format(inputCurrencyValue / libraToday)

    }
    if (currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'BTC',
        }).format(inputCurrencyValue / bitcoinToday)

    }
    if (currencySelect.value == "yen") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('ja-JP', {
            style: 'currency',
            currency: 'JPY',
        }).format(inputCurrencyValue / ieneToday)

    }


    currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',

    }).format(inputCurrencyValue)



}

function changeCurrancy() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".logo-converted")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assets/estados-unidos (1) 1.png"

    }
    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }
    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra esterlina"
        currencyImage.src = "./assets/uk2.png"
    }
    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin.png"
    }
    if (currencySelect.value == "yen") {
        currencyName.innerHTML = "Iene japonês"
        currencyImage.src = "./assets/japao.png"
    }

    convertValues()
}


currencySelect.addEventListener("change", changeCurrancy)
convertButton.addEventListener("click", convertValues)