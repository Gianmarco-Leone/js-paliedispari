// TRACCIA:
// Chiedere all'utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// SVOLGIMENTO:
// Chiedi parola
const userWord = prompt("Inserisci una parola");
// Crea variabile parola inversa inizialmente vuota
let reverseUserWord = "";
// Selezione carattere per carattere
let i = userWord.length - 1;
while (i >= 0) {
    let letter = userWord[i];
    // Inserisci nella variabile parola inversa
    reverseUserWord += letter;
    console.log(letter);

    i--;
}
// Stampa parola inversa
console.log(reverseUserWord);

if (reverseUserWord == userWord) {
    console.log("La parola è palindroma");
} else {
    console.log("La parola non è pallindroma");
}