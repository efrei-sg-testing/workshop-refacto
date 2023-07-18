// Détermine si le paramètre passé est un palindrome
// ex: "node 1-palindrome.js aha"

//console.log("Ceci " + (process.argv[2].split("").reverse('').join("") === process.argv[2] ? "est" : "n'est pas") + " un palindrome")




function checkPalindrome(wordToCheck) {
    const reversed = wordToCheck.split("").reverse().join("");
    const isPalindrome = (reversed === wordToCheck);
    return isPalindrome;
}

const commandeLineArgument = process.argv[2]
const isWordPalindrome = checkPalindrome(commandeLineArgument)

isWordPalindrome ? console.log("Ceci est un plaindrome") : console.log("ceci n'est pas un plaindrome")