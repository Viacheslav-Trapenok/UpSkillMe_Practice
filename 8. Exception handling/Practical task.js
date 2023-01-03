//In a try catch construction, wrap the code: console.log (a), let a = 3. 
//And display an error - ‘let must be declared’ before use. 

try {    
    console.log (a);
    let a = 3;
} catch {
    console.log ("'let must be declared' before use")
}

//When running 1/0, the error 'cannot be divided by zero'

try {
    let division = 1/0;
    if (division == Infinity) {
        throw new Error ('Cannot be divided by zero');
    }
    console.log (`The answer is ${division}`);
} catch (error) {
    console.log (error.message);
}
