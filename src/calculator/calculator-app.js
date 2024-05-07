import { renderTemplate } from './presentation/render-template/render-template';
import { operations } from './use-cases/operations';

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const CalculatorApp = (element) => {
    renderTemplate(element);
    operations();
}