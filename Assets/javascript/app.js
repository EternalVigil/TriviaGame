// JavaScript Document
var QandA = {
	question1: ["What is your quest?", "to praise the sun", "to provide glory to King Arthur, King of the Britons", "to find the holy grail"],
	question1Answer: 3,
	
};
var maxTime = 15000;
function giveAnswer(){
	
}

function giveQuestion(){
	setTimeout(giveAnswer, maxTime);
	$("#timeLeft").html("00:" + maxTime);
}

giveQuestion();