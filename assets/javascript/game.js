$(document).ready(function() {

    let numWins = 1;
    let numLeft = 9;
   
    let theWords = [
        "peasant",
        "nobility",
        "illiterate",
        "drunkard",
        "libertarian",
    ];
    
    let theLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

    // computer picks random word
    let newRndWord = function() {
        return theWords[Math.floor(Math.random() * theWords.length)];
            console.log(newRndWord());
    };
    
    newRndWord();
    
    let rndWord = (newRndWord()); // new random word becomes a string
        console.log(rndWord);
    rndWordLetters = rndWord.split(""); // split the random word to create an array
        console.log(rndWordLetters);
    let rndWordLength = rndWord.length; // determine length of random word
        console.log(rndWordLength);
    
    
    
    $(document).keypress(function(event) {
        playerLetter = String.fromCharCode(event.which);
            console.log("this is the player guess = " + playerLetter);
        
        for (let i = 0; i < rndWordLetters.length; i++) {
            if (rndWordLetters[i] === playerLetter) {
                    let wordLetter = $('<p>');
                    wordLetter.addClass('seen');
                    wordLetter.attr('data-letter', rndWordLetters[i]);
                    wordLetter.html(rndWordLetters[i]);    
                    $(".wordguess").append(wordLetter);
                    console.log($(".wordguess").append(wordLetter));
                }
            }
            

        });
     
});

/*
newGenWord();
var NumberOfWords = 28

var words = new BuildArray(NumberOfWords)


function BuildArray(size){
this.length = size
for (var i = 0; i <= size; i++){
this[i] = null}
return this
}

function PickRandomWord(frm) {
// Generate a random number between 1 and NumberOfWords
var rnd = Math.ceil(Math.random() * NumberOfWords)

// Display the word inside the text box
frm.WordBox.value = words[rnd]
}
function BuildArray(size){
    this.length = size
    for (var i = 1; i <= size; i++){
    this[i] = null}
    return this
    }
    
    function PickRandomWord(frm) {
    // Generate a random number between 1 and NumberOfWords
    var rnd = Math.ceil(Math.random() * NumberOfWords)
    
    // Display the word inside the text box
    frm.WordBox.value = words[rnd]
    }
*/
