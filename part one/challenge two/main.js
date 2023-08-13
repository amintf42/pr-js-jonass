// Coding Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and 
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message 
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement �
// GOOD LUCK � 
 
const massJohn = 78;
const heightJohn = 1.69;
const massMarks = 92;
const heightMarks = 1.95;

const BMIMarks = Math.floor( massMarks / heightMarks ** 2 );
const BMIJohn =Math.floor( massJohn / heightJohn ** 2);

if(BMIMarks > BMIJohn){
    console.log("Mark's BMI is higher than John's")
}else{
    console.log("John's BMI is higher than Mark's!")
}

if(BMIMarks > BMIJohn){
    console.log(`Mark's BMI ${(BMIMarks)} is higher than John's ${(BMIJohn)}!`)
}else{
    console.log(`John's BMI ${(BMIJohn)} is higher than Mark's ${(BMIMarks)}!`)
}


// const markHigherBMI = BMIMarks > BMIJohn ;

// console.log(BMIJohn , BMIMarks , markHigherBMI)