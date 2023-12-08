/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let largestNumber;
    
    numbers.map((number) => {
        if(parseFloat(number) > parseFloat(largestNumber) || largestNumber == undefined | NaN) largestNumber = number;
    })
    return largestNumber;
}

module.exports = findLargestElement;