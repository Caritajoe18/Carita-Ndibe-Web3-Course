function loop() {
    for (let n = "#"; n.length <= 7; n += '#') {
        console.log(n)
    }
}
loop()

function fizz() {
    for (let n = 1; n <= 100; n++) {
        let word;
        if (n % 3 == 0) {
            console.log(word = "Fizz")
        } else if (n % 5 == 0) {
            console.log(word = "Buzz")
        }
        else
            console.log(word || n)
    }
}
fizz()

function chess(n) {
    for (let i = 0; i < n; i++) { // for the rows
        let board = "" 
        for (let j = 0; j < n; j++) { // for the column
            if ((i + j) % 2 == 0) { // checking for where to add # or space
                board += " "
            } else board += "#"

        }
        console.log(board)
    }
}
chess(8)