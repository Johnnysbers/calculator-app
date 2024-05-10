export const operations = () => {
    const numberButtons    = document.querySelectorAll('[data-number]');
    const operatorButtons  = document.querySelectorAll('[data-operation]');

    const equalButton      = document.querySelector('[data-equal]');

    const plusMinuslButton = document.querySelector('[data-plus-minus]');

    const deleteButton     = document.querySelector('[data-delete]');
    const deleteAllButton  = document.querySelector('[data-delete-all]');
    const deleteOneButton  = document.querySelector('[data-delete-one]');

    const prevOpText       = document.querySelector('[data-prev-op]');
    const currentOpText    = document.querySelector('[data-current-op]');

    //TODO: Borrar todos las operaciones
    deleteAllButton.addEventListener('click', () => {
        currentOpText.innerHTML = '';
        prevOpText.innerHTML    = '';
    });

    //TODO: Borrar las operaciones del current
    deleteButton.addEventListener('click', () => {
        currentOpText.innerHTML = '';
    });

    deleteOneButton.addEventListener('click', () => {
        currentOpText.innerHTML = currentOpText.innerText.toString().slice(0, -1);
    })

    //TODO: Mostrar los valores numéricos
    numberButtons.forEach(button => {
        button.addEventListener('click', () => {
            let number = button.innerText;

            if (number === '.' && currentOpText.innerHTML.includes('.')) return;

            currentOpText.innerHTML += number;
        });
    });

    //TODO: Mostrar los operadores
    operatorButtons.forEach(button => {
        button.addEventListener('click', () => {
            let operator = button.innerText;

            if (currentOpText.innerText === '') return;

            if (prevOpText.innerText !== '') {
                calculate();
            }

            currentOpText.innerHTML += ' ' + operator;

            prevOpText.innerHTML = currentOpText.innerText;

            currentOpText.innerHTML = '';
        });
    });

    //TODO: equal
    equalButton.addEventListener('click', () => {
        calculate();
    })

    //TODO: computation
    const calculate = () => {
        let computation;
        const prev    = parseFloat(prevOpText.innerText);
        const current = parseFloat(currentOpText.innerText);
    
        if (isNaN(prev) || isNaN(current)) return;
    
        switch (operatorButtons.innerText) {
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case '*':
                computation = prev * current;
                break;
            case '/':
                computation = prev / current;
                break;
            default:
                return;
        }
        currentOpText.innerHTML   = computation;
        operatorButtons.innerText = undefined;
        prevOpText.innerHTML      = '';
    }
}