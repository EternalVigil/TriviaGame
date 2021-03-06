// JavaScript Document
window.onload = function () {};

var questionBank = [{
	riddle: "There is a powerful enchanter that lives near Camelot; what do they call him?",
	choices: ["Merlin", "Sir Not-Appearing-In-This-Film", "Tim", "Bedevere"],
	answer: "Tim"
}, {
	riddle: "What is the most powerful weapon in existance?",
	choices: ["Excaliber", "The Killer Rabbit of Caerbannog", "Pangalactic Gargleblaster", "The Holy Handgrenade of Antioch"],
	answer: "The Holy Handgrenade of Antioch"
}, {
	riddle: "What is the capital of Assyria?",
	choices: ["Assur", "Babylon", "Memphis", "Ankara"],
	answer: "Assur"
}, {
	riddle: "What is the airspeed velocity of an unladen swallow?",
	choices: ["at least 15mph", "African or European?", "11 meters per second", "I don't know"],
	answer: "African or European?"
}];

console.log();
var timeLimit = 15000;
var timeLeft = timeLimit;
var currentQuestion = 0;
var answerRight = 0;
var answerWrong = 0;
$("#scoreboard").html(answerRight + "/" + questionBank.length);

function giveAnswer() {
	alert("Sorry, you ran out of time.<br\>The answer was " + questionBank[currentQuestion].answer);
	currentQuestion++;
}

function giveQuestion() {

	//provides the question
	$("#questionDiv").html(questionBank[currentQuestion].riddle);

	//provides the choices for the buttons
	for (var i = 0; i < 4; i++) {
		var selector = "#choice" + (i + 1).toString();
		$(selector).html(questionBank[currentQuestion].choices[i]);
	}
}

function countDown() {
	timeLeft--;
	var covertTimeLeft = timeConvert(timeLeft);
	$("#timeLeft").html(covertTimeLeft);
}

function timeConvert(time) {
	var seconds = Math.floor(time / 1000);
	if (seconds <= 0) {
		giveAnswer();
	} else {
		return "00:" + seconds;
	}
}

function resetTimer() {
	timeLeft = timeLimit;
}

//should have a loop starting here...

//sets the game board with question and choices
giveQuestion();

//governs button click functionality
$(":button").on("click", function () {
	if ($(this).text() === questionBank[currentQuestion].answer) {
		console.log("Congrats on the right answer");
		answerRight += 1;
		$("#scoreboard").html(answerRight + "/" + questionBank.length);
		currentQuestion += 1;
		giveQuestion();
	} else {
		console.log("You dun goofed dum-dum.");
		answerWrong++;
		currentQuestion += 1;

	}
});

//...and end here