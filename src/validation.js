import {postData} from "./AjaxRequest";

function invalidLogic(name){
    document.querySelector(`.form__wrap--${name}`).classList.add('form__wrap--invalid')
    document.querySelector(`.form__title--${name}`).classList.add('form__title--invalid')
}

function validLogic(name){
    document.querySelector(`.form__wrap--${name}`).classList.remove('form__wrap--invalid')
    document.querySelector(`.form__title--${name}`).classList.remove('form__title--invalid')
}

document.querySelector('.name').addEventListener('blur', () => validationForm(document))
document.querySelector('.mail').addEventListener('blur', () => validationForm(document))
document.querySelector('.phone').addEventListener('blur', () => validationForm(document))

function validationForm(form){
    let result = true
    let amountValue = 0
    const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

    form.querySelectorAll('.form__input').forEach(input => {
        if((input.name === 'name' && input.value.trim() === '') ||
            (input.name ==='mail' && !EMAIL_REGEXP.test(input.value.trim())) ||
                (input.name === 'phone' && input.value.length < 19)){
            invalidLogic(input.name)
            amountValue = 0
        }else{
            validLogic(input.name)
            amountValue += 1
        }
    })

    if(amountValue === 3){
        document.querySelector('.form__button').removeAttribute('disabled')
        return result
    }
    document.querySelector('.form__button').setAttribute('disabled', 'disabled')
}

document.querySelector('.form__button').addEventListener('click', function(e){
    const data = {
        name: document.querySelector('.name').value,
        email: document.querySelector('.mail').value,
        phone: document.querySelector('.phone').value,
        message: document.querySelector('.message').value
    }

    e.preventDefault()

    if(validationForm(document) === true){
        alert('Данные отправлены')

        document.querySelectorAll('.form__input').forEach(input => {
            document.querySelector(`.form__wrap--${input.name}`).classList.remove('form__wrap--invalid')
            document.querySelector(`.form__title--${input.name}`).classList.remove('form__title--invalid')
            input.value = ''
        })
        document.querySelector('.form__button').removeAttribute('disabled')
    }
})