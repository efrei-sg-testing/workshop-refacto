// Détermine si le paramètre passé est un palindrome
// ex: "node 1-palindrome.js aha"
//console.log("Ceci " + (process.argv[2].split("").reverse('').join("") === process.argv[2] ? "est" : "n'est pas") + " un palindrome")

function getPalindrome() {
    const word = process.argv[2];
    return word === word.split("").reverse().join("") ? "est" : "n'est pas";
}

console.log("Ceci " + getPalindrome() + " un palindrome");