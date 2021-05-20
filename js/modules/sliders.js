function sliders({
    container,
    slide,
    nextArrow,
    prevArrow,
    totalCounter,
    cuurentCounter,
    wrapper,
    field
}) {
    //slider

    const slides = document.querySelectorAll(slide),
        slider = document.querySelector(container),
        prevBtn = document.querySelector(prevArrow),
        nextBtn = document.querySelector(nextArrow),
        current = document.querySelector(cuurentCounter),
        total = document.querySelector(totalCounter),
        sliderWrapper = document.querySelector(wrapper),
        slideInner = document.querySelector(field),
        width = window.getComputedStyle(sliderWrapper).width;


    let slideIndex = 1,
        offset = 0;


    if (slides.length < 10) {
        current.textContent = `0${slideIndex}`;
        total.textContent = `0${slides.length}`;
    } else {
        current.textContent = slideIndex;
        total.textContent = slides.length;
    }

    slides.forEach(slid => slid.style.width = width);

    slideInner.style.display = 'flex';
    slideInner.style.width = 100 * slides.length + '%';
    sliderWrapper.style.overflow = 'hidden';

    slider.style.position = 'relative';
    const indicators = document.createElement('ol'),
        dots = [];
    indicators.classList.add('carousel-data');
    indicators.style.cssText = `
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 15;
        display: flex;
        justify-content: center;
        margin-right: 15%;
        margin-left: 15%;
        list-style: none;

    `;
    slider.append(indicators);

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-dot-To', i + 1);
        dot.style.cssText = `
            box-sizing: content-box;
            flex: 0 1 auto;
            width: 30px;
            height: 6px;
            margin-right: 3px;
            margin-left: 3px;
            cursor: pointer;
            background-color: #fff;
            background-clip: padding-box;
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
            opacity: .5;
            transition: opacity .6s ease;  
        `;
        indicators.append(dot);
        dots.push(dot);

        if (i === 0) {
            dot.style.opacity = 1;
        }

    }

    const dotsOpacity = () => {

        dots.forEach(dot => dot.style.opacity = '0.5');
        dots[slideIndex - 1].style.opacity = 1;
    };

    const checkLengthIndex = () => {

        if (slides.length < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }
    };

    const getWidthScreen = +width.slice(0, width.length - 2);
    // or
    function deleteNotDigits(str) {
        return +str.replace(/\D/g, '');
    }


    const slideInnerOffest = () => {
        slideInner.style.transform = `translateX(-${offset}px)`;
    };




    nextBtn.addEventListener('click', () => {
        if (offset === deleteNotDigits(width) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += getWidthScreen;
        }

        slideInnerOffest();

        if (slideIndex === slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }


        checkLengthIndex();
        dotsOpacity();

    });

    prevBtn.addEventListener('click', () => {
        if (offset === 0) {
            offset = getWidthScreen * (slides.length - 1);
        } else {
            offset -= getWidthScreen;
        }

        slideInnerOffest();

        if (slideIndex === 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }

        checkLengthIndex();
        dotsOpacity();
    });

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-dot-To');
            slideIndex = slideTo;
            offset = getWidthScreen * (slideTo - 1);

            slideInnerOffest();
            checkLengthIndex();
            dotsOpacity();
        });
    });

}
export default sliders;