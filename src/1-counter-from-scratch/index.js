let count = 0

const counter = document.getElementById('counter')
const incrementButton = document.getElementById('increment-button')
const resetButton = document.getElementById('reset-button')

incrementButton.addEventListener('click', () => {
    count++
    counter.textContent = count
})

resetButton.addEventListener('click', () => {
    count = 0
    counter.textContent = count
})