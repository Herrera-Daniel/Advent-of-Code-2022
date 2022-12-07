// Day 4

const dayFour = () => {
    const fs = require('fs');
    const input = fs.readFileSync('input/dayfour/dayfour.txt', 'ascii');

    const array = input.split('\r\n').filter((a: string) => a.length !== 0);

    let sum = 0;

    array.forEach((a: string) => {

        const first = a.split(',');
        first.forEach((f: string, i: number) => {

            if ((i + 1) % 2 === 0) {
                const nums = f.split('-');
                const num1 = parseInt(first[0].split('-')[0])
                const num2 = parseInt(first[0].split('-')[1]);
                const num3 = parseInt(nums[0]);
                const num4 = parseInt(nums[1]);
                if (num3 >= num1 && num4 <= num2) {
                    sum++;
                }
                else if (num1 >= num3 && num2 <= num4) {
                    sum++;
                }
            }
        });
    });
    console.log(sum);
};
