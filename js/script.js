

var startgame = document.querySelector("#startgame");
var showhighscores = document.querySelector("#showhighscores");
var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var qArea = document.querySelector("#question");
var message = 'GAME OVER';
var question1= ["Question 1"];
var answers1 = ["Red", "White", "Blue", "Black", "Green"];


startgame.addEventListener("click", function(){
    qArea.innerHTML = '';
    function countdown() {
        var timeLeft = 75;

        var timeInterval = setInterval(function () {
        timeLeft--;
        timerEl.textContent = "Timer: " + timeLeft + " seconds remaining.";
    
        if (timeLeft === 1){
            timerEl.textContent = "Timer: " + timeLeft + " second remaining.";
        }
        if(timeLeft === 0) {
    
            clearInterval(timeInterval);
            timerEl.setAttribute("style", "visibility:hidden");
            displayMessage();
        }
        }, 1000);
        
    
    }
    
    // Displays the message one word at a time
    function displayMessage() {
        var wordCount = 0;
    
        // Uses the `setInterval()` method to call a function to be executed every 1000 milliseconds
        var msgInterval = setInterval(function () {
        // If there are no more words left in the message
        if (words[wordCount] === undefined) {
            // Use `clearInterval()` to stop the timer
            clearInterval(msgInterval);
        } else {
            // Display one word of the message
            mainEl.textContent = words[wordCount];
            wordCount++;
        }
        }, 1000);
    }
countdown();
    function displayquestion1(){
        qArea.innerHTML = question1;
        


    }
displayquestion1();




});