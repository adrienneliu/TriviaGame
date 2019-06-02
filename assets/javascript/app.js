$(document).ready(function (){

    //list of questions
var questionList = {
    1: "What did the crocodile swallow in Peter Pan?",
    2: "What did Joseph Priesley discover in 1774?" 

}

    //list of answers
var answerList = {
    1: ["Clock", "Meat", "Phone", "Tinkerbell"],  
    2: ["Oxygen", "Hydrogen", "Carbon", "Helium"] 

}


// start/intro - clicking on it gets rid of the intro and displays the first question 
$("#start-click").on("click", function() {
    document.getElementById("questiontext").innerHTML = "";
    $("#start-click").html("")
    nextQuestion();
    
});

//asks the next question, but need to change to the next question 
//needs to be able to be clicked on
//after clicking, needs to have a result 
function nextQuestion(){


    $("#question").text(questionList[1]);
    $("#choiceOne").html("<br>" + answerList[1][0])
    $("#choiceTwo").html("<br> " + answerList[1][1])
    $("#choiceThree").html("<br> " + answerList[1][2])
    $("#choiceFour").html("<br> " + answerList[1][3])
    ;
}

// clear = function () {
//     document.getElementById("questiontext").innerHTML = "";
// }

// container for questions, answers, and 3 choices 

// timer 

// if player chooses right answer, show correct screen 

// if player choose wrong answer, show incorrect screen

// time out message

// win/lose message 

})