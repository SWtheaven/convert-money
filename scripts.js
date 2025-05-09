const convertButton = document.querySelector(".button-converter");

function convertValues(){
    const inputCurrencyValue = document.querySelector(".currency-input").value

    const dolarToday = 5.25

    const convertedValue = (inputCurrencyValue / dolarToday)

    console.log(convertedValue)
}


convertButton.addEventListener("click", convertValues)