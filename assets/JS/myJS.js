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
		},

		{	"id" : 4,
			"question" : "How many cats does Yuxin have?",
			"answers"  : ["0", "1", "2", "3"],
			"rightAnswer" : "1"
		}

	];

	var wrongCounter = 0;
	var rightCounter = 0;
	var allQuestions = myData.length;

	// console.log(myData.find(x => x.id == 3));

	//startFunction will make the start button invisible and display the first question on the page
	function startFunction () {
		$(this).remove();
		displayQuestion ();
	};

	var i = 0 ;

	function displayQuestion () {

		//list question on screen
		$(".question").text(myData[i].question);

		//list all answers on screen
		for (k=0; k<myData[i].answers.length; k++) {
			var eachAnswer = myData[i].answers[k];

			$("<div>").addClass("form-check form-group").attr("id", eachAnswer).appendTo($(".answers"));
			var x = document.getElementById(eachAnswer);

			$(x).append($("<input type='radio'/>").addClass("form-check-input").attr("value", eachAnswer));
			$(x).append($("<label>").addClass("form-check-label").text(eachAnswer));
		}
		//when user check the checkbox, then run the function
		$("input").change(function() {			
		    if(this.checked) {
		    	function nextButton () {
		    		$("<button>").addClass("btn btn-info mt-5 nextButton").attr("type", "button").appendTo($(".answers")).text("NEXT >");
		    	}
		    	//if the user choose the right answer, then show "Yeah, you know me!" and show next button
		    	//if the user choose wrong ones, then show "The answer is xxx", and show next button
		        if (this.value == myData[i].rightAnswer ) {
		        	$(".answers").text("Yeah, you know me!").append('<br>');
		        	nextButton ();
		        	rightCounter ++;
		        } else {
		        	$(".answers").text("The answer is " + myData[i].rightAnswer ).append('<br>');
		        	nextButton ();
		        	wrongCounter ++;
		        }
		    }
		    i++;
		});		
	};

	function countResult() {
		$(".answers").append("You have answered " + allQuestions + " questions.").append('<br>');
		$(".answers").append(wrongCounter + " wrong").append('<br>');
		$(".answers").append(rightCounter + " right");		
	}

	$(".startButton").on("click", startFunction);

	$(document).on("click", ".nextButton", function(){
		$(this).remove();
		$(".answers").empty();
		if (i < myData.length) {			
			displayQuestion ();
		} else (
			countResult()
		)
	});

});

