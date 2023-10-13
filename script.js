// Get references to the input elements
const celciusInput = document.querySelector('#celcius input');
const fahrenheitInput = document.querySelector('#fahrenheit input');
const kelvinInput = document.querySelector('#kelvin input');

// Add input event listeners to all input fields
celciusInput.addEventListener('input', convertCelcius);
fahrenheitInput.addEventListener('input', convertFahrenheit);
kelvinInput.addEventListener('input', convertKelvin);

// Conversion functions
function convertCelcius() {
    const celciusValue = parseFloat(celciusInput.value);
    if (!isNaN(celciusValue)) {
        fahrenheitInput.value = (celciusValue * 9/5) + 32;
        kelvinInput.value = celciusValue + 273.15;
    } else {
        fahrenheitInput.value = '';
        kelvinInput.value = '';
    }
}

function convertFahrenheit() {
    const fahrenheitValue = parseFloat(fahrenheitInput.value);
    if (!isNaN(fahrenheitValue)) {
        celciusInput.value = (fahrenheitValue - 32) * 5/9;
        kelvinInput.value = (fahrenheitValue - 32) * 5/9 + 273.15;
    } else {
        celciusInput.value = '';
        kelvinInput.value = '';
    }
}

function convertKelvin() {
    const kelvinValue = parseFloat(kelvinInput.value);
    if (!isNaN(kelvinValue)) {
        celciusInput.value = kelvinValue - 273.15;
        fahrenheitInput.value = (kelvinValue - 273.15) * 9/5 + 32;
    } else {
        celciusInput.value = '';
        fahrenheitInput.value = '';
    }
}

// All Clear button
const clearButton = document.querySelector('.button button');
clearButton.addEventListener('click', () => {
    celciusInput.value = '';
    fahrenheitInput.value = '';
    kelvinInput.value = '';
});