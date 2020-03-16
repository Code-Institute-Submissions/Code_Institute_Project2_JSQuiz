var countries = {
  "Poland": "img/options/poland.webp",
  "Macedonia": "img/options/macedonia.webp",
  "Montenegro": "img/options/montenegro.webp",
  "Ukraine": "img/options/ukraine.webp",
  "Russia": "img/options/russia.webp",
  "Romania": "img/options/romania.webp",
  "Bulgaria": "img/options/bulgaria.webp",
  "Moldova": "img/options/moldova.webp",
  "Portugal": "img/options/portugal.webp",
  "Spain": "img/options/spain.webp",
  "UK": "img/options/uk.webp",
  "Belgium": "img/options/belgium.webp",
  "Germany": "img/options/germany.webp",
  "Ireland": "img/options/ireland.webp",
  "Luxenbourgh": "img/options/lux.webp",
}
/*
Timer
*/
var total_seconds = 180 * 1;
var c_minutes = parseInt(total_seconds / 60);
var c_seconds = parseInt(total_seconds % 60);
var timer;

function CheckTime() {
  document.getElementById("quiz-time-left").innerHTML = ' ' + c_minutes + ' min <br> ' + c_seconds +
    ' sec ';
  if (total_seconds <= 0) {
    showScores();
    alert("Sorry, your time is gone.");
  } else {
    total_seconds = total_seconds - 1;
    c_minutes = parseInt(total_seconds / 60);
    c_seconds = parseInt(total_seconds % 60);
    timer = setTimeout(CheckTime, 1000);
    if (total_seconds < 30) {
      document.getElementById('quiz-time-left').classList.add("background-danger");
     }
  }
}
  timer = setTimeout(CheckTime, 1000);

function populate() {
  if (quiz.isEnded()) {
    showScores();
  } else {
    var element = document.getElementById("question");
    element.innerHTML = quiz.getQuestionIndex().text;
    var choices = quiz.getQuestionIndex().choices;
    for (var i = 0; i < choices.length; i++) {
      var element = document.getElementById("choice" + i);
      element.innerHTML = countries[choices[i]] ? '<img src="' + countries[choices[i]] + '"/>' : choices[i];
      guess("btn" + i, choices[i]);
    }
    showProgress();
  }
};

function guess(id, guess) {
  var button = document.getElementById(id);
  button.onclick = function() {
    quiz.guess(guess);
    populate();
  }
};

function showProgress() {
  var currentQuestionNumber = quiz.questionIndex + 1;
  var element = document.getElementById("progress");
  element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};


var questions = [
  new Question("<img src='img/questions/1.jpg' /><br/>Where was this picture taken ?", ["Poland", "Macedonia",
    "Moldova", "Romania"
  ], "Romania"),
  new Question("<img src='img/questions/2.jpg'/><br/>Where was this picture taken ?", ["Montenegro", "Macedonia",
    "Bulgaria", "Ukraine"
  ], "Montenegro"),
  new Question("<img src='img/questions/3.jpg' /><br/>Where was this picture taken ?", ["Poland", "Ukraine",
    "Russia", "Bulgaria"
  ], "Poland"),
  new Question("<img src='img/questions/4.jpg' /><br/>Where was this picture taken ?", ["Montenegro", "Macedonia",
    "Romania", "Ukraine"
  ], "Ukraine"),
  new Question("<img src='img/questions/5.jpg' /><br/>Where was this picture taken ?", ["Montenegro", "Belgium",
    "Portugal", "Germany"
  ], "Portugal"),
  new Question("<img src='img/questions/6.jpg' /><br/>Where was this picture taken ?", ["Ukraine", "Russia",
    "Macedonia", "Romania"
  ], "Ukraine"),
  new Question("<img src='img/questions/7.jpg' /><br/>Where was this picture taken ?", ["Germany", "Macedonia",
    "Ukraine", "Romania"
  ], "Macedonia"),
  new Question("<img src='img/questions/8.jpg' /><br/>Where was this picture taken ?", ["Montenegro", "Macedonia",
    "Ukraine", "Romania"
  ], "Romania"),
  new Question("<img src='img/questions/9.jpg' /><br/>Where was this picture taken ?", ["Montenegro", "Macedonia",
    "Romania", "Belgium"
  ], "Montenegro"),
  new Question("<img src='img/questions/10.jpg' /><br/>Where was this picture taken ?", ["Poland", "Ukraine",
    "Ireland", "Bulgaria"
  ], "Poland"),
  new Question("<img src='img/questions/11.jpg' /><br/>Where was this picture taken ?", ["Ukraine", "Russia",
    "Macedonia", "Romania"
  ], "Ukraine"),
  new Question("<img src='img/questions/12.jpg' /><br/>Where was this picture taken ?", ["Poland", "Ukraine",
    "Russia", "Bulgaria"
  ], "Russia"),
  new Question("<img src='img/questions/13.jpg' /><br/>Where was this picture taken ?", ["Portugal", "Montenegro",
    "Germany", "Luxenbourgh"
  ], "Luxenbourgh"),
  new Question("<img src='img/questions/14.jpg' /><br/>Where was this picture taken ?", ["Ukraine", "Russia",
    "Macedonia", "Romania"
  ], "Ukraine"),
  new Question("<img src='img/questions/15.jpg' /><br/>Where was this picture taken ?", ["Poland", "Ukraine",
    "Russia", "Bulgaria"
  ], "Russia"),
  new Question("<img src='img/questions/16.jpg' /><br/>Where was this picture taken ?", ["Montenegro", "Macedonia",
    "Ukraine", "Romania"
  ], "Romania"),
  new Question("<img src='img/questions/17.webp' /><br/>Where was this picture taken ?", ["Ukraine", "Russia",
    "Bulgaria", "Romania"
  ], "Bulgaria"),
  new Question("<img src='img/questions/18.jpg' /><br/>Where was this picture taken ?", ["Montenegro", "Russia",
    "Romania", "Ukraine"
  ], "Romania"),
  new Question("<img src='img/questions/19.webp' /><br/>Where was this picture taken ?", ["Poland", "Ukraine",
    "Russia", "Bulgaria"
  ], "Bulgaria"),
  new Question("<img src='img/questions/20.jpg' /><br/>Where was this picture taken ?", ["Ukraine", "Russia",
    "Macedonia", "Romania"
  ], "Ukraine"),
  new Question("<img src='img/questions/21.jpg' /><br/>Where was this picture taken ?", ["Ireland", "Spain",
    "UK", "Romania"
  ], "Spain"),
  new Question("<img src='img/questions/22.jpg' /><br/>Where was this picture taken ?", ["Ireland", "Spain",
    "UK", "Bulgaria"
  ], "UK"),
  new Question("<img src='img/questions/23.jpg' /><br/>Where was this picture taken ?", ["Ireland", "Russia",
    "Moldova", "Germany"
  ], "Moldova"),
  new Question("<img src='img/questions/24.jpg' /><br/>Where was this picture taken ?", ["UK", "Ireland",
    "Germany", "Belgium"
  ], "UK"),
  new Question("<img src='img/questions/25.jpeg' /><br/>Where was this picture taken ?", ["Ireland", "Russia",
    "Moldova", "Portugal"
  ], "Moldova"),
  new Question("<img src='img/questions/26.jpg' /><br/>Where was this picture taken ?", ["Ireland", "Russia",
    "Moldova", "Portugal"
  ], "Portugal"),
  new Question("<img src='img/questions/27.jpg' /><br/>Where was this picture taken ?", ["Ireland", "Germany",
    "UK", "Portugal"
  ], "Ireland"),
  new Question("<img src='img/questions/28.jpg' /><br/>Where was this picture taken ?", ["Poland", "Ukraine",
    "Russia", "Bulgaria"
  ], "Poland"),
  new Question("<img src='img/questions/29.jpeg' /><br/>Where was this picture taken ?", ["Poland", "Ukraine",
    "Russia", "Moldova"
  ], "Moldova"),
  new Question("<img src='img/questions/30.jpg' /><br/>Where was this picture taken ?", ["Germany", "Ukraine",
    "Russia", "Belgium"
  ], "Germany"),
];

function showScores() {
  console.log(quiz.score);
  var score = quiz.score
  var percentage = quiz.score / quiz.questions.length *100;
  console.log(percentage);
  var message;
  if (percentage === 100) {
    message = '<h1 class="alert alert-success">Perfect!</h1> <hr><h2 class="alert alert-primary"><a href="results.html">Check the correct Locations!</a></h2>'
  } else if (percentage >= 70) {
    message = '<h1 class="alert alert-success">Good!</h1> <hr><h2 class="alert alert-primary"><a href="results.html">Check the correct Locations!</a></h2>'
  } else if (percentage >= 30) {
    message = '<h1 class="alert alert-warning">Bloody Average.</h1> <hr><h2 class="alert alert-primary"><a href="results.html">Check the correct Locations!</a></h2>'
  } else {
    message = '<h1 class="alert alert-danger">Not very good.</h1> <hr><h2 class="alert alert-primary"><a href="results.html">Check the correct Locations!</a></h2>'
  }

document.getElementById("quiz").innerHTML = message;

var div = document.createElement('div');
div.setAttribute('class', 'someClass');
div.innerHTML = document.getElementById('marketing').innerHTML;
document.getElementById('targetElement').appendChild(div);
}

function Question(text, choices, answer) {
  this.text = text;
  this.choices = choices;
  this.answer = answer;
}
Question.prototype.isCorrectAnswer = function(choice) {
  return this.answer === choice;
}

function Quiz(questions) {
  this.score = 0;
  this.questions = questions;
  this.questionIndex = 0;
}
Quiz.prototype.getQuestionIndex = function() {
  return this.questions[this.questionIndex];
}
Quiz.prototype.guess = function(answer) {
if (this.getQuestionIndex().isCorrectAnswer(answer)) {
this.score++;
console.log("Correct!");
var correct = '<p class="wrapper text-success"> Correct </p>'
document.getElementById("feedback").innerHTML = correct;
} else {
console.log("Not correct!");
var wrong = '<p class="wrapper text-danger"> Not Correct </p>'
document.getElementById("feedback").innerHTML = wrong;
}

  this.questionIndex++;
}

Quiz.prototype.isEnded = function() {
  return this.questionIndex === this.questions.length;
}
var quiz = new Quiz(questions);
populate();
