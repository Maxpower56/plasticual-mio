document.addEventListener('DOMContentLoaded', function() {
    listenerButtons();
    listenerCloseModal();
})

const openModal = document.querySelectorAll('.boton-producto');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal__close');
const numberModal = document.querySelector('.modal__cantidad');

/* - Functions - */

function listenerButtons() {
    for(let i = 0; i < openModal.length; i++) {
        openModal[i].onclick = function() {
            modal.classList.add('modal--show')
            numberModal.value = '1';
        }
    }
}

function listenerCloseModal() {
    closeModal.onclick = function() {
        modal.classList.remove('modal--show');
    }
}
