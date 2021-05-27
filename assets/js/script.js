// Javascript for the Coding Quiz Game
// Setting up all the required variables for the script to interact with html and css.
var startgame = document.querySelector("#startgame");
var timerEl = document.getElementById("countdown");
var mainEl = document.getElementById("main");
var qArea = document.querySelector("#question");
var aArea = document.querySelector("#answers");
var tArea = document.querySelector("#titulo");
var result = document.querySelector("#result");
var nameInput = document.querySelector("#nameinput");
var box = document.querySelector("#box");
// Questions that be changed to whatever the test giver wants.
var question1 = ["What does DOM stand for?"];
var question2 = ["Arrays in Javascript can be used to store ____."];
var question3 = ["The condition of an if statement is enclosed in a _____."];
var question4 = ["Which is one way to stop propogation in Javascript?"];
var question5 = ["What is an example of an event listener?"];
// Answers that can be changed to whatever the test giver requires. The number nomenclature corresponds to the question. Question1 = Answer1.
var answers1 = [
  "1. Dotting on marmalade",
  "2. Dancing on main",
  "3. Document Object Model",
  "4. Don't on Mode",
  "5. No idea",
];
var answers2 = [
  "1. Carrots ",
  "2. Curly brackets",
  "3. Parenthesis",
  "4. Square brackets",
  "5. All of the above.",
];
var answers3 = [
  "1. Carrots ",
  "2. Curly brackets",
  "3. Square Brackets",
  "4. Parenthesis",
  "5. None of the above.",
];
var answers4 = [
  "1. preventDefault()",
  "2. stop()",
  "3. STOP",
  "4. return",
  "5. document.querySelector()",
];
var answers5 = ["1. punch", "2. submit", "3. kick", "4. smile", "5. wave"];
// Sets the length of the game.
var timeLeft = 75;
// Sets up global variables for names and scores to be used at the end of the sequence. Also included a done variable to help stop the timer from continuing to run when user has finished the questions.

var wrongAnswers = [];
var scores = [];
var numericScores = [];
var once = {
  once: true,
};
var done = [];

// Instructions are on the main screen and this waits for the "Start game" button to be clicked. This begins the main script.
startgame.addEventListener(
  "click",
  function () {
    var done = [];
    // console.log(wrongAnswers);
    // Clears the question section.
    qArea.innerHTML = "";
    // hides the start game button
    startgame.setAttribute("style", "display: none");
    // This begins the timer for the game. Displays the current time to user. Once it reaches 0 and no questions have been answered, it runs the gameFinish() function.
    function countdown() {
      var timeInterval = setInterval(function () {
        timeLeft--;
        timerEl.textContent = "Timer: " + timeLeft + " seconds remaining.";

        if (timeLeft === 1) {
          timerEl.textContent = "Timer: " + timeLeft + " second remaining.";
        } else if (timeLeft <= 0 && done !== "done") {
          clearInterval(timeInterval);
          timerEl.setAttribute("style", "visibility:hidden");
          gameFinish();
        } else if (timeLeft === 0 && done === "done") {
          clearInterval(timeInterval);
        }
      }, 1000);
    }
    // init() starts the 1st function. This display question 1 along with the list of answers. They are set up as buttons.
    // Each display question is a copy of the other ones. The main difference is in in the event listener. It looks for different value depending on the question.
    function displayquestion1() {
      //   console.log(wrongAnswers);
      tArea.innerHTML = "Question 1";
      qArea.innerHTML = question1;
      aArea.innerHTML = "";

      // Makes answers into a list of buttons.
      for (var i = 0; i < answers1.length; i++) {
        var choices = answers1[i];

        var li = document.createElement("li");

        li.setAttribute("data-index", i);

        var button = document.createElement("button");
        button.textContent = choices;

        li.appendChild(button);
        aArea.appendChild(li);
      }
      //   This event listener waits for user to user to click one of the buttons. It checks to see if the attribute matches the number for the right answer.
      // Wrong stores a value in the wrong answers array.
      // Correct answer continues to next question without penalty.
      // Both will show their corresponding correct or wrong message to user.
      aArea.addEventListener(
        "click",
        function (event) {
          var element = event.target;
          if (element.matches("button") === true) {
            var index = element.parentElement.getAttribute("data-index");
            if (index == 2) {
              result.innerHTML = "CORRECT!!!";
              displayquestion2();
            } else {
              result.innerHTML = "WRONG!!!";
              wrongAnswers.push("1");
              displayquestion2();
            }
          } else {
            // DO NOTHING
          }
        },
        once
      );
    }
    // This function is the same as the previous one.
    function displayquestion2() {
      console.log(wrongAnswers);
      setTimeout(function () {
        result.innerHTML = "";
      }, 3000);
      tArea.innerHTML = "Question 2";
      qArea.innerHTML = question2;
      aArea.innerHTML = "";

      // Makes answers into a list of buttons.
      for (var i = 0; i < answers2.length; i++) {
        var choices = answers2[i];

        var li = document.createElement("li");
        li.setAttribute("data-index", i);

        var button = document.createElement("button");
        button.textContent = choices;

        li.appendChild(button);
        aArea.appendChild(li);
      }
      //   This event listener waits for user to user to click one of the buttons. It checks to see if the attribute matches the number for the right answer.
      // Wrong stores a value in the wrong answers array.
      // Correct answer continues to next question without penalty.
      // Both will show their corresponding correct or wrong message to user.
      aArea.addEventListener(
        "click",
        function (event) {
          var element = event.target;
          if (element.matches("button") === true) {
            var index = element.parentElement.getAttribute("data-index");
            if (index == 4) {
              result.innerHTML = "CORRECT!!!";
              setTimeout(function () {
                result.innerHTML = "";
              }, 3000);
              displayquestion3();
            } else {
              result.innerHTML = "WRONG!!!";
              wrongAnswers.push("1");
              setTimeout(function () {
                result.innerHTML = "";
              }, 3000);
              displayquestion3();
            }
          } else {
            // DO NOTHING
          }
        },
        once
      );
    }
    // This function is the same as the previous one.
    function displayquestion3() {
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
      //   This event listener waits for user to user to click one of the buttons. It checks to see if the attribute matches the number for the right answer.
      // Wrong stores a value in the wrong answers array.
      // Correct answer continues to next question without penalty.
      // Both will show their corresponding correct or wrong message to user.
      aArea.addEventListener(
        "click",
        function (event) {
          var element = event.target;
          if (element.matches("button") === true) {
            var index = element.parentElement.getAttribute("data-index");
            if (index == 3) {
              result.innerHTML = "CORRECT!!!";
              setTimeout(function () {
                result.innerHTML = "";
              }, 3000);
              displayquestion4();
            } else {
              result.innerHTML = "WRONG!!!";
              wrongAnswers.push("1");
              setTimeout(function () {
                result.innerHTML = "";
              }, 3000);
              displayquestion4();
            }
          } else {
            // DO NOTHING
          }
        },
        once
      );
    }

    function displayquestion4() {
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
      //   This event listener waits for user to user to click one of the buttons. It checks to see if the attribute matches the number for the right answer.
      // Wrong stores a value in the wrong answers array.
      // Correct answer continues to next question without penalty.
      // Both will show their corresponding correct or wrong message to user.
      aArea.addEventListener(
        "click",
        function (event) {
          var element = event.target;
          if (element.matches("button") === true) {
            var index = element.parentElement.getAttribute("data-index");
            if (index == 0) {
              result.innerHTML = "CORRECT!!!";
              setTimeout(function () {
                result.innerHTML = "";
              }, 3000);
              displayquestion5();
            } else {
              result.innerHTML = "WRONG!!!";
              wrongAnswers.push("1");
              setTimeout(function () {
                result.innerHTML = "";
              }, 3000);
              displayquestion5();
            }
          } else {
            // DO NOTHING
          }
        },
        once
      );
    }

    function displayquestion5() {
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
      //   This event listener waits for user to user to click one of the buttons. It checks to see if the attribute matches the number for the right answer.
      // Wrong stores a value in the wrong answers array.
      // Correct answer continues to gameFinish() without penalty.
      // Both will show their corresponding correct or wrong message to user.
      aArea.addEventListener(
        "click",
        function (event) {
          var element = event.target;
          if (element.matches("button") === true) {
            var index = element.parentElement.getAttribute("data-index");
            if (index == 1) {
              result.innerHTML = "CORRECT!!!";
              setTimeout(function () {
                result.innerHTML = "";
              }, 3000);
              gameFinish();
            } else {
              result.innerHTML = "WRONG!!!";
              wrongAnswers.push("1");
              gameFinish();
            }
          } else {
            // DO NOTHING
          }
        },
        once
      );
    }
    // This function shows the end of game screen. It clears the previous screen and then continues to show the final score.
    // It also hides the timer.
    // Finally it presents a form that where user can input their name.
    // Once typed in, it will saved using the saveScores() function.

    function gameFinish() {
      tArea.innerHTML = "Quiz Complete!";
      done.push("done");
      console.log(timeLeft);
      console.log(wrongAnswers);
      console.log(wrongAnswers.length * 5);
      var finalTime = timeLeft - wrongAnswers.length * 20;
      console.log(finalTime);
      qArea.innerHTML = "Your result is " + finalTime;
      aArea.innerHTML = "";
      box.setAttribute("style", "visibility: visible");
      timerEl.setAttribute("style", "visibility: hidden");

      box.addEventListener(
        "submit",
        function (event) {
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
          showHighScores();
        },
        once
      );
    }
    // This is the initiate function. It takes the scores and names from the values in local storage and places them into the scores and numericscores array.
    // If its empty, nothing is loaded.
    // It then starts the countdown and first question function.
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
    // This function saves the scores by moving the values of scores and numericScores (names and numbers) to the localstorage. This is after the game is finished and the name is submitted.
    function saveScores() {
      // Sets names and number score stored into local storage as string.
      localStorage.setItem("Winners", JSON.stringify(scores));
      localStorage.setItem("Scores", JSON.stringify(numericScores));
    }
    // This function clears the screen and shows the current scores currently stored in the variables. They may contains values taken from local storage.
    function showHighScores() {
      box.setAttribute("style", "visibility: hidden");
      tArea.innerHTML = "High Scores";
      qArea.innerHTML = "";
      aArea.innerHTML = "";

      // Makes scores and names into a list.
      for (var i = 0; i < scores.length; i++) {
        var finalists = scores[i];
        var finalScores = numericScores[i];

        var li = document.createElement("li");
        li.setAttribute("style", "list-style-type: none");
        li.textContent = finalists + " has won with a score of " + finalScores;
        //   li.setAttribute("data-index", i);
        qArea.appendChild(li);
      }
      //   Two buttons are created and displayed. One is tied to restarting the quiz by refreshing the web page. The second is to clear the high scores stored by clearing the values AND the local storage.
      var reset = document.createElement("button");
      var goback = document.createElement("button");
      goback.textContent = "Retry";
      reset.textContent = "Reset Scores";
      aArea.appendChild(reset);
      aArea.appendChild(goback);
      reset.addEventListener(
        "click",
        function () {
          qArea.innerHTML = "";
          scores = [];
          numericScores = [];
          localStorage.setItem("Winners", JSON.stringify(scores));
          localStorage.setItem("Scores", JSON.stringify(numericScores));
        },
        once
      );
      goback.addEventListener(
        "click",
        function () {
          window.location.reload();
        },
        once
      );
    }

    init();
  },
  once
);
