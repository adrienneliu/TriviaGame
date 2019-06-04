var i = 1;
var correct = 0;
var incorrect = 0;

$(document).ready(function () {

    $(".timer").hide();
    $("#reset").hide();
    $("#photo").hide();

    //list of questions
    var questionList = {
        1: "What did the crocodile swallow in Peter Pan?",
        2: "What did Joseph Priesley discover in 1774?",
        3: "Who lived at 221B, Baker Street, London?",
        4: "What horoscope sign has a crab? ",
        5: "What’s the real name of Siddartha Gautama?",
        6: "What type of tree stays the smallest in the world?",
        7: "When did the Second World War end?",
        8: "Where was paper invented?",
        9: "What did the 7 dwarves do for a job?",
        10: "Which planet is nearest the sun? "

    }

    //list of answers
    var answerList = {
        1: ["Clock", "Meat", "Phone", "Tinkerbell"],
        2: ["Oxygen", "Hydrogen", "Carbon", "Helium"],
        3: ["Sherlock", "The Doctor", "TinTin", "Agatha Christie"],
        4: ["Aquarius", "Cancer", "Pisces", "Virgo"],
        5: ["Buddha", "Dalai Lama", "Rinpoche", "Gendun Chopel"],
        6: ["Bonsai", "Dwarf Willow", "Hyperion", "Banyan"],
        7: ["1945", "1942", "1939", "1918"],
        8: ["Egypt", "China", "India", "Japan"],
        9: ["Cave Diving", "Gardener", "Nothing", "Miners"],
        10: ["Mercury", "Mars", "Venus", "Pluto"],

    }

    //list of correct answers to be compared to with the choice answers
    var actualAnswer = {
        1: ["Clock"],
        2: ["Oxygen"],
        3: ["Sherlock"],
        4: ["Cancer"],
        5: ["Buddha"],
        6: ["Bonsai"],
        7: ["1945"],
        8: ["China"],
        9: ["Miners"],
        10: ["Mercury"],
    }



    // start/intro - clicking on it gets rid of the intro and displays the first question 
    $("#start-click").on("click", function () {
        $("#questiontext").html("");
        $("#start-click").html("");
        $(".timer").show();
        $("#reset").hide();

        nextQuestion();


    });


    var allowedTime;
    var intervalId;
    //asks the next question, but need to change to the next question 
    //needs to be able to be clicked on
    //after clicking, needs to have a result 
    function nextQuestion() {
        if (i >= 11) {
            $(".choiceOptions").hide();
            $("#question").hide();
            $("#answerResult").html("Congrats! <p> You got " + correct + " correct!");
            i = 0;
            $("#reset").show().on("click", function () {
                fiveSeconds();
            });

        } else if (i <= 10) {
            var j = 0;
            $("#display").text(10)
            allowedTime = 10;
            startCountdown();
            $("#question").text(questionList[i]);
            $("#choiceOne").html("<br>" + answerList[i][j])
            j++;
            $("#choiceTwo").html("<br>" + answerList[i][j])
            j++
            $("#choiceThree").html("<br>" + answerList[i][j])
            j++;
            $("#choiceFour").html("<br>" + answerList[i][j])
        }


    }

    function startCountdown() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }

    function decrement() {

        //  Decrease number by one.
        //if(allowedTime > 0)
        allowedTime--;

        //  Show the number in the #show-number tag.
        $("#display").text(allowedTime);


        //  Once number hits zero...
        if (allowedTime === 0) {
            //  If player runs out of time
            $(".choiceOptions").hide();
            $("#question").hide();
            $("#answerResult").html("You ran out of time!" + "<p>" + "The correct answer was " + String(Object.values(actualAnswer[i])[0]));
            $("#display").text('00');
            clearInterval(intervalId);
            setTimeout(fiveSeconds, 3000);
        }
    }


    $(".choice").on("click", function () {
        console.log(Object.values(actualAnswer[i])[0]);

        console.log($(event.target).text());

        if (String($(event.target).text()) === String(Object.values(actualAnswer[i])[0])) {
            $(".choiceOptions").hide();
            $("#question").hide();
            $("#answerResult").text("You got it correct!");
            correct++;

            setTimeout(fiveSeconds, 3000);

            console.log('correct ' + correct);
            clearInterval(intervalId);
        } else {
            $(".choiceOptions").hide();
            $("#question").hide();
            $("#answerResult").html("You got it wrong!" + "<p>" + "The correct answer was " + String(Object.values(actualAnswer[i])[0]));
            $("#photo").show().append(function() {
                $(this).attr("src", "https://media1.giphy.com/media/a9xhxAxaqOfQs/giphy.gif")
            })
            incorrect++;
            console.log('incorrect ' + incorrect);

            setTimeout(fiveSeconds, 3000);
            clearInterval(intervalId);

        }

    })

    //when the player makes a choice, the result is shown and they get five seconds before the next question shows
    function fiveSeconds() {
        i++;
        $(".choiceOptions").show();
        $("#question").show();
        $("#answerResult").text("");
        $("#reset").hide();
        console.log("Inside fiveseconds  " + i);
        console.log(nextQuestion());


    }
})



//your results message

// container for questions, answers, and 3 choices

// timer 



// time out message

