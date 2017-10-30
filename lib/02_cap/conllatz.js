module.exports = (() => {
    'use strict';

    const isOdd = x => x % 2 !== 0;

    const collatz = x => {

        if(x === 0){ return [0]; }
        if(x > 1){
            if(isOdd(x)){
                return [x].concat(collatz(3*x+1));
            } else{
                return [x].concat(collatz(x/2));
            }
        }
        return [1];
    };

    const numberSet = (size) => {
        return Array(size).fill().map((_, index) => index+1);
    };

    const numberWithLargestSequence = () => {
        let numberAndSequenceLength = {
            number: 0,
            sequenceLength: 0
        };

        numberSet(1000).forEach(n => {
            let sequenceLength = collatz(n).length;
            if(sequenceLength > numberAndSequenceLength.sequenceLength){
                numberAndSequenceLength = {number: n, sequenceLength: sequenceLength};
            }
        });

        return numberAndSequenceLength.number;
    };

    return {
        collatz: collatz,
        numberSet: numberSet,
        numberWithLargestSequence: numberWithLargestSequence
    };
})();