export default function mobileMenu() {

    const body = document.querySelector('body');
    
    function createElement(elementType, textContent, parentElement, ...classes) {
        const newElement = document.createElement(elementType);
        newElement.textContent = textContent;
        classes.map(className => newElement.classList.add(className))
        parentElement.appendChild(newElement)
        return newElement;
    }

    function createMenuContainer() {
        const menuContainer = createElement('div', '', body, 'container');
        const menuOptionContainer = createElement('div', '', menuContainer, 'menu-option-container');
        const removed = createElement('div', '', menuContainer, 'container-for-removed', 'hidden');
        createElement('div', 'News', menuOptionContainer, 'menu-option');
        createElement('div', 'Sport', menuOptionContainer, 'menu-option');
        createElement('div', 'Weather', menuOptionContainer, 'menu-option');
        createElement('div', 'Shop', menuOptionContainer, 'menu-option');
        createElement('div', 'Earth', menuOptionContainer, 'menu-option');
        createElement('div', 'Travel', menuOptionContainer, 'menu-option');
        createElement('div', 'Capital', menuOptionContainer, 'menu-option',);
        createElement('div', 'More', menuContainer, 'more');
    }

    createMenuContainer();


    function getMoreElement() {
        return document.querySelector(".more");
    }

    const moreObserver  = new ResizeObserver((el) => {
        const MIN_WIDTH = 35;
        const MAX_WIDTH = 150;

        const visibleMenuOptions = document.querySelectorAll(".menu-option:not(.hidden)");
        const lastVisibleMenuOption = visibleMenuOptions[visibleMenuOptions.length -1];
        const firstHiddenOption = document.querySelector(".menu-option.hidden");
        
        if (el[0].contentRect.width < MIN_WIDTH) {
            lastVisibleMenuOption.classList.add('hidden');
        } else if (el[0].contentRect.width > MAX_WIDTH) { // TODO: make this work
            firstHiddenOption.classList.remove('hidden');
        }
    })
    moreObserver.observe(getMoreElement());
}