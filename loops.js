/*****************************
 * Loops & Iterations
 */

 for (i = 0; i < 10; i++) {
    console.log(i);
 }

 var john = ['john', 'Mark', 1990, 'student', 'single'];

 // Using the for loop
 for (i = 0; i < john.length; i++) {
    console.log(john[i]);
 }

  // Using the while loop
 var i = 0;
 while (i < john.length) {
     console.log(john[i]);
     i++;
 }


// Continue & Break Statement
// Code below only logs values of the array that are string values. 
 var tope = ['tope', 'Adedayo', 1990, 'student', false, 'single'];
 for (i = 0; i < tope.length; i++) {
     if (typeof tope[i] !== 'string') {
         continue;
     }
    console.log(tope[i]);
 }

// Code below only logs first set of values of the array that are string values. 
 var tope = ['tope', 'Adedayo', 1990, 'student', false, 'single'];
 for (i = 0; i < tope.length; i++) {
     if (typeof tope[i] !== 'string') {
         break;
     }
    console.log(tope[i]);
 }