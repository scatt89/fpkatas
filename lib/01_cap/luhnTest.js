module.exports = (() => {

    'use strict';

    const numberReverse = digits => digits.split('').reverse().map( x => +x );
    const sum = array => array.reduce((xs, x) => xs + x, 0);
    const odds = array => array.filter((num, index) => (index + 1) % 2 !== 0);
    const evens = array => array.filter((num, index) => (index + 1) % 2 === 0);
    const x2 = array => array.map(num => num * 2);
    const sumEach2Digits = array => array.map(num => num % 10 + Math.floor(num / 10));
    const lastDigit = num => num % 10;

    const test = number => {
        const oddSum = sum(odds(numberReverse(number)));
        const evenMult = x2(evens(numberReverse(number)));
        const eachMultDigitSum = sum(sumEach2Digits(evenMult));
        return lastDigit(oddSum + eachMultDigitSum) === 0;
    };
    return {
        test: test
    };
})();