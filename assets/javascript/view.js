// All the Javascript that effects the view

// On Page Load

window.onload = () => {

	game.nextQuestionInRound();

};

// View Object
let view = {

	welcomeScreen: () => {
		var welcomeHtml = 
			"<h1>Are you up for the challenge?</h1>" +
			"<input type='text' name='playerName' id='playerNameInput' placeholder='Player Name'>" +
			"<button id='button-begin-game'>Begin</button>";
		$('.game-area').html(welcomeHtml);

	},

	updateStatBar: () => {
		var statsHtml = 
			"<ul>" +
				"<li><p>Player: " + playerName + "</p></li>" +
				"<li><p>Score: $" + score + "</p></li>" +
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

	// nextQuestion: () => {
	// 	nextQuestion = $('.next-question');
	// 	$('.game-area').append(nextQuestion);
	// 	nextQuestion.html('<p>NEXT QUESTION</p>');
	// }

	dialogNextQuestion: () => {
		$( '#dialog-next-question' ).dialog({
		  //appendTo: '#response-buttons',
		  //autoOpen: false,
		  modal: true,
		  height: 400,
		  width: 400,
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
	},

	alertNextQuestion: () => {
		alert('Next Question');
		view.clearGameArea();
		game.nextQuestionInRound();
	}

};