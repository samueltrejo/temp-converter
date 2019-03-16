//(°C × 9/5) + 32 = °F
//(°F − 32) × 5/9 = °C

const determinConverter = () => {
  const input = document.getElementById('temp-input')

  if(document.getElementById('celsius').checked) {
    printToDom('temp-output', input.value + '°C')
  } else {
    printToDom('temp-output', input.value + '°F')
  }
}

const eventListeners = () => {
  document.getElementById('convert-button').addEventListener('click', determinConverter)
}

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId)
  selectedDiv.innerHTML = textToPrint;
}

const init = () => {
  eventListeners()
}

init()
