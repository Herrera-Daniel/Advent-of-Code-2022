// Day 4

const dayFour = () => {
    const fs = require('fs');
    const input = fs.readFileSync('input/dayfour/dayfour.txt', 'ascii');

    const array = input.split('\r\n').filter((a: string) => a.length !== 0);

    let sum = 0;

    array.forEach((a: string) => {

        const first = a.split(',');
        console.log(first);
        first.forEach((f: string, i: number) => {

            if ((i + 1) % 2 === 0) {
                const nums = f.split('-');
                const num1 = parseInt(first[0].split('-')[0])
                const num2 = parseInt(first[0].split('-')[1]);
                const num3 = parseInt(nums[0]);
                const num4 = parseInt(nums[1]);
                if (num3 <= num2 && (num4 >= num1 || num4 >= num2)) {
                    console.log(num1, num2, num3, num4, '3');
                    sum++;
                }
            }
        });
    });
    console.log(sum);
};
