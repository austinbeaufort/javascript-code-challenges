const R = require('ramda')
const { isDivisibleBy3, isDivisibleBy5 } = require('../util')


const isDivisibleBy3Or5 = R.either(isDivisibleBy3, isDivisibleBy5)


const main = () => {
    const numsDivisibleBy3Or5 = R.range(1, 1000).filter(num => isDivisibleBy3Or5(num))
    const total = R.sum(numsDivisibleBy3Or5)
    return total
}

console.log(main())


/* 
Notes:

Insead of using (num % 3 === 0 || num % 5 === 0) inside of filter, 
I opted to create the "divisibleBy" functions in a separate file for use in future problems.

It required more upfront work, but will make future problems easier.

*/