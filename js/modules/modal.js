function showModal(modalSelector, modalTimer) {
    const modal = document.querySelector(modalSelector);
    modal.classList.add('show', 'fade');
    modal.classList.remove('hide');
    if (modalTimer) {
        clearInterval(modalTimer);
    }
    document.body.style.overflow = 'hidden';
    console.log(modalTimer);
}

function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector);
    modal.classList.add('hide');
    modal.classList.remove('show', 'fade');
    document.body.style.overflow = '';
}



function modal(triggerSelector, modalSelector, modalTimer) {
    //modal

    const modalTrigger = document.querySelectorAll(triggerSelector),
        //   modalCloseBtn = document.querySelector('[data-close]'),
        modal = document.querySelector(modalSelector);


    modalTrigger.forEach(btn => {
        btn.addEventListener('click', () => showModal(modalSelector, modalTimer));
    });

    // modalCloseBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == '') {
            closeModal(modalSelector);
        }
    });

    window.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')) {
            closeModal(modalSelector);
        }
    });

    //modalTimer

    function showModalBySscroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            showModal(modalSelector, modalTimer);
            window.removeEventListener('scroll', showModalBySscroll);
        }
    }
    window.addEventListener('scroll', showModalBySscroll);
}

export default modal;
export {
    showModal,
    closeModal
};