// Javascript for the Coding Quiz Game

var startgame = document.querySelector("#startgame");
var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var qArea = document.querySelector("#question");
var aArea = document.querySelector("#answers");
var tArea = document.querySelector("#titulo");
var result = document.querySelector("#result");
var nameInput = document.querySelector("#nameinput");
var box = document.querySelector("#box");
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
var wrongAnswers = [];
var scores = [];
var numericScores = [];
var once ={
    once : true
};


startgame.addEventListener("click", function(){
    console.log(wrongAnswers);
    qArea.innerHTML = '';
    startgame.setAttribute("style", "display: none");
    function countdown() {
        var timeInterval = setInterval(function () {
        timeLeft--;
        timerEl.textContent = "Timer: " + timeLeft + " seconds remaining.";
    
        if (timeLeft === 1){
            timerEl.textContent = "Timer: " + timeLeft + " second remaining.";
        }else if(timeLeft === 0) {
    
            clearInterval(timeInterval);
            timerEl.setAttribute("style", "visibility:hidden");
            gameFinish();
        } 
        }, 1000);
        
    
    }
    function displayquestion1(){
        console.log(wrongAnswers);
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
        aArea.addEventListener("click", function(event) {
            var element = event.target;
            if (element.matches("button") === true) {

            var index = element.parentElement.getAttribute("data-index");
                if (index == 2){
                    result.innerHTML = "CORRECT!!!";
                    displayquestion2();

                }else  {
                    result.innerHTML = "WRONG!!!";
                    wrongAnswers.push("1");
                    displayquestion2();
                }
                }else {
                    // DO NOTHING
                }
           
         }, once);
    }
        
  function displayquestion2(){
    console.log(wrongAnswers);
    setTimeout(function(){
        result.innerHTML = '';
    }, 3000);
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
    aArea.addEventListener("click", function(event) {
        
        var element = event.target;
        if (element.matches("button") === true) {
        var index = element.parentElement.getAttribute("data-index");
            if (index == 4){
                result.innerHTML = "CORRECT!!!";
                setTimeout(function(){
                    result.innerHTML = '';
                }, 3000);
                displayquestion3();
    
            }else {
                result.innerHTML = "WRONG!!!";
                wrongAnswers.push("1");
                setTimeout(function(){
                    result.innerHTML = '';
                }, 3000);
                displayquestion3();
            }
            }else {
                // DO NOTHING
            }
       
    }, once);

};

function displayquestion3(){
    console.log(wrongAnswers);
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
    aArea.addEventListener("click", function(event) {
        
        var element = event.target;
        if (element.matches("button") === true) {
        var index = element.parentElement.getAttribute("data-index");
            if (index == 3){
                result.innerHTML = "CORRECT!!!";
                setTimeout(function(){
                    result.innerHTML = '';
                }, 3000);
                displayquestion4();
    
            }else {
                result.innerHTML = "WRONG!!!";
                wrongAnswers.push("1");
                setTimeout(function(){
                    result.innerHTML = '';
                }, 3000);
                displayquestion4();
            }
            }else {
                // DO NOTHING
            }
       
    }, once);


}


function displayquestion4(){
    console.log(wrongAnswers);
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
    aArea.addEventListener("click", function(event) {
        
        var element = event.target;
        if (element.matches("button") === true) {
        var index = element.parentElement.getAttribute("data-index");
            if (index == 0){
                result.innerHTML = "CORRECT!!!";
                setTimeout(function(){
                    result.innerHTML = '';
                }, 3000);
                displayquestion5();
    
            }else {
                result.innerHTML = "WRONG!!!";
                wrongAnswers.push("1");
                setTimeout(function(){
                    result.innerHTML = '';
                }, 3000);
                displayquestion5();
            }
            }else {
                // DO NOTHING
            }
       
    }, once);

}

function displayquestion5(){
    console.log(wrongAnswers);
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
    aArea.addEventListener("click", function(event) {
        
        var element = event.target;
        if (element.matches("button") === true) {
        var index = element.parentElement.getAttribute("data-index");
            if (index == 1){
                result.innerHTML = "CORRECT!!!";
                setTimeout(function(){
                    result.innerHTML = '';
                }, 3000);
                gameFinish();
    
            }else {
                result.innerHTML = "WRONG!!!";
                wrongAnswers.push("1");
                gameFinish();
                
            }
            }else {
                // DO NOTHING
            }
       
    }, once);
}

        function gameFinish(){
            tArea.innerHTML = "Quiz Complete!";
            console.log(timeLeft);
            console.log(wrongAnswers);
            console.log(wrongAnswers.length*5);
            var finalTime = timeLeft - ((wrongAnswers.length)*20);
            console.log(finalTime);
            qArea.innerHTML = "Your result is " + finalTime;
            aArea.innerHTML = "";
            box.setAttribute("style", "visibility: visible");
            timerEl.setAttribute("style", "visibility: hidden");
             

            box.addEventListener("submit", function(event) {
                event.preventDefault();
                console.log(nameInput);
                console.log(finalTime);
                var nameText = nameInput.value.trim();  
                console.log(nameText);
                console.log(numericScores);                 
                // If the box is empty, it will not store anything.
                if (nameText === "") {
                  return;
                }
               // Takes input and pushes it to scores array, end of it.
                scores.push(nameText);
                numericScores.push(finalTime);
                console.log(numericScores);

                saveScores();
                showHighScores()
              }, once);  
        }
        

        function init() {
            // Makes string into object from local storage.
            var storedNames = JSON.parse(localStorage.getItem("Winners"));
            var storedScores = JSON.parse(localStorage.getItem("Scores"));
            // If empty, does nothing. If there are items, saves local variable to global variable to be used for renderTodos()
            if (storedNames !== null) {
              scores = storedNames;
              numericScores = storedScores;
            }
            countdown();
            displayquestion1();
          }
          
          function saveScores() {
            // Sets items stored into local storage as string.
            localStorage.setItem("Winners", JSON.stringify(scores));
            localStorage.setItem("Scores", JSON.stringify(numericScores));
          }
        function showHighScores(){
                box.setAttribute("style", "visibility: hidden");
                tArea.innerHTML = "High Scores";
                qArea.innerHTML = "";
                aArea.innerHTML = "";

                // // todoCountSpan.textContent = todos.length;
                
                // Makes items into a list. 
                for (var i = 0; i < scores.length; i++) {
                  var finalists = scores[i];
                  var finalScores = numericScores[i];
              
                  var li = document.createElement("li");
                  li.textContent = finalists + " has won with a score of " + finalScores;
                //   li.setAttribute("data-index", i);
                  qArea.appendChild(li);
                
              }
              var reset = document.createElement("button");
              var goback = document.createElement("button");
              goback.textContent = "Retry";
              reset.textContent = "Reset Scores";
              aArea.appendChild(reset);
              aArea.appendChild(goback);
              reset.addEventListener("click", function(){
                qArea.innerHTML = "";
                scores = [];
                numericScores = [];
                localStorage.setItem("Winners", JSON.stringify(scores));
                localStorage.setItem("Scores", JSON.stringify(numericScores));
              },once);
              goback.addEventListener("click", function(){
                window.location.reload();
              },once);

        }
























init();
},once);