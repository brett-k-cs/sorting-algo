var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: true
});

var words = []

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var main = {}

function doAlgoOnPart(start, array, num) {
    var obj = {}
    array.forEach(a => {
	if(obj[a.toLowerCase()[num]]) {
	    obj[a.toLowerCase()[num]].push(a)
	}
	else {
	    obj[a.toLowerCase()[num]] = [a]
	}
    })

    for(var i = 0; i < alphabet.length; i++) {
	if(obj[alphabet[i]]) {
	    if(obj[alphabet[i]].length > 1) {
		doAlgoOnPart(alphabet[i], obj[alphabet[i]], num + 1)
	    } else console.log(obj[alphabet[i]][0])
	}
    }
}

rl.on('line', function(line){
    if(line.replace(/\s/g, "").length == 0) {
	rl.close();
	doAlgoOnPart(null, words, 0)
    } else words.push(line)
})
