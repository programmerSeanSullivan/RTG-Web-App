function addAHeading() {
    var userSelected = document.getElementById("headerType");
    const option = ["titleH", "questionH", "answerH", "customH"];
    const errorMessage = "Error No Selection Made.\nPlease, pick a question to create.";
    var s;
    var usersStringValue = userSelected.options[userSelected.selectedIndex].value;
    switch (usersStringValue) {
        case option[0]:
            s = "<h2>Title Heading</h2>";
            s += "";
            s += "";
            break;
        case option[1]:
            s = "<h2>Question Heading</h2>";
            s += "";
            s += "";
            break;
        case option[2]:
            s = "<h2>Answer Heading</h2>";
            s += "";
            s += "";
            break;
        case option[3]:
            s = "<h2>Custom Heading</h2>";
            s += "";
            s += "";
            break;
        default:
            alert(errorMessage);
            s="";
            break;

    }
    document.getElementById("questionHolder").innerHTML += s;
}