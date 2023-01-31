// TRACCIA:
// L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random(sempre da 1 a 5) per il computer(usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari(usando una funzione)
// Dichiariamo chi ha vinto.

// SVOLGIMENTO:
const calculationButton = document.getElementById("calculation_button");

calculationButton.addEventListener(
    "click",
    function () {

        /***************
        STEP 1
        **************/
        // Utente sceglie pari o dispari
        const userChoiceInput = document.getElementById("input_select");
        // const userChoice = prompt("Scegli pari o dispari");
        const userChoice = userChoiceInput.value;
        console.log(userChoice);

        let userBool;
        if (userChoice === "pari") {
            userBool = true;
        } else if (userChoice === "dispari") {
            userBool = false;
        }
        console.log(userBool);

        /***************
         STEP 2
        **************/
        // Utente inserisce numero da 1 a 5
        const userInputNumber = document.getElementById("input_number");
        // const userNumber = parseInt(prompt("Scegli un numero da 1 a 5"));
        const userNumber = userInputNumber.value;
        console.log(userNumber);

        /***************
         STEP 3
        **************/
        // Generiamo numero random da 1 a 5 per PC (con una function)
        const pcNumber = document.getElementById("pc_number");
        let pcRandomNumber = generateRandomNumber(1, 5);
        pcNumber.innerHTML = pcRandomNumber;
        console.log(pcRandomNumber);

        /***************
         STEP 4
        **************/
        // Sommiamo numero utente e numero PC
        const sumGeneratedEl = document.getElementById("sum_generated");
        let sumNumber = sum(userNumber, pcRandomNumber);
        sumGeneratedEl.innerHTML = "La somma tra i due numeri è " + sumNumber;
        // console.log(sumNumber);

        /***************
         STEP 5
        **************/
        // Stabiliamo se somma è pari o dispari
        let comparisonResult = isEven(sumNumber);
        console.log(comparisonResult);

        /***************
         STEP 6
        **************/
        const messageTextEl = document.getElementById("output_message");
        let outputMessage;
        // Stabilisco se l'utente inizialmente ha indovinato o no
        if (userBool == comparisonResult) {
            outputMessage = "Hai indovinato";
            // console.log("Hai indovinato");
        } else {
            outputMessage = "Non hai indovinato";
            // console.log("Non hai indovinato");
        }
        messageTextEl.innerHTML = outputMessage;
    }
);







/***************
 FUNCTIONS
 **************/
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