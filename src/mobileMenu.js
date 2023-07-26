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
        const moreElementContainer = createElement('div', '', menuContainer, 'moreElementContainer');
        const moreElement = createElement('div', 'More', menuContainer, 'more');
        const dropDownContainer = createElement('div', '', moreElement, 'drop-down-container', 'hidden')
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

    function removeLastOptionToDropDownContainer() {
        getDropDownContainer().removeChild(getDropDownContainer().lastChild)
    }

    // Track changes to 'more' element's width
    const moreObserver  = new ResizeObserver((el) => {
        const MIN_WIDTH = 52;
        const MAX_WIDTH = 150;

        const visibleMenuOptions = document.querySelectorAll(".menu-option:not(.hidden)"); // why is the selector for not hidden not working
        const lastVisibleMenuOption = visibleMenuOptions[visibleMenuOptions.length -1];
        const firstHiddenOption = document.querySelector(".menu-option.hidden");
        
        if (el[0].contentRect.width < MIN_WIDTH) {
            lastVisibleMenuOption.classList.add('hidden');
            const clone = lastVisibleMenuOption.cloneNode(true)
            appendOptionToDropDownContainer(clone);
        } else if (el[0].contentRect.width > MAX_WIDTH) {
            firstHiddenOption.classList.remove('hidden');
            removeLastOptionToDropDownContainer();
        }
    })
    moreObserver.observe(getMoreElement());

    function showElement(el) {
        el.classList.remove('hidden');
    }

    function showChildNodes(el) {
        const children = el.children;
        for (const child of children) {
            showElement(child)
        }
    }

    function hideElement(el) {
        el.classList.add('hidden');
    }

    function hideChildNodes(el) {
        const children = el.children;
        for (const child of children) {
            hideElement(child)
        }
    }

    // Detect hover over the 'more' element.
    getMoreElement().addEventListener('mouseover', () => {
        showElement(getDropDownContainer());
        showChildNodes(getDropDownContainer());
    })

    getMoreElement().addEventListener('mouseleave', () => {
        hideElement(getDropDownContainer());
        hideChildNodes(getDropDownContainer());
    })
}