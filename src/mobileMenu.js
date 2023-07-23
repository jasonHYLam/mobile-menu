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
    createElement('div', 'News', menuContainer, 'menuOption');
    createElement('div', 'Sport', menuContainer, 'menuOption');
    createElement('div', 'Weather', menuContainer, 'menuOption');
    createElement('div', 'Shop', menuContainer, 'menuOption');
    createElement('div', 'Earth', menuContainer, 'menuOption');
    createElement('div', 'Travel', menuContainer, 'menuOption');
    createElement('div', 'Capital', menuContainer, 'menuOption');
    createElement('div', 'More', menuContainer, 'menuOption', 'more');
    
}