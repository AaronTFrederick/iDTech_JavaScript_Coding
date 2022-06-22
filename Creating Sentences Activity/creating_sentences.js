var words = ["This", "is", "JavaScript", "Coding!"];

function createSentence (arr) {
    var sentence = "";
    for(let i = 0; i < arr.length; i++) {
        sentence += arr[i] + " ";
    }
    return sentence;
}

console.log(createSentence(words))