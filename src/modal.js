export const openModalWindow = () => {
    document.querySelector('.modal__overlay').classList.add('modal__overlay--active')
    document.querySelector('.modal').classList.add('modal--active')
    document.querySelector('.modal__container').classList.add('modal__container--active')
    document.querySelector('body').classList.add('lock')
}

export const closeModalWindow = () => {
    document.querySelector('.modal__overlay').classList.remove('modal__overlay--active')
    document.querySelector('.modal').classList.remove('modal--active')
    document.querySelector('.modal__container').classList.remove('modal__container--active')
    document.querySelector('body').classList.remove('lock')
}

document.querySelector('.modal__button').addEventListener('click', openModalWindow)
document.querySelector('.modal__close').addEventListener('click', closeModalWindow)
document.querySelector('.modal__overlay').addEventListener('click', closeModalWindow)