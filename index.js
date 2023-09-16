console.log("Question No 01");
//Question No 01:
//1. Install Node.js, TypeScript and VS Code on your computer.
//Node.js ('https://nodejs.org/en/download') or (run npm install -g typescript ) or (https://code.visualstudio.com/download)
console.log("Question No 02");
//2. Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
var personName1 = "Eric";
console.log("\"Hello ".concat(personName1, ", would you like to learn some typescript today? \""));
console.log("Question No 03");
//3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var personName3 = "William Sons";
console.log(personName3.toLowerCase());
console.log(personName3.toUpperCase());
var titleCase = function (string) {
    if (!string || string.trim().length === 0) {
        console.log("Error: Please provide a non-empty input string.");
        return;
    }
    var sentence = string.trim().toLowerCase().split(" ");
    for (var i = 0; i < sentence.length; i++) {
        if (sentence[i].length > 0) {
            sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
        }
    }
    console.log(sentence.join(" "));
};
titleCase(" I would like to eat apple");
console.log("Question No 04");
//4. Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks: Albert Einstein once said, “A person who never made a mistake never tried anything new.”
console.log("Prophet Muhammad (PBUH) once said, \" THE STRONG PERSON IS NOT THE ONE WHO CAN WRESTLE SOMEONE ELSE DOWN THE STONG PERSON IS THE ONE WHO CAN CONTROL HIMSELF WHEN HE IS ANGRY.\" ");
console.log("Question No 05");
//5. Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
var famous_person = "Prophet Muhammad (PBUH)";
var message = "".concat(famous_person, " once said, \" THE STRONG PERSON IS NOT THE ONE WHO CAN WRESTLE SOMEONE ELSE DOWN THE STONG PERSON IS THE ONE WHO CAN CONTROL HIMSELF WHEN HE IS ANGRY.\"");
console.log(message);
console.log("Question No 06");
//6. Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
var personName2 = "\t Ali Afaq \n";
console.log(personName2);
console.log(personName2.trim());
console.log("Question No 07 & 08");
// Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.You should create four lines that look like this:
//console.log(5 + 3) Your output should simply be four lines with the number 8 appearing once on each line.
console.log(5 + 3);
console.log(9 - 1);
console.log(4 * 2);
console.log(32 / 4);
console.log("Question NO 09");
//Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
var favNum = 10;
console.log("My favorite number is  ".concat(favNum));
console.log("Question NO 10");
//Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
//Name: Muhammad Usama ; Date: 09-09-2023.
//Program No 01:
var a = 5;
var b = 25;
//Add the two numbers to calculate their sum.
var sum = a + b;
console.log(sum);
//Program No 02:
var remSpac = "  Ali Haider    ";
//remove spaces between the variable by applying trim method
console.log(remSpac.trim());
console.log("Question No 11");
//Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
var names = ["Ali", "Mirza", "Hammad", "Ahmad"];
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
console.log("Question No 12");
//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
var names1 = ["Ali", "Mirza", "Hammad", "Ahmad"];
for (var i = 0; i < names1.length; i++) {
    //now print the friends name with the message
    console.log("Hi! ".concat(names1[i], ", how are you."));
}
console.log("Question No 13");
//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
var car = ["Rolls Royce", "lamborghini", "ferrari", "Honda"];
for (var i = 0; i < car.length; i++) {
    //now print the friends name with the message
    console.log("I would like to own a  ".concat(car[i], " car In Sha Allah one day."));
}
console.log("Question No 14");
//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var list = ["Sharjeel", "Farhan", "Ali", "Hammad"];
for (var i = 0; i < list.length; i++) {
    console.log("I would like to invite you, Mr. ".concat(list[i], ", to dinner. Please come!"));
}
console.log("Question No 15");
//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
list.splice(2, 1);
for (var i = 0; i < list.length; i++) {
    console.log("I would like to invite you, Mr. ".concat(list[i], ", to dinner. Please come!"));
}
// Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it
console.log("Mr. Ali, after hearing the news that you are not coming to dinner, I really hope we will meet soon.");
//Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
list.splice(2, 1, "Ahmad");
//Print a second set of invitation messages, one for each person who is still in your list.
for (var i = 0; i < list.length; i++) {
    console.log("You are the final guests which is to going  Mr. ".concat(list[i], ", to dinner. Please come!"));
}
console.log("Question No 16");
//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
console.log("I inform you that i found a bigger dinner table, more space for dinner.");
list.unshift("Rehan");
list.splice(Math.floor(list.length / 2), 0, "Bilal");
list.push("Hamza");
for (var i = 0; i < list.length; i++) {
    console.log("\"I inform you that,".concat(list[i], " three new guest join us our dinner\""));
}
console.log("Question No 17");
//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
console.log(list);
console.log("I inform you that unfortunalety my new dinner table can not arrived in time, so i have space for only two guests. ");
for (var i = 0; i < list.length + 2; i++) {
    var removed = list.pop();
    console.log(removed);
    console.log("I am sorry to tell you that you can't invite to dinner because i have some problem so i apologize you.");
}
for (var i = 0; i < list.length; i++) {
    console.log(list[i], "You are still invited.");
}
//at the end of your program.
for (var i = 0; i <= list.length; i++) {
    var removed1 = list.pop();
    console.log(removed1);
}
console.log(list);
console.log("Question No 18");
//Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
console.log("These are the location where i want to visit one day inshallah");
var places = ["Al Makkah Mukarma", "Madina Munarwa", "Istanbul", "Toronto", "Niagra falls", "Belgium"];
// • Print your array in its original order.
console.log(places);
// • Print your array in alphabetical order without modifying the actual list.
console.log("Array in alphabatical order");
var modifyingPlaces = places.concat().sort();
console.log(modifyingPlaces);
// • Show that your array is still in its original order by printing it.
console.log("original array");
console.log(places);
// • Print your array in reverse alphabetical order without changing the order of the original list.
console.log("Array in reverse alphabatical order");
var reversePlaces = places.slice().sort().reverse();
console.log(reversePlaces);
// • Show that your array is still in its original order by printing it again.
console.log("original array");
console.log(places);
// • Reverse the order of your list. Print the array to show that its order has changed.
console.log("Reverse the original array");
places.reverse();
console.log(places);
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("Again reverse the original array");
places.reverse();
console.log(places);
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("Sort the original array");
places.sort();
console.log(places);
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("By reverse the original array");
places.reverse();
console.log(places);
console.log("Q no 19");
//Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner
var afterGuestList = ["Ahmad", "Usama"];
console.log("you are inviting to my dinner", afterGuestList);
console.log("Question No 20");
//20. Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
var newArr = [];
newArr.push("Faisalabad", "Multan", "Lahore");
console.log(newArr);
console.log("Question No 21");
var obj = {
    name: "Ibrahim Umar",
    age: 19,
    isMarried: false,
};
console.log(obj);
console.log("Question No 22");
//22. Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
var citiesArr = ["Lahore", "Sialkot", "Karachi", "Islamabad"];
for (var i = 0; i <= citiesArr.length; i++) { //Removing the '=' from the condition in the index eliminates the index error, as the length function starts from 1 while the array begins at 0.
    console.log(citiesArr[i]);
}
console.log("Question No 23");
/*23. Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
let car = 'subaru'; console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')
• Look closely at your results, and make sure you understand why each line evaluates to True or False.
• Create at least 10 tests.
Have at least 5 tests evaluate to True and another 5 tests evaluate to False.*/
var driverName = "Ali";
var driverLicen = true;
var ownCar = false;
console.log("Is the driver name is Ali", driverName === "Ali");
console.log("Is the driver name is not Ali", driverName !== "Ali");
console.log("Is the diver has licence", driverLicen === true);
console.log("Is the diver has not licence", driverLicen !== true);
console.log("Is the diver has its own car", ownCar === false);
console.log("Is the diver has not its own car", ownCar !== false);
console.log("If the driver has its own car then aprove him", driverLicen && ownCar);
console.log("If the driver has licence only then aprove him", driverLicen || ownCar);
console.log("If the diver has its own driver licence and his name is Ali then approved him", driverName === "Ali" && driverLicen);
console.log("If the diver has its own driver licence and his name is Ali Afaq then approved him", driverName === "Ali Afaq" && driverLicen);
console.log("Question No 24");
/* 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality,
greater than and less than, greater than or equal to, and
less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array */
var A = "Alama Iqbal";
var B = "Alama Iqbal";
console.log("Test for equality", A === B);
console.log("Test for Inequality", A !== B);
B = "alama iqbal";
console.log("Test for lower case ", A.toLowerCase() === B);
var X = 10;
var Y = 20;
console.log("Test for equality", X === Y);
console.log("Test for Inequality", X !== Y);
console.log("Greater than", X > Y);
console.log("Less than", X < Y);
console.log("Greater than or equal to", X >= Y);
console.log("Lessor than or equal to", X <= Y);
console.log("Test using and and or", X > Y && Y < X);
console.log("Test using and and or", X > Y || Y < X);
var sweets = ["biscuits", "chai", "cofee"];
for (var i = 0; i < sweets.length; i++) {
    if (sweets[i] === "chai") {
        console.log("This item is in the array", sweets[i]);
    }
    else if (sweets[i] !== "samosa") {
        console.log("This item is not in the array");
    }
}
console.log("Question No 25");
/*  25. Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
• Write an if statement to test whether the alien’s color is
green. If it is, print a message that the player just earned
5 points.
• Write one version of this program that passes the if test
and another that fails. (The version that fails will have no
output.) */
var alien_color = "green";
// Version that passes the if test
if (alien_color === "green") {
    console.log("Player just earned 5 points.");
}
// Version that fails the if test (no output)
console.log("Question No 26");
/*  26. Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that the
player just earned 5 points for shooting the alien.
• If the alien’s color isn’t green, print a statement that the
player just earned 10 points.• Write one version of this program that runs the if block
and another that runs the else block.  */
if (alien_color === "green") {
    console.log("Player just earned 5 points for shooting the alien.");
}
else if (alien_color !== "green") {
    console.log("Player just earned 10 points.");
}
console.log("Question No 27");
/*  27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player
earned 5 points.
• If the alien is yellow, print a message that the player
earned 10 points.
• If the alien is red, print a message that the player earned
15 points.
• Write three versions of this program, making sure each
message is printed for the appropriate color alien. */
if (alien_color === "green") {
    console.log("Player just earned 5 points for shooting the alien.");
}
else if (alien_color === "yellow") {
    console.log("Player just earned 10 points.");
}
else if (alien_color === "red") {
    console.log("Player just earned 15 points.");
}
console.log("Question No 28");
/* 28. Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
• If the person is less than 2 years old, print a message
that the person is a baby.
• If the person is at least 2 years old but less than 4, print
a message that the person is a toddler.
• If the person is at least 4 years old but less than 13, print
a message that the person is a kid.
• If the person is at least 13 years old but less than 20,
print a message that the person is a teenager.• If the person is at least 20 years old but less than 65,
print a message that the person is an adult.
• If the person is age 65 or older, print a message that the
person is an elder. */
var perAge = 18;
if (perAge < 2) {
    console.log("The person is a baby");
}
else if (perAge >= 2 && perAge < 4) {
    console.log("The person is toddler");
}
else if (perAge >= 4 && perAge < 13) {
    console.log("The person is a kid");
}
else if (perAge >= 13 && perAge < 20) {
    console.log("The person is a teenager");
}
else if (perAge >= 20 && perAge < 65) {
    console.log("The person is a adult");
}
else if (perAge >= 65) {
    console.log("The person is a elder");
}
else {
    console.log("Please write the integer value");
}
console.log("Question No 29");
/*  29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it
favorite_fruits.
• Write five if statements. Each should check whether a
certain kind of fruit is in your array. If the fruit is in your
array, the if block should print a statement, such as You
really like bananas! */
var favorite_fruits = ["apple", "banana", "orange"];
if (favorite_fruits.indexOf("apple") !== -1) {
    console.log("I really like apples!");
}
if (favorite_fruits.indexOf("banana") !== -1) {
    console.log("I really like bananas!");
}
if (favorite_fruits.indexOf("orange") !== -1) {
    console.log("I really like orange!");
}
if (favorite_fruits.indexOf("peach") !== -1) {
    console.log("I really like peach!");
}
if (favorite_fruits.indexOf("watermelon") !== -1) {
    console.log("I really like watermelon!");
}
// Repeat for other fruits...
console.log("Question No 30");
/* 30. Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
• If the username is 'admin', print a special greeting, such
as Hello admin, would you like to see a status report?
• Otherwise, print a generic greeting, such as Hello Eric,
thank you for logging in again. */
var usernames = ["usama", "umar", "ahmad", "admin", "ibrahim"];
for (var i = 0; i < usernames.length; i++) {
    if (usernames[i] === "admin") {
        console.log("Hello ".concat(usernames[i], ", would you like to see a status report? "));
    }
    else {
        console.log("Hello ".concat(usernames[i], ",\n        thank you for logging in again."));
    }
}
console.log("Question No 31");
/*  31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make
sure the correct message is printed. */
usernames.splice(0, usernames.length);
if (usernames.length === 0) {
    console.log("we need to find some user");
}
console.log("Question No 32");
/* 32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called
current_users.
• Make another list of five usernames called new_users.
Make sure one or two of the new usernames are also in
the current_users list.
• Loop through the new_users list to see if each new
username has already been used. If it has, print a message
that the person will need to enter a new username. If a
username has not been used, print a message saying that
the username is available.
• Make sure your comparison is case insensitive. If 'John'
has been used, 'JOHN' should not be accepted. */
console.log("Question No 33");
/*33. Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
• Store the numbers 1 through 9 in a array.
• Loop through the array.• Use an if-else chain inside the loop to print the proper
ordinal ending for each number. Your output should read
"1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result
should be on a separate line */
console.log("Question No 34");
/* 34. Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
• Modify your for loop to print a sentence using the name
of the pizza instead of printing just the name of the pizza.
For each pizza you should have one line of output
containing a simple statement like I like pepperoni pizza.
• Add a line at the end of your program, outside the for
loop, that states how much you like pizza. The output
should consist of three or more lines about the kinds of
pizza you like and then an additional sentence, such as I
really love pizza! */
console.log("Question No 35");
/*35. Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
• Modify your
program to print a statement about each animal,
such as A dog would make a great pet.
• Add a line at the end of your program stating what these
animals have in common. You could print a sentence
such as Any of these animals would make a great pet! */
console.log("Question No 36");
/*36. T-Shirt: Write a function called make_shirt() that
accepts a size and the text of a message that should
be printed on the shirt. The function should print a
sentence summarizing the size of the shirt and the
message printed on it. Call the function. */
console.log("Question No 37");
/*37. Large Shirts: Modify the make_shirt() function so
that shirts are large by default with a message that
reads I love TypeScript. Make a large shirt and a
medium shirt with the default message, and a shirt of
any size with a different message. */
console.log("Question No 38");
/*38. Cities: Write a function called describe_city() that
accepts the name of a city and its country. The
function should print a simple sentence, such as
Karachi is in Pakistan. Give the parameter for the
country a default value. Call your function for three
different cities, at least one of which is not in the
default country. */
console.log("Question No 39");
/*39. City Names: Write a function called
city_country() that takes in the name of a city and its
country. The function should return a string
formatted like this:
"Lahore, Pakistan"
Call your function with at least three city-country pairs,
and print the value that’s returned. */
console.log("Question No 40");
/*40. Album: Write a function called make_album()
that builds a Object describing a music album. Thefunction should take in an artist name and an album
title, and it should return a Object containing these
two pieces of information. Use the function to make
three dictionaries representing different albums.
Print each return value to show that Objects are
storing the album information correctly. Add an
optional parameter to make_album() that allows you
to store the number of tracks on an album. If the
calling line includes a value for the number of tracks,
add that value to the album’s Object. Make at least
one new function call that includes the number of
tracks on an album. */
console.log("Question No 41");
/*41. Magicians: Make a array of magician’s names.
Pass the array to a function called show_magicians(),
which prints the name of each magician in the array.*/
console.log("Question No 42");
/*42. Great Magicians: Start with a copy of your
program from Exercise 39. Write a function called
make_great() that modifies the array of magicians by
adding the phrase the Great to each magician’s
name. Call show_magicians() to see that the list has
actually been modified.*/
console.log("Question No 43");
/*43. Unchanged Magicians: Start with your work
from Exercise 40. Call the function make_great() with
a copy of the array of magicians’ names. Because the
original array will be unchanged, return the new array
and store it in a separate array. Call show_magicians()
with each array to show that you have one array ofthe original names and one array with the Great
added to each magician’s name.*/
console.log("Question No 44");
/*44. Sandwiches: Write a function that accepts a
array of items a person wants on a sandwich. The
function should have one parameter that collects as
many items as the function call provides, and it
should print a summary of the sandwich that is being
ordered. Call the function three times, using a
different number of arguments each time.
*/
console.log("Question No 45");
/*45. Cars: Write a function that stores information
about a car in a Object. The function should always
receive a manufacturer and a model name. It should
then accept an arbitrary number of keyword
arguments. Call the function with the required
information and two other name-value pairs, such as
a color or an optional feature. Print the Object that’s
returned to make sure all the information was stored
correctly.*/
