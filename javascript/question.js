var questionCountMulti = 0;
var questionCount = 0;

function addAQuestion() {
    const errorMessage = "Error No Selection Made.\nPlease, pick a question to create.";
    const option = ["short", "multiple", "rating", "scale"];
    var s;
    var userSelected = document.getElementById("questionType");
    var usersStringValue = userSelected.options[userSelected.selectedIndex].value;
    questionCount++;
    switch (usersStringValue) {
        case option[0]:
            s = "<h2>Short Answer</h2>";
            s += "Question:<br><input type=\"text\" name=\"shortAnswerQuestions\" value=\"Question\"><br><br>";
            break;
        case option[1]:
            s = "<div id=\"answerTarget\" name=\"multiQuestions\"><h2>Multiple Choice</h2>";
            s += "<input type=\"number\" min = \"2\" max = \"10\" name=\"shortAnswerQuestions\" value=\"2\" id=\"numOfA\"> ";
            s += "<br>Question:<br><input name=\"multi" + questionCount + "\" type=\"text\"  value=\"Question\">";
            s += "<button onclick=\"addAnAnswerForMulti()\">Add Answers</button><br><br></div><br>";
            break;
        case option[2]:
            s = "<h2>Pick the Max Rating Value:</h2>";
            s += "Label:<br><input name=\"ratingQuestions" + questionCount + "\" type=\"text\" name=\"firstname\" value=\"Rating Label\"><br>";
            s += "<div class=\"slidecontainer\"><input id=\"question" + questionCount + "\" type=\"range\" min=\"5\" max=\"100\" value=\"50\" class=\"slider\" id=\"myRange\"></div>";
            break;
        case option[3]:
            s = "<h2>Pick the Max Scale Value:</h2>";
            s += "Label:<br><inputM name=\"scaleQuestions" + questionCount + "\" type=\"text\" name=\"firstname\" value=\"Scale Label\"><br>";
            s += "<div class=\"slidecontainer\"><input type=\"range\" min=\"5\" max=\"10\" value=\"5\" class=\"slider\" id=\"myRange" + questionCount + "\"></div>";
            break;
        default:
            alert(errorMessage);
            s = "";
            break;
    }
    document.getElementById("questionHolder").innerHTML += s;

}

function addAnAnswerForMulti() {

        document.getElementById("answerTarget").innerHTML += "Answer:<br><input type=\"text\" value=\"Answer\"><br>";

}

function updatePage() {
    var holder;
    for (let index = 1; index <= questionCount; index++) {
        holder = document.getElementById("question" + index).value;

        document.getElementById()
    }
}
