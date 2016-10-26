// JavaScript Document
window.onload = function () {};

var questionBank = [{
	riddle: "There is a powerful enchanter that lives near Camelot; what do they call him?",
	choices: ["Merlin", "Sir Not-Appearing-In-This-Film", "Tim", "Bedevere"],
	answer: "Bedevere"
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
	answer: "African or European"
}];

console.log();
var timeLimit = 15000;
var timeLeft = timeLimit;
var currentQuestion = 0;

function giveAnswer() {
	alert("Sorry, you ran out of time.<br\>The answer was ");
}

function giveQuestion() {
	resetTimer();
	console.log(questionBank[currentQuestion].riddle);
	$("#questionDiv").html(questionBank[currentQuestion].riddle);
	$("#choice1").html(questionBank[currentQuestion].choice[1]);


	for (var i = 0; i < 4; i++) {

		var placeholder = "choice" + i;
		console.log(placeholder);
		$("#choices+i").html(questionBank[currentQuestion].choices[i]);
	}

	for (var j = timeLeft; j <= 0; j--) {
		timeLeft--;
		var covertTime = timeConvert(timeLeft);
		$("#timeLeft").html(covertTime);
	}
}

function timeConvert(time) {
	var minutes = Math.floor(time / 60);
	var seconds = time - (minutes * 60);
	if (seconds < 10) {
		seconds = "0" + seconds;
	} else if (minutes === 0) {
		minutes = "0" + minutes;
	}
	return minutes + ":" + seconds;
}

function resetTimer() {
	timeLeft = timeLimit;
}

giveQuestion();