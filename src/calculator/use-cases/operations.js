export const operations = () => {
    // Recuperamos los botones presionados
    const numberButtons    = document.querySelectorAll('[data-number]');
    const operationButtons = document.querySelectorAll('[data-operation]');

    const equalButton      = document.querySelector('[data-equal]');

    const plusMinusButton  = document.querySelector('[data-plus-minus]');

    const deleteAllButton  = document.querySelector('[data-delete-all]');
    const deleteButton     = document.querySelector('[data-delete]');
    const deleteOneButton  = document.querySelector('[data-delete-one]');

    const prevOpText       = document.querySelector('[data-prev-op]');
    const currentOpText    = document.querySelector('[data-current-op]');

    // Variables
    let currentOperation = '';
    let prevOperation    = '';
    let operator         = undefined;

    // Funciones de la calculadora
    const deleteAll = () => {
        currentOperation = '';
        prevOperation    = '';
        operator         = undefined;
        updateDisplay();
    }

    const deleteCurrent = () => {
        currentOperation = '';
        updateDisplay();
    }

    const deleteOne = () => {
        currentOperation = currentOperation.toString().slice(0, -1);
        updateDisplay();
    }

    const plusMinus = () => {
        if (Math.sign(currentOperation) === 1) {
            currentOperation = -Math.abs(currentOperation);
            currentOpText.innerHTML = -Math.abs(currentOperation);
        } else {
            currentOperation = Math.abs(currentOperation);
            currentOpText.innerHTML = Math.abs(currentOperation);
        }
    }

    const appendNumber = (number) => {
        if (number === '.' && currentOpText.innerHTML.includes('.')) return;
        currentOperation = currentOperation.toString() + number.toString();
    }

    const chooseOperation = (op) => {
        if (currentOperation === '') return;

        if (prevOperation !== '') {
            compute();
        }

        operator         = op;
        prevOperation    = currentOperation;
        currentOperation = '';
    }

    const compute = () => {
        let computation;
        const prev    = parseFloat(prevOperation);
        const current = parseFloat(currentOperation);

        if (isNaN(prev) || isNaN(current)) return;

        switch (operator) {
            case '+':
                computation = prev + current;
                break;
            case '−':
                computation = prev - current;
                break;
            case '×':
                computation = prev * current;
                break;
            case '÷':
                computation = prev / current;
                break;
            default:
                return;
        }

        currentOperation = computation;
        prevOperation    = '';
        operator         = undefined;
    }

    const getDisplayNumber = (number) => {
        const stringNumber  = number.toString();

        const integerDigits = parseFloat(stringNumber.split('.')[0]);
        const decimalDigits = stringNumber.split('.')[1];
        
        let integerDisplay;

        if (isNaN(integerDigits)) {
            integerDisplay = '';
        } else {
            integerDisplay = integerDigits.toLocaleString('es', {maximumFractionDigits: 0})
        }

        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`;
        } else {
            return integerDisplay;
        }
    }

    const updateDisplay = () => {
        currentOpText.innerText = getDisplayNumber(currentOperation);

        if (operator != null) {
            prevOpText.innerText = `${getDisplayNumber(prevOperation)} ${operator}`;
        } else {
            prevOpText.innerText = '';
        }
    }

    // Eventos
    deleteAllButton.addEventListener('click', deleteAll);
    deleteButton.addEventListener('click', deleteCurrent);
    deleteOneButton.addEventListener('click', deleteOne);
    plusMinusButton.addEventListener('click', plusMinus);

    numberButtons.forEach(number => {
        number.addEventListener('click', () => {
            appendNumber(number.innerText);
            updateDisplay();
        });
    });

    operationButtons.forEach(op => {
        op.addEventListener('click', () => {
            chooseOperation(op.innerText);
            updateDisplay();
        });
    });

    equalButton.addEventListener('click', () => {
        compute();
        updateDisplay();
    });
}