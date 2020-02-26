 //variable to hold the shown number
 var compNumber = "";
 //Adding global counter variable
 var counter = 0;
//loop to generate the shown number between 19-120.
var shownNum = Math.floor(19 + Math.random() * 102);
//Display the generated number on the page
$("#totalNum").append(shownNum);
//variables for wins and losses.
var wins = 0;
var losses = 0;
//array for gems 1-12
var gemArray = "";
//adding text content for score, wins and losses
scoreText = document.getElementById("score");
winsText = document.getElementById("winner");
lossesText = document.getElementById("loser");
//variables for html crystals
    var crystalOne = $(".crystal-one");
    var crystalTwo = $(".crystal-two");
    var crystalThree = $(".crystal-three");
    var crystalFour = $(".crystal-four");
    var greenCry = Math.floor(Math.random() * 12) + 1;
    var pinkCry = Math.floor(Math.random() * 12) + 1;
    var purpCry = Math.floor(Math.random() * 12) + 1;
    var blueCry = Math.floor(Math.random() * 12) + 1;
//reset game Function
function gameReset() {
    counter = 0;
    $("#score").text(counter);

    resetNum = Math.floor(19 + Math.random() * 102);
    $("#totalNum").text(resetNum);

    greenCry = Math.floor(Math.random() * 12) + 1;
    pinkCry = Math.floor(Math.random() * 12) + 1;
    purpCry = Math.floor(Math.random() * 12) + 1;
    blueCry = Math.floor(Math.random() * 12) + 1;
    
}
//click functions for each crystal

    $(".crystal-one").on("click", function() {
        counter += greenCry;
        
        // console.log("New score " + greenCry);
        $("#score").text(counter);
        // scoreText.textContent = counter;

        if (counter === shownNum) {
            wins += 1;
            $("#winner").text(wins);
            // winsText.textContent = wins;
            gameReset();
        } else if (counter >= shownNum) {
            losses += 1;
            $("#loser").text(losses);
            // lossesText.textContent = losses;
            gameReset();
            //.text can change/update your html with id's try that instead of .textContent
        }
    }) 
    $(".crystal-two").on("click", function() {
        counter += pinkCry;
        $("#score").text(counter);
        if (counter === shownNum) {
            wins += 1;
            $("#winner").text(wins);
            gameReset();
        } else if (counter >= shownNum) {
            losses += 1;
            $("#loser").text(losses);
            gameReset();
            
        }
    })
    $(".crystal-three").on("click", function() {
        counter += purpCry;
        $("#score").text(counter);
        if (counter === shownNum) {
            wins += 1;
            $("#winner").text(wins);
            gameReset();
        } else if (counter >= shownNum) {
            losses += 1;
            $("#loser").text(losses);
            gameReset();
            
        }
    })
    $(".crystal-four").on("click", function() {
        counter += blueCry;
        $("#score").text(counter);
        if (counter === shownNum) {
            wins += 1;
            $("#winner").text(wins);
            gameReset();
        } else if (counter >= shownNum) {
            losses += 1;
            $("#loser").text(losses);
            gameReset();
            
        }
    })

