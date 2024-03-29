// random generator function for 9 digits
function getRandomNineDigitInt() {
    return Math.floor(Math.random() * (999999999 - 100000000) + 100000000);
}

// random generator function for 10 digits
function getRandomTenDigitInt() {
    return Math.floor(Math.random() * (9999999999 - 1000000000) + 1000000000);
}

// generate the random values
const nineDigitJSValue = getRandomNineDigitInt();
const tenDigitJSValue = getRandomTenDigitInt();

// set the values into the global variables
pm.globals.set('nineDigitEnvironmentVar', nineDigitJSValue);
pm.globals.set('tenDigitEnvironmentVar', tenDigitJSValue);
