$(document).ready(function() {
	var index = 0;
	var countdownTimer = {
		time : 30,
		reset: function() {
			this.time = 30;
			$('.timer').html('<h3>' + this.time + ' seconds remaining</h3>');
		},
		start: function() {
			counter = setInterval(countdownTimer.count, 1000);	
		},
		stop: function() {
			clearInterval(counter);
		},
		count: function() {
				countdownTimer.time--;
				console.log(countdownTimer.time);

			if (countdownTimer.time >= 0) {
				$('.timer').html('<h3>' + countdownTimer.time + ' seconds remaining</h3>');
			}
			else {
				index++;
				answerWrong();
				countdownTimer.reset();
				if (index < questionArray.length) {
					loadQuestion(index);
				} else {
					$(".answerchoice").hide();
					showScore();
				}
			}
		}
	};
/*
	var trivia = 
    questions: 
    ['Is it possible to run adds on Instagram?',
        'Yes, but only though linking you Facebook account', 
        'No', 
        'Yes', 
        'Yes but only directly through a Facebook business page'
    'How many users access Facebook monthly?',
        ['200 million', 
        '250 million', 
        '2.2 billion', 
        '3 billion'],         
    'How many users access Instagram monthly?',
         ['100 million', 
         '125 million', 
         '2.2 billion', 
         '1 billion'],    
    'How many user access Twitter monthly?',
        ['200 million', 
        '300 million', 
        '250 million', 
        '330 million']     
    'How many users access YouTube monthly?',
          ['1 million', 
          '1 billion', 
          '2 billion', 
          '100 million']     	
*/
var correct = 0;
var wrong = 0;
var q1 = {
	question : "Is it possible to run adds on Instagram?",
	possibleAnswers : ['Yes, but only though linking you Facebook account',
				       'yes',
				       'no',
				       'Yes, but only directly through a Facebook business page'],
	flags : [false, true, false, false],
	answer : 'Yes'
};

var q2 = {
	question: "How many users access Facebook monthly?",
	possibleAnswers:  ['200 million', 
                       '250 million', 
                       '2.2 billion', 
                       '3 billion'], 
	flags : [false, false, true, false],
	answer : '2.2 billion'
};

var q3 = {
	question : "How many users access Instagram monthly?",
    possibleAnswers :['100 million', 
                      '125 million', 
                      '2.2 billion', 
                      '1 billion'], 
	flags : [false, false, false, true],
	answer : '1 billion'
};

var q4 = {
	question : "How many users access Twitter monthly?",
	possibleAnswers :  ['200 million', 
                        '300 million', 
                        '250 million', 
                        '330 million'],  
	flags : [false, false, false, true],
	answer : '330 million'
};

var q5 = {
	question : "How many users access YouTube monthly?",
	possibleAnswers : ['Commissioner Gordon',
				       'Batwoman',
				       'Alfred',
				       'Robin'],
	flags : [false, true, false, false],
	answer : 'Batwoman'
};



var questionArray = [q1, q2, q3, q4, q5,];

function loadQuestion(questionSelection) {
	console.log(questionSelection);
	countdownTimer.reset();
  $(".question").html("<h3>" + questionArray[questionSelection].question + "</h3>");
  $("#buttonA").text(questionArray[questionSelection].possibleAnswers[0]).show();
  $("#buttonB").text(questionArray[questionSelection].possibleAnswers[1]).show();
  $("#buttonC").text(questionArray[questionSelection].possibleAnswers[2]).show();
  $("#buttonD").text(questionArray[questionSelection].possibleAnswers[3]).show();

}

//function nextQuestion() {
//	index = index++;
//	console.log(index);
//}

function setup() {
	index = 0;
	$('.question').append('<button id="startButton">Start</button>');
	$('#startButton').on('click', function() {
		$(this).hide();
		countdownTimer.start();
	 	loadQuestion(index);
	});
}		

function getAnswer() {

//  nextQuestion();
	$('.answerchoice').on('click', function() {
	  console.log('alert', index);
		index++;
		console.log('click', index);
		$(".question").text('');
		$("#buttonA").text('');
		$("#buttonB").text('');
		$("#buttonC").text('');
		$("#buttonD").text('');
		loadQuestion();
	})
}

function answerCorrect() {
	correct++;
	alert("CORRECT!");
	console.log("correct");
}

function answerWrong() {
	wrong++;
	alert("INCORRECT!");
	console.log("wrong");
}

function showScore() {
	$('.question').empty();
	$('.question').append("<h2><p>" + correct + " RIGHT</p></h2>");
	$('.question').append("<h2><p>" + wrong + " WRONG</p></h2>");
	countdownTimer.stop();
	$('.timer').empty();

}

setup();
$('.answerchoice').on('click', function() {
 console.log($(this));
 if(this.id == 'buttonA') {
 	var answerChosen = 'A';
 } else if(this.id == 'buttonB') {
 	answerChosen = 'B';
 } else if (this.id == 'buttonC') {
 	answerChosen = 'C';
 } else if (this.id == 'buttonD') {
 	answerChosen = 'D';
 } 
 if ((answerChosen == 'A') && (questionArray[index].flags[0] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'A') {
 	answerWrong();
 }
 if ((answerChosen == 'B') && (questionArray[index].flags[1] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'B') {
 	answerWrong();
 }
if ((answerChosen == 'C') && (questionArray[index].flags[2] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'C') {
 	answerWrong();
 }
if ((answerChosen == 'D') && (questionArray[index].flags[3] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'D') {
 	answerWrong();
 }

 $(".question").text('');
 $("#buttonA").text('');
 $("#buttonB").text('');
 $("#buttonC").text('');
 $("#buttonD").text('');
 index++;
 if (index < questionArray.length) {
 	loadQuestion(index);
 } else {
 	$(".answerchoice").hide();
 	showScore();
 }
});

});
