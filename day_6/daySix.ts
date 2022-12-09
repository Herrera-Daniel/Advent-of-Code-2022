// Day 6

const daySix = () => {
    const fs = require('fs');

    const input: string = fs.readFileSync('input/daysix/daysix.txt', 'ascii');

    console.log(input);

    let marker = 0;
    input.split('').filter(a => !a.includes('\r') && !a.includes('\n')).forEach((a: string, i: number) => {
        if (i > 13) {
            const search = input.substring(i - 13, i + 1);
            if (!/(.).*\1/.test(search) && marker === 0) {
                marker = i + 1;
            }
        }
    });
    console.log(marker);
};

daySix();
