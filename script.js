const screen  = document.querySelector('.calculator__screen')
const buttons = document.querySelectorAll('.calculator__key')

let firstValue = 0
let operator = ''


function handleKeyClick() {
    const keyValue = this.textContent
    console.log(keyValue)

    if (isNumber(+keyValue)) addToScreen(keyValue)

    switch(keyValue) {
        case '.':
            addToScreen(keyValue)
            break
        case 'Reset':
            clearScreen()
            break
        case 'D':
            removeLastFromScreen()
            break
        case '+': case '-': case 'x': case '/': case '=':
            handleOperator(keyValue)
            break
    }
    
}

function addToScreen(key) {
    if(screen.textContent.length === 12) return

    if(screen.textContent.indexOf('.') !== -1 && key === '.') return

    screen.textContent === '0'
        ? screen.textContent = `${key}`
        : screen.textContent = `${screen.textContent}${key}`
}

function isNumber(number) {
    const numbers = [0,1,2,3,4,5,6,7,8,9]
    if(number in numbers) return true
    return false
}

function calculateValue() {
    const currentNumber = +screen.textContent
    let answer;
    switch(operator) {
        case '+':
            answer = `${firstValue + currentNumber}`
            break
        case '-':
            answer = `${firstValue - currentNumber}`
            break
        case '/':
            answer = `${firstValue / currentNumber}`
            break
        case 'x':
            answer = `${firstValue * currentNumber}`
            break
    }
    
    if(answer.length > 12) answer = (+answer).toPrecision(3)
    
    return answer
}

function clearScreen() {screen.textContent = '0'}
function removeLastFromScreen() {screen.textContent = `${screen.textContent.slice(0,-1)}`}

function handleOperator(key) {
    if(key !== '=') {
        operator = key
        firstValue = +screen.textContent
        clearScreen()
    } else {
        if(typeof operator !== 'undefined') {
            screen.textContent = calculateValue()
            firstValue = 0
            operator = ''
         }
    }

}

for (const button of buttons) {
    button.addEventListener('click', handleKeyClick)
}

