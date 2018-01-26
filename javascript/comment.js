
function addACommentSection() {
    var userSelected = document.getElementById("commentType");
    const option = ["unlimitedComment", "largeComment", "mediumComment", "smallComment"];
    const errorMessage = "Error No Selection Made.\nPlease, pick a question to create.";
    var s;
    var usersStringValue = userSelected.options[userSelected.selectedIndex].value;
    switch (usersStringValue) {
        case option[0]:
            s = "<h2>Unlimited Comment</h2>";
            s += "";
            s += "";
            break;
        case option[1]:
            s = "<h2>Large Comment</h2>";
            s += "";
            s += "";
            break;
        case option[2]:
            s = "<h2>Medium Comment</h2>";
            s += "";
            s += "";
            break;
        case option[3]:
            s = "<h2>Small Comment</h2>";
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