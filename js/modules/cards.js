import {
    getResource
} from '../services/services';

function cards() {
    // CardMenu

    class CardMenu {
        constructor(src, alt, title, descr, price, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.transver = 28;
            this.price = price;
            this.parent = document.querySelector(parentSelector);
            this.classes = classes;
            this.change();
        }
        change() {
            this.price *= this.transver;
        }
        render() {
            const element = document.createElement('div');
            this.element = 'menu__item';
            if (this.classes.length === 0) {
                element.classList.add(this.element);
            } else {
                this.classes.forEach(className => element.classList.add(className));
            }
            element.innerHTML = `
            <img src=${this.src} alt=${this.alt}>
            <h3 class="menu__item-subtitle">${this.title}</h3>
            <div class="menu__item-descr">${this.descr}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
                <div class="menu__item-cost">Цена:</div>
                <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
            </div>    
        `;
            this.parent.append(element);
        }
    }

    getResource('http://localhost:3000/menu')
        .then(data => {
            data.forEach(({
                img,
                altimg,
                title,
                descr,
                price
            }) => {
                new CardMenu(img, altimg, title, descr, price, '.menu .container').render();
            });
        });


}

export default cards;