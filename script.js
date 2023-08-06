// // const test = [1,2,3,4,5]
// // const testChange = test.map(testItem => testItem - 0.5)
// // console.log(testChange)

// // ================================================================================================

const body = document.querySelector('body')
const keyButtons = [...document.querySelectorAll('.key')]
console.log(keyButtons)
const keys = keyButtons.map(keyButton => keyButton.dataset.key)
console.log(keys)
const keyToButtonMap = keyButtons.reduce((acc, cur) => {
    const curKey = cur.dataset.key
    acc[curKey] = cur
    console.log(acc)
    return acc
}, {})

keyButtons.forEach(keyButton => {
    keyButton.addEventListener('click', (e) => {
        const clickedKey = e.target.dataset.key
        console.log(clickedKey)
        checkKey(clickedKey)
    })
});
// console.log(keyToButtonMap['0'])
// console.log(keyToButtonMap['BACKSPACE'])
// console.log(keyToButtonMap)
let currentKey 
body.addEventListener('keyup', (e) => {
    const typedKey = e.key
    console.log(typedKey)
    checkKey(typedKey)
})



const checkKey = (inputKey) => {
    if(inputKey.toUpperCase() === currentKey){
        // console.log(inputKey.toUpperCase())
        setRandomKey()
    }
}

const setRandomKey = () => {
    if(currentKey){
        keyToButtonMap[currentKey].classList.remove('jiggle')
    }
    const randomIndex = Math.floor(Math.random()*keys.length)
    currentKey = keys[randomIndex]
    keyToButtonMap[currentKey].classList.add('jiggle')
}
setRandomKey()

// const digits = [10, 20, 30]
// const startPoint = 3
// const sumDigits = digits.reduce((accumulator, currentValue) => accumulator + currentValue, startPoint)
// console.log(sumDigits)
// 1. accumulator = startPoint + currentValue[1]
// accumulator = 3 + 10
// 2. accumulator = accumulator + currentValue[2]
// accumulator = 13 + 20
// 3. accumulator = accumulator + cuurentValue[3]
// accumulator = 33 + 30