import {
    showModal,
    closeModal
} from './modal';
import {
    postDAta
} from '../services/services';

function forms(formSelector, modalTimer) {



    const forms = document.querySelectorAll(formSelector);
    forms.forEach(item => {
        bindPostData(item);
    });

    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const message = {
                loading: 'img/form/spinner.svg',
                saccess: 'спасибо, мы с вами свяжемся!',
                failure: 'что-то пошло не так'
            };

            const formData = new FormData(form);
            const statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            form.insertAdjacentElement('afterend', statusMessage);
            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            postData('http://localhost:3000/requests', json)
                .then(() => {
                    showThanksModal(message.saccess);
                    statusMessage.remove();
                })
                .catch(() => {
                    showThanksModal(message.failure);
                })
                .finally(() => {
                    form.reset();
                });
        });
    }

    function showThanksModal(message) {
        const prewThanlsModal = document.querySelector('.modal__dialog');
        prewThanlsModal.classList.add('hide');
        showModal('.modal', modalTimer);

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
            <div class="modal__content">
                <div data-close class="modal__close">×</div>
                <div class="modal__title">${message}</div>
            </div>
        `;
        document.querySelector('.modal').append(thanksModal);
        setTimeout(() => {
            thanksModal.classList.remove();
            prewThanlsModal.classList.add('show');
            prewThanlsModal.classList.remove('hide');
            closeModal('.modal');
        }, 4000);
    }
}

export default forms;