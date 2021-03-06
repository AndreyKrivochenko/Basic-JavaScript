// Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, надо получить на выходе объект,
// в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например, для числа 245 надо получить 
// следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее
// сообщение с помощью console.log и вернуть пустой объект.

function convertNum(num) {
    obj = {}
    num = Math.abs(num);
    if (num > 999) {
        console.log('Число больше 999');
        return obj;
    }
    obj.ones = num % 10;
    obj.tens = Math.floor(num / 10) % 10;
    obj.hundreds = Math.floor(num / 100) % 10;
    return obj;
}

console.log(convertNum(874));