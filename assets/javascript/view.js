// All the Javascript that effects the view

// On Page Load

window.onload = () => {

	view.welcomeScreen();

};

// View Object
let view = {

	welcomeScreen: () => {
		$('.game-area').hide();
		var welcomeHtml = 
			"<h1>Are you up for the challenge?</h1>" +
			"<input type='text' name='playerName' id='playerNameInput' placeholder='PLAYER NAME'>" +
			"<button id='button-begin-game'>BEGIN GAME</button>";
		$('.welcome-screen').html(welcomeHtml);
		$('#button-begin-game').click(function() {
			playerName = $('#playerNameInput').val().trim();
			if (playerName == "") {
				playerName = "A PLAYER HAS NO NAME";
			}
			$('.welcome-screen').hide();
			$('.game-area').show();
			game.nextQuestionInRound();
		});

	},

	updateStatBar: () => {
		var statsHtml = 
			"<ul>" +
				"<li><p>" + playerName + "</p></li>" +
				"<li><p>$" + score + "</p></li>" +
			"</ul>";
		$('.stats-bar').html(statsHtml);
		
	},

	displayQuestion: () => {
		$('#category').text(category);
		$('#question').text(question);
		$('#question-value').text("$ "+value);

	},

	displayResponses: () => {
		responseChoices = $('.response-choices');
		for (var j = 0; j < responses.length; j++) {
			response = $('<li>').attr('class', 'userResponse').html(responses[j]);
			responseChoices.append(response);
		}
		game.checkResponse();
	},

	displayTimer: () => {
		$('#timer').text(timer);
		timer = 16;

	},

	dialogCorrectNextQuestion: () => {
		$('#dialog-correct-next-question').html("<p>" + playerName + "<br>YOU ARE CORRECT<br>EARNED<br>$" + value + "!</p>")
		$( '#dialog-correct-next-question' ).dialog({
		  classes: {"ui-dialog": "correct"},
		  modal: true,
		  resizable: false,
		  position: { my: "center", at: "center"},
		  dialogClass: "no-close",
		  buttons: [
		    {
		      text: "NEXT QUESTION",
		      click: function() {
		        $( this ).dialog( "close" );
		        view.clearGameArea();
		        game.nextQuestionInRound();
		        counter++;
		      }
		    }
		  ]
		})
	},

	dialogInCorrectNextQuestion: () => {
		$('#dialog-incorrect-next-question').html("<p>" + playerName + "<br>YOU ARE INCORRECT<br>LOSE<br>$" + value + "!</p>")
		$( '#dialog-incorrect-next-question' ).dialog({
		  classes: {"ui-dialog": "incorrect"},
		  modal: true,
		  resizable: false,
		  position: { my: "center", at: "center"},
		  dialogClass: "no-close",
		  buttons: [
		    {
		      text: "NEXT QUESTION",
		      click: function() {
		        $( this ).dialog( "close" );
		        view.clearGameArea();
		        game.nextQuestionInRound();
		        counter++;
		      }
		    }
		  ]
		})
	},

	dialogTimesUpNextQuestion: () => {
		$('#dialog-times-up-next-question').html("<p>" + playerName + "<br>TIME IS UP!<br>LOSE<br>$" + value + "!<p>")
		$( '#dialog-times-up-next-question' ).dialog({
		  classes: {"ui-dialog": "times-up"},
		  modal: true,
		  resizable: false,
		  position: { my: "center", at: "center"},
		  dialogClass: "no-close",
		  buttons: [
		    {
		      text: "NEXT QUESTION",
		      click: function() {
		        $( this ).dialog( "close" );
		        view.clearGameArea();
		        game.nextQuestionInRound();
		        counter++;
		      }
		    }
		  ]
		})
	},

	clearGameArea: function() {
		$('#category').empty();
		$('#question').empty();
		$('#question-value').empty();
		$('.response-choices').empty();
		$('#timer').empty();
	},

	alertNextQuestion: () => {
		alert('Next Question');
		view.clearGameArea();
		game.nextQuestionInRound();
	},

	gameOverScreen: () => {
		$('.game-area').hide();
		var gameOverHtml = 
			"<h1>You Completed the Game with a score of $" + score + "</h1>" +
			"<h1>Would You like to play Again?</h1>"
			"<button id='button-restart-game'>NEW GAME</button>";
		$('.restart-screen').html(gameOverHtml);
		$('#button-restart-game').click(function() {
			$('welcome-screen').show();
			view.welcomeScreen()
			score = 0;
			playerName = "player 1";

		});

	},

};