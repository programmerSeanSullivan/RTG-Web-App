function addDirections() {
    var userSelected = document.getElementById("directionType");
    const option = ["genericD", "questionD", "answerD", "customD"];
    const errorMessage = "Error No Selection Made.\nPlease, pick a question to create.";
    var s;
    var usersStringValue = userSelected.options[userSelected.selectedIndex].value;
    switch (usersStringValue) {

        case option[0]:
            s = "<h2>Generic Directions</h2>";
            s += "<p style=\"font-size:12pt;\">Font size Of the generic directions.</p>";
            s += "<textarea rows=\"4\" cols=\"50\" name=\"genericDirections\"> </textarea><br>";
            s += "<i>Italize</i><input type =\"radio\" name=\"genericD\">";
            s += "Don't Italize<input type =\"radio\" name=\"genericD\">";
            break;
        case option[1]:
            s = "<h2>Question Directions</h2>";
            s += "<pstyle=\"font-size:12pt;\">Font size Of the question directions.</p>";
            s += "<textarea rows=\"4\" cols=\"50\" name=\"genericDirections\"> </textarea><br>";
            s += "<i>Italize</i><input type =\"radio\" name=\"questionD\">";
            s += "Don't Italize<input type =\"radio\" name=\"questionD\">";
            break;
        case option[2]:
            s = "<h2>Answer Directions</h2>";
            s += "<p style=\"font-size:10pt; font-weight:900;\">Font size Of the question directions.</p>";
            s += "<textarea rows=\"4\" cols=\"50\" name=\"answerDirections\"> </textarea><br>";
            s += "<i>Italize</i><input type =\"radio\" name=\"answerD\">";
            s += "Don't Italize<input type =\"radio\" name=\"answerD\">";
            break;
        case option[3]:
            s = "<h2>Custom Directions</h2>";
            s += "<div id=\"CustomDirections\">Pick a custom size.</div>";
            s += "<div class=\"slidecontainer\"><input type=\"range\" min=\"5\" max=\"35\" value=\"5\" class=\"slider\" id=\"myRange" + questionCount + "\"></div>";
            s += "<textarea rows=\"4\" cols=\"50\" name=\"customDirections\"> </textarea><br>";
            s += "<i>Italize</i><input type =\"radio\" name=\"customD\">";
            s += "Don't Italize<input type =\"radio\" name=\"customD\"><br>";
            s += "<b>BOLD</b><input type =\"radio\" name=\"customD\">";
            s += "Don't Bold<input type =\"radio\" name=\"customD\">";
            break;
        default:
            alert(errorMessage);
            s="";
            break;

    }
    document.getElementById("questionHolder").innerHTML += s;
}