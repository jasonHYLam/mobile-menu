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
        createElement('div', 'News', menuOptionContainer, 'menu-option');
        createElement('div', 'Sport', menuOptionContainer, 'menu-option');
        createElement('div', 'Weather', menuOptionContainer, 'menu-option');
        createElement('div', 'Shop', menuOptionContainer, 'menu-option');
        createElement('div', 'Earth', menuOptionContainer, 'menu-option');
        createElement('div', 'Travel', menuOptionContainer, 'menu-option');
        createElement('div', 'Capital', menuOptionContainer, 'menu-option',);
        const moreElement = createElement('div', 'More', menuContainer, 'more');
        createElement('div', '', moreElement, 'drop-down-container')
    }

    createMenuContainer();


    function getMoreElement() {
        return document.querySelector(".more");
    }

    function getDropDownContainer() {
        return document.querySelector(".drop-down-container");
    }

    function appendOptionToDropDownContainer(option) {
        getDropDownContainer().appendChild(option)
    }

    // Track changes to 'more' element's width
    const moreObserver  = new ResizeObserver((el) => {
        const MIN_WIDTH = 35;
        const MAX_WIDTH = 150;

        const visibleMenuOptions = document.querySelectorAll(".menu-option:not(.hidden)");
        const lastVisibleMenuOption = visibleMenuOptions[visibleMenuOptions.length -1];
        const firstHiddenOption = document.querySelector(".menu-option.hidden");
        
        if (el[0].contentRect.width < MIN_WIDTH) {
            const clone = lastVisibleMenuOption.cloneNode()
            appendOptionToDropDownContainer(clone);
            lastVisibleMenuOption.classList.add('hidden');
        
        } else if (el[0].contentRect.width > MAX_WIDTH) {
            firstHiddenOption.classList.remove('hidden');
        }
    })
    moreObserver.observe(getMoreElement());

    // Detect hover over the 'more' element.
    getMoreElement().addEventListener('mouseover', (e) => {
        console.log(e.target);
    })
}