
const input = document.getElementById('input')

const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const reset = document.getElementById('reset')


var inputValue= 0

function updateColor(){
    if (inputValue > 0) {
        input.classList.remove('negative')
        input.classList.add('positive')
    }else if(inputValue < 0){
        input.classList.add('negative')
        input.classList.remove('positive')
    } else {
        input.classList.remove('negative', 'positive')
    }
}
function increment () {
    inputValue += 1
    input.value = inputValue
    updateColor()
}
function decrement () {
    inputValue -= 1
    input.value = inputValue
    updateColor()
}
function resetFunc () {
    inputValue = 0
    input.value = inputValue
    updateColor()
}


plus.addEventListener('click', increment)
minus.addEventListener('click', decrement)
reset.addEventListener('click', resetFunc)



