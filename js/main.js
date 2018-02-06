const openModal = _ => document.body.classList.add('modal-is-open')
const closeModal = _ => document.body.classList.remove('modal-is-open')

const openButton = document.querySelector('.jsModalToggle');
openButton.addEventListener('click', openModal )

const closeButton = document.querySelector('.jsModalClose');
closeButton.addEventListener('click', closeModal )

const overlay = document.querySelector('.jsModalContainer');
overlay.addEventListener('click', closeModal )

const modal = document.querySelector('.jsModal');
modal.addEventListener('click', e => e.stopPropagation())
