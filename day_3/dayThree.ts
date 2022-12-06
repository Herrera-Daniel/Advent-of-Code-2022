// Day 3

const dayThree = (): void => {

    const fs = require('fs');

    const input = fs.readFileSync('input/daythree/daythree.txt', 'ascii');

    const inputArray = input.split('\r\n');

    let sum = 0;
    inputArray.forEach((a: string, i: number) => {

        if ((i + 1) % 3 === 0) {
            inputArray[i].split('').forEach((s: string, si: number) => {
                if (inputArray[i - 1].includes(s) && inputArray[i - 2].includes(s) && !inputArray[i].substring(0, si).includes(s)) {
                    if (s.charCodeAt(0) - 96 >= 0) {
                        console.log(s);
                        sum += s.charCodeAt(0) - 96;
                        return;
                    }
                    if (s.charCodeAt(0) - 38 >= 0) {
                        console.log(s);
                        sum += s.charCodeAt(0) - 38;
                        return;
                    }
                }
            })
        }

    });
    console.log(sum);
};

dayThree();
