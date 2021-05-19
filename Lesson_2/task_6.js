// Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 — значения аргументов,
// operation — строка с названием операции. В зависимости от переданного значения выполнить одну из арифметических операций
// (использовать функции из пункта 5) и вернуть полученное значение (применить switch).

function plus(a, b) {
    return a + b;
}

function minus(a, b) {
    return a - b;
}

function mult(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case '+':
            return plus(arg1, arg2);
        case '-':
            return minus(arg1, arg2);
        case '*':
            return mult(arg1, arg2);
        case '/':
            return div(arg1, arg2);
    }
}

console.log(mathOperation(7, 6, '+'));