var questionCountMulti=0;
var questionCount = 0;
function addAQuestion() {
    var s;
    var userSelected = document.getElementById("questionType");
    var usersStringValue = userSelected.options[userSelected.selectedIndex].value;
    questionCount++;
    switch (usersStringValue) {
        
        case "short":
            s = "<h2>Short Answer</h2>";
            s += "<form onclick=\"updatePage()\" method = \"post\">Question:<br><input type=\"text\" name=\"firstname\" value=\"Question\"><br><br><input id=\"question"+questionCount+"\" type=\"submit\" value=\"Submit\"></form>";

            break;
        case "multiple":
        
            s = "<h2>Multiple Choice</h2>";
            s += "<button onclick=\"addAnAnswerForMulti()\">Add Answer</button>";
            s += "<form action=\"\">Question:<br><input id=\"question"+questionCount+"\" type=\"text\" name=\"firstname\" value=\"Question\"><br><div id=\"answerTarget"+questionCount+"\">Answer:<br><input id=\"question"+questionCount+"\" type=\"text\" name=\"lastname\" value=\"Answer1\" ><br></div><br><input type=\"submit\" value=\"Submit\"></form>";
            
            break;
        case "rating":
            s = "<h2>How did we do?</h2>";
            s += "Label:<br><input id=\"question"+questionCount+"\" type=\"text\" name=\"firstname\" value=\"What you want to be rated\"><br>";
            s += "<div class=\"slidecontainer\"><input id=\"question"+questionCount+"\" type=\"range\" min=\"1\" max=\"100\" value=\"50\" class=\"slider\" id=\"myRange\"></div>";
            break;
        case "scale":
            s = "<h2>On a Scale Of:</h2>";
            s += "Label:<br><input id=\"question"+questionCount+"\" type=\"text\" name=\"firstname\" value=\"What you want to be rated\"><br>";
            s += "<div class=\"slidecontainer\"><input type=\"range\" min=\"0\" max=\"10\" value=\"50\" class=\"slider\" id=\"myRange"+questionCount+"\"></div>";
            break;
        default:
            break;
    }
    document.getElementById("questionHolder").innerHTML += s;
   
}

function addAnAnswerForMulti() {
    document.getElementById("answerTarget"+questionCountMulti).innerHTML += "Answer:<br><input type=\"text\" name=\"lastname\" value=\"Answer1\"><br><br>";
}

function updatePage() {
    var holder;
    for (let index = 1; index <= questionCount; index++) {
        holder = document.getElementById("question"+index).value;
        
        document.getElementById()
    }
}