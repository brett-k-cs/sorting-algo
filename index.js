// Packages:
const readline = require('readline');

const words = [];

// list of characters to go through
const alphabet = ["'", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

function doAlgoOnPart(words, num) {
    const obj = {}
    // loops through the words array, adding to the obj the key based on the wanted character
    words.forEach(word => {
	const chr = word.toLowerCase()[num]
	
	if(obj[chr]) {
	    obj[chr].push(word)
	}
	else {
	    if(word.length > num) obj[chr] = [word]
	    else console.log(word)
	}
    })

    // this is the code I made to simplify only checking keys (characters) that had a key
    const keys = Object.keys(obj);
    const lettersIn = alphabet.filter(letter => keys.includes(letter));
    
    // loops through the alphabet, checking if the object has the character as a key.
    for(var i = 0; i < lettersIn.length; i++) {
	const letter = lettersIn[i];
	// then it checks if the array associated with the value of that key has more than one element.
	if(obj[letter].length > 1) doAlgoOnPart(obj[letter], num + 1)
	else console.log(obj[letter][0])
    }
}

// Starts the readline process (to understand input from stdin)
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

// calls this function every time a user inputs a new line.
rl.on('line', function(line) {
    if(line.length == 0) {
	rl.close();
    } else {
	words.push(line)
    }
});

rl.on('close', function(line) {
    doAlgoOnPart(words, 0)
})
