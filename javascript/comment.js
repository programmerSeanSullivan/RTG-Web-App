var commentCount = 0;
function addACommentSection() {
     commentCount++;    
    var userSelected = document.getElementById("commentType");
    const option = ["unlimitedComment", "largeComment", "mediumComment", "smallComment"];
    const errorMessage = "Error No Selection Made.\nPlease, pick a question to create.";
    var s;
    var usersStringValue = userSelected.options[userSelected.selectedIndex].value;
    switch (usersStringValue) {
        case option[0]:
            s = "<h2>Unlimited Comment</h2>";
            s += "<p>This comment will allow for unlimited chars.</p>";
            s += "Prompt for Comment:<input type=\"text\" name=\"CommentPromptU"+commentCount+"\" value=\"Please leave a comment.\">";
            break;
        case option[1]:
            s = "<h2>Large Comment</h2>";
            s += "<p>This comment will allow for 5,000 chars.</p>";
            s += "Prompt for Comment:<input type=\"text\" name=\"CommentPromptL"+commentCount+"\" value=\"Please leave a comment.\">";
            break;
        case option[2]:
            s = "<h2>Medium Comment</h2>";
            s +=  "<p>This comment will allow for 1,000 chars.</p>";
            s += "Prompt for Comment:<input type=\"text\" name=\"CommentPromptM"+commentCount+"\" value=\"Please leave a comment.\">";
            break;
        case option[3]:
            s = "<h2>Small Comment</h2>";
            s +="<p>This comment will allow for 400 chars.</p>";
            s += "Prompt for Comment:<input type=\"text\" name=\"CommentPromptS"+commentCount+"\" value=\"Please leave a comment.\">";
            break;
        default:
            alert(errorMessage);
            s="";
            break;

    }
    document.getElementById("questionHolder").innerHTML += s;
}