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
    createElement('div', 'News', menuContainer, 'menu-option');
    createElement('div', 'Sport', menuContainer, 'menu-option');
    createElement('div', 'Weather', menuContainer, 'menu-option');
    createElement('div', 'Shop', menuContainer, 'menu-option');
    createElement('div', 'Earth', menuContainer, 'menu-option');
    createElement('div', 'Travel', menuContainer, 'menu-option');
    createElement('div', 'Capital', menuContainer, 'menu-option');
    createElement('div', 'More', menuContainer, 'menu-option', 'more');

    const containerElement = document.querySelector(".container");
    console.log(containerElement)

    function onresize(el) {
        console.log('width', el[0].contentRect.width);
    }
    const myObserver = new ResizeObserver(onresize);
    myObserver.observe(containerElement);

    
}