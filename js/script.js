// Javascript for the Coding Quiz Game

var startgame = document.querySelector("#startgame");
var showhighscores = document.querySelector("#showhighscores");
var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var qArea = document.querySelector("#question");
var aArea = document.querySelector("#answers");
var tArea = document.querySelector("#titulo");
var result = document.querySelector("#result");
var nameInput = document.querySelector("#nameinput");
var word = 'GAME OVER';
var question1 = ["What is the color of the ocean?"];
var question2 = ["What is the color of money?"];
var question3 = ["What is the color of the night?"];
var question4 = ["What is the color of blood?"];
var question5 = ["What is the color of snow?"];
var answers1 = ["Red", "White", "Blue", "Black", "Green"];
var answers2 = ["Red", "White", "Blue", "Black", "Green"];
var answers3 = ["Red", "White", "Blue", "Black", "Green"];
var answers4 = ["Red", "White", "Blue", "Black", "Green"];
var answers5 = ["Red", "White", "Blue", "Black", "Green"];
var timeLeft = 75;
var scores = [];
var numericScores = [];


startgame.addEventListener("click", function(){
    qArea.innerHTML = '';
    startgame.setAttribute("style", "display: none");
    showhighscores.setAttribute("style", "display:none");
    function countdown() {
        // var timeLeft = 75;

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
        if ([wordCount] === undefined) {
            // Use `clearInterval()` to stop the timer
            clearInterval(msgInterval);
        } else {
            // Display one word of the message
            mainEl.textContent = word[wordCount];
            wordCount++;
        }
        }, 1000);
    }
countdown();
    function displayquestion1(){
        tArea.innerHTML = "Question 1";
        qArea.innerHTML = question1;
        aArea.innerHTML = "";
        
        // Makes items into a list. 
        for (var i = 0; i < answers1.length; i++) {
        var choices = answers1[i];
    
        var li = document.createElement("li");
        
        li.setAttribute("data-index", i);
    
        var button = document.createElement("button");
        button.textContent = choices;
    
         li.appendChild(button);
        aArea.appendChild(li);
        }
    }
displayquestion1();

        aArea.addEventListener("click", function(event) {
            var element = event.target;
            if (element.matches("button") === true) {
            var index = element.parentElement.getAttribute("data-index");
                if (index == 2){
                    result.innerHTML = "CORRECT!!!"
                    displayquestion2();

                }else {
                    result.innerHTML = "WRONG!!!"
                    var newtime = (timeLeft- 5);
                    timeLeft = newtime;
                    displayquestion2();
                }
                }else{
                    //  DO NOTHING
                }
           
  });
  function displayquestion2(){
    tArea.innerHTML = "Question 2";
    qArea.innerHTML = question2;
    aArea.innerHTML = "";
    
    
    // Makes items into a list. 
    for (var i = 0; i < answers2.length; i++) {
    var choices = answers2[i];

    var li = document.createElement("li");
    li.setAttribute("data-index", i);

    var button = document.createElement("button");
    button.textContent = choices;

     li.appendChild(button);
    aArea.appendChild(li);
    }
}
aArea.addEventListener("click", function(event) {
    var element = event.target;
    if (element.matches("button") === true) {
    var index = element.parentElement.getAttribute("data-index");
        if (index == 4){
            result.innerHTML = "CORRECT!!!"
            displayquestion3();

        }else {
            result.innerHTML = "WRONG!!!"
            var newtime = (timeLeft- 5);
            timeLeft = newtime;
            displayquestion3();
        }
        }else{
            //  DO NOTHING
        }
   
});
function displayquestion3(){
    tArea.innerHTML = "Question 3";
    qArea.innerHTML = question3;
    aArea.innerHTML = "";
    
    
    // Makes items into a list. 
    for (var i = 0; i < answers3.length; i++) {
    var choices = answers3[i];

    var li = document.createElement("li");
    li.setAttribute("data-index", i);

    var button = document.createElement("button");
    button.textContent = choices;

     li.appendChild(button);
    aArea.appendChild(li);
    }
}
aArea.addEventListener("click", function(event) {
    var element = event.target;
    if (element.matches("button") === true) {
    var index = element.parentElement.getAttribute("data-index");
        if (index == 4){
            result.innerHTML = "CORRECT!!!"
            displayquestion4();

        }else {
            result.innerHTML = "WRONG!!!"
            var newtime = (timeLeft- 5);
            timeLeft = newtime;
            displayquestion4();
        }
        }else{
            //  DO NOTHING
        }
   
});

function displayquestion4(){
    tArea.innerHTML = "Question 4";
    qArea.innerHTML = question4;
    aArea.innerHTML = "";
    
    
    // Makes items into a list. 
    for (var i = 0; i < answers4.length; i++) {
    var choices = answers4[i];

    var li = document.createElement("li");
    li.setAttribute("data-index", i);

    var button = document.createElement("button");
    button.textContent = choices;

     li.appendChild(button);
    aArea.appendChild(li);
    }
}
aArea.addEventListener("click", function(event) {
    var element = event.target;
    if (element.matches("button") === true) {
    var index = element.parentElement.getAttribute("data-index");
        if (index == 0){
            result.innerHTML = "CORRECT!!!"
            displayquestion5();

        }else {
            result.innerHTML = "WRONG!!!"
            var newtime = (timeLeft- 5);
            timeLeft = newtime;
            displayquestion5();
        }
        }else{
            //  DO NOTHING
        }
   
});
function displayquestion5(){
    tArea.innerHTML = "Question 5";
    qArea.innerHTML = question5;
    aArea.innerHTML = "";
    
    
    // Makes items into a list. 
    for (var i = 0; i < answers5.length; i++) {
    var choices = answers5[i];

    var li = document.createElement("li");
    li.setAttribute("data-index", i);

    var button = document.createElement("button");
    button.textContent = choices;

     li.appendChild(button);
    aArea.appendChild(li);
    }
}


aArea.addEventListener("click", function(event) {
    var element = event.target;
    if (element.matches("button") === true) {
    var index = element.parentElement.getAttribute("data-index");
        if (index == 1){
            result.innerHTML = "CORRECT!!!"
            gameFinish();
            

        }else {
            result.innerHTML = "WRONG!!!"
            var newtime = (timeLeft- 5);
            timeLeft = newtime;
            gameFinish();
            
        }
        }else{
            //  DO NOTHING
        }
   
});

        function gameFinish(){
            tArea.innerHTML = "Quiz Complete!";
            qArea.innerHTML = "Your result is " + timeLeft;
            aArea.innerHTML = "";




            
        }


        // TO DO: still working on this.
        function init() {
            // Makes string into object from local storage.
            var storedNames = JSON.parse(localStorage.getItem("Winners"));
            var storedScores = JSON.parse(localStorage.getItem("Scores"));
            // If empty, does nothing. If there are items, saves local variable to global variable to be used for renderTodos()
            if (storedNames !== null) {
              scores = storedNames;
              numericScores = storedScores;
            }
          }
          
          function saveScores() {
            // Sets items stored into local storage as string.
            localStorage.setItem("Winners", JSON.stringify(scores));
            localStorage.setItem("Scores", JSON.stringify(numericScores));
          }
          // Waits for typed content to be submitted when enter is pressed on form.
          nameinput.addEventListener("submit", function(event) {
            event.preventDefault();
            var nameText = nameInput.value.trim();
            var numericScores = timeLeft.value.trim();                   
            // If the box is empty, it will not store anything.
            if (nameText === "") {
              return;
            }
           // Takes input and pushes it to todo array, end of it.
            scores.push(nameText);
            numericScores.push(timeLeft);
            nameInput.value = "THANKS FOR PLAYING";
           
            // Puts it into the storage and also displays it as a list using previous functions.
            saveScores();
            showHighScores()
          });
        function showHighScores(){
  
                tArea.innerHTML = "High Scores";
                qArea.innerHTML = "";
                aArea.innerHTML = "";

                // // todoCountSpan.textContent = todos.length;
                
                // Makes items into a list. 
                for (var i = 0; i < todos.length; i++) {
                  var finalists = scores[i];
                  var finalScores = numericScores[i];
              
                  var li = document.createElement("li");
                  li.textContent = finalists + " has won with a score of " + finalScores;
                //   li.setAttribute("data-index", i);
                  qArea.appendChild(li);
                
              }
              var reset = document.createElement("button");
            //   var goback = document.createElement("button");
              button.textContent = "Reset scores";
              aArea.appendChild(reset);
              aArea.addEventListener("click", function(){
                  qArea.innerHTML = "";
                scores = [];
                numericScores = [];
                localStorage.setItem("Winners", JSON.stringify(scores));
                localStorage.setItem("Scores", JSON.stringify(numericScores));
              });

        }
























init();
});