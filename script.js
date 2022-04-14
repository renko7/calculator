const screen  = document.querySelector('.calculator__screen')
const buttons = document.querySelectorAll('.calculator__key')

console.log(buttons)

function handleKeyClick() {
    const keyValue = this.textContent
    if (isNumber(+keyValue)) {
        addToScreen(+keyValue)
    }
}

function addToScreen(number) {
    console.log(screen.textContent)
    screen.textContent === '0' 
        ? screen.textContent = `${number}`
        : screen.textContent = `${number}${screen.textContent}`
}

function isNumber(number) {
    const numbers = [0,1,2,3,4,5,6,7,8,9]
    if(number in numbers) return true
    return false
}


for (const button of buttons) {
    button.addEventListener('click', handleKeyClick)
}

buttons.forEach( button => button.addEventListener('click', handleKeyClick));
