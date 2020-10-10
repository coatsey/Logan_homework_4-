var counter = 0;
var correctCount = 0;

var questionAnswers = {

    question1: {
        question: "How many innings are in a game?",
        answers: ["10", "4", "9",],
        correctAnswer: "9"
    },
    question2: {
        question: "baseball is america's _______?",
        answers: ["Past-time", "favorite sport", "most boring sport"],
        correctAnswer: "Past-time"
    },
    question3: {
        question: "What is baseball's championship called",
        answers: ["Super bowl", "World series", "Finals"],
        correctAnswer: "World series"
    }
};


var x = setInterval(function () {
    second_val -= 1;
    document.getElementById("stopWatch").innerHTML = "Timer" + second_val;
    if (timer_is_in_use == 1) {
        if (second_val < 1) {
            alert("Time is up. Start over.")
            timer_is_in_use = 0;
            document.getElementById("stopWatch").style.display = "none";
            TimeIsUp();
        }
    }

}, 1000);

function selectingQuestion(inpQestion) {
    document.getElementById("quest1").innerHTML = inpQestion.question;
    document.getElementById("button1").innerHTML = inpQestion.answers[0];
    document.getElementById("button2").innerHTML = inpQestion.answers[1];
    document.getElementById("button3").innerHTML = inpQestion.answers[2];
    counter++;
}

function startQuiz() {
    counter = 0;
    correctCount = 0;
    timer_is_in_use = 1;
    document.getElementById("sec1").style.display = 'block';
    document.getElementById("startButton").style.display = 'none';
    document.getElementById("title1").style.display = 'none';
    document.getElementById("start_text").style.display = 'none';
    selectingQuestion(questionAnswers.question1);
    second_val = 30;
    document.getElementById("stopWatch").style.display = "block";

}

function TimeIsUp() {
    document.getElementById("container3").style.display = "none";
    document.getElementById("stopWatch").style.display = 'none';
    document.getElementById("container2").style.display = 'block';
    document.getElementById("container4").style.display = 'none';
    document.getElementById("sec1").style.display = 'none';
    document.getElementById("title1").style.display = 'block';
    document.getElementById("start_text").style.display = 'block';
    document.getElementById("startButton").style.display = 'block';
    timer_is_in_use = 0;
}

function startOver() {
    document.getElementById("container3").style.display = "none";
    document.getElementById("stopWatch").style.display = 'block';
    document.getElementById("container2").style.display = 'block';
    timer_is_in_use = 0;
    startQuiz();
}


function quit() {
    document.getElementById("container3").style.display = "none";
    document.getElementById("stopWatch").style.display = 'none';
    document.getElementById("container2").style.display = 'none';
    document.getElementById("container4").style.display = 'block';
    timer_is_in_use = 0;
    startQuiz();
}

function save() {
    var sval = Number(high_score).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 0 });
    var displayText = "Name: " + document.getElementById("enterName").value + "; High Score: " + sval;
    timer_is_in_use = 0;
    var currentdate = new Date();
    var datetime = "; Date: " + currentdate.getDate() + "/"
        + (currentdate.getMonth() + 1) + "/"
        + currentdate.getFullYear() + " @ "
        + currentdate.getHours() + ":"
        + currentdate.getMinutes() + ":"
        + currentdate.getSeconds();

    displayText += datetime;
    user_array.push(displayText);

    TimeIsUp();
}

function show_scores() {
    var i;
    var tmp_counter = user_array.length;
    var sval;
    var totalstring = "";

    if (tmp_counter == 0) {
        totalstring = "none";
    }
    else {
        for (i = 0; i < tmp_counter; i++) {
            sval = user_array[i];
            totalstring += sval + "\r\n"
        }
    }
    alert(totalstring);
}
