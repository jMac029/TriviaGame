// All the Javascript that effects the view

// On Page Load

window.onload = () => {

	view.updateStatBar();
	//view.welcomeScreen();
	view.displayQuestion();

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
		// Randomly choose question from questionsArray
		choosenQuestion = questionsArray[Math.floor(Math.random() * questionsArray.length)];
		question = choosenQuestion.question;
		responses = choosenQuestion.responses;
		value = choosenQuestion.value;
		correct = choosenQuestion.correct;
		// for (var i = 0; i < questionsArray.length; i++) {
		// 	question = questionsArray[i].question;
		// 	value = questionsArray[i].value;
		// 	correct = questionsArray[i].correct;
			$('#question').text(question);
			$('#question-value').text(value);
		for (var j = 0; j < responses.length; j++) {
			responseButtons = document.getElementById('response-buttons');
			responsesChoices = document.createElement('ul');
			responsesChoices.id = 'responsesChoices';
			response = document.createElement('li');
			response.id = 'response';
			response.innerHTML = responses[j];
			responseButtons.appendChild(responsesChoices);
			responsesChoices.appendChild(response);
		//}

		}
		
		console.log(question);
		console.log(value);
		console.log(correct);
		//console.log(responses);

	}

};