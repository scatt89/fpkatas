module.exports = (() => {

    const test = number => {
        const numberReverse = number.split('').reverse();
        const oddSum = numberReverse.filter((num, index) => (index + 1) % 2 !== 0).reduce((xs, x) => xs + parseInt(x), 0);
        const evenMult = numberReverse.filter((num, index) => (index + 1) % 2 === 0)
            .forEach(num => num * 2);
        console.log(evenMult);
        return true;
    };
    return {
        test: test
    }
})();