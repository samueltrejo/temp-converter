//(°C × 9/5) + 32 = °F
//(°F − 32) × 5/9 = °C

const toCelsius = (temp) => {
  const cels = (temp - 32) * (5 / 9)
  domStringBuilder(cels, '\xB0C')
}

const toFahrenheit = (temp) => {
  const fahr = (temp * (9 / 5)) + 32
  domStringBuilder(fahr, '\xB0F')
}

const determinConverter = () => {
  const input = document.getElementById('temp-input')

  if(document.getElementById('celsius').checked) {
    toCelsius(input.value)
  } else {
    toFahrenheit(input.value)
  }
}

const domStringBuilder = (finalTemp, unit) => {
  let domString = '';
  domString += `<h3>${finalTemp}${unit}</h3>`
  printToDom('temp-output', domString)
}

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId)
  selectedDiv.innerHTML = textToPrint;
}

const eventListeners = () => {
  document.getElementById('convert-button').addEventListener('click', determinConverter)
}

const init = () => {
  eventListeners()
}

init()
