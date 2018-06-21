//general variables
var crystalOne, crystalTwo, crystalThree, crystalFour;
var targetNum, score;
var wins, losses;

wins = 0;
losses = 0;
//on start, the game should run randomNumGenerator() and continue win/loss count
function startGame()
{
}
//select random values for crystals and targetNum
// * The random number shown at the start of the game should be between 19 - 120.
// * Each crystal should have a random hidden value between 1 - 12.
function randomNumGenerator()
{
    score = 0;
    crystalOne = Math.ceil(Math.random()*12);
    crystalTwo = Math.ceil(Math.random()*12);
    crystalThree = Math.ceil(Math.random()*12);
    crystalFour = Math.ceil(Math.random()*12);
    targetNum = 18 + Math.ceil(Math.random()*102);
    console.log(targetNum);
    //put targetNum into HTML
    $("#wins").html(wins);
    $("#losses").html(losses);
    $("#target").html(targetNum);
    $("#score").html(score);
    //put associated random crystal num into attr of associated HTML 
    $("#crystalOne").attr("data-value",crystalOne);
    $("#crystalTwo").attr("data-value",crystalTwo);
    $("#crystalThree").attr("data-value",crystalThree);
    $("#crystalFour").attr("data-value",crystalFour);
    // console.log(crystalOne);
    // console.log(crystalTwo);
    // console.log(crystalThree);
    // console.log(crystalFour);
}

//function runs on click

$(document).on("click", "img", function(){
    //get the value of the button clicked
    var clicked = $(this);
    var clickedVal = clicked.data("value");
    // console.log(clickedVal);

    //add above value to score
    score = score + clickedVal;
    console.log(score);
    $("#score").html(score);

    //if score < targetNum then continue game
    if(score < targetNum)
    {
        //no action
    }
    //otherwise either win go up and randomNumGen or loss go up and randomNumGen
    else if(score == targetNum)
    {
        wins++;
        $("#wins").html(wins);
        alert("You scored one point");
        randomNumGenerator();
    }
    else 
    {
        losses++;
        $("#losses").html(losses);
        alert("Uh oh!");
        randomNumGenerator();
    }
  

})
randomNumGenerator();



