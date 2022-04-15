const screen  = document.querySelector('.calculator__screen')
const buttons = document.querySelectorAll('.calculator__key')

let secondValue = 0


function handleKeyClick() {
    const keyValue = this.textContent
    console.log(keyValue)

    if (isNumber(+keyValue)) addToScreen(keyValue)

    switch(keyValue) {
        case '.':
            addToScreen(keyValue)
        case 'Reset':
            clearScreen()
        case 'D':
            removeLastFromScreen()
        case '+': case '-': case 'x': case '/':
            handleOperator(keyValue)
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

function clearScreen() {screen.textContent = '0'}
function removeLastFromScreen() {screen.textContent = `${screen.textContent.slice(0,-1)}`}

function handleOperator(key) {
    const operators = ['+','-','x','/']
    if(key in operators) {

    }
}

for (const button of buttons) {
    button.addEventListener('click', handleKeyClick)
}

