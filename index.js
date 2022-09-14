// Packages:
const fs = require('fs')
const readline = require('readline');

// Starts the readline process (to understand input from stdin)
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: true
});

const words = []

// list of characters to go through
const alphabet = ["'", "-", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

function doAlgoOnPart(array, num) {
    const obj = {}
    const chr = a.toLowerCase()[num]
    // loops through the words array, adding to the obj the key based on the wanted character
    array.forEach(a => {
	if(obj[chr]) {
	    obj[chr].push(a)
	}
	else {
	    if(a.length > num) obj[chr] = [a]
	    else console.log(a)
	}
    })

    const keys = Object.keys(obj)
    const lettersIn = alphabet.filter(a=>keys.contains(a))
    
    // loops through the alphabet, checking if the object has the character as a key.
    for(var i = 0; i < lettersIn.length; i++) {
	const letter = lettersIn[i];
	if(obj[letter]) {
	    // then it checks if the array associated with the value of that key has more than one element.
	    if(obj[letter].length > 1) {
		doAlgoOnPart(obj[letter], num + 1)
	    } else console.log(obj[letter][0])
	}
    }
}

// calls this function every time a user inputs a new line.
rl.on('line', function(line){
    if(line.replace(/\s/g, "").length == 0) {
	rl.close();
//	words.sort();
//	words.forEach(a=>console.log(a));
	doAlgoOnPart(words, 0)
    } else words.push(line)
})



