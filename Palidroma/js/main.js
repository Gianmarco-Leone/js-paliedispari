// TRACCIA:
// Chiedere all'utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// SVOLGIMENTO:
const generateButton = document.getElementById("generate_button");

generateButton.addEventListener(
    "click",
    function () {
        const textEl = document.getElementById("output_message");
        let outputMessage;
        const inputTextEl = document.getElementById("input_word");
        const userWord = inputTextEl.value;
        // Invoca funzione
        let reverseUserWord = reverseWords(userWord);

        if (reverseUserWord == userWord) {
            outputMessage = ("La parola '" + userWord + "' è palindroma");
        } else {
            outputMessage = ("La parola '" + userWord + "' non è pallindroma");
        }
        textEl.innerHTML = outputMessage;
    }
);


/***********
 FUNCTIONS
 **********/
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