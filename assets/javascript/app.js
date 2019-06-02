var i =1;
$(document).ready(function (){

    //list of questions
var questionList = {
    1: "What did the crocodile swallow in Peter Pan?",
    2: "What did Joseph Priesley discover in 1774?",
    3:  "Who lived at 221B, Baker Street, London?",
    4: "What horoscope sign has a crab? ",
    5: "What’s the real name of Siddartha Gautama?",
    6: "What’s the smallest type of tree in the world? ",
    7: "When did the Second World War end?", 
    8: "Where was Christopher Columbus born?", 
    9: "What did the 7 dwarves do for a job?",
    10: "Which planet is nearest the sun? "

}

    //list of answers
var answerList = {
    1: ["Clock", "Meat", "Phone", "Tinkerbell"],  
    2: ["Oxygen", "Hydrogen", "Carbon", "Helium"] ,
    3: ["Sherlock"],
    4:["Cancer"],
    5:["Buddha"],
    6:["Bonsai"],
    7:["1945"],
    8:["Genoa"],
    9:["Miners"],
    10:["Mercury"]

}

var actualAnswer={
    1:"Clock",
    2:"Oxygen",
    3: "Sherlock",
    4:"Cancer",
    5:"Buddha",
    6:"Bonsai",
    7:"1945",
    8:"Genoa",
    9:"Miners",
    10:"Mercury"
}


// start/intro - clicking on it gets rid of the intro and displays the first question 
$("#start-click").on("click", function() {
    $("#questiontext").html("");
    $("#start-click").html("");
    nextQuestion();
    
});

//asks the next question, but need to change to the next question 
//needs to be able to be clicked on
//after clicking, needs to have a result 
function nextQuestion(){
    var j=0;

    $("#question").text(questionList[i]);
    $("#choiceOne").html("<br>" + answerList[i][j])
    j++;
    $("#choiceTwo").html("<br> " + answerList[i][j])
    j++
    $("#choiceThree").html("<br> " + answerList[i][j])
    j++;
    $("#choiceFour").html("<br> " + answerList[i][j])
    i++;

    
}

$(".choice").on("click", function() {
nextQuestion();
})
// container for questions, answers, and 3 choices 

// timer 


// if player chooses right answer, show correct screen 

// if player choose wrong answer, show incorrect screen

// time out message

// win/lose message
})