// TRACCIA:
// Chiedere all'utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// SVOLGIMENTO:
const generateButton = document.getElementById("generate_button");


// Chiedi parola
// const userWord = prompt("Inserisci una parola");


generateButton.addEventListener(
    "click",
    function () {
        const textEl = document.getElementById("output_message");
        let outputMessage;
        const inputTextEl = document.getElementById("input_word");
        const userWord = inputTextEl.value;
        // Invoca funzione
        let reverseUserWord = reverseWords(userWord);

        // // Stampa parola inversa
        console.log(reverseUserWord);

        if (reverseUserWord == userWord) {
            console.log("La parola è palindroma");
            outputMessage = ("La parola " + userWord + " è palindroma");
        } else {
            console.log("La parola non è pallindroma");
            outputMessage = ("La parola " + userWord + " non è pallindroma");
        }
        textEl.innerHTML = outputMessage;
    }
);







// Creo function che inverte le parole
function reverseWords(string) {
    let reverseWord = "";
    let i = string.length - 1;
    while (i >= 0) {
        let letter = string[i];
        reverseWord += letter;
        i--;
    }
    return reverseWord;
}