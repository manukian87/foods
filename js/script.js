// 'use strict';

// window.addEventListener('DOMContentLoaded', () => {

//     const tabs = document.querySelectorAll('.tabheader__item'),
//           tabsContent = document.querySelectorAll('.tabcontent'),
//           tabsParent = document.querySelector('.tabheader__items');

//     function hideTabContent() {
//         tabsContent.forEach(item => {
//             item.style.display = 'none';
//         });

//         tabs.forEach(item => {
//             item.classList.remove('tabheader__item_active');
//         });
//     }

//     function showTabContent(i) {
//         tabsContent[i].style.display = 'block';
//         tabs[i].classList.add('tabheader__item_active');
//     }

//     hideTabContent();
//     showTabContent(0);
// });


// window.addEventListener('DOMContentLoaded', () => {

//     const tabs = document.querySelectorAll('.tabheader__item'),
//         tabsContent = document.querySelectorAll('.tabcontent'),
//         tabsParent = document.querySelector('.tabheader__items');



//     function hideTabContent() {

//         tabsContent.forEach(item => {
//             item.classList.add('hide');
//             item.classList.remove('show', 'fade');
//         });

//         tabs.forEach(tab => {
//             tab.classList.remove('tabheader__item_active');
//         });
//     }


//     function showTabContent(i = 0) {
//         tabsContent[i].classList.add('show', 'fade');
//         tabsContent[i].classList.remove('hide');

//         tabs[i].classList.add('tabheader__item_active');
//     }
//     hideTabContent();
//     showTabContent();

//     tabsParent.addEventListener('click', (event) => {
//         const target = event.target;
//         if (target && target.classList.contains('tabheader__item')) {
//             tabs.forEach((item, i) => {
//                 if (item == target) {
//                     hideTabContent();
//                     showTabContent(i);
//                 }
//             });
//         }
//     });






// });

// const tabs = document.querySelectorAll('.tabheader__item'),
//     tabsContent = document.querySelectorAll('.tabcontent'),
//     tabsParent = document.querySelector('.tabheader__items');


// window.addEventListener('DOMContentLoaded', () => {
//     // Tabs
//     function hideTabContent() {
//         tabsContent.forEach(item => {
//             item.classList.add('hide');
//             item.classList.remove('show', 'fade');

//         });
//         tabs.forEach(tab => {
//             tab.classList.remove('tabheader__item_active');
//         });
//     }

//     function showTabContent(i = 0) {
//         tabsContent[i].classList.add('show', 'fade');
//         tabsContent[i].classList.remove('hide');
//         tabs[i].classList.add('tabheader__item_active');
//     }
//     hideTabContent();
//     showTabContent();

//     tabsParent.addEventListener('click', (event) => {
//         const target = event.target;
//         if (target && target.classList.contains('tabheader__item')) {
//             tabs.forEach((item, i) => {
//                 if (item == target) {
//                      hideTabContent();
//                      showTabContent(i);
//                 }
//             });
//         }
//     });

//Timer

// const deadline = '2021-04-24';
// function getTimeRemaining(endtime) {
//     const t = Date.parse(endtime) - Date.parse(new Date()),
//           days = Math.floor(t / (1000 * 60 * 60 * 24)), //1000 милллисекунд, 60с, 60мин, 24часа
//           hours = Math.floor((t / (1000 * 60 * 60) % 24)),
//           minutes = Math.floor((t / 1000 / 60) % 60),
//           seconds = Math.floor((t / 1000) % 60);

//     return {
//         'total': t,
//         'days': days,
//         'hours': hours,
//         'minutes': minutes,
//         'seconds': seconds
//     };
// }
// function setClock(selector, endtime) {
//     const timer = document.querySelector(selector),
//         days = timer.querySelector('#days'),
//         hours = timer.querySelector('#hours'),
//         minutes = timer.querySelector('#minutes'),
//         seconds = timer.querySelector('#seconds'),
//         timeInterval = setInterval(updateClock, 1000);

//     function updateClock() {
//         const t = getTimeRemaining(endtime);
//         days.innerHTML = t.days;
//         hours.innerHTML = t.hours;
//         minutes.innerHTML = t.minutes;
//         seconds.innerHTML = t.seconds;

//         if (t.total <= 0) {
//             clearInterval(timeInterval);
//         }
//     }

// }

// setClock('.timer', deadline);

// });

// window.addEventListener('DOMContentLoaded', () => {

//     const tabsContent = document.querySelectorAll('.tabcontent'),
//           tabs = document.querySelectorAll('.tabheader__item'),
//           ParentTabs = document.querySelector('.tabheader__items');

//     function hideTabContent() {
//         tabsContent.forEach(item => {
//             item.classList.add('hide');
//             item.classList.remove('show', 'fade');
//         });
//         tabs.forEach(tab => {
//             tab.classList.remove('tabheader__item_active');
//         });
//     }

//     function showTabContent(i = 0) {
//         tabsContent[i].classList.add('show', 'fade');
//         tabsContent[i].classList.remove('hide');
//         tabs[i].classList.add('tabheader__item_active');
//     }
//     hideTabContent();
//     showTabContent();

//     ParentTabs.addEventListener('click', (event) => {
//         const target = event.target;
//         if (target && target.classList.contains('tabheader__item')) {
//             tabs.forEach((item, i) => {
//                 if (item == target) {
//                     hideTabContent();
//                     showTabContent(i);
//                 }
//             });
//         }
//     });

//     const deadline = '2021-03-28';

//     function getTimeRemaining(endTime) {
//         const t = Date.parse(endTime) - Date.parse(new Date()),
//             days = Math.floor(t / (1000 * 60 * 60 * 24)),
//             hours = Math.floor(t / (1000 * 60 * 60) % 24),
//             minutes = Math.floor((t / 1000 / 60) % 60),
//             seconds = Math.floor((t / 1000) % 60);
//         return {
//             'total': t,
//             'days': days,
//             'hours': hours,
//             'minutes': minutes,
//             'seconds': seconds
//         };

//     }

//     function setClock(selector, endTime) {
//         const timer = document.querySelector(selector),
//             days = timer.querySelector('#days'),
//             hours = timer.querySelector('#hours'),
//             minutes = timer.querySelector('#minutes'),
//             seconds = timer.querySelector('#seconds'),
//             timerInterval = setInterval(upDateClock, 1000);

//         function upDateClock() {
//             const t = getTimeRemaining(endTime);
//             days.innerHTML = t.days;
//             hours.innerHTML = t.hours;
//             minutes.innerHTML = t.minutes;
//             seconds.innerHTML = t.seconds;

//             if (t.total <= 0) {
//                 clearInterval(timerInterval);
//             }

//         }


//     }
//     setClock('.timer', deadline);

// modal

// const modal = document.querySelector('.modal'),
//     modalTrigger = document.querySelectorAll('[data-modal]'),
//     modalCloseBtn = document.querySelector('[data-close]');

// modalTrigger.forEach(btn => {
//     btn.addEventListener('click', () => {
//         modal.classList.add('show', 'fade');
//         modal.classList.remove('hide');
//         document.body.style.overflow = 'hidden';
//     });
// });

// function closeModal() {
//     modal.classList.add('hide');
//     modal.classList.remove('show', 'fade');
//     document.body.style.overflow = '';
// }

// modalCloseBtn.addEventListener('click',  closeModal);

//другой вариант

// modalTrigger.addEventListener('click', () => {
//     modal.classList.toggle('show');
//     document.body.style.overflow = 'hidden';
// });
// modalCloseBtn.addEventListener('click', () => {
//     modal.classList.toggle('show');
//     document.body.style.overflow = '';
// });

// modal.addEventListener('click', (e) => {
//     if (e.target === modal) {
//         closeModal();
//     }

// });
// document.addEventListener('keydown', (e) => {
//     if (e.code === "Escape" && modal.classList.contains('show')) {
//         closeModal();
//     }
// });





// });

// window.addEventListener('DOMContentLoaded', () => {
//     const tabsContent = document.querySelectorAll('.tabcontent'),
//           tabs = document.querySelectorAll('.tabheader__item'),
//           parentsTab = document.querySelector('.tabheader__items');

//     function hideTabContent() {
//         tabsContent.forEach(item => {
//             item.classList.add('hide');
//             item.classList.remove('show', 'fade');
//         });
//         tabs.forEach(tab => {
//             tab.classList.remove('tabheader__item_active');
//         });
//     }

//     function showTabContent(i = 0) {
//         tabsContent[i].classList.add('show', 'fade');
//         tabsContent[i].classList.remove('hide');
//         tabs[i].classList.add('tabheader__item_active');
//     }

//     hideTabContent();
//     showTabContent();

//     parentsTab.addEventListener('click', (e) => {
//         const target = e.target;

//         if (target && target.classList.contains('tabheader__item')) {
//             tabs.forEach((item, i) => {
//                 if (item == target) {
//                     hideTabContent();
//                     showTabContent(i);
//                 }
//             });
//         }

//     });

//timer

// const deadline = '2021-03-28';

// function getTimeRemaining(endtime) {
//     const t = Date.parse(endtime) - Date.parse(new Date()),
//         days = Math.floor(t / (1000 * 60 * 60 * 24)),
//         hours = Math.floor((t / (1000 * 60 * 60) % 24)),
//         minuts = Math.floor((t / (1000 * 60) % 60)),
//         seconds = Math.floor((t / 1000) % 60);
//     return {
//         'total': t,
//         'days': days,
//         'hours': hours,
//         'minutes': minuts,
//         'seconds': seconds
//     };
// }

// function setClock(selector, endtime) {
//     const timer = document.querySelector(selector),
//           days = timer.querySelector('#days'),
//           hours = timer.querySelector('#hours'),
//           minutes = timer.querySelector('#minutes'),
//           seconds = timer.querySelector('#seconds'),
//           timerInterval = setInterval(updateClock, 1000);

//     function updateClock() {
//         const t = getTimeRemaining(endtime);

//         days.innerHTML = t.days;
//         hours.innerHTML = t.hours;
//         minutes.innerHTML = t.minutes;
//         seconds.innerHTML = t.seconds;

//         if (t.total <= 0) {
//             clearInterval(timerInterval)
//         }

//     }


// }
// setClock('.timer', deadline);


//modal

// const modalTrigger = document.querySelectorAll('[data-modal]'),
//       modalCloseBtn = document.querySelector('[data-close]'),
//       modal = document.querySelector('.modal');

// modalTrigger.forEach(btn => {
//     btn.addEventListener('click', () => {
//         modal.classList.add('show');
//         modal.classList.remove('hide');
//         document.body.style.overflow = 'hidden';
//     });
// });

//     function showHideModal() {
//         modal.classList.toggle('show');
//         modal.classList.add('fade');
//         clearInterval(timerModal);
//     }

//     modalTrigger.forEach(btn => {
//         btn.addEventListener('click', () => {
//             showHideModal();
//             document.body.style.overflow = 'hidden';
//         });

//     });

//     function closeModal() {
//         showHideModal();
//         document.body.style.overflow = '';

//     }

//     modalCloseBtn.addEventListener('click', () => {
//         closeModal();
//     });

//     modal.addEventListener('click', (e) => {
//         if (e.target == modal) {
//             closeModal();
//         }
//     });

//     document.addEventListener('keydown', (e) => {
//         if (e.code == 'Escape' && modal.classList.contains('show')) {
//             closeModal();
//         }
//     });

//     const timerModal = setTimeout(showHideModal, 5000);

//     function showModalByScroll() {
//             if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
//                 showHideModal();
//                 window.removeEventListener('scroll', showModalByScroll);
//         }
//     }

//     window.addEventListener('scroll', showModalByScroll);

// });



// window.addEventListener('DOMContentLoaded', () => {

//     const tabsContent = document.querySelectorAll('.tabcontent'),
//           tabs = document.querySelectorAll('.tabheader__item'),
//           parentsTab = document.querySelector('.tabheader__items');

//     function hideTabContent() {
//         tabsContent.forEach(item => {
//             item.classList.add('hide');
//             item.classList.remove('show', 'fade');
//         });

//         tabs.forEach(tab => {
//             tab.classList.remove('tabheader__item_active');
//         });
//     }

//     function showTabContent(i = 0) {
//         tabsContent[i].classList.add('show', 'fade');
//         tabsContent[i].classList.remove('hide');
//         tabs[i].classList.add('tabheader__item_active');
//     }

//     hideTabContent();
//     showTabContent();

//     parentsTab.addEventListener('click', (e) => {
//         const target = e.target;
//         if (target && target.classList.contains('tabheader__item')) {
//             tabs.forEach((item, i) => {
//                 if (item === target) {
//                     hideTabContent();
//                     showTabContent(i);
//                 }
//             });
//         }
//     });


//     const deadline = '2021-03-28';

//     function getTimeRemaining(endtime) {
//         const t = Date.parse(endtime) - Date.parse(new Date()),
//             days = Math.floor(t / (1000 * 60 * 60 * 24)),
//             hours = Math.floor((t / (1000 * 60 * 60) % 24)),
//             minutes = Math.floor((t / (1000 * 60) % 60)),
//             seconds = Math.floor((t / 1000) % 60);
//         return {
//             'total': t,
//             'days': days,
//             'hours': hours,
//             'minutes': minutes,
//             'seconds': seconds
//         }
//     }

//     function setClock(selector, endtime) {
//         const timer = document.querySelector(selector),
//             days = timer.querySelector('#days'),
//             hours = timer.querySelector('#hours'),
//             minutes = timer.querySelector('#minutes'),
//             seconds = timer.querySelector('#seconds'),
//             timerInterval = setInterval(updateClock, 1000);

//         function updateClock() {
//             const t = getTimeRemaining(endtime);
//             days.innerHTML = t.days;
//             hours.innerHTML = t.hours;
//             minutes.innerHTML = t.minutes;
//             seconds.innerHTML = t.seconds;

//             if (t.total <= 0) {
//                 clearInterval(timerInterval);
//             }
//         }
//     }

//     setClock('.timer', deadline);

//     //Modal

//     const modalTrigger = document.querySelectorAll('[data-modal]'),
//           modalCloseBtn = document.querySelector('[data-close]'),
//           modal = document.querySelector('.modal');


//     function showModal() {
//         modal.classList.add('show', 'fade');
//         modal.classList.remove('hide');
//         document.body.style.overflow = 'hidden';
//         clearInterval(timerModal);
//     }
//     modalTrigger.forEach(btn => {
//         btn.addEventListener('click', () => {
//             showModal();
//         });
//     });
//     function closeModal() {
//         modal.classList.add('hide');
//         modal.classList.remove('show', 'fade');
//         document.body.style.overflow = '';
//     }

//     modalCloseBtn.addEventListener('click', closeModal);

//     modal.addEventListener('click', (e) => {
//         if (e.target && e.target.classList.contains('modal')) {
//             closeModal();
//         }
//     });

//     document.addEventListener('keydown', (e) => {
//         if (e.code === 'Escape' && modal.classList.contains('show')) {
//             closeModal();
//         }
//     });

//     const timerModal = setTimeout(showModal, 3000);

//     function showModalByScroll() {
//         if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
//             showModal();
//             window.removeEventListener('scroll', showModalByScroll);
//         }
//     }
//     window.addEventListener('scroll', showModalByScroll);
//card
// class BoxCardMenu {
//     constructor(src, alt, title, descr, price, parentSelector) {
//         this.src = src;
//         this.alt = alt;
//         this.title = title;
//         this.descr = descr;
//         this.price = price;
//         this.parent = document.querySelector(parentSelector);
//         this.transfer = 27;
//         this.changeToUAH();
//     }

//     changeToUAH() {
//         this.price = this.price * this.transfer;
//     }

//     render() {
//         const element = document.createElement('div');
//         element.innerHTML = `
//            <div class="menu__item">
//                 <img src=${this.src} alt=${this.alt}>
//                 <h3 class="menu__item-subtitle">${this.title}</h3>
//                 <div class="menu__item-descr">${this.descr}</div>
//                 <div class="menu__item-divider"></div>
//                 <div class="menu__item-price">
//                     <div class="menu__item-cost">Цена:</div>
//                     <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
//                 </div>
//             </div>
//         `;
//         this.parent.append(element);
//     }
// }

// new BoxCardMenu(
//     'img/tabs/vegy.jpg',
//     'vegy',
//     'Меню "Фитнес"',
//     'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
//     9,
//     '.menu .container'
// ).render();

// new BoxCardMenu(
//     'img/tabs/elite.jpg',
//     'elite',
//     'Меню “Премиум”',
//     'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
//     14,
//     '.menu .container'
// ).render();

// new BoxCardMenu(
//     'img/tabs/post.jpg',
//     'post',
//     'Меню "Постное"',
//     'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
//     21,
//     '.menu .container'
// ).render();

//     class MenuCard {
//         constructor(src, alt, title, descr, price, parentSelector) {
//             this.src = src;
//             this.alt = alt;
//             this.title = title;
//             this.descr = descr;
//             this.price = price;
//             this.transver = 27;
//             this.changUAH();
//             this.parent = document.querySelector(parentSelector);
//         }

//         changUAH() {
//             this.price = this.price * this.transver;
//         }

//         render() {
//             const element = document.createElement('div');
//             element.innerHTML = `
//                 <div class="menu__item">
//                     <img src=${this.src} alt=${this.alt}>
//                     <h3 class="menu__item-subtitle">${this.title}</h3>
//                     <div class="menu__item-descr">${this.descr}</div>
//                     <div class="menu__item-divider"></div>
//                     <div class="menu__item-price">
//                         <div class="menu__item-cost">Цена:</div>
//                         <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
//                     </div>
//                 </div>
//             `;
//             this.parent.append(element);
//         }

//     }
//     new MenuCard(
//        'img/tabs/elite.jpg',
//        'elite',
//         'Меню “Премиум”',
//         'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
//        14,
//         '.menu .container'
//     ).render();

//     new MenuCard(
//         'img/tabs/post.jpg',
//         'post',
//         'Меню "Постное"',
//         'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
//         20,
//         '.menu .container'
//     ).render();



// });
// window.addEventListener('DOMContentLoaded', () => {
//     const tabContent = document.querySelectorAll('.tabcontent'),
//           tabs = document.querySelectorAll('.tabheader__item'),
//           parentTab = document.querySelector('.tabheader__items');


//     function hideTabContent() {

//         tabContent.forEach(item => {
//             item.classList.add('hide');
//             item.classList.remove('show', 'fade');

//         });

//         tabs.forEach(tab => {
//             tab.classList.remove('tabheader__item_active');
//         });
//     }

//     function showTabContent(i = 0) {
//         tabContent[i].classList.add('show', 'fade');
//         tabContent[i].classList.remove('hide');
//         tabs[i].classList.add('tabheader__item_active');
//     }
//     hideTabContent();
//     showTabContent();

//     parentTab.addEventListener('click', (e) => {
//         const target = e.target;
//         if (target && target.classList.contains('tabheader__item')) {
//             tabs.forEach((item, i) => {
//                 if (item === target) {
//                     hideTabContent();
//                     showTabContent(i); 
//                 }
//             });
//         }
// });

//     //modal

//     const modalTrigger = document.querySelectorAll('[data-modal]'),
//           modalClose = document.querySelector('[data-close]'),
//           modal = document.querySelector('.modal');


//     function  showHideModal()  {
//         modal.classList.toggle('show');
//         modal.classList.add('fade');
//         document.body.style.overflow = 'hidden';
//         clearInterval(timerModal);



//     }

//     modalTrigger.forEach(btn => {
//         btn.addEventListener('click', showHideModal);
//     });

//     function closeModalbtn() {
//         showHideModal();
//         document.body.style.overflow = '';
//     }
//     modalClose.addEventListener('click', closeModalbtn);

//     modal.addEventListener('click', (e) => {
//         if (e.target && e.target.classList.contains('modal')) {
//             closeModalbtn();
//         }
//     });

//     document.addEventListener('keydown', (e) => {
//         if (e.code === 'Escape' && modal.classList.contains('show')) {
//             closeModalbtn();
//         }
//     });

//     const timerModal = setTimeout(showHideModal, 3000);
//     window.removeEventListener('scroll', showHideModal);

//     function showModalByScroll() {
//         if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
//             showHideModal();
//             window.removeEventListener('scroll', showModalByScroll);
//         }
//     }
//     window.addEventListener('scroll', showModalByScroll);



//     //menuCard

//     class menuCard {
//         constructor(src, alt, title, descr, price, parentContainer, ...classes) {
//             this.src = src;
//             this.alt = alt;
//             this.title = title;
//             this.descr = descr;
//             this.transfer = 28;
//             this.price = price;
//             this.classes = classes;
//             this.changUAH();
//             this. parentContainer = document.querySelector(parentContainer);

//         }

//         changUAH() {
//             this.price = this.price * this.transfer;
//         }

//         render() {
//             const element = document.createElement('div');

//             if (this.classes.length === 0) {
//                 this.element = 'menu__item';
//                 element.classList.add(this.element);
//             } else {
//                 this.classes.forEach(className => element.classList.add(className));
//             }

//             element.innerHTML = `

//                 <img src=${this.src} alt=${this.alt}>
//                 <h3 class="menu__item-subtitle">${this.title}</h3>
//                 <div class="menu__item-descr">${this.descr}</div>
//                 <div class="menu__item-divider"></div>
//                 <div class="menu__item-price">
//                     <div class="menu__item-cost">Цена:</div>
//                     <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
//                 </div>

//             `;
//             this.parentContainer.append(element);

//         }
//     }
//     new menuCard (
//         'img/tabs/elite.jpg',
//         'elite',
//         'Меню “Премиум”',
//         'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
//        14,
//         '.menu .container'


//     ).render();

//     new menuCard (
//         'img/tabs/post.jpg',
//         'post',
//         'Меню "Постное"',
//         'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
//         20,
//         '.menu .container'

//     ).render();

//     //timer

//     const deadline = '2021-03-30';

//     function getTimeRemaining(endtime) {
//         const t = Date.parse(endtime) - Date.parse(new Date()),
//             days = Math.floor(t / (1000 * 60 * 60 * 24)),
//             hours = Math.floor((t / (1000 * 60 * 60) % 24)),
//             minutes = Math.floor((t / (1000 * 60) % 60)),
//             seconds = Math.floor((t / 1000) % 60);

//         return {
//             'total': t,
//             'days': days,
//             'hours': hours,
//             'minutes': minutes,
//             'seconds': seconds
//         };

//     }

//     function setClock(selector, endtime) {
//         const timer = document.querySelector(selector),
//             days = timer.querySelector('#days'),
//             hours = timer.querySelector('#hours'),
//             minutes = timer.querySelector('#minutes'),
//             seconds = timer.querySelector('#seconds'),
//             timeInterval = setInterval(updateClock, 1000);

//         function updateClock() {
//             const t = getTimeRemaining(endtime);
//             days.innerHTML = t.days;
//             hours.innerHTML = t.hours;
//             minutes.innerHTML = t.minutes;
//             seconds.innerHTML = t.seconds;

//             if (t.total <= 0) {
//                 clearInterval(timeInterval);
//             }
//         }
//     }
//     setClock('.timer', deadline);


// });
// window.addEventListener('DOMContentLoaded', () => {

//     //tab
//     const tabContent = document.querySelectorAll('.tabcontent'),
//         tabs = document.querySelectorAll('.tabheader__item'),
//         parentTabs = document.querySelector('.tabheader__items');

//     function hideTabContent() {
//         tabContent.forEach(content => {
//             content.classList.add('hide');
//             content.classList.remove('show', 'fade');
//         });

//         tabs.forEach(tab => {
//             tab.classList.remove('tabheader__item_active');
//         });
//     }

//     function showTabContent(i = 0) {
//         tabContent[i].classList.add('show', 'fade');
//         tabContent[i].classList.remove('hide');
//         tabs[i].classList.add('tabheader__item_active');
//     }

//     hideTabContent();
//     showTabContent();

//     parentTabs.addEventListener('click', (e) => {
//         const target = e.target;
//         if (target && target.classList.contains('tabheader__item')) {
//             tabs.forEach((item, i) => {
//                 if (item === target) {
//                     hideTabContent();
//                     showTabContent(i);
//                 }
//             });
//         }
//     });

//     //menuCard

//     class menuCard {
//         constructor(src, alt, title, descr, price, parentSelector, ...classes) {
//             this.src = src;
//             this.alt = alt;
//             this.title = title;
//             this.descr = descr;
//             this.transver = 28;
//             this.price = price;
//             this.changUAH();
//             this.parentMemu = document.querySelector(parentSelector);
//             this.classes = classes;
//         }

//         changUAH() {
//             this.price = this.price * this.transver;
//         }
//         render() {
//             const element = document.createElement('div');
//             if (this.classes.length == 0) {
//                 this.element = 'menu__item';
//                 element.classList.add(this.element);
//             } else {
//                 this.classes.forEach(className => element.classList.add(className));
//             }

//             element.innerHTML = `
//                 <img src=${this.src} alt=${this.alt}>
//                 <h3 class="menu__item-subtitle">${this.title}</h3>
//                 <div class="menu__item-descr">${this.descr}</div>
//                 <div class="menu__item-divider"></div>
//                 <div class="menu__item-price">
//                     <div class="menu__item-cost">Цена:</div>
//                     <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
//                 </div>
//             `;
//             this.parentMemu.append(element);

//         }
//     }

//     new menuCard(
//         'img/tabs/post.jpg',
//         'post',
//         'Меню "Постное"',
//         'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
//         20,
//         '.menu .container',
//         'menu__item',
//         'big'
//     ).render();
//     new menuCard (
//         'img/tabs/elite.jpg',
//         'elite',
//         'Меню “Премиум”',
//         'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
//        14,
//         '.menu .container',

//     ).render();

//         //modal
//     const modalTrigger = document.querySelectorAll('[data-modal]'),
//           modalCloseBtn = document.querySelector('[data-close]'),
//           modal = document.querySelector('.modal');

//     function showModal() {
//         modal.classList.add('show', 'fade');
//         modal.classList.remove('hide');
//         document.body.style.overflow = 'hidden';
//         clearInterval(timerModal);

//     }
//     modalTrigger.forEach(btn => {
//         btn.addEventListener('click', showModal);
//     });

//     function closeModal() {
//         modal.classList.add('hide');
//         modal.classList.remove('show', 'fade');
//          document.body.style.overflow = '';
//     }

//     modalCloseBtn.addEventListener('click', closeModal);

//     window.addEventListener('click', (e) => {
//         if (e.target && e.target.classList.contains('show')) {
//             closeModal();
//         }
//     });

//     window.addEventListener('keydown', (e) => {
//         if (e.code === 'Escape' && modal.classList.contains('show')) {
//             closeModal();
//         }
//     });

//     //timer

//     const timerModal = setTimeout(showModal, 3000);


//     function showModalByScroll() {
//         if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
//             showModal();
//             window.removeEventListener('scroll', showModalByScroll);
//         }
//     }
//     window.addEventListener('scroll', showModalByScroll);



//     //timerClock

//     const deadline = '2021-03-31';

//     function getTimeRemaining(endtime) {
//         const t = Date.parse(endtime) - Date.parse(new Date()),
//             days = Math.floor(t / (1000 * 60 * 60 * 24)),
//             hours = Math.floor((t / (1000 * 60 * 60) % 24)),
//             minutes = Math.floor((t / (1000 * 60) % 60)),
//             seconds = Math.floor((t / 100) % 60);
//         return {
//             'total': t,
//             'days': days,
//             'hours': hours,
//             'minutes': minutes,
//             'seconds': seconds
//         };
//     }

//     function setClock(selector, endtime) {
//         const timer = document.querySelector(selector),
//             days = timer.querySelector('#days'),
//             hours = timer.querySelector('#hours'),
//             minutes = timer.querySelector('#minutes'),
//             seconds = timer.querySelector('#seconds'),
//             timerInterval = setInterval(updateClock, 1000);

//         function updateClock() {
//             const t = getTimeRemaining(endtime);
//             days.innerHTML = t.days;
//             hours.innerHTML = t.hours;
//             minutes.innerHTML = t.minutes;
//             seconds.innerHTML = t.seconds;

//             if (t.total >= 0) {
//                 clearInterval(timerInterval);
//             }
//         }
//     }
//     setClock('.timer', deadline);




// });


//forms
// const forms = document.querySelectorAll('form');

// const message = {
//     loading: 'Загрузка',
//     success: 'Спасибо! Скоро мы с Вами свяжемся',
//     failure: 'Что-то пошло не так...'
// };
// forms.forEach(item => {
//     postData(item);
// });

// function postData(form) {
//     form.addEventListener('submit', (e) => {
//         e.preventDefault();

//         const statusMessage = document.createElement('div');
//         statusMessage.classList.add('status');
//         statusMessage.textContent = message.loading;
//         form.append(statusMessage);

//         const request = new XMLHttpRequest();
//         request.open('POST', 'server.php');

//         request.setRequestHeader('Content-type', 'application/json');
//         const formData = new FormData(form);
//         const object = {};
//         formData.forEach(function (value, key) {
//             object[key] = value;
//         });
//         request.send(formData);
//         request.addEventListener('load', () => {
//             if (request.status === 200) {
//                 console.log(request.response);
//                 statusMessage.textContent = message.success;
//                 form.reset();
//                 setTimeout(() => {
//                     statusMessage.remove();
//                 }, 5000);
//             } else {
//                  statusMessage.textContent = message.failure;
//             }
//         });
//     });
// }





// });

// 'use strict';
// window.addEventListener('DOMContentLoaded', () => {
//     // tab
//     const tabContent = document.querySelectorAll('.tabcontent'),
//           tabs = document.querySelectorAll('.tabheader__item'),
//           parentTab = document.querySelector('.tabheader__items');

//     function hideTabContent() {
//         tabContent.forEach(item => {
//             item.classList.add('hide');
//             item.classList.remove('show', 'fade');
//         });

//         tabs.forEach(tab => {
//             tab.classList.remove('tabheader__item_active');
//         });
//     }

//     function showTabContent(i = 0) {
//         tabContent[i].classList.add('show', 'fade');
//         tabContent[i].classList.remove('hide');
//         tabs[i].classList.add('tabheader__item_active');
//     }
//     hideTabContent();
//     showTabContent();

//     parentTab.addEventListener('click', (e) => {
//         const target = e.target;
//         if (target && target.classList.contains('tabheader__item')) {
//             tabs.forEach((item, i) => {
//                 if (item === target) {
//                     hideTabContent();
//                     showTabContent(i);
//                 }
//             });
//         }
//     });

//     // modal

//     const modalTrigger = document.querySelectorAll('[data-modal]'),
//           modalCloseBtn = document.querySelector('[data-close]'),
//          modal = document.querySelector('.modal');

//     function showModal() {
//         modal.classList.add('show', 'fade');
//         modal.classList.remove('hide');
//         document.body.style.overflow = 'hidden';
//         clearTimeout(timerShowModal);
//     }
//     modalTrigger.forEach(btn => {
//         btn.addEventListener('click', showModal);
//     });

//     function hideModal() {
//         modal.classList.remove('show', 'fade');
//         modal.classList.add('hide');
//         document.body.style.overflow = '';
//     }

//     modalCloseBtn.addEventListener('click', hideModal);
//     modal.addEventListener('click', (e) => {
//         if (e.target === modal) {
//             hideModal();
//         }
//     });

//     window.addEventListener('keydown', (e) => {
//         if (e.code === 'Escape' && modal.classList.contains('show')) {
//             hideModal();
//         }
//     });

//     //timer modal
//     const timerShowModal = setTimeout(showModal, 3000);

//     function showByScroll() {
//         if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
//             showModal();
//             window.removeEventListener('scroll', showByScroll);
//         }
//     }
//     window.addEventListener('scroll', showByScroll);



//     // CardMenu

//     class CardMenu {
//         constructor(src, alt, title, descr, price, parentSelector, ...classes) {
//             this.src = src;
//             this.alt = alt;
//             this.title = title;
//             this.descr = descr;
//             this.transform = 28;
//             this.price = price;
//             this.changUAH();
//             this.parent = document.querySelector(parentSelector);
//             this.classes = classes;
//         }

//         changUAH() {
//             this.price *= this.transform;
//         }

//         render() {
//             const element = document.createElement('div');
//             if (this.classes.length === 0) {
//                 this.element = 'menu__item';
//                 element.classList.add(this.element);
//             } else {
//                 this.classes.forEach(className => element.classList.add(className));
//             }

//             element.innerHTML = `
//                <img src=${this.src} alt=${this.alt}>
//                 <h3 class="menu__item-subtitle">${this.title}</h3>
//                 <div class="menu__item-descr">${this.descr}</div>
//                 <div class="menu__item-divider"></div>
//                 <div class="menu__item-price">
//                     <div class="menu__item-cost">Цена:</div>
//                     <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
//                 </div>
//             `;
//             this.parent.append(element);

//         }
//     }
//     new CardMenu(
//         'img/tabs/post.jpg',
//         'post',
//         'Меню "Постное"',
//         'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
//         20,
//         '.menu .container',
//     ).render();

//     new CardMenu(
//         'img/tabs/elite.jpg',
//         'elite',
//         'Меню “Премиум”',
//         'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
//         14,
//         '.menu .container',
//         'menu__item',
//         'big'
//     ).render();

//     //timer

//     const deadline = '2021-04-05';

//     function  getTimerRemaining(endtime) {
//         const t = Date.parse(endtime) - Date.parse(new Date()),
//             days = Math.floor(t / (1000 * 60 * 60 * 24)),
//             hours = Math.floor((t / (1000 * 60 * 60) % 24)),
//             minutes = Math.floor((t / (1000 * 60) % 60)),
//             seconds = Math.floor((t / 1000) % 60);
//         return {
//             'total': t,
//             'days': days,
//             'hours': hours,
//             'minutes': minutes,
//             'seconds': seconds
//         };
//     }

//     function setClock(selector, endtime) {
//         const timer = document.querySelector(selector),
//               days = timer.querySelector('#days'),
//               hours = timer.querySelector('#hours'),
//               minutes = timer.querySelector('#minutes'),
//               seconds = timer.querySelector('#seconds'),
//               timerInterval = setInterval(upDataClock, 1000);

//         function upDataClock() {
//             const t = getTimerRemaining(endtime);
//             days.innerHTML = t.days;
//             hours.innerHTML = t.hours;
//             minutes.innerHTML = t.minutes;
//             seconds.innerHTML = t.seconds;

//             if (t.total <= 0) {
//                 clearInterval(timerInterval);
//             }
//         }
//     }
//     setClock('.timer', deadline);

//     // request

//     const forms = document.querySelectorAll('form');
//     forms.forEach(item => {
//         postDate(item);
//     });

//     function postDate(form) {
//         form.addEventListener('submit', (e) => {
//             e.preventDefault();
//             const message = {
//                 loading: 'Загрузка',
//                 saccess: 'Спасибо! Мы с Вами свяжемся',
//                 failure: 'Что-то пошло не так'
//             };

//             const messageStatus = document.createElement('div');
//             messageStatus.classList.add('status');
//             messageStatus.textContent = message.loading;
//             form.append(messageStatus);
//             const request = new XMLHttpRequest();
//             request.open('POST', 'server.php');

//             const formData = new FormData(form);
//             request.addEventListener('load', () => {
//                 if (request.status === 200) {
//                     messageStatus.textContent = message.saccess;
//                     form.reset();
//                     setTimeout(() => {
//                         messageStatus.remove();
//                     }, 3000);

//                 } else {
//                     messageStatus.textContent = message.failure;
//                 }
//             });
//             request.send(formData);
//         });
//     }
// });






// window.addEventListener('DOMContentLoaded', () => {

//     // tabs

//     const tabsContent = document.querySelectorAll('.tabcontent'),
//           tabs = document.querySelectorAll('.tabheader__item'),
//           parentTab = document.querySelector('.tabheader__items');

//     function hideTabContent() {

//         tabsContent.forEach(content => {
//             content.classList.add('hide');
//             content.classList.remove('show', 'fade');
//         });

//         tabs.forEach(tab => {
//             tab.classList.remove('tabheader__item_active');
//         });

//     }

//     function showTabContent(i = 0) {
//         tabsContent[i].classList.add('show', 'fade');
//         tabsContent[i].classList.remove('hide');
//         tabs[i].classList.add('tabheader__item_active');
//     }
//     hideTabContent();
//     showTabContent();

//     parentTab.addEventListener('click', (e) => {
//         const target = e.target;

//         if (target && target.classList.contains('tabheader__item')) {
//             tabs.forEach((item, i) => {
//                 if (item === target) {
//                     hideTabContent();
//                     showTabContent(i);
//                 }
//             });
//         }
//     });

//     //modal

//     const modalTrigger = document.querySelectorAll('[data-modal]'),
//           modal = document.querySelector('.modal');


//     function showModal() {
//         modal.classList.add('show', 'fade');
//         modal.classList.remove('hide');
//         document.body.style.overflow = 'hidden';
//         clearInterval(timerModal);
//     }

//     modalTrigger.forEach(btn => {
//         btn.addEventListener('click', showModal);
//     });

//     function closeModal() {
//         modal.classList.remove('show', 'fade');
//         modal.classList.add('hide');
//         document.body.style.overflow = '';
//     }



//     modal.addEventListener('click', (e) => {
//         if (e.target === modal || e.target.getAttribute('data-close') =='') {
//             closeModal();
//         }
//     });

//     window.addEventListener('keydown', (e) => {
//         if (e.code === 'Escape' && modal.classList.contains('show')) {
//             closeModal();
//         }
//     });

//     const timerModal = setTimeout(showModal, 40000);

//     function showByScroll() {
//         if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
//             showModal();
//             window.removeEventListener('scroll', showByScroll);
//         }
//     }
//     window.addEventListener('scroll', showByScroll);

//     // CardMenu

//     class CardMenu {
//         constructor(src, alt, title, descr, price, parentSelector, ...classes) {
//             this.src = src;
//             this.alt = alt;
//             this.title = title;
//             this.descr = descr;
//             this.price = price;
//             this.transfer = 28;
//             this.parent = document.querySelector(parentSelector);
//             this.classes = classes;
//             this.changeUAH();
//         }

//         changeUAH() {
//             this.price *= this.transfer;
//         }

//         render() {
//             const element = document.createElement('div');
//             if (this.classes.length === 0) {
//                 this.element = 'menu__item';
//                 element.classList.add(this.element);
//             } else {
//                 this.classes.forEach(className => element.classList.add(className));
//             }

//             element.innerHTML = `
//                <img src=${this.src} alt=${this.alt}>
//                 <h3 class="menu__item-subtitle">${this.title}</h3>
//                 <div class="menu__item-descr">${this.descr}</div>
//                 <div class="menu__item-divider"></div>
//                 <div class="menu__item-price">
//                     <div class="menu__item-cost">Цена:</div>
//                     <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
//                 </div>

//             `;
//             this.parent.append(element);
//         }
//     }
//     new CardMenu(
//         'img/tabs/post.jpg',
//         'post',
//         'Меню "Постное"',
//         'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
//         20,
//         '.menu .container'
//     ).render();
//       new CardMenu(
//         'img/tabs/elite.jpg',
//         'elite',
//         'Меню “Премиум”',
//         'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
//         14,
//         '.menu .container',
//         'menu__item',
//         'big'
//     ).render();


//     //timer

//     const deadline = '2021-04-09';

//     function getTimerRemaining(endtime) {
//         const t = Date.parse(endtime) - Date.parse(new Date()),
//             days = Math.floor(t / (1000 * 60 * 60 * 24)),
//             hours = Math.floor((t / (1000 * 60 * 60) % 24)),
//             minutes = Math.floor((t / (1000 * 60) % 60)),
//             seconds = Math.floor((t / 1000) % 60);

//         return {
//             'total': t,
//             'days': days,
//             'hours': hours,
//             'minutes': minutes,
//             'seconds': seconds
//         };
//     }

//     function setClock(selector, endtime) {
//         const timer = document.querySelector(selector),
//               days = timer.querySelector('#days'),
//               hours = timer.querySelector('#hours'),
//               minutes = timer.querySelector('#minutes'),
//               seconds = timer.querySelector('#seconds'),
//               timerInterval = setInterval(upDateClock, 1000);

//         function upDateClock() {
//             const t = getTimerRemaining(endtime);
//             days.innerHTML = t.days;
//             hours.innerHTML = t.hours;
//             minutes.innerHTML = t.minutes;
//             seconds.innerHTML = t.seconds;

//             if (t.total <= 0) {
//                 clearInterval(timerInterval);
//             }
//         }

//     }
//     setClock('.timer', deadline);

//     // request

//     const forms = document.querySelectorAll('form');
//     forms.forEach(item => {
//         postData(item);
//     });

//     function postData(form) {
//         form.addEventListener('submit', (e) => {
//             e.preventDefault();
//             const message = {
//                 loading: 'img/form/spinner.svg',
//                 saccess: 'Спасибо! Мы с Вами свяжемся',
//                 failure: 'Что-то пошло не так'
//             };
//             const messageStatus = document.createElement('img');
//             messageStatus.src = message.loading;
//             messageStatus.style.cssText = `
//                 display: block;
//                 margin: 0 auto;          
//             `;
//             form.insertAdjacentElement('afterend', messageStatus);


//             const request = new XMLHttpRequest();
//             request.open('POST', 'server.php');
//             request.setRequestHeader('Content-type', 'application/json');
//             const obj = {};

//             const formData = new FormData(form);
//             formData.forEach(function (value, key) {
//                 obj[key] = value;
//             });
//             const json = JSON.stringify(obj);
//             request.addEventListener('load', () => {
//                 if (request.status === 200) {
//                    showThanksModal(message.saccess);
//                     form.reset();
//                       messageStatus.remove();  

//                 } else {
//                     showThanksModal(message.failure);
//                 }

//             });


//             request.send(json);


//         });


//     }

//     function showThanksModal(message) {
//         const prevModalDialog = document.querySelector('.modal__dialog');
//         prevModalDialog.classList.add('hide');
//         showModal();

//         const thanksModal = document.createElement('div');
//         thanksModal.classList.add('modal__dialog');
//         thanksModal.innerHTML = `
//         <div class = "modal__content">
//             <div data-close class = "modal__close">×</div>
//             <div class = "modal__title">${message}</div>
//         </div>

//         `;

//         document.querySelector('.modal').append(thanksModal);
//         setTimeout(() => {
//             thanksModal.remove();
//             prevModalDialog.classList.add('show');
//             prevModalDialog.classList.remove('hide');
//             closeModal();

//         }, 4000);
//     }

// });


// 'use strict';

// window.addEventListener('DOMContentLoaded', () => {

//     // tabs

//     const tabsContent = document.querySelectorAll('.tabcontent'),
//           tabs = document.querySelectorAll('.tabheader__item'),
//           parentTab = document.querySelector('.tabheader__items');

//     function hideTabContent() {

//         tabsContent.forEach(content => {
//             content.classList.add('hide');
//             content.classList.remove('show', 'fade');
//         });

//         tabs.forEach(tab => {
//             tab.classList.remove('tabheader__item_active');
//         });

//     }

//     function showTabContent(i = 0) {
//         tabsContent[i].classList.add('show', 'fade');
//         tabsContent[i].classList.remove('hide');
//         tabs[i].classList.add('tabheader__item_active');
//     }
//     hideTabContent();
//     showTabContent();

//     parentTab.addEventListener('click', (e) => {
//         const target = e.target;

//         if (target && target.classList.contains('tabheader__item')) {
//             tabs.forEach((item, i) => {
//                 if (item === target) {
//                     hideTabContent();
//                     showTabContent(i);
//                 }
//             });
//         }
//     });

//     //modal

//     const modalTrigger = document.querySelectorAll('[data-modal]'),
//           modal = document.querySelector('.modal');


//     function showModal() {
//         modal.classList.add('show', 'fade');
//         modal.classList.remove('hide');
//         document.body.style.overflow = 'hidden';
//         clearInterval(timerModal);
//     }

//     modalTrigger.forEach(btn => {
//         btn.addEventListener('click', showModal);
//     });

//     function closeModal() {
//         modal.classList.remove('show', 'fade');
//         modal.classList.add('hide');
//         document.body.style.overflow = '';
//     }



//     modal.addEventListener('click', (e) => {
//         if (e.target === modal || e.target.getAttribute('data-close') =='') {
//             closeModal();
//         }
//     });

//     window.addEventListener('keydown', (e) => {
//         if (e.code === 'Escape' && modal.classList.contains('show')) {
//             closeModal();
//         }
//     });

//     const timerModal = setTimeout(showModal, 40000);

//     function showByScroll() {
//         if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
//             showModal();
//             window.removeEventListener('scroll', showByScroll);
//         }
//     }
//     window.addEventListener('scroll', showByScroll);

//     // CardMenu

//     class CardMenu {
//         constructor(src, alt, title, descr, price, parentSelector, ...classes) {
//             this.src = src;
//             this.alt = alt;
//             this.title = title;
//             this.descr = descr;
//             this.price = price;
//             this.transfer = 28;
//             this.parent = document.querySelector(parentSelector);
//             this.classes = classes;
//             this.changeUAH();
//         }

//         changeUAH() {
//             this.price *= this.transfer;
//         }

//         render() {
//             const element = document.createElement('div');
//             if (this.classes.length === 0) {
//                 this.element = 'menu__item';
//                 element.classList.add(this.element);
//             } else {
//                 this.classes.forEach(className => element.classList.add(className));
//             }

//             element.innerHTML = `
//                <img src=${this.src} alt=${this.alt}>
//                 <h3 class="menu__item-subtitle">${this.title}</h3>
//                 <div class="menu__item-descr">${this.descr}</div>
//                 <div class="menu__item-divider"></div>
//                 <div class="menu__item-price">
//                     <div class="menu__item-cost">Цена:</div>
//                     <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
//                 </div>

//             `;
//             this.parent.append(element);
//         }
//     }
//     new CardMenu(
//         'img/tabs/post.jpg',
//         'post',
//         'Меню "Постное"',
//         'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
//         20,
//         '.menu .container'
//     ).render();
//       new CardMenu(
//         'img/tabs/elite.jpg',
//         'elite',
//         'Меню “Премиум”',
//         'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
//         14,
//         '.menu .container',
//         'menu__item',
//         'big'
//     ).render();


//     //timer

//     const deadline = '2021-04-09';

//     function getTimerRemaining(endtime) {
//         const t = Date.parse(endtime) - Date.parse(new Date()),
//             days = Math.floor(t / (1000 * 60 * 60 * 24)),
//             hours = Math.floor((t / (1000 * 60 * 60) % 24)),
//             minutes = Math.floor((t / (1000 * 60) % 60)),
//             seconds = Math.floor((t / 1000) % 60);

//         return {
//             'total': t,
//             'days': days,
//             'hours': hours,
//             'minutes': minutes,
//             'seconds': seconds
//         };
//     }

//     function setClock(selector, endtime) {
//         const timer = document.querySelector(selector),
//               days = timer.querySelector('#days'),
//               hours = timer.querySelector('#hours'),
//               minutes = timer.querySelector('#minutes'),
//               seconds = timer.querySelector('#seconds'),
//               timerInterval = setInterval(upDateClock, 1000);

//         function upDateClock() {
//             const t = getTimerRemaining(endtime);
//             days.innerHTML = t.days;
//             hours.innerHTML = t.hours;
//             minutes.innerHTML = t.minutes;
//             seconds.innerHTML = t.seconds;

//             if (t.total <= 0) {
//                 clearInterval(timerInterval);
//             }
//         }

//     }
//     setClock('.timer', deadline);

//     request

//     const forms = document.querySelectorAll('form');
//     forms.forEach(item => {
//         postData(item);
//     });

//     function postData(form) {
//         form.addEventListener('submit', (e) => {
//             e.preventDefault();
//             const message = {
//                 loading: 'img/form/spinner.svg',
//                 saccess: 'Спасибо! Мы с Вами свяжемся',
//                 failure: 'Что-то пошло не так'
//             };
//             const messageStatus = document.createElement('img');
//             messageStatus.src = message.loading;
//             messageStatus.style.cssText = `
//                 display: block;
//                 margin: 0 auto;          
//             `;
//             form.insertAdjacentElement('afterend', messageStatus);


//             // const request = new XMLHttpRequest();
//             // request.open('POST', 'server.php');



//             // request.setRequestHeader('Content-type', 'application/json');


//             const formData = new FormData(form);
//             const obj = {};
//             formData.forEach(function (value, key) {
//                 obj[key] = value;
//             });

//             // request.addEventListener('load', () => {
//             //     if (request.status === 200) {
//             //        showThanksModal(message.saccess);
//             //         form.reset();
//             //           messageStatus.remove();  

//             //     } else {
//             //         showThanksModal(message.failure);
//             //     }

//             // });


//             // request.send(json);
//             fetch('server.php', {
//                 method: "POST",
//                 headers: {
//                     'Content-type': 'application/json'
//                 },
//                 body: JSON.stringify(obj)
//             })
//             .then(data => data.text())
//             .then(data => {
//                 console.log(data);
//                 showThanksModal(message.saccess);
//                 messageStatus.remove();
//             }).catch(() => {
//                 showThanksModal(message.failure);
//             }).finally(() => {
//                 form.reset();
//             });


//         });


//     }

//     function showThanksModal(message) {
//         const prevModalDialog = document.querySelector('.modal__dialog');
//         prevModalDialog.classList.add('hide');
//         showModal();

//         const thanksModal = document.createElement('div');
//         thanksModal.classList.add('modal__dialog');
//         thanksModal.innerHTML = `
//         <div class = "modal__content">
//             <div data-close class = "modal__close">×</div>
//             <div class = "modal__title">${message}</div>
//         </div>

//         `;

//         document.querySelector('.modal').append(thanksModal);
//         setTimeout(() => {
//             thanksModal.remove();
//             prevModalDialog.classList.add('show');
//             prevModalDialog.classList.remove('hide');
//             closeModal();

//         }, 4000);
//     }




// });
// 'use strict';

// window.addEventListener('DOMContentLoaded', () => {
//     //tab
//     const tabContent = document.querySelectorAll('.tabcontent'),
//         tabs = document.querySelectorAll('.tabheader__item'),
//         parentTabs = document.querySelector('.tabheader__items');

//     function hideTabContent() {
//         tabContent.forEach(content => {
//             content.classList.add('hide');
//             content.classList.remove('show', 'fade');
//         });

//         tabs.forEach(tab => {
//             tab.classList.remove('tabheader__item_active');
//         });
//     }


//     function showTabContent(i = 0) {
//         tabContent[i].classList.add('show', 'fade');
//         tabContent[i].classList.remove('hide');
//         tabs[i].classList.add('tabheader__item_active');
//     }

//     hideTabContent();
//     showTabContent();

//     parentTabs.addEventListener('click', (e) => {
//         const target = e.target;
//         if (target && target.classList.contains('tabheader__item')) {
//             tabs.forEach((item, i) => {
//                 if (item === target) {
//                     hideTabContent();
//                     showTabContent(i);
//                 }
//             });
//         }
//     });

//     // modal

//     const modalBtns = document.querySelectorAll('[data-modal]'),
//         modalCloseBtn = document.querySelector('[data-close]'),
//         modal = document.querySelector('.modal');




//     function showModal() {
//         modal.classList.add('show', 'fade');
//         modal.classList.remove('hide');
//         document.body.style.overflow = 'hidden';
//         clearInterval(timerShow);
//     }

//     modalBtns.forEach(btn => {
//         btn.addEventListener('click', showModal);
//     });

//     function closeModal() {
//         modal.classList.add('hide');
//         modal.classList.remove('show', 'fade');
//         document.body.style.overflow = '';
//     }

//     modalCloseBtn.addEventListener('click', closeModal);

//     modal.addEventListener('click', (e) => {
//         if (e.target === modal) {
//             closeModal();
//         }
//     });
//     window.addEventListener('keydown', (e) => {
//         if (e.code === 'Escape' && modal.classList.contains('show')) {
//             closeModal();
//         }
//     });
//     // showModal

//     const timerShow = setTimeout(showModal, 4000);

//     function showModalByScroll() {
//         if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
//             showModal();
//             window.removeEventListener('scroll', showModalByScroll);
//         }
//     }
//     window.addEventListener('scroll', showModalByScroll);

//     //CarMenu

//     class CardMenu{
//         constructor(src, alt, title, descr, price, parentSelector, ...classes) {
//             this.src = src;
//             this.alt = alt;
//             this.title = title;
//             this.descr = descr;
//             this.transver = 28;
//             this.price = price;
//             this.parent = document.querySelector(parentSelector);
//             this.classes = classes;
//             this.change();
//         }
//         change() {
//             this.price *= this.transver;
//         }
//         render() {
//             const element = document.createElement('div');
//             this.element = 'menu__item';
//             if (this.classes.length === 0) {
//                 element.classList.add(this.element);
//             } else {
//                 this.classes.forEach(className => element.classList.add(className));
//             }
//             element.innerHTML = `
//                 <img src= ${this.src} alt=${this.alt}>
//                 <h3 class="menu__item-subtitle">${this.title}</h3>
//                 <div class="menu__item-descr">${this.descr}</div>
//                 <div class="menu__item-divider"></div>
//                 <div class="menu__item-price">
//                     <div class="menu__item-cost">Цена:</div>
//                     <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
//                 </div>
//             `;
//             this.parent.append(element);
//         }
//     }

//     // const getResource = async (url) => {
//     //     const res = await fetch(url);
//     //     if (!res.ok) {
//     //         throw new Error(`Could not fetch ${url}, status: ${res.status}`);
//     //     }
//     //     return await res.json();
//     // };

//     // getResource('http://localhost:3000/menu')
//     //     .then(data => {
//     //         data.forEach(({img, altimg, title, descr, price}) => {
//     //             new CardMenu(img, altimg, title, descr, price, '.menu .container').render();
//     //         });
//     //     });



//     const getResource = async (url) => {
//         const res = await fetch(url);
//         if (!res.ok) {
//             throw newError(`Could not ${url}, status: ${res.status}`);
//         }
//         return await res.json();
//     };

//     // getResource('http://localhost:3000/menu')
//     //     .then(data => {
//     //         data.forEach(({ img, altimg, title, descr, price }) => {
//     //             new CardMenu(img, altimg, title, descr, price, '.menu .container').render();
//     //         });
//     //     });








//     //   fetch('http://localhost:3000/menu')
//     //     .then(data => data.json())
//     //     .then(res => console.log(res));

//     // 2-ой СПОСОБ
//     // getResource('http://localhost:3000/menu')
//     //     .then(data => createCard(data) );

//     // function createCard(data) {
//     //     data.forEach(({ img, altimg, title, descr, price }) => {
//     //         price *= 28;
//     //         const element = document.createElement('div');
//     //         element.classList.add('menu__item');
//     //         element.innerHTML = `
//     //             <img src=${img} alt=${altimg}>
//     //             <h3 class="menu__item-subtitle">${title}</h3>
//     //             <div class="menu__item-descr">${descr}</div>
//     //             <div class="menu__item-divider"></div>
//     //             <div class="menu__item-price">
//     //                 <div class="menu__item-cost">Цена:</div>
//     //                 <div class="menu__item-total"><span>${price}</span> грн/день</div>
//     //             </div>
//     //         `;
//     //         document.querySelector('.menu .container').append(element);
//     //     });
//     // }
//     // Конец  2-го способа


//     // new CardMenu(
//     //     'img/tabs/post.jpg',
//     //     'post',
//     //     'Меню "Постное"',
//     //     'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
//     //     20,
//     //     '.menu .container'

//     // ).render();

//     // new CardMenu(
//     //     'img/tabs/elite.jpg',
//     //     'elite',
//     //     'Меню “Премиум”',
//     //     'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
//     //     14,
//     //     '.menu .container',
//     //     'menu__item',
//     //     'big'

//     // ).render();

//     // timer

//     const deadline = '2021-04-09';

//     function getTimerRemaining(endtime) {
//         const t = Date.parse(endtime) - Date.parse(new Date()),
//             days = Math.floor(t / (1000 * 60 * 60 * 24)),
//             hours = Math.floor(t / (1000 * 60 * 60) % 24),
//             minutes = Math.floor(t / (1000 * 60) % 60),
//             seconds = Math.floor((t / 1000) % 60);
//         return {
//             'total': t,
//             'days': days,
//             'hours': hours,
//             'minutes': minutes,
//             'seconds': seconds
//         };

//     }

//     function setClock(selector, endtime) {
//         const timer = document.querySelector(selector),
//             days = timer.querySelector('#days'),
//             hours = timer.querySelector('#hours'),
//             minutes = timer.querySelector('#minutes'),
//             seconds = timer.querySelector('#seconds'),
//             timerInterval = setInterval(upDataClock, 1000);

//         function upDataClock() {
//             const t = getTimerRemaining(endtime);
//             days.innerHTML = t.days;
//             hours.innerHTML = t.hours;
//             minutes.innerHTML = t.minutes;
//             seconds.innerHTML = t.seconds;

//             if (t.total <= 0) {
//                 clearInterval(timerInterval);
//             }


//         }
//     }

//     setClock('.timer', deadline);

//     //request



//     // const forms = document.querySelectorAll('form');
//     // forms.forEach(item => {
//     //     bindpostData(item);
//     // });

//     // const postData = async (url, data) => {
//     //     const res = await fetch(url, {
//     //         method: "POST",
//     //         headers: {
//     //             'Content-type': 'application/json'
//     //         },
//     //         body: data
//     //     });

//     //     return await res.json();

//     // };

//     // Это рабочий











//     // function bindpostData(form) {
//     //     form.addEventListener('submit', (e) => {
//     //         e.preventDefault();

//     //         const message = {
//     //             loading: 'img/form/spinner.svg',
//     //             saccess: 'Спсибо! Мы с Вами свяжемся',
//     //             failure: 'что-то пошло не так'
//     //         };

//     //         const statusMessage = document.createElement('img');
//     //         statusMessage.src = message.loading;
//     //         statusMessage.style.cssText = `
//     //             display: block;
//     //             margin: 0 auto;
//     //         `;
//     //         form.insertAdjacentElement('afterend', statusMessage);


//     //         const formData = new FormData(form);
//     //         const json = JSON.stringify(Object.fromEntries(formData.entries()));


//     //         // const obj = {};
//     //         // formData.forEach(function (value, key) {
//     //         //     obj[key] = value;
//     //         // });
//     //         // fetch('server.php', {
//     //         //     method: "POST",
//     //         //     headers: {
//     //         //         'Content-type': 'application/json'
//     //         //     },
//     //         //     body: JSON.stringify(obj)
//     //         // })
//     //             postData('http://localhost:3000/requests', json)
//     //                 .then(data => {
//     //                     console.log(data);
//     //                     showThanksModal(message.saccess);
//     //                     statusMessage.remove(); 
//     //                 }).catch(() => {
//     //                     showThanksModal(message.failure);
//     //                 }).finally(() => {
//     //                     form.reset();
//     //                 });
//     //     });
//     // }

//     // function showThanksModal(message) {
//     //     const prevThanksModal = document.querySelector('.modal__dialog');
//     //     prevThanksModal.classList.add('hide');
//     //     showModal();

//     //     const thanksModal = document.createElement('div');
//     //     thanksModal.classList.add('modal__dialog');
//     //     thanksModal.innerHTML = `
//     //         <div data-close class="modal__content">
//     //             <div class="modal__close">×</div>
//     //             <div class ="modal__title">${message}</div>
//     //         </div>
//     //     `;
//     //     document.querySelector('.modal').append(thanksModal);

//     //     setTimeout(() => {
//     //         thanksModal.remove();
//     //         prevThanksModal.classList.add('show');
//     //         prevThanksModal.classList.remove('hide');
//     //         closeModal();
//     //     }, 4000);
//     // }


//     // fetch('http://localhost:3000/menu')
//     //     .then(data => data.json())
//     //     .then(res => console.log(res));




//     // Мой вариант

//     //request

//     const forms = document.querySelectorAll('form');
//     forms.forEach(item => {
//         bindPostDara(item);
//     });

//     const postData = async (url, data) => {
//         const res = await fetch(url, {
//             method: "POST",
//             headers: {
//                 'Content-type': 'application/json'
//             },
//             body: data
//         });

//         return await res.json();
//     };


//     function bindPostDara(form) {
//         form.addEventListener('submit', (e) => {
//             e.preventDefault();

//             const message = {
//                 loading: 'img/form/spinner.svg',
//                 saccess: 'Спасибо! Мы с Вами свяжемся',
//                 failure: 'что-то пошло не так'
//             };


//             const formData = new FormData(form);

//             const statusMessage = document.createElement('div');
//             statusMessage.src = message.loading;
//             statusMessage.style.cssText = `
//                 display: block;
//                 margin: 0 auto;

//             `;
//             form.insertAdjacentElement('afterend', statusMessage);


//             const json = JSON.stringify(Object.fromEntries(formData.entries()));

//             postData('http://localhost:3000/requests', json)
//                 .then(data => {
//                     console.log(data);
//                     showThanlsDialog(message.saccess);
//                     statusMessage.remove();
//                 })
//                 .catch(() => {
//                     showThanlsDialog(message.failure);
//                 })
//                 .finally(() => {
//                     form.reset();
//                 });



//         });
//     }

//     function showThanlsDialog(message) {
//         const prevThanksModal = document.querySelector('.modal__dialog');
//         prevThanksModal.classList.add('hide');
//         showModal();

//         const thanksModal = document.createElement('div');
//         thanksModal.classList.add('modal__dialog');
//         thanksModal.innerHTML = `
//             <div class="modal__content">
//                 <div data-close class="modal__close">×</div>
//                 <div class="modal__title">${message}</div>
//             </div>
//         `;

//         document.querySelector('.modal').append(thanksModal);

//         setTimeout(() => {
//             thanksModal.remove();
//             prevThanksModal.classList.add('show');
//             prevThanksModal.classList.remove('hide');
//             closeModal();
//         }, 4000);
//     }





// });



// SAM
// 'use strict';
// window.addEventListener('DOMContentLoaded', () => {
//     // tab Content

//     const tabContent = document.querySelectorAll('.tabcontent'),
//           tabs = document.querySelectorAll('.tabheader__item'),
//           parentTab = document.querySelector('.tabheader__items');

//     function hideTabContent() {
//         tabContent.forEach(content => {
//             content.classList.add('hide');
//             content.classList.remove('show', 'fade');
//         });

//         tabs.forEach(btn => {
//             btn.classList.remove('tabheader__item_active');
//         });
//     }

//     function showTabContent(i = 0) {
//         tabContent[i].classList.add('show', 'fade');
//         tabContent[i].classList.remove('hide');
//         tabs[i].classList.add('tabheader__item_active');
//     }

//     hideTabContent();
//     showTabContent();

//     parentTab.addEventListener('click', (e) => {
//         const target = e.target;
//         if (target && target.classList.contains('tabheader__item')) {
//             tabs.forEach((item, i) => {
//                 if (item === target) {
//                     hideTabContent();
//                     showTabContent(i);
//                 }
//             });
//         }
//     });

//     // modal

//     const modalBtn = document.querySelectorAll('[data-modal]'),
//           modalCloseBtn = document.querySelector('[data-close]'),
//           modal = document.querySelector('.modal');

//     function showModal() {
//         modal.classList.add('show', 'fade');
//         modal.classList.remove('hide');
//         document.body.style.overflow = 'hidden';
//         clearTimeout(modalTimer);
//     }

//     modalBtn.forEach(btn => {
//         btn.addEventListener('click', showModal);
//     });

//     function closeModal() {
//         modal.classList.add('hide');
//         modal.classList.remove('show', 'fade');
//         document.body.style.overflow = '';
//     }
//     modalCloseBtn.addEventListener('click', closeModal);

//     modal.addEventListener('click', (e) => {
//         if (e.target === modal) {
//             closeModal();
//         }
//     });

//     window.addEventListener('keydown', (e) => {
//         if (e.code === 'Escape' && modal.classList.contains('show')) {
//             closeModal();
//         }
//     });

//     //modalTimer

//     const modalTimer = setTimeout(showModal, 40000);

//     function showModalByScroll() {
//         if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
//             showModal();
//             window.removeEventListener('scroll', showModalByScroll);
//         }
//     }
//     window.addEventListener('scroll', showModalByScroll);

//     // timer

//     const deadline = '2021-04-12';

//     function getTimerRemaining(endtime) {
//         const t = Date.parse(endtime) - Date.parse(new Date()),
//             days = Math.floor(t / (1000 * 60 * 60 * 24)),
//             hourse = Math.floor((t / (1000 * 60 * 60) % 24)),
//             minutes = Math.floor((t / (1000 * 60) % 60)),
//             seconds = Math.floor((t / 1000) % 60);
//         return {
//             'total': t,
//             'days': days,
//             'hours': hourse,
//             'minutes': minutes,
//             'seconds': seconds
//         };
//     }

//     function setClock(selector, endtime) {
//         const timer = document.querySelector(selector),
//               days = timer.querySelector('#days'),
//               hours = timer.querySelector('#hours'),
//               minutes = timer.querySelector('#minutes'),
//               seconds = timer.querySelector('#seconds'),
//               timerInterval = setInterval(upDateClock, 1000);

//         function upDateClock() {
//             const t = getTimerRemaining(endtime);
//             days.innerHTML = t.days;
//             hours.innerHTML = t.hours;
//             minutes.innerHTML = t.minutes;
//             seconds.innerHTML = t.seconds;

//             if (t.total <= 0) {
//                 clearInterval(timerInterval);
//             }

//         }
//     }
//     setClock('.timer', deadline);

//     // CardMenu

//     class CardMenu {
//         constructor(src, alt, title, descr, price, parentSelector, ...classes) {
//             this.src = src;
//             this.alt = alt;
//             this.title = title;
//             this.descr = descr;
//             this.transver = 28;
//             this.price = price;
//             this.parent = document.querySelector(parentSelector);
//             this.classes = classes;
//             this.changUAH();
//         }

//         changUAH() {
//             this.price *= this.transver;
//         }

//         render() {
//             const element = document.createElement('div');
//             this.element = 'menu__item';
//             if (this.classes.length === 0) {
//                 element.classList.add(this.element);
//             } else {
//                 this.classes.forEach(className => element.classList.add(className));
//             }
//             element.innerHTML = `
//                 <img src=${this.src} alt=${this.alt}>
//                 <h3 class="menu__item-subtitle">${this.title}</h3>
//                 <div class="menu__item-descr">${this.descr}</div>
//                 <div class="menu__item-divider"></div>
//                 <div class="menu__item-price">
//                     <div class="menu__item-cost">Цена:</div>
//                     <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
//                 </div>

//             `;
//             this.parent.append(element);
//         }
//     }

//     // const getResource = async (url) => {
//     //     const res = await fetch(url);
//     //     if (!res.ok) {
//     //         throw new Error(`Could not ${url}, status: ${res.status}`);
//     //     }
//     //     return await res.json();
//     // };

//     // getResource(' http://localhost:3000/menu')
//     //     .then(data => {
//     //         data.forEach(({ img, altimg, title, descr, price }) => {
//     //             new CardMenu(img, altimg, title, descr, price, '.menu .container').render();
//     //         });
//     //     });

//     // axios получение данных
//     // axios.get('http://localhost:3000/menu')
//     //     .then(data => {
//     //           data.data.forEach(({ img, altimg, title, descr, price }) => {
//     //             new CardMenu(img, altimg, title, descr, price, '.menu .container').render();
//     //         });
//     //     });

//     //request

//     const forms = document.querySelectorAll('form');
//     forms.forEach(item => {
//         bindPostData(item);
//     });

//     const postData = async (url, data) => {
//         const res = await fetch(url, {
//             method: "POST",
//             headers: {
//                 'Content-type': 'application/json'
//             },
//             body: data
//         });
//         return await res.json();
//     };

//     function bindPostData(form) {
//         form.addEventListener('submit', (e) => {
//             e.preventDefault();
//             const message = {
//                 loading: 'img/form/spinner.svg',
//                 saccess: 'Cпасибо! Мы с Вами свяжемся',
//                 failure: 'что-то пошло не так'
//             };
//             const formData = new FormData(form);

//             const statusMessage = document.createElement('img');
//             statusMessage.src = message.loading;
//             statusMessage.style.cssText = `
//                 display: block;
//                 margin: 0 auto;
//             `;
//             form.insertAdjacentElement('afterend', statusMessage);
//             const json = JSON.stringify(Object.fromEntries(formData.entries()));
//             postData(' http://localhost:3000/requests', json)
//                 .then(() => {
//                     showThanksModal(message.saccess);
//                     statusMessage.remove();
//                 })
//                 .catch(() => {
//                     showThanksModal(message.failure);
//                 })
//                 .finally(() => {
//                     form.reset();
//                 });

//         });

//     }

//     function showThanksModal(message) {
//         const prevThanksModal = document.querySelector('.modal__dialog');
//         prevThanksModal.classList.add('hide');
//         showModal();

//         const thanksModal = document.createElement('div');
//         thanksModal.classList.add('modal__dialog');
//         thanksModal.innerHTML = `
//             <div class="modal__content">
//                 <div data-close class="modal__close">×</div>
//                 <div class="modal__title">${message}</div>            
//             </div>
//         `;
//         document.querySelector('.modal').append(thanksModal);
//         setTimeout(() => {
//             thanksModal.remove();
//             prevThanksModal.classList.add('show');
//             prevThanksModal.classList.remove('hide');
//             closeModal();
//         }, 4000);
//     }

//slide

// const slids = document.querySelectorAll('.offer__slide'),
//     prevBtn = document.querySelector('.offer__slider-prev'),
//     nextBtn = document.querySelector('.offer__slider-next'),
//     total = document.querySelector('#total'),
//     current = document.querySelector('#current');

// let slideIndex = 1;
// showSlides(slideIndex);

// if (slids.length < 10) {
//     total.textContent = `0${slids.length}`;
// } else {
//     total.textContent = slids.length;
// }

// function showSlides(n) {
//     if (n > slids.length) {
//         slideIndex = 1;

//     }

//     if (n < 1) {
//         slideIndex = slids.length;
//     }

//     slids.forEach(item => item.style.display = 'none');
//     slids[slideIndex - 1].style.display = 'block';

//     if (slids.length < 10) {
//         current.textContent = `0${slideIndex}`;
//     } else {
//         current.textContent = slideIndex;
//     }
// }

// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }

// prevBtn.addEventListener('click', () => {
//     plusSlides(-1);
// });

// nextBtn.addEventListener('click', () => {
//     plusSlides(1);
// });

// });

// 'use strict';


// window.addEventListener('DOMContentLoaded', () => {
//     //tabcontent

//     const tabContent = document.querySelectorAll('.tabcontent'),
//           tabs = document.querySelectorAll('.tabheader__item'),
//           parentTab = document.querySelector('.tabheader__items');


//     function hideTabContent() {
//         tabContent.forEach(content => {
//             content.classList.add('hide');
//             content.classList.remove('show', 'fade');
//         });

//         tabs.forEach(tab => {
//             tab.classList.remove('tabheader__item_active');
//         });
//     }

//     function showTabContent(i = 0) {
//         tabContent[i].classList.add('show', 'fade');
//         tabContent[i].classList.remove('hide');
//         tabs[i].classList.add('tabheader__item_active');
//     }

//     hideTabContent();
//     showTabContent();

//     parentTab.addEventListener('click', (e) => {
//         const target = e.target;

//         if (target && target.classList.contains('tabheader__item')) {
//             tabs.forEach((item, i)=> {
//                 if (item === target) {
//                     hideTabContent();
//                     showTabContent(i);
//                 }
//             });
//         }
//     });

//     // modal

//     const modalBtn = document.querySelectorAll('[data-modal]'),
//         //   modalClose = document.querySelector('[data-close]'),
//           modal = document.querySelector('.modal');


//     function showModal() {

//         modal.classList.add('show', 'fade');
//         modal.classList.remove('hide');
//         document.body.style.overflow = 'hidden';
//         clearInterval(modalTimerOpen);

//     }

//     modalBtn.forEach(btn => {
//         btn.addEventListener('click', showModal);
//     });

//     function closeModal() {
//         modal.classList.add('hide');
//         modal.classList.remove('show', 'fade');
//         document.body.style.overflow = '';
//     }

//     // modalClose.addEventListener('click', closeModal);

//     modal.addEventListener('click', (e) => {
//         if (e.target === modal || e.target.getAttribute('data-close') == '') {
//             closeModal();
//         }
//     });

//     window.addEventListener('keydown', (e) => {
//         if (e.code === 'Escape' && modal.classList.contains('show')) {
//             closeModal();
//         }
//     });

//     // modalTimer

//     const modalTimerOpen = setTimeout(showModal, 40000);

//     function showModalByScroll() {
//         if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
//             showModal();
//             window.removeEventListener('scroll', showModalByScroll);
//         }
//     }

//     window.addEventListener('scroll', showModalByScroll);


//     class CardMenu{
//         constructor(src, alt, title, descr, price, parentSelector, ...classes) {
//             this.src = src;
//             this.alt = alt;
//             this.title = title;
//             this.transfer = 28;
//             this.descr = descr;
//             this.price = price;
//             this.parent = document.querySelector(parentSelector);
//             this.classes = classes;
//             this.changeUAH();
//         }

//         changeUAH() {
//             this.price *= this.transfer;
//         }
//         render() {
//             const element = document.createElement('div');
//             this.element = 'menu__item';
//             if (this.classes.length === 0) {
//                 element.classList.add(this.element);
//             } else {
//                 this.classes.forEach(className => element.classList.add(className));
//             }

//             element.innerHTML = `
//                 <img src=${this.src} alt=${this.alt}>
//                 <h3 class="menu__item-subtitle">${this.title}</h3>
//                 <div class="menu__item-descr">${this.descr}</div>
//                 <div class="menu__item-divider"></div>
//                 <div class="menu__item-price">
//                     <div class="menu__item-cost">Цена:</div>
//                     <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
//                 </div>

//             `;
//             this.parent.append(element);
//         }
//     }

//     axios.get('http://localhost:3000/menu')
//         .then(data => {
//             data.data.forEach(({ img, altimg, title, descr, price }) => {
//                 new CardMenu(img, altimg, title, descr, price, '.menu .container').render();
//             });
//         });



//     // post request

//     const forms = document.querySelectorAll('form');
//     forms.forEach(item => {
//         bindPostData(item);
//     });

//     const postData = async (url, data) => {
//         const res = await fetch(url, {
//             method: 'POST',
//             headers: {
//                 'Content-type': 'application/json'
//             },
//             body:  data
//         });
//         return await res.json();

//     };

//     function bindPostData(form) {
//         form.addEventListener('submit', (e) => {
//             e.preventDefault();
//             const message = {
//                 loading: 'img/form/spinner.svg',
//                 saccess: 'Спасибо! Мы с Вами свяжемся',
//                 failure: 'что-то пошло не так'
//             };

//             const formData = new FormData(form);
//             const statusMessage = document.createElement('img');
//             statusMessage.src = message.loading;
//             statusMessage.style.cssText = `
//                 display: block;
//                 margin: 0 auto;
//             `;

//             form.insertAdjacentElement('afterend', statusMessage);

//             const json = JSON.stringify(Object.fromEntries(formData.entries()));



//             postData('http://localhost:3000/requests', json)
//                 .then(() => {
//                     showThanksModal(message.saccess);
//                     statusMessage.remove();
//                 })
//                 .catch(() => {
//                     showThanksModal(message.failure);
//                 })
//                 .finally(() => {
//                     form.reset();
//                 });

//         });


//     }

//     function showThanksModal(message) {
//         const prevThanksModal = document.querySelector('.modal__dialog');
//         prevThanksModal.classList.add('hide');
//         showModal();

//         const thanksModal = document.createElement('div');
//         thanksModal.classList.add('modal__dialog');
//         thanksModal.innerHTML = `
//         <div class="modal__content">
//             <div data-close class="modal__close">×</div>
//             <div class="modal__title">${message}</div>

//         </div>
//         `;

//         document.querySelector('.modal').append(thanksModal);

//         setTimeout(() => {
//             thanksModal.remove();
//             prevThanksModal.classList.add('show');
//             prevThanksModal.classList.remove('hide');
//             closeModal();
//         }, 4000);

//     }

//     // timer

//     const deadline = '2021-04-15';

//     function getTimerRemaining(endtime) {
//         const t = Date.parse(endtime) - Date.parse(new Date()),
//             days = Math.floor(t / (1000 * 60 * 60 * 24)),
//             hours = Math.floor((t / (1000 * 60 * 60) % 24)),
//             minutes = Math.floor((t / (1000 * 60) % 60)),
//             seconds = Math.floor((t / 1000) % 60);

//         return {
//             'total': t,
//             'days': days,
//             'hours': hours,
//             'minutes': minutes,
//             'seconds': seconds
//         };
//     }

//     function setClock(selector, endtime) {
//         const timer = document.querySelector(selector),
//               days = timer.querySelector('#days'),
//               hours = timer.querySelector('#hours'),
//               minutes = timer.querySelector('#minutes'),
//             seconds = timer.querySelector('#seconds'),
//             timerInterval = setInterval(upDateClock, 1000);


//         function upDateClock() {
//             const t = getTimerRemaining(endtime);
//             days.innerHTML = t.days;
//             hours.innerHTML = t.hours;
//             minutes.innerHTML = t.minutes;
//             seconds.innerHTML = t.seconds;

//             if (t.total <= 0) {
//                 clearInterval(timerInterval);
//             }
//         }

//     }
//     setClock('.timer', deadline);

//     //slider

//     // const slides = document.querySelectorAll('.offer__slide'),
//     //     prevBtn = document.querySelector('.offer__slider-prev'),
//     //     nextBtn = document.querySelector('.offer__slider-next'),
//     //     total = document.querySelector('#total'),
//     //     current = document.querySelector('#current'),
//     //     // 2 вариант
//     //     slidesWrapper = document.querySelector('.offer__slider-wrapper'),
//     //     slidesInner = document.querySelector('.offer__slider-inner'),
//     //     width = window.getComputedStyle(slidesWrapper).width;


//     // let slideIndex = 1;
//     // let offset = 0;
//     // // 2ой вариант

//     // if (slides.length < 10) {
//     //     total.textContent = `0${slides.length}`;
//     //     current.textContent = `0${slideIndex}`;
//     // } else {
//     //     total.textContent = slides.length;
//     //     current.textContent = slideIndex;
//     // }



//     // slidesInner.style.width = 100 * slides.length + '%';
//     // slidesInner.style.display = 'flex';
//     // slidesInner.style.transition = '0.5s all';


//     // slidesWrapper.style.overflow = 'hidden';
//     // slides.forEach(slide => {
//     //     slide.style.width = width;
//     // });

//     // nextBtn.addEventListener('click', () => {
//     //     if (offset == (+width.slice(0, width.length - 2) * (slides.length - 1))) {
//     //         offset = 0;
//     //     } else {
//     //         offset += +width.slice(0, width.length - 2);
//     //     }
//     //     slidesInner.style.transform = `translateX(-${offset}px)`;

//     //     if (slideIndex == slides.length) {
//     //         slideIndex = 1;
//     //     } else {
//     //         slideIndex++;
//     //     }

//     //     if (slides.length < 10) {
//     //         current.textContent = `0${slideIndex}`;
//     //     } else {
//     //         current.textContent = slideIndex;
//     //     }
//     // });

//     // prevBtn.addEventListener('click', () => {
//     //     if (offset == 0) {
//     //         offset = +width.slice(0, width.length - 2) * (slides.length - 1);

//     //     } else {
//     //         offset -= +width.slice(0, width.length - 2);
//     //     }
//     //     slidesInner.style.transform = `translateX(-${offset}px)`;


//     //     if (slideIndex == 1) {
//     //         slideIndex = slides.length;
//     //     } else {
//     //         slideIndex--;
//     //     }


//     //     if (slides.length < 10) {
//     //         current.textContent = `0${slideIndex}`;
//     //     } else {
//     //         current.textContent = slideIndex;
//     //     }


//     // });

//     // 1ый вариант слайда 
//     // showSlides(slideIndex);


//     // if (slides.length < 10) {
//     //     total.textContent = `0${slides.length}`;
//     // } else {
//     //     total.textContent = slides.length;
//     // }

//     // function showSlides(n) {
//     //     if (n > slides.length) {
//     //         slideIndex = 1;
//     //     }

//     //     if (n < 1) {
//     //         slideIndex = slides.length;
//     //     }

//     //     slides.forEach(item => item.style.display = 'none');
//     //     slides[slideIndex - 1].style.display = 'block';

//     //     if (slides.length < 10) {
//     //         current.textContent = `0${slideIndex}`;

//     //     } else {
//     //         current.textContent = slideIndex;
//     //     }


//     // }

//     // function plusSlides(n) {
//     //     showSlides(slideIndex += n);
//     // }

//     // prevBtn.addEventListener('click', () => {
//     //     plusSlides(-1);
//     // });

//     // nextBtn.addEventListener('click', () => {
//     //     plusSlides(1);
//     // });


//     // 2 slides

//     const slides = document.querySelectorAll('.offer__slide'),
//           prevBtn = document.querySelector('.offer__slider-prev'),
//           nextBtn = document.querySelector('.offer__slider-next'),
//           total = document.querySelector('#total'),
//           current = document.querySelector('#current'),
//           slideInner = document.querySelector('.offer__slider-inner'),
//           sliderWrapper = document.querySelector('.offer__slider-wrapper'),
//           width = window.getComputedStyle(sliderWrapper).width;


//     let slideIndex = 1;
//     let offset = 0;

//     slideInner.style.display = 'flex';
//     slideInner.style.width = 100 * slides.length + '%';
//     slideInner.style.transition = '0.5s all';
//     sliderWrapper.style.overflow = 'hidden';
//     slides.forEach(slid => {
//         slid.style.width = width;
//     });

//     if (slides.length < 10) {
//         total.textContent = `0${slides.length}`;
//         current.textContent = `0${slideIndex}`;
//     } else {
//         total.textContent = slides.length;
//         current.textContent = slideIndex;
//     }


//     nextBtn.addEventListener('click', () => {
//         if (offset == +width.slice(0, width.length - 2) * (slides.length - 1)) {
//             offset = 0;
//         } else {
//             offset += +width.slice(0, width.length - 2);
//         }

//         slideInner.style.transform = `translateX(-${offset}px)`;

//         if (slideIndex == slides.length) {
//             slideIndex = 1;
//         } else {
//             slideIndex++;
//         }
//         if (slides.length < 10) {
//             current.textContent = `0${slideIndex}`;
//         } else {
//             current.textContent = slideIndex;
//         }

//     });

//     prevBtn.addEventListener('click', () => {
//         if (offset == 0) {
//             offset = +width.slice(0, width.length - 2) * (slides.length - 1);
//         } else {
//             offset -= +width.slice(0, width.length - 2);
//         }

//         slideInner.style.transform = `translateX(-${offset}px)`;

//         if (slideIndex == 1) {
//             slideIndex = slides.length;
//         } else {
//             slideIndex--;
//         }

//         if (slides.length < 10) {
//             current.textContent = `0${slideIndex}`;
//         } else {
//             current.textContent = slideIndex;
//         }
//     });






// });


// 'use strict';


// window.addEventListener('DOMContentLoaded', () => {
//     // tabContent

//     const tabContent = document.querySelectorAll('.tabcontent'),
//           tabs = document.querySelectorAll('.tabheader__item'),
//           parentTab = document.querySelector('.tabheader__items');


//     function hideTabContent() {
//         tabContent.forEach(content => {
//             content.classList.add('hide');
//             content.classList.remove('show', 'fade');
//         });

//         tabs.forEach(tab => {
//             tab.classList.remove('tabheader__item_active');
//         });
//     }

//     function showTabContent(i = 0) {
//         tabContent[i].classList.add('show', 'fade');
//         tabContent[i].classList.remove('hide');
//         tabs[i].classList.add('tabheader__item_active');
//     }

//     hideTabContent();
//     showTabContent();
//     parentTab.addEventListener('click', (e) => {
//         const target = e.target;

//         if (target && target.classList.contains('tabheader__item')) {
//             tabs.forEach((item, i) => {
//                 if (target === item) {
//                     hideTabContent();
//                     showTabContent(i);
//                 }
//             });
//         }
//     });


//     //modal

//     const modalBtn = document.querySelectorAll('[data-modal]'),
//         //   modalCloseBtn = document.querySelector('[data-close]'),
//           modal = document.querySelector('.modal');


//     function showModal() {
//         modal.classList.add('show', 'fade');
//         modal.classList.remove('hide');
//         document.body.style.overflow = 'hidden';
//         clearInterval(timerModal);
//     }
//     modalBtn.forEach(btn => {
//         btn.addEventListener('click', showModal);
//     });

//     function closeModal() {
//         modal.classList.add('hide');
//         modal.classList.remove('show', 'fade');
//         document.body.style.overflow = '';
//     }

//     // modalCloseBtn.addEventListener('click', closeModal);

//     modal.addEventListener('click', (e) => {
//         if (e.target === modal || e.target.getAttribute('data-close') =='') {
//             closeModal();
//         }
//     });

//     window.addEventListener('keydown', (e) => {
//         if (e.code === 'Escape' && modal.classList.contains('show')) {
//             closeModal();
//         }
//     });

//     // setTimerModal

//     const timerModal = setTimeout(showModal, 30000);

//     function showModalByScroll() {
//         if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
//             showModal();
//             window.removeEventListener('scroll', showModalByScroll);
//         }

//     }
//     window.addEventListener('scroll', showModalByScroll);

//     //cardMenu

//     class CardMenu {
//         constructor(src, alt, title, descr, price, parentSelector, ...classes) {
//             this.src = src;
//             this.alt = alt;
//             this.title = title;
//             this.descr = descr;
//             this.transver = 28;
//             this.price = price;
//             this.parent = document.querySelector(parentSelector);
//             this.classes = classes;
//             this.changeUAH();
//         }

//         changeUAH() {
//             this.price *= this.transver;
//         }
//         render() {
//             const element = document.createElement('div');
//             this.element = 'menu__item';
//             if (this.classes.length === 0) {
//                 element.classList.add(this.element);
//             } else {
//                 this.classes.forEach(clasName => element.classList.add(clasName));
//             }
//             element.innerHTML = `
//                 <img src=${this.src} alt=${this.alt}>
//                 <h3 class="menu__item-subtitle">${this.title}</h3>
//                 <div class="menu__item-descr">${this.descr}</div>
//                 <div class="menu__item-divider"></div>
//                 <div class="menu__item-price">
//                     <div class="menu__item-cost">Цена:</div>
//                     <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
//                 </div>
//             `;
//             this.parent.append(element);
//         }
//     }

//     axios.get('http://localhost:3000/menu')
//         .then(data => {
//             data.data.forEach(({ img, altimg, title, descr, price }) => {
//                 new CardMenu(img, altimg, title, descr, price, '.menu .container').render();
//             });
//         });

//     const postData = async (url, data) => {
//         const res = await fetch(url, {
//             method: "POST",
//             headers: {
//                 'Content-type': 'application/json'
//             },
//             body: data
//         });
//         return await res.json();
//     };

//     const forms = document.querySelectorAll('form');
//     forms.forEach(item => {
//         bindPostData(item);
//     });

//     function bindPostData(form) {
//         form.addEventListener('submit', (e) => {
//             e.preventDefault();
//             const message = {
//                 loading: 'img/form/spinner.svg',
//                 saccess: 'Спасибо! Мы с Вами свяжемся',
//                 failure: 'что-то пошло не так'
//             };
//             const formData = new FormData(form);

//             const statusMessage = document.createElement('img');
//             statusMessage.src = message.loading;
//             statusMessage.style.cssText = `
//                 display: block;
//                 margin: 0 auto;
//             `;
//             form.insertAdjacentElement('afterend', statusMessage);
//             const json = JSON.stringify(Object.fromEntries(formData.entries()));


//             postData('http://localhost:3000/requests', json)
//             .then(() => {
//                 showThanksModal(message.saccess);
//                 statusMessage.remove();
//             })
//             .catch(() => {
//                 showThanksModal(message.failure);
//             })
//             .finally(() => {
//                 form.reset();
//             });


//         });


//     }

//     function showThanksModal(message) {
//         const prevThanksModal = document.querySelector('.modal__dialog');
//         prevThanksModal.classList.add('hide');
//         showModal();

//         const thanksModal = document.createElement('div');
//         thanksModal.classList.add('modal__dialog');
//         thanksModal.innerHTML = `
//             <div class="modal__content">
//                 <div data-close class="modal__close">×</div>
//                 <div class="modal__title">${message}</div>

//             </div>  
//         `;
//         document.querySelector('.modal').append(thanksModal);

//         setTimeout(() => {
//             thanksModal.remove();
//             prevThanksModal.classList.add('show');
//             prevThanksModal.classList.remove('hide');
//             closeModal();
//         }, 4000);

//     }

//     // slide

//     const slides = document.querySelectorAll('.offer__slide'),
//           prevBtn = document.querySelector('.offer__slider-prev'),
//           nextBtn = document.querySelector('.offer__slider-next'),
//           slidesInner = document.querySelector('.offer__slider-inner'),
//           slidesWrapper = document.querySelector('.offer__slider-wrapper'),
//           total = document.querySelector('#total'),
//           current = document.querySelector('#current'),
//           width = window.getComputedStyle(slidesWrapper).width;

//     let slideIndex = 1;

//     // if (slides.length < 10) {
//     //     total.textContent = `0${slides.length}`;
//     // } else {
//     //     total.textContent = slides.length;
//     // }

//     // function showSlides(n) {
//     //     if (n > slides.length) {
//     //         slideIndex = 1;
//     //     }

//     //     if (n < 1) {
//     //         slideIndex = slides.length;
//     //     }

//     //     slides.forEach(slid => slid.style.display = 'none');
//     //     slides[slideIndex - 1].style.display = 'block';

//     //     if (slides.length < 10) {
//     //         current.textContent = `0${slideIndex}`;
//     //     } else {
//     //         current.textContent = slideIndex;
//     //     }
//     // }
//     // showSlides(slideIndex);


//     // const plusSlides = (n) => {
//     //     showSlides(slideIndex += n);
//     // };
//     // nextBtn.addEventListener('click', () => {
//     //     plusSlides(1);
//     // });
//     // prevBtn.addEventListener('click', () => {
//     //     plusSlides(-1);
//     // });

//     let offset = 0;

//     if (slides.length < 10) {
//         total.textContent = `0${slides.length}`;
//         current.textContent = `0${slideIndex}`;
//     } else {
//         total.textContent = slides.length;
//         current.textContent = slideIndex;
//     }


//     slidesInner.style.display = 'flex';
//     slidesInner.style.width = 100 * slides.length + '%';
//     slidesInner.style.transition = '0.5s all';
//     slidesWrapper.style.overflow = 'hidden';

//     nextBtn.addEventListener('click', () => {
//         if (offset === +width.slice(0, width.length - 2) * (slides.length - 1)) {
//             offset = 0;
//         } else {
//             offset += +width.slice(0, width.length - 2);
//         }

//         slidesInner.style.transform = `translateX(-${offset}px)`;

//         if (slideIndex == slides.length) {
//             slideIndex = 1;
//         } else {
//             slideIndex++;
//         }
//         if (slides.length < 10) {
//             current.textContent = `0${slideIndex}`;
//         } else {
//             current.textContent = slideIndex;
//         }

//     });

//     prevBtn.addEventListener('click', () => {
//         if (offset == 0) {
//             offset = +width.slice(0, width.length - 2) * (slides.length - 1);
//         } else {
//             offset -= +width.slice(0, width.length - 2);
//         }

//         slidesInner.style.transform = `translateX(-${offset}px)`;

//         if (slideIndex == 1) {
//             slideIndex = slides.length;
//         } else {
//             slideIndex--;
//         }

//         if (slideIndex < 10) {
//             current.textContent = `0${slideIndex}`;
//         } else {
//             current.textContent = slideIndex;
//         }

//     });

//     //timer

//     const deadline = '2021-04-17';

//     function getTimerRemaining(endtime) {
//         const t = Date.parse(endtime) - Date.parse(new Date()),
//               days = Math.floor(t / (1000 * 60 * 60 * 24)),
//               hours = Math.floor((t / (1000 * 60 * 60) % 24)),
//               minutes = Math.floor((t / (1000 * 60) % 60)),
//               seconds = Math.floor((t / 1000) % 60);
//         return {
//             'total': t,
//             'days': days,
//             'hours': hours,
//             'minutes': minutes,
//             'seconds': seconds
//         };
//     }

//     function setClock(selector, endtime) {
//         const timer = document.querySelector(selector),
//               days = timer.querySelector('#days'),
//               hours = timer.querySelector('#hours'),
//               minutes = timer.querySelector('#minutes'),
//               seconds = timer.querySelector('#seconds'),
//               timerInterval = setInterval(upDateClock, 1000);

//         function upDateClock() {
//             const t = getTimerRemaining(endtime);
//             days.innerHTML = t.days;
//             hours.innerHTML = t.hours;
//             minutes.innerHTML = t.minutes;
//             seconds.innerHTML = t.seconds;

//             if (t.total <= 0) {
//                 clearInterval(timerInterval);
//             }
//         }
//     }

//     setClock('.timer', deadline);


// });


// 'use strict';

// window.addEventListener('DOMContentLoaded', () => {
//     //tabContent

//     const tabContent = document.querySelectorAll('.tabcontent'),
//         tabs = document.querySelectorAll('.tabheader__item'),
//         parentTab = document.querySelector('.tabheader__items');

//     function hideTabContent() {
//         tabContent.forEach(item => {
//             item.classList.add('hide');
//             item.classList.add('show', 'fade');
//         });

//         tabs.forEach(tab => {
//             tab.classList.remove('tabheader__item_active');
//         });
//     }

//     function showTabContent(i = 0) {
//         tabContent[i].classList.add('show', 'fade');
//         tabContent[i].classList.remove('hide');
//         tabs[i].classList.add('tabheader__item_active');
//     }
//     hideTabContent();
//     showTabContent();

//     parentTab.addEventListener('click', (e) => {
//         const target = e.target;
//         if (target && target.classList.contains('tabheader__item')) {
//             tabs.forEach((item, i) => {
//                 if (item === target) {
//                     hideTabContent();
//                     showTabContent(i);
//                 }
//             });
//         }
//     });

//     // modal

//     const modalTrigger = document.querySelectorAll('[data-modal]'),
//         //   modalClose = document.querySelector('[data-close]'),
//         modal = document.querySelector('.modal');

//     function showModal() {
//         modal.classList.add('show', 'fade');
//         modal.classList.remove('hide');
//         document.body.style.overflow = 'hidden';
//         clearInterval(timerModal);
//     }

//     modalTrigger.forEach(btn => {
//         btn.addEventListener('click', showModal);
//     });

//     function closeModal() {
//         modal.classList.add('hide');
//         modal.classList.remove('show', 'fade');
//         document.body.style.overflow = '';
//     }

//     // modalClose.addEventListener('click', closeModal);

//     modal.addEventListener('click', (e) => {
//         if (e.target === modal || e.target.getAttribute('data-close') == '') {
//             closeModal();
//         }
//     });

//     window.addEventListener('keydown', (e) => {
//         if (e.code === 'Escape' && modal.classList.contains('show')) {
//             closeModal();
//         }
//     });

//     // timerModal

//     const timerModal = setTimeout(showModal, 40000);

//     function showModalByScroll() {
//         if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
//             showModal();
//             window.removeEventListener('scroll', showModalByScroll);
//         }
//     }
//     window.addEventListener('scroll', showModalByScroll);

//     // CardMenu

//     class CardMenu {
//         constructor(src, alt, title, descr, price, parentSelector, ...classes) {
//             this.src = src;
//             this.alt = alt;
//             this.title = title;
//             this.descr = descr;
//             this.transfer = 28;
//             this.price = price;
//             this.parent = document.querySelector(parentSelector);
//             this.classes = classes;
//             this.chang();
//         }

//         chang() {
//             this.price *= this.transfer;
//         }
//         render() {
//             const element = document.createElement('div');
//             this.element = 'menu__item';
//             if (this.classes.length === 0) {
//                 element.classList.add(this.element);
//             } else {
//                 this.classes.forEach(className => element.classList.add(className));
//             }
//             element.innerHTML = `
//                 <img src=${this.src} alt=${this.alt}>
//                 <h3 class="menu__item-subtitle">${this.title}</h3>
//                 <div class="menu__item-descr">${this.descr}</div>
//                 <div class="menu__item-divider"></div>
//                 <div class="menu__item-price">
//                     <div class="menu__item-cost">Цена:</div>
//                     <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
//                 </div>
//             `;
//             this.parent.append(element);
//         }
//     }

//     axios.get('http://localhost:3000/menu')
//         .then(data => {
//             data.data.forEach(({ img, altimg, title, descr, price, }) => {
//                 new CardMenu(img, altimg, title, descr, price, '.menu .container').render();
//             });
//         });

//     const postData = async (url, data) => {
//         const res = await fetch(url, {
//             method: "POST",
//             headers: {
//                 'Content-type': 'application/json'
//             },
//             body: data
//         });
//         return await res.json();
//     };

//     const forms = document.querySelectorAll('form');
//     forms.forEach(item => {
//         bindPostData(item);
//     });

//     function bindPostData(form) {
//         form.addEventListener('submit', (e) => {
//             e.preventDefault();

//             const message = {
//                 loading: 'img/form/spinner.svg',
//                 saccess: 'Спасибо! Мы с Вами Свяжемся',
//                 failure: 'Что-то пошло не так'
//             };

//             const formData = new FormData(form);
//             const statusMessage = document.createElement('img');
//             statusMessage.src = message.loading;
//             statusMessage.style.cssText = `
//                 display: block;
//                 margin: 0 auto;
//             `;
//             form.insertAdjacentElement('afterend', statusMessage);

//             const json = JSON.stringify(Object.fromEntries(formData.entries()));

//             postData(' http://localhost:3000/requests', json)
//                 .then(() => {
//                     showThanksModal(message.saccess);
//                     statusMessage.remove();
//                 })
//                 .catch(() => {
//                     showThanksModal(message.failure);
//                 })
//                 .finally(() => {
//                     form.reset();
//                 });
//         });
//     }

//     function showThanksModal(message) {
//         const prevThanksModal = document.querySelector('.modal__dialog');
//         prevThanksModal.classList.add('hide');
//         showModal();

//         const thanksModal = document.createElement('div');
//         thanksModal.classList.add('modal__dialog');
//         thanksModal.innerHTML = `
//             <div class="modal__content">
//                 <div data-close class="modal__close">×</div>
//                 <div class="modal__title">${message}</div>
//             </div>

//         `;
//         document.querySelector('.modal').append(thanksModal);

//         setTimeout(() => {
//             thanksModal.remove();
//             prevThanksModal.classList.add('show');
//             prevThanksModal.classList.add('hide');
//             closeModal();
//         }, 4000);
//     }

//     // const slides = document.querySelectorAll('.offer__slide'),
//     //       slider = document.querySelector('.offer__slider'),
//     //       prevBtn = document.querySelector('.offer__slider-prev'),
//     //       nextBtn = document.querySelector('.offer__slider-next'),
//     //       slideInner = document.querySelector('.offer__slider-inner'),
//     //       sliderWrapper = document.querySelector('.offer__slider-wrapper'),
//     //       total = document.querySelector('#total'),
//     //       current = document.querySelector('#current'),
//     //       width = window.getComputedStyle(sliderWrapper).width;

//     // let slidIndex = 1;

//     // // if (slides.length < 10) {
//     // //     total.textContent = `0${slides.length}`;
//     // //     current.textContent = `0${slidIndex}`;
//     // // } else {
//     // //     total.textContent = slides.length;
//     // //     current.textContent = slidIndex;
//     // // }

//     // // const showSlides = (n) => {
//     // //     if (n > slides.length) {
//     // //         slidIndex = 1;
//     // //     }

//     // //     if (n < 1) {
//     // //         slidIndex = slides.length;
//     // //     }

//     // //     slides.forEach(slid => slid.style.display = 'none');
//     // //     slides[slidIndex - 1].style.display = 'block';

//     // //     if (slides.length < 10) {
//     // //         current.textContent = `0${slidIndex}`;

//     // //     } else {
//     // //         current.textContent = slidIndex;
//     // //     }
//     // // };





//     // // showSlides(slidIndex);

//     // // const plusSlides = (n) => {
//     // //     showSlides(slidIndex += n);
//     // // };

//     // // nextBtn.addEventListener('click', () => {
//     // //     plusSlides(1);
//     // // });

//     // // prevBtn.addEventListener('click', () => {
//     // //     plusSlides(-1);
//     // // });


//     // // 2 вариант
//     // let offset = 0;

//     // if (slides.length < 10) {
//     //     total.textContent = `0${slides.length}`;
//     //     current.textContent = `0${slidIndex}`;
//     // } else {
//     //     total.textContent = slides.length;
//     //     current.textContent = slidIndex;
//     // }


//     // slideInner.style.display = 'flex';
//     // slideInner.style.width = 100 * slides.length + '%';
//     // sliderWrapper.style.overflow = 'hidden';

//     // slides.forEach(slide => {
//     //     slide.style.width = width;
//     // });

//     // slider.style.position = 'relative';
//     // const indicators = document.createElement('ol'),
//     //       dots = [];
//     // indicators.classList.add('carousel-indicators');
//     // indicators.style.cssText = `
//     //     position: absolute;
//     //     right: 0;
//     //     bottom: 0;
//     //     left: 0;
//     //     z-index: 15;
//     //     display: flex;
//     //     justify-content: center;
//     //     margin-right: 15%;
//     //     margin-left: 15%;
//     //     list-style: none;

//     // `;
//     // slider.append(indicators);

//     // for (let i = 0; i < slides.length; i++) {
//     //     const dot = document.createElement('li');
//     //     dot.setAttribute('data-slide-to', i + 1);
//     //     dot.style.cssText = `
//     //         box-sizing: content-box;
//     //         flex: 0 1 auto;
//     //         width: 30px;
//     //         height: 6px;
//     //         margin-right: 3px;
//     //         margin-left: 3px;
//     //         cursor: pointer;
//     //         background-color: #fff;
//     //         background-clip: padding-box;
//     //         border-top: 10px solid transparent;
//     //         border-bottom: 10px solid transparent;
//     //         opacity: .5;
//     //         transition: opacity .6s ease;  
//     //     `;
//     //     if (i == 0) {
//     //         dot.style.opacity = 1;
//     //     }
//     //       indicators.append(dot);
//     //       dots.push(dot);
//     // }





//     // nextBtn.addEventListener('click', () => {
//     //     if (offset === +width.slice(0, width.length - 2) * (slides.length - 1)) {
//     //         offset = 0;
//     //     } else {
//     //         offset += +width.slice(0, width.length - 2);
//     //     }

//     //     slideInner.style.transform = `translateX(-${offset}px)`;

//     //     if (slidIndex === slides.length) {
//     //         slidIndex = 1;
//     //     } else {
//     //         slidIndex++;
//     //     }

//     //     if (slides.length < 10) {
//     //         current.textContent = `0${slidIndex}`;
//     //     } else {
//     //         current.textContent = slidIndex;
//     //     }

//     //     dots.forEach(dot => dot.style.opacity = '0.5');
//     //     dots[slidIndex - 1].style.opacity = 1;
//     // });

//     // prevBtn.addEventListener('click', () => {
//     //     if (offset === 0) {
//     //         offset = +width.slice(0, width.length - 2) * (slides.length - 1);
//     //     } else {
//     //         offset -= +width.slice(0, width.length - 2);
//     //     }

//     //     slideInner.style.transform = `translateX(-${offset}px)`;

//     //     if (slidIndex === 1) {
//     //         slidIndex = slides.length;
//     //     } else {
//     //         slidIndex--;
//     //     }

//     //     if (slides.length < 10) {
//     //         current.textContent = `0${slidIndex}`;
//     //     } else {
//     //         current.textContent = slidIndex;
//     //     }
//     //     dots.forEach(dot => dot.style.opacity = '0.5');
//     //     dots[slidIndex - 1].style.opacity = 1;

//     // });

//     // dots.forEach(dot => {
//     //     dot.addEventListener('click', (e) => {
//     //         const slideTo = e.target.getAttribute('data-slide-to');
//     //         slidIndex = slideTo;
//     //         offset = +width.slice(0, width.length - 2) * (slideTo - 1);
//     //         slideInner.style.transform = `translateX(-${offset}px)`;

//     //         if (slides.length < 10) {
//     //             current.textContent = `0${slidIndex}`;
//     //         } else {
//     //             current.textContent = slidIndex;
//     //         }

//     //         dots.forEach(dot => dot.style.opacity = ".5");
//     //         dots[slidIndex - 1].style.opacity = "1";
//     //     });
//     // });

//     const deadline = '2021-04-24';

//     function getTimerRemaining(endtime) {
//         const t = Date.parse(endtime) - Date.parse(new Date()),
//             days = Math.floor(t / (1000 * 60 * 60 * 24)),
//             hours = Math.floor((t / (1000 * 60 * 60) % 24)),
//             minutes = Math.floor((t / (1000 * 60) % 60)),
//             seconds = Math.floor((t / 1000) % 60);
//         return {
//             'total': t,
//             'days': days,
//             'hours': hours,
//             'minutes': minutes,
//             'seconds': seconds
//         };
//     }

//     function setClock(selector, endtime) {
//         const timer = document.querySelector(selector),
//             days = timer.querySelector('#days'),
//             hours = timer.querySelector('#hours'),
//             minutes = timer.querySelector('#minutes'),
//             seconds = timer.querySelector('#seconds'),
//             timerClock = setInterval(upDateClock, 1000);


//         function upDateClock() {
//             const t = getTimerRemaining(endtime);
//             days.innerHTML = t.days;
//             hours.innerHTML = t.hours;
//             minutes.innerHTML = t.minutes;
//             seconds.innerHTML = t.seconds;

//             if (t.total <= 0) {
//                 clearInterval(timerClock);
//             }
//         }
//     }
//     setClock('.timer', deadline);


// });

'use strict';

import tabs from './modules/tabs';
import modal from './modules/modal';
import calc from './modules/calc';
import cards from './modules/cards';
import forms from './modules/forms';
import sliders from './modules/sliders';
import timer from './modules/timer';
import {
    showModal
} from './modules/modal';

window.addEventListener('DOMContentLoaded', function () {
    const modalTimer = setTimeout(() => showModal('.modal', modalTimer), 40000);
    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    modal('[data-modal]', '.modal', modalTimer);
    calc();
    cards();
    forms('form', modalTimer);
    sliders({
        container: '.offer__slider',
        slide: '.offer__slide',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        totalCounter: '#total',
        cuurentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'

    });
    timer('.timer', '2021-06-22');


});