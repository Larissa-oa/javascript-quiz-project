class Quiz {
    // YOUR CODE HERE:
    constructor(questions, timeLimit, timeRemaining) {
        this.questions = questions;
        this.timeLimit = timeLimit;
        this.timeRemaining = timeRemaining;
        this.correctAnswers = 0;
        this.currentQuestionIndex = 0;
    

   getQuestion() {
         return this.questions[this.currentQuestionIndex]
    
   }

    moveToNextQuestion() {
        this.currentQuestionIndex += 1;
    }

    shuffleQuestions() {
        for(let i = 0; i < this.questions.length; i++){   
            const shuffle = Math.round(Math.random() * (i + 1));
            [this.questions[i], this.questions[shuffle]] = [this.questions[shuffle], this.questions[i]];
        }
    }

    checkAnswer(answer)
    {
        if (this.questions[this.currentQuestionIndex].answer === answer){
            this.correctAnswers += 1;
        }
    }

     hasEnded() {
        if (this.currentQuestionIndex === this.questions.length) {
            return true;
        } else {
            return false; 
        }
    }
}
}