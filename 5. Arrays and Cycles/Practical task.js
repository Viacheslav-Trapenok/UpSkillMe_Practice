//Given an array consisting of movie names, iterate over the array with the output of the names of each movie to the console

const movies = ['Iron Man', 'Avengers', 'Black Panther', 'Doctor Strange', 'Spider-Man'];
movies.forEach (name => console.log (name));

//Given an array of car manufacturers, convert the array to a string and back to an array

let CarManufcturers = ['Toyota', 'Honda', 'Mercedes', 'Nissan', 'Audi'];
let ArrayToString = CarManufcturers.toString ();
console.log (ArrayToString);
let StringToArray = ArrayToString.split (',');
console.log (StringToArray);

//Given an array of the names of your friends, add the words hello to each element of the array

let Friends = ['Alexander', 'Artur', 'Artem', 'Yuri', 'Valery'];
console.log (Friends);
let HelloFriends = Friends.map (currentValue => 'Hello, ' + currentValue + '!');
console.log (HelloFriends);

//Convert numeric array to Boolean

let NumArr = [1, 0, 7, 8, 0, 4, 5, 6];
let BoolArr = NumArr.map (currentNumber => !!currentNumber);
console.log (BoolArr);

//Sort the array [1,6,7,8,3,4,5,6] in descending order

let array1 = [1, 6, 7, 8, 3, 4, 5, 6];
array1.sort ((a, b) => b - a);
console.log (array1);

//Filter array [1,6,7,8,3,4,5,6] by value> 3

let array2 = [1, 6, 7, 8, 3, 4, 5, 6];
let filteredArray = array2.filter (currentNumber => currentNumber > 3);
console.log (filteredArray);

//Write a function that takes two parameters - an array and a number and outputs the index of an array element equal to a number

let ArrOfNum1 = [6, 5, 4, 3, 8, 7, 6, 1];
let ArrOfNum2 = [1, 6, 7, 8, 3, 4, 5, 6];
function IndexOf (arr, num) {
    if (arr.indexOf (num) != arr.lastIndexOf (num)) {
        console.log (arr.indexOf (num) + ', ' + arr.lastIndexOf (num));
    } else {
        console.log (arr.indexOf (num));
    }
}
IndexOf (ArrOfNum1, 6);

//Implement a loop that will print the number 'a' until it is less than 10

for (let a = 1; a <= 10; a++) {
    console.log ('a');
}

//Implement a loop that prints prime numbers to the console

let count = 0;
for (let x = 2; x < 50; x++) {      //prime numbers up to 50
    for (let i = 2; i < x; i++) {
        if (x % i == 0) {
            count++;
        }
    }
    if (count == 0) {
        console.log (x);
    }
    count = 0;
}

//Implement a loop that prints odd numbers to the console

for (let j = 1; j < 50; j++) {      //odd numbers up to 50
    if (j % 2 != 0) {
        console.log (j);
    }
}