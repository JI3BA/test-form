function validLogic(input){
    result = false
    document.querySelector(`.form__wrap--${input.name}`).classList.add('form__wrap--invalid')
    document.querySelector(`.form__title--${input.name}`).classList.add('form__title--invalid')
    input.setAttribute('required', 'required')
    document.querySelector('.form__button').setAttribute('disabled', 'disabled')
}

function invalidLogic(input){
    document.querySelector(`.form__wrap--${input.name}`).classList.remove('form__wrap--invalid')
    document.querySelector(`.form__title--${input.name}`).classList.remove('form__title--invalid')
    input.removeAttribute('required')
    document.querySelector('.form__button').removeAttribute('disabled')
    result = true
    amountValue += 1
}



function validationForm(form){
    let result = true
    let amountValue = 0

    form.querySelectorAll('.form__input').forEach(input => {
        console.log(input.name)
    })

    if(amountValue === 3){
        form.querySelectorAll('.form__input').forEach(input => {
            input.value = ''
        })
        return result
    }
}

const phone = document.querySelector('.phone')

phone.addEventListener('blur', () => validationForm(document))

document.querySelector('.form__button').addEventListener('click', function(e){
    e.preventDefault()

    if(validationForm(document) === true){
        alert('Данные отправлены')
    }
})