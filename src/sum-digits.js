const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(number) {
// let arr = ('' + number).split('');
let s;
let array = (""+number).split("").map(Number);
while (array.length > 1){
  let summ = 0;
    for (let i=0; i<array.length; i++){
      summ = summ + array[i];
    }
  s = summ;
  array = [];
  array = (""+summ).split("").map(Number);
}

return s;
}

module.exports = {
  getSumOfDigits
};