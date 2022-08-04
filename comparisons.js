// In the exercises below, write your own code where indicated
// to achieve the desired result.

// One example is already completed. Your task is to complete
// any remaining prompt.

// Make sure to run the file in your command line using `node <filename>.js`


// -------------------
// PART 1: Comparing variables
// -------------------

var numberTeachers = 4
var numberStudents = 20
var stringTeachers = "4"
var numberDogs = 0

// EXAMPLE: log the result of the comparison: is numberTeachers greater than numberStudents?
console.log("Is numberTeachers greater than numberStudents?", numberTeachers > numberStudents);
// this should log: "Is numberTeachers greater than numberStudents?" false

// YOU DO: log the result of the comparison: is numberTeachers less than numberStudents?
console.log("Is numberTeachers less than numberStudents?", numberTeachers < numberStudents);
// this should log: "Is numberTeachers less than numberStudents?" true

// YOU DO: log the result of the comparison: is numberTeachers strictly equal to stringTeachers?
console.log("Is numberTeachers strictly equal to stringTeachers?", numberTeachers === stringTeachers);
// this should log: "Is numberTeachers strictly equal to stringTeachers?" false

// YOU DO: log the result of the comparison: is numberTeachers not equal to numberStudents?
console.log("Is numberTeachers not equal to numberStudents?", numberTeachers !== numberStudents)
// this should log: "Is numberTeachers not equal to numberStudents?" true

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 20?
console.log("Is numberStudents greater than or equal to 20?", numberStudents >= 20);
// this should log: Is numberStudents greater than or equal to 20? true

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 21?
console.log("Is numberStudents greater than or equal to 21?", numberStudents >= 21);
// this should log: Is numberStudents greater than or equal to 21? false

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 20?
console.log("Is numberStudents less than or equal to 20?", numberStudents <= 20);
// this should log: Is numberStudents less than or equal to 20? true

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 21?
console.log("Is numberStudents less than or equal to 21?", numberStudents <= 21);
// this should log: Is numberStudents less than or equal to 21? true


// #-------------------
// PART 2: Articulating what you are doing
// #-------------------

// For the following prompts, you will be given a line of code and your task is to type out a Comment,
// in English, explaining what that line of code is doing, including what the comparison will evaluate to.
// Be as technically precise as possible, but don't just copy and paste a definition from the readings.
// Make sure YOU can explain it that way!

console.log(4 < 9);
// YOU DO: Explain.
//The above line of code is printing the evaluation of the conditional statement of is 4 less than 9. The comparison will evaluate to true.

var books = 3;
console.log(4 < books);
// YOU DO: Explain.
//The above lines of code are ultimately printing the evaluation of the conditional statement of is 4 less than the declared variable of books. The first line of code assigns the variable books to be 3. The comparison will evaluate to False.


var friends = 6;
var siblings = 2;
console.log(friends > siblings);
// YOU DO: Explain.
// The first line declares the variable friends to be assigned to 6. The second line declares the variable siblings to be assigned to 2. The third line logs to the console the evaluation of the conditional statement that the conditional is true if variable friends is greater than the variable siblings. The comparison will evaluate to true.

var attendees = 9;
var meals = 8;
console.log(attendees != meals);
// YOU DO: Explain.
// The first line of code declares the variable attendees to be assigned to 9 and the second line of code declares the variable meals to be assigned to 8.The third line logs to the console the evaluation of the conditional statement that the conditional is true if variable attendees is not equal to the variable meals. The comparison will evaluate to true.

// #-------------------
// PART 3: Logical Operators
// #-------------------

var isHungry = true;
var finishedHomework = false;

// EXAMPLE:
// Determine if the user is hungry and has completed their homework
console.log(isHungry && finishedHomework);
// Determine if the user is hungry or has completed their homework
console.log(isHungry || finishedHomework);

var lovesToPlay = true;
var lovesDogPark = false;
var lovesTreats = true;
var age = 1;
console.log(========);
// YOU DO:
// Determine if the dog loves to play and loves treats
console.log(lovesToPlay && lovesTreats);

// Determine if the dog loves to play and loves the dog park
console.log(lovesToPlay && lovesDogPark);

// Determine if the dog loves to play or loves the dog park
console.log(lovesToPlay || lovesDogPark);

// Determine if the dog loves to play and is a puppy
console.log(lovesToPlay && age <= 1);
// What did your final line of code evaluate to? Why do you think that is? Explain.
// ANSWER: My final line of code evaluated to true, because for the && logical operator to be true, both statements have to be true. If you look at the assigned boolean for lovesToPlay it is true and the age variable is assigned to 1, which is less than or equal to 1 and thus true. Both values are two so the logic operator is true.
