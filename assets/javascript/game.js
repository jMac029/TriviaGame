// Game Controller

// Game Object

let game = {

	// Timer Function
	// timer: (duration, display) => {
 //    var timer = duration, minutes, seconds;
 //    setInterval(function () {
 //        minutes = parseInt(timer / 60, 10)
 //        seconds = parseInt(timer % 60, 10);

 //        minutes = minutes < 10 ? "0" + minutes : minutes;
 //        seconds = seconds < 10 ? "0" + seconds : seconds;

 //        display.textContent = minutes + ":" + seconds;

 //        if (--timer < 0) {
 //            timer = duration;
 //            }
 //        }, 1000);
 //    }

    nextQuestionInRound: () => {
        // Randomly choose question from Array
        choosenQuestion = questionsArray[Math.floor(Math.random() * questionsArray.length)];
        question = choosenQuestion.question;
        responses = choosenQuestion.responses;
        value = choosenQuestion.value;
        category = choosenQuestion.category;
        correct = choosenQuestion.correct;
        console.log(question);
        console.log(value);
        console.log(correct);
        //console.log(responses);
        view.displayQuestion();
        view.displayResponses();
        view.updateStatBar();
    },

    checkResponse: () => {
        $('.userResponse').click(function() {
            let userSelection = $(this).html();
            $('.userResponse').off();
            //for (var i = 0; i < responses.length; i++) {
                if (correct === userSelection) {
                    console.log(userSelection);
                    // $(this).attr('id', 'correct');
                    score += value;
                    counter++;
                    view.updateStatBar();
                    //view.nextQuestion()
                    view.dialogCorrectNextQuestion();
                    //view.alertNextQuestion();
                } else if (correct !== userSelection) {
                    console.log(userSelection);
                    // $(this).attr('id', 'incorrect');
                    score -= value;
                    counter++
                    view.updateStatBar();
                    //view.nextQuestion();
                    view.dialogInCorrectNextQuestion();
                    //view.alertNextQuestion();
                }
            //}
        })
    },

    timerStart: () => {

        // DONE: Use setInterval to start the count here and set the clock to running.
        if (!clockRunning) {
            intervalId = setInterval(timerCount, 1000);
            clockRunning = true;
            }
    },

    timerStop: () => {

        // DONE: Use clearInterval to stop the count here and set the clock to not be running.
        clearInterval(intervalId);
        clockRunning = false;
    },

    timerCount: function() {

        // DONE: increment time by 1, remember we cant use "this" here.
        timer--;

        // DONE: Get the current time, pass that into the stopwatch.timeConverter function,
        //       and save the result in a variable.
        //var converted = stopwatch.timeConverter(stopwatch.time);
        console.log(timer);

        // DONE: Use the variable we just created to show the converted time in the "display" div.
        $("#display").text(timer);
  },
	
};