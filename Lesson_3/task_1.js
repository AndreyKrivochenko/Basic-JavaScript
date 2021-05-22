function simpleNum(num) {
    for (let i = 2; i < num; i++) {
        if ((num % i) === 0) {
            return false
        };
    };
    return true
};

function printSimpleNum(num) {
    log = '';
    let i = 1;
    while (i <= num) {
        if (simpleNum(i)) {
            log += i + ' '
        };
        i++;
    };
    console.log(log)
};

printSimpleNum(100);