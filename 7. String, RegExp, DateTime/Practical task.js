//Given the string 'ahb acb aeb aeeb adcb axeb'. Write a regular expression that matches 
//the strings ahb, acb, aeb by pattern: letter 'a', any character, letter 'b'

let letters = 'ahb acb aeb aeeb adcb axeb';
let patt_3 = letters.match (/a.b/g);
console.log (patt_3);

//Given the string '2 + 3 223 2223'. Write a regex that finds line 2 + 3 without capturing the rest

let numbers = '2 + 3 223 2223';
let result = numbers.match (/2 \+ 3/g);
console.log (result);


//Get the day, month and year of the current date and output it to the console separately

let now = new Date().toLocaleDateString();
console.log (now);