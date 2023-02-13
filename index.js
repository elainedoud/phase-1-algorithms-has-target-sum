function hasTargetSum(array, target){
  let sorted_array = array.sort(function(a, b){return a - b;})

  let left = 0;
  let right = sorted_array.length - 1;

  while (left <= right){
    const middle = Math.floor((left + right) / 2)
    const value = sorted_array[middle];
    if (value + sorted_array[left] === target){
      return true;
    }
    if (value + sorted_array[right] === target){
      return true;
    }
    if (value + sorted_array[middle - 1 ] === target){
      return true;
    }
    if (value + sorted_array[middle + 1 ] === target){
      return true;
    }
    return false;
    }
}


/*function hasTargetSum(array, target){
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] + array[i + 1] === target){
      return true;
    }
    if (array[i] + array[i+2] === target){
      return true;
    }
    if (array[i] + array[i+3] === target){
      return true;
    }
    if (array[i] + array[i+4] === target){
      return true;
    }
    if (array[i] + array[i+5] === target)
    {
      return true;
    }
    if (array[i] + array[i+6] === target){
      return true;
    }
return false;
}
}*/

/* The binary search idea is partiallly working; I think it's only going over half of the array*/

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  What do we need to do?
      Take in an array and a target
      Determine if any of the numbers in the array (as a pair) can be added together to equal the target?
      If yes, return true
      If no, return false
  How might we do this?
    one_array_item + two_array_item === target
    (I think this will return either truthy or falsey, which is what we want)
    But we only want it to return false if it was run through every combination
    Options - For Loop?
            - This would be super simple if the array only had two numbers
            - But how do we run through every possible combination?
            - Determine length of array
            - If/else statements if 1st & 2nd sum is target, return true
            - If 1st & 3rd sum is target, return true
            - Else return false
  What are edge cases?
      What if a number is duplicated in the array?
      What if there are only two numbers in the array?
      What is the array is very long? (10 numbers)
  Last four tests are mine
  Pseudocode
      Determine length of array
      Take the first number in array & determine if adding it to each additional number will
      equal the target
      If there are four items in the array, this could be three equations
      Then, take the second number in the array & determine if it & either third or fourth number
      equal the target (first and second number already compared)
      Then determine if third and fourth number equal the target
      Then exit
      Will probably need to use a forEach method
              for (let i = 0; i <array.length; i++){
                if (array[i] === array[i+1])
                    return true
                if (array[i] === array[i+2])
                    return true
                if (array[i]) === array[i+3])
                    returm true
                if (array[i] === array[i+3])
                    return true 
                else return false
              }
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 1, 5], 6));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([33, 1, 9], 6));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2], 3));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([17, 2, 9, 36, 22, 15, 10, 77, 33, 45], 4));
}

module.exports = hasTargetSum;
