// Day 5

const dayFive = () => {
    const fs = require('fs');

    const input = fs.readFileSync('input/dayfive/dayfive.txt', 'ascii');

    const array = input.split('\r\n');

    let initialState: string[][] = [];
    array.forEach((line: string) => {

        line.split('').forEach((a: string, i: number) => {
            if (a.charCodeAt(0) - 65 > 0 && a.charCodeAt(0) - 65 < 26) {

                const index = Math.floor(i / 4);
                if (initialState[index] !== undefined) {
                    initialState[index] = [a, ...initialState[index]];
                }
                else {
                    initialState[index] = [a];
                }
            }
        });
        if (line.includes("move")) {
            const nums = line.split(' ').filter(b => !isNaN(parseInt(b)));
            for (let i = 0; i < parseInt(nums[0]); i++) {
                initialState[parseInt(nums[2]) - 1].push(initialState[parseInt(nums[1]) - 1].pop()!);
            }
        }
    });
    console.log(initialState.map(i => i.length !== 0 && i.pop()).join(''));
};

dayFive();
