const collatz = require('../lib/02_cap/conllatz');

describe('collatz test', () => {

    'use strict';

    it('When number inserted result should be true', () => {
        expect([3,10,5,16,8,4,2,1]).toEqual(collatz.collatz(3));
        expect([24,12,6,3,10,5,16,8,4,2,1]).toEqual(collatz.collatz(24));
        expect([23,70,35,106,53,160,80,40,20,10,5,16,8,4,2,1]).toEqual(collatz.collatz(23));
        expect([12,6,3,10,5,16,8,4,2,1]).toEqual(collatz.collatz(12));
        expect([0]).toEqual(collatz.collatz(0));
    });

    it('When count and max inserted result should be', () => {

        let oneTo1000NumberSet = [];
        for(let i = 1; i <= 1000; i++){
            oneTo1000NumberSet.push(i);
        }

        expect(oneTo1000NumberSet).toEqual(collatz.numberSet(1000));
    });

    it('When numberWithLargestSequence method invoked, result should be', () =>{
       expect(871).toEqual(collatz.numberWithLargestSequence());
    });
});
