function addDirections() {
    var userSelected = document.getElementById("directionsType");
    const option = ["genericD", "questionD", "answerD", "customD"];
    const errorMessage = "Error No Selection Made.\nPlease, pick a question to create.";
    var s;
    var usersStringValue = userSelected.options[userSelected.selectedIndex].value;
    switch (usersStringValue) {

        case option[0]:
            s = "<h2>Generic Directions</h2>";
            s += "";
            s += "";
            break;
        case option[1]:
            s = "<h2>Question Directions</h2>";
            s += "";
            s += "";
            break;
        case option[2]:
            s = "<h2>Answer Directions</h2>";
            s += "";
            s += "";
            break;
        case option[3]:
            s = "<h2>Custom Directions</h2>";
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