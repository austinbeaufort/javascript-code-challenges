const R = require('ramda');


const checkDivisibility = (num1, num2) => num1 % num2 === 0
const curriedCheckDivisibility = R.curry(checkDivisibility)


utilities = {
    isDivisibleBy2: curriedCheckDivisibility(R.__, 2),
    isDivisibleBy3: curriedCheckDivisibility(R.__, 3),
    isDivisibleBy4: curriedCheckDivisibility(R.__, 4),
    isDivisibleBy5: curriedCheckDivisibility(R.__, 5),
    isDivisibleBy6: curriedCheckDivisibility(R.__, 6),
    isDivisibleBy7: curriedCheckDivisibility(R.__, 7),
    isDivisibleBy8: curriedCheckDivisibility(R.__, 8),
    isDivisibleBy9: curriedCheckDivisibility(R.__, 9),
}


module.exports = utilities

