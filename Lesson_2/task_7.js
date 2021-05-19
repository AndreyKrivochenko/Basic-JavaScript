// * Сравнить null и 0. Объяснить результат.

console.log(null < 0);  // false
console.log(null > 0);  // false
console.log(null == 0); // false
console.log(null >= 0); // true
console.log(null <= 0); // true

// Сравнения >, <, <=, >= преобразуют null к числу, к 0, поэтому >=, <= дают результат true,
// а нестрогое равенство == не приводит null ни к какому числу, поэтому сравнение 0 и ничто даёт результат false