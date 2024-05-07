import './render-template.css';

import templateHtml from './render-template.html?raw';

let template;

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderTemplate = (element) => {
    template = document.createElement('div');
    template.innerHTML = templateHtml;
    template.className = 'calc-template';
    
    element.append(template);
}