$(document).ready(function() {

	//object of all questions 

	var myData = [

		{	"id" : 0,
			"question" : "What color does Yuxin like?",
			"answers"  : ["Red", "Yellow", "Blue", "Pink"],
			"rightAnswer" : "Blue"
		},

		{	"id" : 1,
			"question" : "Which singer does Yuxin like?",
			"answers"  : ["Pink", "Lady Gaga", "Madonna", "All of above"],
			"rightAnswer" : "All of above"
		},

		{	"id" : 2, 
			"question" : "Does Yuxin like spicy food?",
			"answers"  : ["Yes", "No"],
			"rightAnswer" : "Yes"
		},

		{	"id" : 3,
			"question" : "What does Yuxin do currently?",
			"answers"  : ["Graphic Designer", "Real Estate Agent", "Makeup Artist", "Saleswoman"],
			"rightAnswer" : "Real Estate Agent"
		}

	];


	// console.log(myData.find(x => x.id == 3));

	//startFunction will make the start button invisible and display the first question on the page
	function startFunction () {
		$(".startButton").addClass("invisible");
		displayQuestion ();
	};

	var i = 0 ;

	function displayQuestion () {
		//list question on screen
		$(".question").text(myData[i].question);

		//list all answers on screen
		for (k=0; k<myData[i].answers.length; k++) {
			var eachAnswer = myData[i].answers[k];

			$("<div>").addClass("form-check form-group").addClass(eachAnswer).appendTo($(".answers"));
			$("." + eachAnswer).append($("<input type='radio'/>").addClass("form-check-input"));
			$("." + eachAnswer).append($("<label>").addClass("form-check-label").text(eachAnswer));
		}

		i++;
	};

	$(".startButton").on("click", startFunction);

});

