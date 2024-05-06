import 'normalize.css';
import './style.css';

import { calculatorApp } from './src/calculator/calculator-app';

document.querySelector('#app').innerHTML = `
  <h1>Calculator App</h1>
  <div class="calc-container"></div>
`;

const element = document.querySelector('.calc-container');

calculatorApp(element);