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
            s += "<form onclick=\"updatePage()\" method = \"post\">Question:<br><input type=\"text\" name=\"firstname\" value=\"Question\"><br><br><input id=\"question" + questionCount + "\" type=\"submit\" value=\"Submit\"></form>";

            break;
        case option[1]:

            s = "<h2>Multiple Choice</h2>";
            s += "<input type=\"number\" min = \"2\" max = \"10\" name=\"quantity\" value=\"2\" id=\"numOfA\"> ";
           
            s += "<br>Question:<br><input id=\"question" + questionCount + "\" type=\"text\" name=\"firstname\" value=\"Question\">";

           
            s += "<button onclick=\"addAnAnswerForMulti()\">Add Answers</button><br>";
            s += "<br><div id=\"answerTarget\"></div><br>";
            break;
        case option[2]:
            s = "<h2>Pick the Max Rating Value:</h2>";
            s += "Label:<br><input id=\"question" + questionCount + "\" type=\"text\" name=\"firstname\" value=\"Rating Label\"><br>";
            s += "<div class=\"slidecontainer\"><input id=\"question" + questionCount + "\" type=\"range\" min=\"5\" max=\"100\" value=\"50\" class=\"slider\" id=\"myRange\"></div>";
            break;
        case option[3]:
            s = "<h2>Pick the Max Scale Value:</h2>";
            s += "Label:<br><inputM id=\"question" + questionCount + "\" type=\"text\" name=\"firstname\" value=\"Scale Label\"><br>";
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
    var total = document.getElementById("numOfA");
    var selectedTotal = total.options[document.getElementById("numOfA").selectedIndex].value;
    numTotal = parseInt(total);
    /*for (var i = 0; i < numTotal; i++) {*/
        document.getElementById("answerTarget").innerHTML += "Answer:<br><input type=\"text\" name=\"lastname\" value=\"Answer\"><br>";
    
}

function updatePage() {
    var holder;
    for (let index = 1; index <= questionCount; index++) {
        holder = document.getElementById("question" + index).value;

        document.getElementById()
    }
}

/*
Answer:<br><input id=\"question" + questionCount + "\" type=\"text\" name=\"lastname\" value=\"Answer1\" >
*/