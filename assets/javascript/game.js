$(document).ready(function() {

    let numWins = 0;
    let numLeft = 10;
    let letterCount = 0;
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
    
    let newRndWord = function() {
        return theWords[Math.floor(Math.random() * theWords.length)];
            console.log(newRndWord());
    };
    
    let rndWord = ""; 
    let rndWordLetters = []; 
    let rndWordLength = 0;

    // computer picks random word
    
    let gameStart = function() {
        // resets the word guess element
        letterCount = 0;
        numLeft = 10;
        console.log(numLeft);
        $("#guessMadeValue").empty(); // letters guessed resets
        $("#guessLeftValue").html(numLeft); // guesses left resects 
        $(".wordguess").empty();// clear word guess element
        
       
        // select a new random word
        rndWord = (newRndWord()); // new random word becomes a string
        console.log(rndWord);
        rndWordLetters = rndWord.split(""); // split the random word to create an array
        console.log(rndWordLetters);
        // the number of guesses are deternmined by length of word
        rndWordLength = rndWord.length; // determine length of random word
        
        // creates underscores with same number as word letters
        for (let i = 0; i < rndWordLetters.length; i++) {
            let wordLetter = $('<p>');
            wordLetter.addClass('hide');
            wordLetter.attr('data-letter', rndWordLetters[i]);
            wordLetter.html("_");
            $(".wordguess").append(wordLetter);        
        
        }
    
    }
    
    // calls game start function on startup
    gameStart();
       

    $(document).keypress(function(event) {
        playerLetter = String.fromCharCode(event.which);
        console.log("this is the player guess = " + playerLetter);
        
      //  for (let i = 0; i < theLetters.length; i++) {
         
            if (rndWordLetters.indexOf(playerLetter) == -1) {
                console.log(playerLetter);
                $("#guessLeftValue").html(numLeft = numLeft + -1); // guesses left decreases by 1
                console.log('not this')
                $("#guessMadeValue").append(playerLetter); 
                if ( numLeft <= 0) {
                    // if allowed guesses are exceeded without a win, then...
                    gameStart(); // call game to restart
                 }
                        
            } 
        
            else {
                $("[data-letter="+ playerLetter +"]").removeClass('hide');
                console.log(playerLetter);
                $("[data-letter="+ playerLetter +"]").addClass('seen');
                console.log('not shown')
                $("[data-letter="+ playerLetter +"]").html(playerLetter);
                $("[data-letter="+ playerLetter +"]").length; 
                console.log($("[data-letter="+ playerLetter +"]").length);
                letterCount += $("[data-letter="+ playerLetter +"]").length; 
                console.log(letterCount);
                if (letterCount === rndWordLength) {
                    $("#winValue").html(numWins = numWins + 1);
                    gameStart();
                }
            }
     
    });
     
});
