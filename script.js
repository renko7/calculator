const screen  = document.querySelector('.calculator__screen')
const buttons = document.querySelectorAll('.calculator__key')


function handleKeyClick() {
    const keyValue = this.textContent
    console.log(+keyValue)
    if (isNumber(+keyValue) || keyValue === '.'){
        addToScreen(keyValue)
    } else {

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


for (const button of buttons) {
    button.addEventListener('click', handleKeyClick)
}
