export default function mobileMenu() {

    const body = document.querySelector('body');
    
    function createElement(elementType, textContent, parentElement, ...classes) {
        const newElement = document.createElement(elementType);
        newElement.textContent = textContent;
        classes.map(className => newElement.classList.add(className))
        parentElement.appendChild(newElement)
        return newElement;
    }

    const menuContainer = createElement('div', '', body, 'container');
    const menuOptionContainer = createElement('div', '', menuContainer, 'menu-option-container');
    createElement('div', 'News', menuOptionContainer, 'menu-option');
    createElement('div', 'Sport', menuOptionContainer, 'menu-option');
    createElement('div', 'Weather', menuOptionContainer, 'menu-option');
    createElement('div', 'Shop', menuOptionContainer, 'menu-option');
    createElement('div', 'Earth', menuOptionContainer, 'menu-option');
    createElement('div', 'Travel', menuOptionContainer, 'menu-option');
    createElement('div', 'Capital', menuOptionContainer, 'menu-option');
    createElement('div', 'More', menuContainer, 'more');

    const containerElement = document.querySelector(".container");

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

    console.log(containerElement[-1]);
    function onresize(el) {
        let width = el[0].contentRect.width;

        console.log('width', el[0].contentRect.width);
        if (width < 500) {
            lastMenuOption.classList.add('hidden');
        } else if (width >= 500) {
            lastMenuOption.classList.remove('hidden');

        }
    }
    const myObserver = new ResizeObserver(onresize);
    myObserver.observe(containerElement);

    
}