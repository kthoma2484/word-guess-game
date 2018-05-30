$(document).ready(function() {

    let numWins = 1;
    let numLeft = 9;


    // computer picks random word
        
    let theWords = [
        "peasant",
        "nobility",
        "illiterate",
        "drunkard",
        "libertarian",
    ];
    console.log(theWords)

    let newRndWord = function() {
        return theWords[Math.floor(Math.random() * theWords.length)];
            console.log(newRndWord());
    };
    
    let theLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

    
    
    $(document).keypress(function(event) {
    // computer selects random word on keypress
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
                if (rndWordLetters[i] == playerLetter) {
                    console.log("it worked");
                let wordLetter = $('<p>');
                wordLetter.addClass('seen');
                wordLetter.attr('data-letter', rndWordLetters[i]);
                wordLetter.html(rndWordLetters[i]);
                $('.wordGuess').append(wordLetter);
                }
                    
            }
        });
        /*$('.wordGuess').keypress(function(event) {
            for (let i=0; i < theLetters.length; i++) {
            if (theLetters[i] == rndWordLength[index]) {
                
            */
                    
                    //
                //  $('.wordGuess').append('<p>' + wordLetter + '</p>');
                //  
                //
                // 
                // $('.wordGuess').html(newRndWord());
            //};
        

        
        
        
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
