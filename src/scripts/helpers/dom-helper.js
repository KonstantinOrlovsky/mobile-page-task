import {stringToHTML} from './parcer-helper'

export function setInnerHtml(selector, value) {
    const element = document.querySelector(selector);
    
    if (element && value) {
        let parsed = stringToHTML(value);
        element.textContent = parsed.textContent;
    }
}

export function setTextContent(selector, value) {
    const element = document.querySelector(selector);
    
    if (element && value) {
        let parsed = stringToHTML(value);
        element.textContent = parsed.textContent;
    }
}

export function setStyleVariable(variableName, value) {
    const element = document.querySelector(':root')
    
    if (value && variableName) {
        element.style.setProperty(variableName, value);
    }
}