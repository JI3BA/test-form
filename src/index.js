import './index.html'
import './style.sass'
import './maskPhone'

const sum = (a,b) => a + b

console.log(sum(2,3))
console.log(sum(5,3))
console.log(sum(1,3))

document.querySelector('.modal__button').addEventListener('click', () => {
    document.querySelector('.modal').classList.add('modal--active')
    document.querySelector('.modal__container').classList.add('modal__container--active')
})