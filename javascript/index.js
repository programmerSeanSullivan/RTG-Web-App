
    var string = " <div style=\"width:80%; margin-left:10%; \">";
    string += "<div style=\"padding: 2.1px;\">";
    string += "<h1>Welcome to RTG's Survey & Review Generator!</h1>";
    string += "<p>This web applet is designed to generate a JavaScript file that will generate your desired survey or review. Some modification may need to be done to the file so that it sends the form data to the appropriate place.The web app has a database connected to it and can create a survey or resume, by allowing you to pick from a littney of different questions. </p>";
    string += " <h2>Additional Features!</h2>";
    string += "   <p>You can save and add more questions to the answers. The forms generated will already scrub all form input. If this intereferes with what you need to do you can disable this feature in the settings, or if you need more intensive checking feel free to contact me to create a plugin or to help modify the created file. </p>";
    string += "<div> <a href =\"../php/survey.php\"><button type=\"button\" class=\"btn btn-primary\" >Create A New Form Now!</button></a></div>";
    string += "</div>";
    string += "</div>";

    document.getElementById("indexBody").innerHTML += string;

