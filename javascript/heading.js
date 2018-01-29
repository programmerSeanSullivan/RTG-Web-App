var titleCount = 0;
function addAHeading() {
    titleCount++;
    var userSelected = document.getElementById("headerType");
    const option = ["titleH", "questionH", "answerH", "customH"];
    const errorMessage = "Error No Selection Made.\nPlease, pick a question to create.";
    var s;
    var usersStringValue = userSelected.options[userSelected.selectedIndex].value;
    switch (usersStringValue) {
        case option[0]:
            s = "<h1>Title Heading</h1>";
            s += "Title Text:<input type=\"text\" name=\"TitlePrompt" + titleCount + "\" value=\"Title Heading\">";
            s += "<br><u>Underlined</u><input type=\"radio\" name=\"titleHU" + titleCount + "\"><br>NOT Underlined<input type=\"radio\" name=\"titleHU" + titleCount + "\">";
            break;
        case option[1]:
            s = "<h2>Question Heading</h2>";
            s += "Title Text:<input type=\"text\" id=\"TitlePrompt" + titleCount + "\" value=\"Question Heading\">";
            s += "<br><u>Underlined</u><input type=\"radio\" name=\"questionHU" + titleCount + "\"><br>NOT Underlined<input type=\"radio\" name=\"questionHU" + titleCount + "\">";
            break;
        case option[2]:
            s = "<h3>Answer Heading</h3>";
            s += "Title Text:<input type=\"text\" id=\"TitlePrompt" + titleCount + "\" value=\"Answer Heading\">";
            s += "<br><u>Underlined</u><input type=\"radio\" name=\"subHU" + titleCount + "\"><br>NOT Underlined<input type=\"radio\" name=\"subHU" + titleCount + "\">";
            break;
        case option[3]:
            s = "<h4>Sub Heading</h4>";
            s += "Title Text:<input type=\"text\" id=\"TitlePrompt" + titleCount + "\" value=\"Sub Heading\">";
            s += "<br><u>Underlined</u><input type=\"radio\" name=\"customHU" + titleCount + "\"><br>NOT Underlined<input type=\"radio\" name=\"customHU" + titleCount + "\">";
            break;
        default:
            alert(errorMessage);
            s = "";
            break;

    }
    document.getElementById("questionHolder").innerHTML += s;
}