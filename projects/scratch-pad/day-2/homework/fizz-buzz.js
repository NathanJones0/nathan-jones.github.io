// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
    // create a for loop to print numbers 1-100 to  the console
  for (var i = 1; i <= 100; i++)
  console.log(i);
  // create an if statement, if i has a mupltiple of 3 and 5 print 'FizzBuzz'
  if ((i % 3 == 0) && (i % 5 == 0)){
    console.log('FizzBuzz')
    // create an else if statement, if i is a multiple of 3, print Fizz
  } else if (i % 3 == 0){
    console.log('Fizz')
    // create another else if statement, if i is a multiple of 5, print Buzz
  } else if (i % 5 == 0){
    console.log('Buzz')
    // create an else statement that will print every other number normally
  }  else{
    console.log(i);
  }


    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}