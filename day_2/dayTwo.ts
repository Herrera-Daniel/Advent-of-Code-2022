// Day 2

// const rock = [['A', 'X'], ['C', 'Z'], ['B', 'Y']]
// const paper = [['B', 'Y'], ['A', 'X'], ['C', 'Z']]
// const scissors = [['C', 'Z'], ['B', 'Y'], ['A', 'X']]

const perms = {
    // win (Z) = 6 draw (Y) = 3 lose (X) = 0
    ['A X']: {
        result: 3
    },
    ['A Y']: {
        result: 4
    },
    ['A Z']: {
        result: 8
    },
    ['B X']: {
        result: 1
    },
    ['B Y']: {
        result: 5
    },
    ['B Z']: {
        result: 9
    },
    ['C X']: {
        result: 2
    },
    ['C Y']: {
        result: 6
    },
    ['C Z']: {
        result: 7
    }

}

const dayTwo = () => {
    const fs = require('fs');

    const input = fs.readFileSync('input/daytwo/daytwo.txt', 'ascii');
    const array = input.split('\r\n').filter((a: string) => a.trim().length !== 0);

    let sum = 0;
    array.forEach((a: string) => {
        console.log(a);
        // @ts-ignore
        sum += perms[a].result
    })
    console.log(sum);

}

dayTwo();
