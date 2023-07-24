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
    console.log(document.querySelector(".menu-option-container"));


    // if length reaches certain point
    // if nodelist length changes

    function checkToChange() {
        const menuOptionContainer = document.querySelector(".menu-option-container");
        const lastOption = menuOptionContainer.lastChild;

    }

    function getContainerForRemoved() {
        return document.querySelector(".container-for-removed")

    }

    function getLastRemoved() {
        return getContainerForRemoved.lastChild;
    }

    function getMenuOptionContainer() {
        return document.querySelector(".menu-option-container");
    }

    function getLastMenuOption() {
        return getMenuOptionContainer().lastChild;
    }

    function addOptionClass() {
        getMenuOptionContainer().appendChild(getLastRemoved())
    }

    function removeOptionClass() {
        getMenuOptionContainer().removeChild(getMenuOptionContainer().lastChild)
    }

    function addToRemovedArray() {
        console.log(getContainerForRemoved());
        console.log(getLastMenuOption());
        getContainerForRemoved().appendChild(getLastMenuOption());
    }

    function removeFromRemovedArray() {
        getContainerForRemoved().removeChild(getContainerForRemoved().lastChild)
    }

    function isRemovedArrayEmpty() {
        console.log(getContainerForRemoved());
        console.log(getContainerForRemoved().lastChild);
        return (!getContainerForRemoved().lastChild);
    }

    function onresize(el) {

        const initialWidth = el[0].contentRect.width;
        let width = el[0].contentRect.width;

        console.log('width', el[0].contentRect.width);
        if (width < 500) {
            // get reference to last element of menu options, and remove it from this
            console.log('too small');
            addToRemovedArray(getLastMenuOption());
            removeOptionClass(getLastMenuOption());
            console.log(document.querySelector('.menu-option-container'));
            console.log(document.querySelector('.container-for-removed'));

            // lastMenuOption.classList.add('hidden');
        } else if (width >= 500) {
            console.log('too large');
            // get reference to last element of removed array, and add it to previous
            // lastMenuOption.classList.remove('hidden');
            if (isRemovedArrayEmpty());
            else {
                console.log('this happens');
                addOptionClass(getLastRemoved());
                removeFromRemovedArray(getLastRemoved());
            }

        }
    }
    const myObserver = new ResizeObserver(onresize);
    myObserver.observe(getMenuOptionContainer());
}