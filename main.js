let calcDisplay = document.getElementById('input').querySelector('input')

let answer
let display = ''
let operator

function clickButton(digit) {
  display += digit
  displayDigits()
}
function clickSymbol(symbol) {
  operator = symbol
  num1 = display
  display = ''
}
function clickClear() {
  display = ''
  displayDigits()
}
function displayDigits() {
  calcDisplay.value = display
}
function displayAnswer() {
  calcDisplay.value = answer
}
function equals() {
  if (operator === '+') {
    answer = parseFloat(num1) + parseFloat(display)
    displayAnswer()
  }
  if (operator === '-') {
    answer = parseFloat(num1) - parseFloat(display)
    displayAnswer()
  }
  if (operator === '/') {
    answer = parseFloat(num1) / parseFloat(display)
    displayAnswer()
  } else if (operator === '*') {
    answer = parseFloat(num1) * parseFloat(display)
    displayAnswer()
  }
}

displayDigits(display)
