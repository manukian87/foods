function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
    // tabContent

    const tabContent = document.querySelectorAll(tabsContentSelector),
        tabs = document.querySelectorAll(tabsSelector),
        parentsTab = document.querySelector(tabsParentSelector);


    function hideTabContent() {
        tabContent.forEach(content => {
            content.classList.add('hide');
            content.classList.remove('show', 'fade');
        });

        tabs.forEach(tab => {
            tab.classList.remove(activeClass);
        });
    }

    function showTabContent(i = 0) {
        tabContent[i].classList.add('show', 'fade');
        tabContent[i].classList.remove('hide');
        tabs[i].classList.add('activeClass');

    }
    hideTabContent();
    showTabContent();

    parentsTab.addEventListener('click', (e) => {
        const target = e.target;
        if (target && target.classList.contains(tabsSelector.slice(1))) {
            tabs.forEach((item, i) => {
                if (target === item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

}

export default tabs;