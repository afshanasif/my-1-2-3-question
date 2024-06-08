// Q.1// Install Node.js, TypeScript and VS Code on your computer.
//A.COMPLEET THIS QUESTION
// Q.2 Personal Message: Store a person’s name in a variable, and print a message to that person.
//  Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
//A. let personName:string= "ERIC";
// let message:string= ("would you like to learn some Python today?");
//  console.log ("hello",personName,"," ,message);
// console.log(`"hello ${personName},${message}"`);
// Q.3 Name Cases: Store a person’s name in a variable, and then print that person’s
//  name in lowercase, uppercase, and titlecase.
var person = "afeef";
console.log(person.toLowerCase());
console.log(person.toUpperCase());
var person2 = "alfihs";
console.log(person.replace(/\b\w/g, function (a) { return a.toUpperCase(); }));
