// Day 3

const dayThree = () => {

    const fs = require('fs');

    const input = fs.readFileSync('input/daythree/daythree.txt', 'ascii');
    console.log(input);

    const array = input.split('\r\n');

    let sum = 0;
    console.log('A'.charCodeAt(0) - 38);
    array.forEach((a: string) => {
        const first = a.substring(0, a.length / 2);
        const second = a.substring(a.length / 2);
        let commonLetter = '';

        first.split('').forEach((f: string, index: number) => {
            if (second.includes(f) && !first.substring(0, index).includes(f)) {
                if (f.charCodeAt(0) - 96 >= 0) {
                    sum += f.charCodeAt(0) - 96;
                    console.log(f, f.charCodeAt(0) - 96);
                    return;
                }
                if (f.charCodeAt(0) - 38 >= 0) {
                    sum += f.charCodeAt(0) - 38;
                    console.log(f, f.charCodeAt(0) - 38);
                    return;
                }
            }
        });
    });
    console.log(sum);
};

dayThree();