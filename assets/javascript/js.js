$(document).ready(function(){
var userPick;
var correct = 0;
var incorrect = 0;
var question = 0;
var count = 0;

var triviaQuestion = [{
    question: "What does USB stand for?",
    choices: ["Universal Saving Bank", "Universal Serial Bus", "Unidentified Stick Bot", "Upload Saving Bit" ],
    validAnswer: 1
    }, {
    question:"Who invented JavaScript",
    choices: ["John Resig", "Dennis Ritchie", "Mitchell Baker", "Brendan Eich"],
    validAnswer: 3
    
    }, {
    question: "When was the first web page published?",
    choices: ["August 6, 1991", "January 2, 1989", "October 10, 1992", "December 4, 1990"],
    validAnswer: 0
    }];
    
    $("#display").text("00:00");


    $('#start').click(function() {
        counter = setInterval(timer, 1000);
    });
    
    
    var count = 30;
    
    function timer() {
        count--;
        console.log(count);
        $("#time").text(count);
         
        if (count <= 0) {
     clearInterval(counter)};
    if (count === 0) {
        alert("Times Up!") ;
        clearInterval("#time");
    }; 
    };



$("#start").click(function() {
   
    
$("#triviaQuestion_div").text(triviaQuestion);

docmument.write(triviaQuestion.question);
document.getElementById("triviaQuestion").innerHTML = triviaQuestion.question;

$(this).hide();
})


});