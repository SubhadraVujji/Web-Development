<script>
        let display = document.getElementById('display');
        let currentOperation = '';
        let firstOperand = '';
        let secondOperand = '';
        let resultDisplayed = false;

        function appendNumber(number) {
            if (resultDisplayed) {
                clearDisplay();
                resultDisplayed = false;
            }
            display.value += number;
        }

        function setOperation(operation) {
            if (display.value === '') return;
            if (currentOperation) calculateResult();
            firstOperand = display.value;
            currentOperation = operation;
            display.value = '';
        }

        function calculateResult() {
            if (display.value === '') return;
            secondOperand = display.value;
            let result;
            switch (currentOperation) {
                case '+':
                    result = parseFloat(firstOperand) + parseFloat(secondOperand);
                    break;
                case '-':
                    result = parseFloat(firstOperand) - parseFloat(secondOperand);
                    break;
                case '*':
                    result = parseFloat(firstOperand) * parseFloat(secondOperand);
                    break;
                case '/':
                    result = parseFloat(firstOperand) / parseFloat(secondOperand);
                    break;
                default:
                    return;
            }
            display.value = result;
            currentOperation = '';
            resultDisplayed = true;
        }

        function clearDisplay() {
            display.value = '';
            firstOperand = '';
            secondOperand = '';
            currentOperation = '';
            resultDisplayed = false;
        }
    </script>
