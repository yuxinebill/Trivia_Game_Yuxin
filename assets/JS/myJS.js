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
			console.log(eachAnswer)

			$("<div>").addClass("form-check form-group").addClass(eachAnswer).appendTo($(".answers"));
			$("." + eachAnswer).append($("<input type='radio'/>").addClass("form-check-input").attr("value", eachAnswer));
			$("." + eachAnswer).append($("<label>").addClass("form-check-label").text(eachAnswer));
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
		        } else {
		        	$(".answers").text("The answer is " + myData[i].rightAnswer ).append('<br>');
		        	nextButton ();
		        }
		    }
		    i++;
		});		
	};

	$(".startButton").on("click", startFunction);

	$(document).on("click", ".nextButton", function(){
		$(this).remove();
		$(".answers").empty();
		displayQuestion ();
	});

});

