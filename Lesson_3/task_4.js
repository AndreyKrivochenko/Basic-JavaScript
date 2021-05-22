function printPiramid(num) {
    for (let i = 1; i <= num; i++) {
        log = '';
        for (j = 1; j <= i; j++) {
            log += '*'
        };
        console.log(log)
    }
};

printPiramid(20);