const answer1 = document.querySelector('.answer')
const answer2 = document.querySelector('.answer2')
const answer3 = document.querySelector('.answer3')
const operand = document.querySelector('.operand')
const operand2 = document.querySelector('.operand2')

let oper1
let oper2
let answ1
let answ2
let answ3

function getRandomQuestion () {
    oper1 = Math.ceil(Math.random() * 9)
    operand.textContent = `${oper1}`
    oper2 = Math.ceil(Math.random() * 9)
    operand2.textContent = `${oper2}`
}
getRandomQuestion ()


function getRandomAnswer () {
    let n = Math.ceil(Math.random() * 3)
    arrClass = [
        'answer2__order3',
        'answer2__order1',
        'answer2__order2'
    ]
    answer2.classList.toggle(`${arrClass[n]}`)    
    answ2 = oper1 * oper2
    answ1 = Math.ceil(Math.random() * 81)
    answer1.textContent = `${answ1}`
    answ3 = Math.ceil(Math.random() * 81)
    answer3.textContent = `${answ3}`
    answer2.textContent = `${answ2}`
    
}
getRandomAnswer ()

function getError () {
    let n = Math.ceil(Math.random() * 3)
    arrClass = [
        'answer2__order3',
        'answer2__order1',
        'answer2__order2'
    ]
    answer2.classList.toggle(`${arrClass[n]}`)
}

answer2.addEventListener("click", getRandomQuestion)
answer2.addEventListener("click", getRandomAnswer)
answer1.addEventListener("click", getError)
answer3.addEventListener("click", getError)




