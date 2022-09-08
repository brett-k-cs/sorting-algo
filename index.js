// Packages:
const fs = require('fs')
var readline = require('readline');

// Starts the readline process (to understand input from stdin)
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: true
});

var words = []

// list of characters to go through
var alphabet = ["-", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

function doAlgoOnPart(array, num) {
    var obj = {}
    // loops through the words array, adding to the obj the key based on the wanted character
    array.forEach(a => {
	if(obj[a.toLowerCase()[num]]) {
	    obj[a.toLowerCase()[num]].push(a)
	}
	else {
	    if(a.length > num) obj[a.toLowerCase()[num]] = [a]
	    else console.log(a)
	}
    })

    // loops through the alphabet, checking if the object has the character as a key.
    for(var i = 0; i < alphabet.length; i++) {
	if(obj[alphabet[i]]) {
	    // then it checks if the array associated with the value of that key has more than one element.
	    if(obj[alphabet[i]].length > 1) {
		doAlgoOnPart(obj[alphabet[i]], num + 1)
	    } else console.log(obj[alphabet[i]][0])
	}
    }
}

// calls this function every time a user inputs a new line.
rl.on('line', function(line){
    if(line.replace(/\s/g, "").length == 0) {
	rl.close();
	doAlgoOnPart(words, 0)
    } else words.push(line)
})

/*
  words = fs.readFileSync('wordlist.txt', 'utf-8').split('\n');
  doAlgoOnPart(words, 0);
  rl.close();
*/
