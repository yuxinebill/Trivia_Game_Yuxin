$(document).ready(function() {

	//object of all questions and answers
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
		},

		{	"id" : 5,
			"question" : "Which university Yuxin graduated from?",
			"answers"  : ["Rutgers", "Columbia", "George Mason", "NYU"],
			"rightAnswer" : "George Mason"
		}

	];

	// at end of the game, it will show how many wrong/right answers the user gave
	var wrongCounter = 0;
	var rightCounter = 0;

	//at the end of the game, how many questions the user answered = how many elements in myData
	var allQuestions = myData.length;

	// i is the index of the element in array myData
	var i = 0 ;	

	//startFunction will make 	
	function startFunction () {
		//the start button invisible 
		$(this).remove();
		//the timer start running
		run();
		//display the first question on the page
		displayQuestion ();
	};

	//write a next button into HTML
	function nextButton () {
		$("<button>").addClass("btn btn-info mt-3 nextButton").attr("type", "button").appendTo($(".answers")).text("NEXT >");
	};

	//show the right answer on the screen
	function showRightAnswer () {
		$(".answers").text("The answer is " + myData[i].rightAnswer ).append('<br>');
		//display sad image
		$(".answers").append($("<img>").attr("src", "assets/imgs/no.gif").addClass("mt-3")).append('<br>');
		//show the next button on screen
    	nextButton ();
    	// counter the wrong answer +1
    	wrongCounter ++;
	};

	var intervalId;

	//setup 15 seconds for each question
	var number = 15;

	//run the timer
	function run() {
		$("#show-number").text("15");
		number = 15;
		clearInterval(intervalId);
		intervalId = setInterval(decrement, 1000);
    }

    //stop the timer
    function stop() {
      clearInterval(intervalId);      
	}	
   
	function decrement() {
      number--;
      //Show the number in the #show-number tag.
      $("#show-number").text(number);
      //Once number hits zero...
      if (number === 0) {
      	//make the number invisible
      	$("#show-number").empty();
      	//stop timer
        stop();
        alert("Time up!")
        //display the right answer on screen
        showRightAnswer ();	
      }
    }	    
    
	function displayQuestion () {

		run ();

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
			stop();	
			$("#show-number").empty();		
		    if(this.checked) {		    	
		    	//if the user choose the right answer, then show "Yeah, you know me!" and show next button
		    	//if the user choose wrong ones, then show "The answer is xxx", and show next button
		        if (this.value == myData[i].rightAnswer ) {
		        	$(".answers").text("Yeah, you know me!").append('<br>');
		        	$(".answers").append($("<img>").attr("src", "assets/imgs/yes.gif").addClass("mt-3")).append('<br>');
		        	nextButton ();
		        	rightCounter ++;
		        } else {
		        	showRightAnswer ();
		        }
		    }		    
		});		
	};

	//display the final result on screen
	function countResult () {
		//display how many questions the user ansswered
		$(".question").text("You have answered " + allQuestions + " questions").append('<br>');
		//display wrong answer counter
		$(".answers").append(wrongCounter + " wrong").append('<br>');
		//display right answer counter
		$(".answers").append(rightCounter + " right");		
	};

	//create a restart button
	function restartButton () {
		$("<button>").addClass("btn btn-info mt-3 restartButton").attr("type", "button").appendTo($(".answers")).text("Play Again");
	};

	//click restart button to replay the game
	$(document).on("click", ".restartButton", function(){
		i = 0;
		wrongCounter = 0;
		rightCounter = 0;
		$(".answers").empty();
		displayQuestion ();
	});

	//when click the start button run the fuctoin
	$(".startButton").on("click", startFunction);

	//when click next button, run the fuction
	$(document).on("click", ".nextButton",  function () {
		//index of myData +1
		i++;
		$(this).remove();
		$(".answers").empty();
		if (i < myData.length) {			
			displayQuestion ();
		} else {
			countResult ();
			$(".answers").append("<br>");
			restartButton ();
		}
	});
});



