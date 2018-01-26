function addSection(){
   /* addAHeading();
    addAQuestion();
    addDirections();
    addAContactForm();
    addACommentSection();*/
}
function addEmAll() {
    var confirmMessage ="Not all options were selected is this okay?";
    var unselectedOptionString = "options";

    var headingSection = document.getElementById("headingType");
    var directionSection = document.getElementById("directionType");
    var questionSection = document.getElementById("questionType");
    var contactSection = document.getElementById("contactType");
    var commentSection = document.getElementById("commentType");

    var headingSelection = headingSection.options[headingSection.selectedIndex].value;
    var directionSelection = directionSection.options[directionSection.selectedIndex].value;
    var questionSelection = questionSection.options[questionSection.selectedIndex].value;
    var contactSelection = contactSection.options[contactSection.selectedIndex].value;
    var commentSelection = commentSection.options[commentSection.selectedIndex].value;

    if (headingSelection === "options" || directionSelection === "options"
     || questionSelection === "options" || contactSelection === "options" || commentSelection === "options" ) {
        if (confirm(confirmMessage)) {
            addSection();
        }
        else{
            addSection();
        }
    }
}

