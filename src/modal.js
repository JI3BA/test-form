


export const openModalWindow = () => {
    document.querySelector('.modal__button').addEventListener('click', () => {
        document.querySelector('.modal').classList.add('modal--active')
        document.querySelector('.modal__container').classList.add('modal__container--active')
        document.querySelector('body').classList.add('lock')
    })
}

export const closeModalWindow = () => {
        document.querySelector('.modal').classList.remove('modal--active')
        document.querySelector('.modal__container').classList.remove('modal__container--active')
        document.querySelector('body').classList.remove('lock')
}

document.querySelector('.modal__close').addEventListener('click', closeModalWindow)