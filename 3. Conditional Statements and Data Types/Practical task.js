let str = '9';
let num = 3;
let bool = true;

console.log (str+bool);
console.log (str+num);
console.log (num+bool);

console.log (str*bool);
console.log (str*num);
console.log (num*bool);

console.log (str/bool);
console.log (str/num);
console.log (num/bool);

let num_conv = Number(str);
let str_conv = String(bool);
let bool_conv = Boolean(num);

console.log (num_conv);
console.log (str_conv);
console.log (bool_conv);

console.log (typeof num_conv);
console.log (typeof str_conv);
console.log (typeof bool_conv);