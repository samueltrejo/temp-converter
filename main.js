//(°C × 9/5) + 32 = °F
//(°F − 32) × 5/9 = °C

const toCelsius = (temp) => {
  const cels = (temp - 32) * (5 / 9)
  domStringBuilder(cels, 'C')
}

const toFahrenheit = (temp) => {
  const fahr = (temp * (9 / 5)) + 32
  domStringBuilder(fahr, 'F')
}

const determinConverter = () => {
  const input = document.getElementById('temp-input')

  if(document.getElementById('celsius').checked) {
    toCelsius(input.value)
  } else {
    toFahrenheit(input.value)
  }
}

const clear = () => {
  document.getElementById('temp-input').value = '';
  document.getElementById('temp-output').innerHTML = '';
}

const domStringBuilder = (finalTemp, unit) => {
  let domString = '';
  domString += `<h3 class="${tempClass}">${finalTemp}\xB0${unit}</h3>`
  printToDom('temp-output', domString)
}

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId)
  selectedDiv.innerHTML = textToPrint;
}

const eventListeners = () => {
  document.getElementById('convert-button').addEventListener('click', determinConverter)
  document.getElementById('clear-button').addEventListener('click', clear)
}

const init = () => {
  eventListeners()
}

init()
