// random generator function for 9 digits
function getRandomNineDigitInt() {
    return Math.floor(Math.random() * (999999999 - 100000000) + 100000000);
}

// random generator function for 10 digits
function getRandomTenDigitInt() {
    return Math.floor(Math.random() * (9999999999 - 1000000000) + 1000000000);
}

// generate a random GUID (UUID version 4)
function generateGUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

function setEmailToGlobals(email) {
    pm.globals.set('EmailAdress', email);
}

// the global is set to HardBounce
const testEmail = 'user@email.com';
setEmailToGlobals(testEmail);

// generate the random values {{randomGUIDstring}}
const nineDigitJSValue = getRandomNineDigitInt();
const tenDigitJSValue = getRandomTenDigitInt();
const randomGUIDstring = generateGUID();

// set the values as global variables
pm.globals.set('nineDigitEnvironmentVar', nineDigitJSValue);
pm.globals.set('tenDigitEnvironmentVar', tenDigitJSValue);
pm.globals.set('randomGUIDstring', randomGUIDstring);
