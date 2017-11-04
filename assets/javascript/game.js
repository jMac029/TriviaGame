// Game Controller

// Game Object

let game = {

    nextQuestionInRound: () => {
        // Randomly choose question from Array
        choosenQuestion = questionsArray[Math.floor(Math.random() * questionsArray.length)];
        question = choosenQuestion.question;
        responses = choosenQuestion.responses;
        value = choosenQuestion.value;
        category = choosenQuestion.category;
        correct = choosenQuestion.correct;
        timer = 15;
        view.displayQuestion();
        view.displayResponses();
        view.displayTimer();
        view.updateStatBar();
        game.timerRun();
    },

    checkResponse: () => {
        $('.userResponse').click(function() {
            let userSelection = $(this).html();
            $('.userResponse').off();
                if (correct === userSelection) {
                    console.log(userSelection);
                    score += value;
                    // counter++;
                    view.updateStatBar();
                    view.dialogCorrectNextQuestion();
                    game.timerStop();
                } 
                if (correct !== userSelection) {
                    console.log(userSelection);
                    score -= value;
                    // counter++;
                    view.updateStatBar();
                    game.timerStop();
                    view.dialogInCorrectNextQuestion();
                }
                if (counter == 11) {
                    view.gameOverScreen();
                    $('.ui-dialog').hide();
                    $('.game-area').hide();
                }
        })
    },

    timerRun: () => {
      intervalId = window.setInterval(game.timerDecrement, 1000);
      clockRunning = true;
      game.timerDecrement();
    },

    timerDecrement: () => {
      //  Decrease timer by one.
      timer--;
      //  Update the timer div with the current timer
      $("#timer").text(timer);
      //  Once timer hits zero...
      if (timer === 0) {
        game.timerStop();
        clockRunning = false;
        score -= value;
        $('.userResponse').off();
        view.updateStatBar();
        view.dialogTimesUpNextQuestion();
      }
    },

    timerStop: () => {
        clearInterval(intervalId);
        clockRunning = false;
    },

    clearArrays: () => {
        questionsArray.push(...usedQuestions);
        usedQuestions = [];
	    responses = [];
    },

    pushUsedQuestion: () => {
        usedQuestions.push(choosenQuestion);
        questionsArray.splice(questionsArray.indexOf(choosenQuestion) , 1);
    }
	
};
