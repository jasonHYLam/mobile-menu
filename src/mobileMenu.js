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

    function getBody() {
        return document.querySelector("body");
    }

    function getMoreElement() {
        return document.querySelector(".more");
    }

    function getBar() {
        return document.querySelector(".container");
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
        return (!getContainerForRemoved().lastChild);
    }

    function growMoreElement() {
        document.querySelector(".more").classList.add("grow");
    }

    function stopGrowMoreElement() {
        document.querySelector(".more").classList.remove("grow");
    }

    function hideLastMenuOption() {
        getLastMenuOption.classList.add('hidden');
    }

    function onresize(el) {
        let width = el[0].contentRect.width;
        console.log('width', width)

        if (width < 700) {
            console.log('width', width)
            growMoreElement();
            console.log('start growing');
        } else if (width >= 700) {
            console.log('width', width)
            stopGrowMoreElement();
            console.log('stop growing');
        }

        // TODO; look at logic
        // console.log('width', el[0].contentRect.width);
        // if (width < (widthOfMenuOption * 0.5)) {
        //     // get reference to last element of menu options, and remove it from this
        //     console.log('too small');
        //     addToRemovedArray(getLastMenuOption());
        //     removeOptionClass(getLastMenuOption());
        //     console.log(document.querySelector('.menu-option-container'));
        //     console.log(document.querySelector('.container-for-removed'));

        //     changeObserver(getLastMenuOption())
        //     console.log(getLastMenuOption());

        //     // lastMenuOption.classList.add('hidden');
        // } else if (width >= widthOfMenuOption * 1.5 ) {
        //     console.log('too large');
        //     // get reference to last element of removed array, and add it to previous
        //     // lastMenuOption.classList.remove('hidden');
        //     if (isRemovedArrayEmpty());
        //     else {
        //         console.log('this happens');
        //         addOptionClass(getLastRemoved());
        //         removeFromRemovedArray(getLastRemoved());
        //     }

        // }
    }
    const myObserver = new ResizeObserver(onresize);
    myObserver.observe(getBody());

    const moreObserver  = new ResizeObserver((el) => {
        const minWidth = 80;
        let lastMenuOption = document.querySelector(".menu-option"); // not sure if this works
        let lastVisibleMenuOption = document.querySelector(".menu-option:not(.hidden):last-child"); // not sure if this works
        console.log(el);
        console.log(lastMenuOption);
        console.log(lastVisibleMenuOption);



    })
    console.log(getMoreElement());
    moreObserver.observe(getMoreElement());
}