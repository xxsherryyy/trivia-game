//game questions and logic//

var panel = $('#trivia-questions');

//on-click events//

$(document).on('click', '#start', function () {
    game.start();
});

$(document).on('click', '#done', function () {
    game.done();
});

//set variables//

// var userPick;
var correct = 0;
var incorrect = 0;
var question = 0;
var count = 0;

var questions = [{
    question: "What does USB stand for?",
    choices: ["Universal Saving Bank", "Universal Serial Bus", "Unidentified Stick Bot", "Upload Saving Bit"],
    validAnswer: "Universal Serial Bus"
}, {
    question: "Who invented JavaScript",
    choices: ["John Resig", "Dennis Ritchie", "Mitchell Baker", "Brendan Eich"],
    validAnswer: "Brendan Eich"

}, {
    question: "When was the first web page published?",
    choices: ["August 6, 1991", "January 2, 1981", "October 10, 1995", "December 4, 1990"],
    validAnswer: "August 6, 1991"
}];

// $("#display").text("00:00");


$('#start').click(function () {
    counter = setInterval(timer, 1000);
});


var count = 30;

function timer() {
    count--;
    // console.log(count);
    $("#time").text(count);

    if (count <= 0) {
        clearInterval(counter)
    };
    if (count === 0) {
        alert("Times Up!");
        clearInterval("#time");
    };
};

var game = {

    correct: 0,
    incorrect: 0,


    start: function () {

        $('#start').remove();

        for (var i = 0; i < questions.length; i++) {
            panel.append('<h2>' + questions[i].question + '</h2>');
            for (var j = 0; j < questions[i].choices.length; j++) {
                panel.append('<input type="radio" name="question' + '-' + i + '" value="' + questions[i].choices[j] + '">' + questions[i].choices[j]);
                panel.append('<label for="question-' + i + '">' + questions[i].choices[j] + '</label>')

            }

        }


        panel.append('<button id="done">Done</button>');
    },

    done: function () {

        $.each($("input[name='question-0']:checked"), function () {
            if ($(this).val() == questions[0].validAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
                console.log(game.correct);
                console.log(game.incorrect)
            }
        });
        $.each($("input[name='question-1']:checked"), function () {
            if ($(this).val() == questions[1].validAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-2']:checked"), function () {
            if ($(this).val() == questions[2].validAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        this.result();

    },


    result: function () {

        clearInterval(timer);


        panel.html('<h3>Finnished!</h3>');
        panel.append('<h4>Correct Answers: ' + this.correct + '</h4>');
        panel.append('<h4>Incorrect Answers: ' + this.incorrect + '</h4>');
    }
}



