// TRACCIA:
// L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random(sempre da 1 a 5) per il computer(usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari(usando una funzione)
// Dichiariamo chi ha vinto.

// SVOLGIMENTO:

// Utente sceglie pari o dispari
const userChoice = prompt("Scegli pari o dispari");
console.log(userChoice);

let userBool;
if (userChoice === "pari") {
    userBool = true;
} else if (userChoice === "dispari") {
    userBool = false;
}
console.log(userBool);

// Utente inserisce numero da 1 a 5
const userNumber = parseInt(prompt("Scegli un numero da 1 a 5"));
console.log(userNumber);

// Generiamo numero random da 1 a 5 per PC (con una function)
let pcRandomNumber = generateRandomNumber(1, 5);
console.log(pcRandomNumber);

// Sommiamo numero utente e numero PC
let sumNumber = sum(userNumber, pcRandomNumber);
console.log(sumNumber);

// Stabiliamo se somma è pari o dispari
let comparisonResult = isEven(sumNumber);
console.log(comparisonResult);

// Stabilisco se l'utente inizialmente ha indovinato o no
if (userBool == comparisonResult) {
    console.log("Hai indovinato");
} else {
    console.log("Non hai indovinato");
}









function generateRandomNumber(minimo, massimo) {
    let randomNumber = Math.floor(Math.random() * (massimo - minimo + 1)) + minimo;
    return randomNumber;
}

function sum(num1, num2) {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    const risultato = num1 + num2;
    if (isNaN(risultato)) {
        console.warn("Somma non riuscita")
        return false;
    }
    return risultato;
}

function isEven(num) {
    if (num % 2 == 0) {
        return true;
    }
    return false;
}