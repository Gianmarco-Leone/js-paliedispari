// TRACCIA:
// Chiedere all'utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// SVOLGIMENTO:

// Chiedi parola
const userWord = prompt("Inserisci una parola");

// Invoca funzione
let reverseUserWord = reverseWords(userWord);

// // Stampa parola inversa
console.log(reverseUserWord);

if (reverseUserWord == userWord) {
    console.log("La parola è palindroma");
} else {
    console.log("La parola non è pallindroma");
}





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