 //variable to hold the shown number
 var compNumber = "";
//loop to generate the shown number between 19-120.
var shownNum = Math.floor(19 + Math.random() * 102);
//Display the generated number on the page
$("#totalNum").append(shownNum);

//array for gems 1-12
var gemArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
//adding classes to each gem
// $("#crystal-one").attr("data-crystalvalue", gemArray[i]);
// $("#crystal-two").attr("data-crystalvalue", gemArray[i]);
// $("#crystal-three").attr("data-crystalvalue", gemAray[i]);
// $("#crystal-four").attr("data-crystalvalue", gemArray[i]);
//loop for the array of numbers for the crystals
for (var i = 0; i < gemArray.length; i++) {
    var crystalOne = $(".crystal-one");
    var crystalTwo = $(".crystal-two");
    var crystalThree = $(".crystal-three");
    var crystalFour = $(".crystal-four");
    crystalOne.attr("data-crystalvalueone", gemArray[i]);
    crystalTwo.attr("data-crystalvaluetwo", gemArray[i]);
    crystalThree.attr("data-crystalvaluethree", gemArray[i]);
    crystalFour.attr("data-crystalvaluefour", gemArray[i]);
    //crystals given class
    crystalOne.addClass("crystal-image");
    crystalTwo.addClass("crystal-image");
    crystalThree.addClass("crystal-image");
    crystalFour.addClass("crystal-image");
       
}
$(function() {
    $(".crystal-image").on("click", function() {
        
        alert("yeet");

        var crystalValueOne = ($(this).attr("data-crystalvalueone"));
        

        console.log(crystalValueOne);
    })
});
