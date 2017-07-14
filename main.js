let one = document.getElementById('one')
let two = document.getElementById('two')
let three = document.getElementById('three')
let four = document.getElementById('four')
let five = document.getElementById('five')
let six = document.getElementById('six')
let seven = document.getElementById('eight')
let nine = document.getElementById('nine')
let zero = document.getElementById('zero')
let clear = document.getElementById('clear')
let multiply = document.getElementById('multiply')
let divide = document.getElementById('divide')
let subtract = document.getElementById('subtract')
let add = document.getElementById('add')
let calcDisplay = document.getElementById('input').querySelector('input')
let numbers = document.getElementsByClassName('numbers')

let num1 = 1
let num2 = 2
let num3 = 3
let num4 = 4
let num5 = 5
let num6 = 6
let num7 = 7
let num8 = 8
let num9 = 9
let num0 = 0

let answer
let math = ''
let symbol = ''
let display = ''

function clickButton1() {
  math = num1
  display += math
  displayDigits()
}
function clickButton2() {
  math = num2
  display += math
  displayDigits()
}
function clickButton3() {
  math = num3
  display += math
  displayDigits()
}
function clickButton4() {
  math = num4
  display += math
  displayDigits()
}
function clickButton5() {
  math = num5
  display += math
  displayDigits()
}
function clickButton6() {
  math = num6
  display += math
  displayDigits()
}
function clickButton7() {
  math = num7
  display += math
  displayDigits()
}
function clickButton8() {
  math = num8
  display += math
  displayDigits()
}
function clickButton9() {
  math = num9
  display += math
  displayDigits()
}
function clickButton0() {
  math = num0
  display += math
  displayDigits()
}
function clickSymbol1() {
  symbol = '/'
  display += symbol
  displayDigits()
}
function clickSymbol2() {
  symbol = '*'
  display += symbol
  displayDigits()
}
function clickSymbol3() {
  symbol = '-'
  display += symbol
  displayDigits()
}
function clickSymbol4() {
  symbol = '+'
  display += symbol
  displayDigits()
}
function clickClear() {
  display = ''
  displayDigits()
}
function clickSymbol5() {
  symbol = '.'
  display += symbol
  displayDigits()
}
function displayDigits() {
  calcDisplay.value = display
}
function displayAnswer() {
  calcDisplay.value = answer
}
function equals() {
  answer = eval(display)
  displayAnswer()
}

displayDigits(display)

// var = num1
// var answer = ""
// answer += num1
// answer += `${num1}`
