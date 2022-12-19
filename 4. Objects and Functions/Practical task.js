//Create a car object, add a color property to it with the value equals 'black'

let car = {};
car.color = 'black';

//Change the color property of the car object to 'green'

car.color = 'green';
console.log (car);

//Add the power property to the car object, which is a function and displays the engine power to the console

car.power = function (w) {
    console.log ('Engine power: ', w)
}
car.power (150);

//Pears and apples are accepted to the warehouse, write a function that returns the result of adding the number of accepted pears and apples

function accepted (p, a) {
    return p + a;
}
console.log ('Accepted to the warehous ' + accepted (15, 25) + ' pears and apples');

//Your name is saved in the payment terminal, write a function to define the name in the terminal 
//(if you entered your name, then hello + name, if not, then there is no such name)

let terminal = ['Viacheslav', 'Maria'];

function EnterYourName (name) {
    if (terminal.includes (name)) {
        console.log ('Hello, ' + name + '!');
    } else {
        console.log ('There is no such name.');
    }
}
EnterYourName ('Viacheslav');

//Write a function for calculating the type of argument and type output to the console

function type_of (argument) {
    console.log ('Type of argument ' + argument +  ' is ' + typeof argument);
}
type_of (true);

//Write a function that determines whether a number is prime or not

function Prime_number (x) {
    let flag = true;
    if (x > 1) {
        for (let i = 2; i < x; i++) {
            if (x % i == 0) {
                flag = false;
                break;
            }
        }
        if (flag == true) {
            console.log(x + ' is a prime number');
        } else {
            console.log(x + ' is not a prime number');
        }
    } else if (x == 1) {
        console.log ('1 is not a prime number');
    } else {
        console.log ('Please enter a positive number');
    }
}
Prime_number (27644437);