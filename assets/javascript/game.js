$(document).ready(function() {

    let numWins = 1;
   
    let theWords = [
        "peasant",
        "nobility",
        "illiterate",
        "drunkard",
        "libertarian",
        "kindgom",
        "marsh",
        "carriage",
        "beheaded",
        "court",
        "villian",
        "plague",
        "corsets",
        "shipyard",
        "alleyway",
    ];
    
    let theLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

    // computer picks random word
    let newRndWord = function() {
        return theWords[Math.floor(Math.random() * theWords.length)];
            console.log(newRndWord());
    };
    
    newRndWord();
    
    let rndWord = (newRndWord()); // new random word becomes a string
    rndWordLetters = rndWord.split(""); // split the random word to create an array
    
    // the number of guesses are deternmined by length of word
    let rndWordLength = rndWord.length; // determine length of random word
    
    
    for (let i = 0; i < rndWordLetters.length; i++) {
        let wordLetter = $('<p>');
        wordLetter.addClass('hide');
        wordLetter.attr('data-letter', rndWordLetters[i]);
        wordLetter.html("_");
        $(".wordguess").append(wordLetter);        
    }


    $(document).keypress(function(event) {
        playerLetter = String.fromCharCode(event.which);
        console.log("this is the player guess = " + playerLetter);
        
        for (let i = 0; i < theLetters.length; i++) {
            
            if (rndWordLetters[i] != playerLetter && playerLetter == theLetters[i]) {
                        for (let i = 0; i < theLetters.length; i++); 
                        $("#guessLeftValue").html(rndWordLength = rndWordLength + -1); // guesses left decreases by 1
                        $("#guessMadeValue").append(playerLetter) 
                   
            } 
        
            else if (rndWordLetters[i] === playerLetter) {
                $("#guessLeftValue").html(rndWordLength = rndWordLength + 1) 
                $("[data-letter="+rndWordLetters[i]+"]").removeClass('hide');
                console.log(playerLetter);
                $("[data-letter="+rndWordLetters[i]+"]").addClass('seen');
                console.log('this worked'); 
                $("[data-letter="+rndWordLetters[i]+"]").html(rndWordLetters[i]);
            }    
        
            if ( rndWordLength < 1) {
                // if allowed guesses are exceeded without a win, then...
                $("#guessMadeValue").empty(); // letters guessed resets
                $("#guessLeftValue").empty();
                $(".wordguess").empty();
                newRndWord(); 

            }
        } 
            

    });
     
});
