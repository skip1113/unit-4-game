 $(document).ready(() => {
    //Adding global counter letiable
    let counter = 0;
    //loop to generate the shown number between 19-120.
    let shownNum = Math.floor(19 + Math.random() * 102);
    //Display the generated number on the page
    $("#totalNum").html(shownNum);
    //letiables for wins and losses.
    let wins = 0;
    let losses = 0;
    //adding text content for score, wins and losses
    scoreText = document.getElementById("score");
    winsText = document.getElementById("winner");
    lossesText = document.getElementById("loser");
    //letiables for html crystals
        let greenCry = Math.floor(Math.random() * 12) + 1;
        let pinkCry = Math.floor(Math.random() * 12) + 1;
        let purpCry = Math.floor(Math.random() * 12) + 1;
        let blueCry = Math.floor(Math.random() * 12) + 1;
    //win & lose functions to add and reset
    function winner() {
        wins++;
        $("#winner").text(wins);
        gameResetTwo();
        gameReset();
    }
    function lost() {
        losses++;
        $("#loser").text(losses);
        gameResetTwo();
        gameReset();
    }
    //reset game Function
    function gameReset() {
        counter = 0;
        $("#score").text(counter);
    }
    function gameResetTwo() {
        shownNum = Math.floor(19 + Math.random() * 102);
        $("#totalNum").html(shownNum);

        greenCry = Math.floor(Math.random() * 12) + 1;
        pinkCry = Math.floor(Math.random() * 12) + 1;
        purpCry = Math.floor(Math.random() * 12) + 1;
        blueCry = Math.floor(Math.random() * 12) + 1;
        
    }
    //click functions for each crystal

        $(".crystal-one").on("click", function() {
            counter = counter + greenCry;
            
            // console.log("New score " + greenCry);
            $("#score").text(counter);
            // scoreText.textContent = counter;
            console.log("this is your score " + counter);
            if (counter === shownNum) {
                console.log("Win win");
                counter = 0;
                winner();
                // winsText.textContent = wins;
                gameReset();
                gameResetTwo();
            } 
            else if (counter > shownNum) {
                console.log("lose lose");
                counter = 0;
                lost();
                // lossesText.textContent = losses;
                gameReset();
                gameResetTwo();
            }
        }); 
        $(".crystal-two").on("click", function() {
            counter += pinkCry;
            $("#score").text(counter);
            if (counter === shownNum) {
                winner();
                gameReset();
                gameResetTwo();
            } 
            else if (counter > shownNum) {
                lost();
                gameReset();
                gameResetTwo();
            }
        });
        
        $(".crystal-three").on("click", function() {
            counter += purpCry;
            $("#score").text(counter);
            if (counter === shownNum) {
                winner();
                gameReset();
                gameResetTwo();
            } 
            else if (counter > shownNum) {
                lost();
                gameReset();
                gameResetTwo();
            }
        });
        $(".crystal-four").on("click", function() {
            counter += blueCry;
            $("#score").text(counter);
            if (counter === shownNum) {
                winner();
                gameReset();
                gameResetTwo();
            } 
            else if (counter > shownNum) {
                lost();
                gameReset();
                gameResetTwo();
            }
        });
});
