const tabApp = (function () {

    "use strict";

    // cache DOM
    let DOM = {};

    // private
    function cacheDom() {
        DOM.wrapper = document.querySelector('.tab-holder');
        DOM.tabNav = DOM.wrapper.querySelector('ul');
        DOM.tabContentHolder = document.querySelector('.tab-content-holder');
        DOM.tabContentItem = DOM.tabContentHolder.querySelectorAll('div');
    }

    // bind event
    function bindEvent() {
        DOM.tabNav.addEventListener("click", tabActive);
    }

    function tabActive(e) {

        removeSiblingClass(DOM.tabContentItem, 'active');
        removeSiblingClass(document.querySelectorAll("li a"), 'active');

        const currentNav = e.target;
        const currentNavLink = currentNav.getAttribute("href").replace(/^#/, '');

        currentNav.classList.add('active');
        document.getElementById(currentNavLink).classList.add('active');
    }

    function removeSiblingClass(item, className) {
        item.forEach(element => {
            element.classList.remove(className);
        });
    }

    // public
    function init() {
        cacheDom();
        bindEvent();
        DOM.tabNav.firstElementChild.children[0].classList.add('active');
        DOM.tabContentHolder.firstElementChild.classList.add('active');
    }

    return {
        init: init
    }

})();