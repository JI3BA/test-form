
function validationForm(form){
    let result = true
    let amountValue = 0
    const fieldSet = document.querySelectorAll('.form__wrap')
    const legend = document.querySelectorAll('.form__title')

    form.querySelectorAll('.form__input').forEach(input => {
        if(input.value.trim() === ''){
            result = false
            fieldSet.forEach(item => item.classList.add('form__wrap--invalid'))
            legend.forEach(item => item.classList.add('form__title--invalid'))
            input.setAttribute('required', 'required')
            document.querySelector('.form__button').setAttribute('disabled', 'disabled')
        }else{
            fieldSet.forEach(item => item.classList.remove('form__wrap--invalid'))
            legend.forEach(item => item.classList.remove('form__title--invalid'))
            input.removeAttribute('required')
            document.querySelector('.form__button').removeAttribute('disabled')
            result = true
            amountValue += 1
        }
    })

    if(amountValue === 3){
        form.querySelectorAll('.form__input').forEach(input => {
            input.value = ''
        })
        return result
    }
}

document.querySelector('.form__button').addEventListener('click', function(e){
    e.preventDefault()

    if(validationForm(document) === true){
        alert('Данные отправлены')
    }
})