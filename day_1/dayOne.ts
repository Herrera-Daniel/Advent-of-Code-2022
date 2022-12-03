// Day 1

const dayOne = () => {
    const fs = require('fs');

    const input = fs.readFileSync('input/dayone/dayone.txt', 'ascii');
// console.log(input);
// const input = '1000' +
//     '2000' +
//     '' +
//     '3000';
// console.log(input);
//
    const array = input.split('\r\n');
    console.log(array);

    let firstMost = 0;
    let secondMost = 0;
    let thirdMost = 0;
    let localMax = 0;

    console.log(input);
    array.forEach((a: any, i: number) => {
        const number = parseInt(a);
        if (Number.isInteger(number)) {
            localMax = localMax + parseInt(a);
            console.log(localMax, 'hello');
        }
        if (Number.isNaN(parseInt(a))) {
            console.log(parseInt(a), firstMost, secondMost, thirdMost, localMax);
            localMax = 0;
        }
        if (localMax > firstMost) {
            thirdMost = secondMost;
            secondMost = firstMost;
            firstMost = localMax;
        }
        if (localMax < firstMost && localMax > secondMost) {
            thirdMost = secondMost;
            secondMost = localMax;
        }
        if (localMax < firstMost && localMax < secondMost && localMax > thirdMost) {
            thirdMost = localMax;
        }
    });

    console.log(firstMost, secondMost, thirdMost);
    console.log(firstMost + secondMost + thirdMost);
};

dayOne();
