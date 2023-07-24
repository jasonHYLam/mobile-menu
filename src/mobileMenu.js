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
        createElement('div', 'Capital', menuOptionContainer, 'menu-option');
        createElement('div', 'More', menuContainer, 'more');
    }

    createMenuContainer();


    // if length reaches certain point
    // if nodelist length changes

    function checkToChange() {
        const menuOptionContainer = document.querySelector(".menu-option-container");
        const lastOption = menuOptionContainer.lastChild;

    }

    function getLastRemoved() {
        const removedElements = document.querySelector(".removed")
    }
    const menuOptionContainer = document.querySelector(".menu-option-container");

    const menuOptions = document.querySelectorAll(".menu-option");
    console.log(menuOptions)
    let lastMenuOption = menuOptions[menuOptions.length -1];

    function addOptionClass(el) {
        el.classList.add('menu-option')

    }

    function removeOptionClass(el) {
        el.classList.remove('menu-option')

    }

    function addToRemovedArray(el) {
        el.classList.add('removed')

    }

    function removeFromRemovedArray(el) {
        el.classList.remove('removed')

    }

    console.log(menuOptionContainer[-1]);
    function onresize(el) {
        let width = el[0].contentRect.width;

        console.log('width', el[0].contentRect.width);
        if (width < 500) {
            // get reference to last element of menu options, and remove it from this

            lastMenuOption.classList.add('hidden');
        } else if (width >= 500) {
            // get reference to last element of removed array, and add it to previous
            lastMenuOption.classList.remove('hidden');

        }
    }
    const myObserver = new ResizeObserver(onresize);
    myObserver.observe(menuOptionContainer);

    
}