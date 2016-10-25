// JavaScript Document
window.onload = function(){
};
var QandA = {
	question1: ["What is your quest?", "to praise the sun", "to provide glory to King Arthur, King of the Britons", "to find the holy grail"],
	question1Answer: 3,
};

$("#answer1").on("click", function(){
	
});
$("#answer2").on("click", function(){
	
});
$("#answer3").on("click", function(){
	
});
$("#answer4").on("click", function(){
	
});


var timeLimit = 15000;
var timeElapsed = 0;

function giveAnswer(){
	alert("Sorry, you ran out of time.<br\>The answer was ");
}

function giveQuestion(){
	timeElasped++;
	var covertTime = timeConvert(timeElapsed);
	$("#timeLeft").html(timeElasped);
}

function timeConvert (time){
	var minutes = Math.floor(time/60);
	var seconds = time - (minutes * 60);
	if (seconds < 10){
		seconds = "0" + seconds;
	}
	else if (minutes === 0){
		minutes = "0" + minutes;
	}
return minutes + ":" + seconds;
}

function resetTimer(){
	timeElasped = 0;
}

giveQuestion();