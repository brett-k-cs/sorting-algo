var words = [String]();

while let line = readLine() {
    if(line.count == 0) {break;}
    words.append(line)
}

let alphabet = ["'", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

func doSortingAlgo(part: [String], num: Int) {
    var obj = Dictionary<String, [String]>()
    for word in part {
        let letter = String(Array(word)[0])

        if(obj[letter] != nil) {
            obj[letter]!.append(word)
        } else {
            if(word.count > num) {obj[letter] = [word]}
            else {print(word)}
        }
    }

    for letter in alphabet {
        if(obj[letter] == nil) {continue;}
        if(obj[letter]!.count > 1) {doSortingAlgo(part: obj[letter]!, num: num + 1)}
        else {print(obj[letter]![0])}
    }
}

doSortingAlgo(part: words, num: 0)
