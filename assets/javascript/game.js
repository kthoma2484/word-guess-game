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
        "kingdom",
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
    
    // This is the storyline
let storyLine = [  
"In 17th And 18th Century Europe, Criminals Sentenced To Death By Hanging Would Play A Game Called Rite Of Words And Life. This game would essentially become the not childhood game known as 'Hangman'.",
"As you win each game you will learn of the hangman’s creepy history, along with other equally dark interpretations of this childhood game. You'll never see your childhood the same way again.",
"For many, the game of hangman brings back memories of guessing random words during innocent childhoods. The game is good, clean, educational fun, right? Wrong, so wrong! There is actually a dark history behind the game of hangman that dates all the way back to 17th century European executions. But this dark origin isn’t necessarily uncommon. As it turns out, many seemingly innocent children’s games have disturbing origins.",
"For those unfamiliar, hangman is a game in which one player draws lines for each letter in an unknown word. The other player then guesses letters one by one in order to solve said word, with each correct letter being filled in as they go — like an old-school version of Wheel of Fortune's word game. Unlimited guesses are not allowed: for every wrong letter guessed, a body part is drawn hanging from a gallows. The point is to solve the mystery word before the complete hanging person is drawn. In retrospect, the game is plenty dark, as children are literally drawing pictures of people being executed. However, the true story behind the game of hangman makes it 100% darker.",
"In present day Europe, capital punishment is nearly abolished, as the only country that continues to execute is Belarus. However, Europe was a different place in the 17th and 18th centuries, as capital punishment was a common form of penance. Forms of execution included burning, drowning, guillotine, beheading, and, of course, hanging.",      
"Occasionally, a criminal had the opportunity to play Rite of Words and Life, in which the executioner would pick a word and the criminal guessed said word through choosing letters — which is exactly where hangman derives.",
"Solving the word before the blanks were filled would spare the guessing criminal's life. Not solving the word would seal the victim's fate. And so, when you’re drawing the gallows and hangman while playing hangman, you’re drawing exactly what would happen back in the 17th century.",
"In Rite of Words and Life, the criminal was positioned with a noose around his neck and his feet stable on a five-leg stand. The executioner would pick a word and draw dashed on a board (so yes, literally hangman). At this point, the criminal guessed letters and the correct letters would be marked. For each wrong letter guessed, the executioner used a sledge hammer and knocked away one leg of the five-leg stand. After five incorrect letters, the stand was left without any legs, effectively making the stand fall and the criminal die.",
"If, however, the word was filled in with correct letters or correctly guessed, the criminal was set free and would not be tried for that crime again. While this may seem barbaric now, Europe was largely without jury trials during this period in time, so this may have been the only way a criminal could be freed from the conviction.",
"In a cruel twist of fate, many of the criminals of the time were illiterate, which meant the cards were stacked against them in this game of real-life hangman. In fact, almost everyone was illiterate. In the 17th century England, it’s estimated that 90% of women and 75% of men were illiterate.",
"It wasn't until the Age of Enlightenment, from about the 1650s through about the 1780s, that education was greatly improved. Due to improvements in education, more and more people, including peasants, learned to read.",
"In Tony Augarde’s The Oxford Guide to Word Games, he states, “The origins of Hangman are obscure meaning not discovered, but it seems to have arisen in Victorian times.” Because the game also went by the name of “Gallows,” “The Game of Hangin’,” and “Hanger,” it’s widely believed that there is a direct correlation between hangman and Rite of Words and Life, despite the fact that there is no written history detailing the rise of hangman.",
"In a twisted way, hangman has kept the basic structure of Rite of Words and Life, without the massive consequences for failing to guess a word.",
"Despite its dark origin, hangman remains of the most played games for kids in school. This is, of course, because of what a simple concept the game is. It only requires pencil, paper, and two players. Not only do children play with other children, but hangman is also a game teachers will employ, as it’s an effective way to teach a new language and sharpen students' critical thinking skills.",
]

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
        
        if (theLetters.indexOf(playerLetter) == -1) {
            return;
        }
      //  for (let i = 0; i < theLetters.length; i++) {
            if (numLeft <= 0) {
                // if allowed guesses are exceeded without a win, then...
                gameStart(); // call game to restart
            }
            
            if (letterCount == rndWordLength) {
                $("#winValue").html(numWins = numWins + 1);
                $(".storyHere").html(storyLine[numWins]);
                gameStart();
            }  

        

            if (rndWordLetters.indexOf(playerLetter) == -1) {
                console.log(playerLetter);
                $("#guessLeftValue").html(numLeft = numLeft + -1); // guesses left decreases by 1
                console.log('not this')
                $("#guessMadeValue").append(playerLetter); 
                    
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
                
            }
            
             
    });
     
});
