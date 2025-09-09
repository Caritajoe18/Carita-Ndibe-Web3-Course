function isEven(n) {
    if (n == 0) return true;
    else if (n == 1) return false;
    else if (n < 0) return isEven(-n);
    else return isEven(n - 2);
}
// console.log(isEven(50));
// console.log(isEven(75));
// console.log(isEven(-1));  

function countBs(n) {
    let bCount = 0
    for (let i = 0; i < n.length; i++) {
        if (n[i] == "B") {
            bCount++;
        }
    }
    return bCount
}
function countChars(word, alpha) {
    let alphaCount = 0
    for (let i = 0; i < word.length; i++) {
        if (word[i] == alpha) {
            alphaCount++;
        }
    }
    return alphaCount
}

// console.log(countBs("BBut"))
// console.log(countChars("kakkerlak", "k"));
// console.log(countBs("Bob"))