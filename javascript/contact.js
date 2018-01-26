function addAContactForm() {
    var userSelected = document.getElementById("contactType");
    const option = ["email", "nameFull", "nameFirst", "nameMiddle",
        "initialMiddle", "nameLast", "address", "number",
        "employerNumber", "fullContact", "admin"];
  
    const errorMessage = "Error No Selection Made.\nPlease, pick a question to create.";
    var s;
    var usersStringValue = userSelected.options[userSelected.selectedIndex].value;
    switch (usersStringValue) {
        case option[0]:
            s = "<h2>Email</h2>";
            s += "Validate that it is an Email?<br> Yes <input type=\"radio\" value=\"validate\" name=\"emailValidate\"><br> ";
            s += "No <input type=\"radio\" value=\"noValidate\" name=\"emailValidate\">";
            s += "<br>Required?<br>Yes <input type=\"radio\" name=\"emailR\" value=\"yes\">";
            s += "<br>No <input type=\"radio\" name=\"emailaddressR\" value=\"no\">";
            break;
        case option[1]:
            s = "<h2>Full Name (FIrst MI Last)</h2>";
            s += "Validate that it is a Name?<br> Yes <input type=\"radio\" value=\"validate\" name=\"nameFullValidate\"><br> ";
            s += "No <input type=\"radio\" value=\"noValidate\" name=\"nameFullValidate\">";
            s += "<br>Required?<br>Yes <input type=\"radio\" name=\"fullR\" value=\"yes\">";
            s += "<br>No <input type=\"radio\" name=\"fullR\" value=\"no\">";
            break;
        case option[2]:
            s = "<h2>First Name</h2>";
            s += "Validate that it is a Name?<br> Yes <input type=\"radio\" value=\"validate\" name=\"nameFirstValidate\"><br> ";
            s += "No <input type=\"radio\" value=\"noValidate\" name=\"nameFirstValidate\">";
            s += "<br>Required?<br>Yes <input type=\"radio\" name=\"firstR\" value=\"yes\">";
            s += "<br>No <input type=\"radio\" name=\"firstR\" value=\"no\">";
            break;
        case option[3]:
            s = "<h2>Middle Name</h2>";
            s += "Validate that it is a Name?<br> Yes <input type=\"radio\" value=\"validate\" name=\"nameMiddleValidate\"><br> ";
            s += "No <input type=\"radio\" value=\"noValidate\" name=\"nameMiddleValidate\">";
            s += "<br>Required?<br>Yes <input type=\"radio\" name=\"middleR\" value=\"yes\">";
            s += "<br>No <input type=\"radio\" name=\"middleR\" value=\"no\">";
            break;
        case option[4]:
            s = "<h2>Middle Initial</h2>";
            s += "Validate that it is an Initial?<br> Yes <input type=\"radio\" value=\"validate\" name=\"nameMIValidate\"><br> ";
            s += "No <input type=\"radio\" value=\"noValidate\" name=\"nameMIValidate\">";
            s += "<br>Required?<br>Yes <input type=\"radio\" name=\"mIR\" value=\"yes\">";
            s += "<br>No <input type=\"radio\" name=\"mIR\" value=\"no\">";
            break;
        case option[5]:
            s = "<h2>Last Name</h2>";
            s += "Validate that it is a Name?<br> Yes <input type=\"radio\" value=\"validate\" name=\"nameLastValidate\"><br> ";
            s += "No <input type=\"radio\" value=\"noValidate\" name=\"nameLastValidate\">";
            s += "<br>Required?<br>Yes <input type=\"radio\" name=\"lastR\" value=\"yes\">";
            s += "<br>No <input type=\"radio\" name=\"lastR\" value=\"no\">";;
            break;
        case option[6]:
            s = "<h2>Address</h2>";
            s += "Validate that it is an Address?<br> Yes <input type=\"radio\" value=\"validate\" name=\"addressValidate\"><br> ";
            s += "No <input type=\"radio\" value=\"noValidate\" name=\"addressValidate\">";
            s += "<br>Required?<br>Yes <input type=\"radio\" name=\"addressR\" value=\"yes\">";
            s += "<br>No <input type=\"radio\" name=\"addressR\" value=\"no\">";
            break;
        case option[7]:
            s = "<h2>Phone Number</h2>";
            s += "Validate that it is a Phone Number?<br> Yes <input type=\"radio\" value=\"validate\" name=\"phoneValidate\"><br> ";
            s += "No <input type=\"radio\" value=\"noValidate\" name=\"phoneValidate\">";
            s += "<br>Required?<br>Yes <input type=\"radio\" name=\"phoneR\" value=\"yes\">";
            s += "<br>No <input type=\"radio\" name=\"phoneR\" value=\"no\">";
            break;
        case option[8]:
            s = "<h2>Employee Number</h2>";
            s += "<input type=\"number\" min=\"1\" max=\"15\" default=\"5\">";
            s += "<br>Required?<input type=\"radio\" >";
            break;
        case option[9]:
            s = "<h2>Full Contact Form</h2>";
            s += "<h2>Full Name (FIrst MI Last)</h2>";
            s += "Validate that it is a Name?<br> Yes <input type=\"radio\" value=\"validate\" name=\"nameFullValidate\"><br> ";
            s += "No <input type=\"radio\" value=\"noValidate\" name=\"nameFullValidate\">";
            s += "<br>Required?<br>Yes <input type=\"radio\" name=\"fullR\" value=\"yes\">";
            s += "<br>No <input type=\"radio\" name=\"fullR\" value=\"no\">";
            
            s += "<h2>Email</h2>";
            s += "Validate that it is an Email?<br> Yes <input type=\"radio\" value=\"validate\" name=\"emailValidate\"><br> ";
            s += "No <input type=\"radio\" value=\"noValidate\" name=\"emailValidate\">";
            s += "<br>Required?<br>Yes <input type=\"radio\" name=\"emailR\" value=\"yes\">";
            s += "<br>No <input type=\"radio\" name=\"emailaddressR\" value=\"no\">";

            s += "<h2>Address</h2>";
            s += "Validate that it is an Address?<br> Yes <input type=\"radio\" value=\"validate\" name=\"addressValidate\"><br> ";
            s += "No <input type=\"radio\" value=\"noValidate\" name=\"addressValidate\">";
            s += "<br>Required?<br>Yes <input type=\"radio\" name=\"addressR\" value=\"yes\">";
            s += "<br>No <input type=\"radio\" name=\"addressR\" value=\"no\">";

            s += "<h2>Phone Number</h2>";
            s += "Validate that it is a Phone Number?<br> Yes <input type=\"radio\" value=\"validate\" name=\"phoneValidate\"><br> ";
            s += "No <input type=\"radio\" value=\"noValidate\" name=\"phoneValidate\">";
            s += "<br>Required?<br>Yes <input type=\"radio\" name=\"phoneR\" value=\"yes\">";
            s += "<br>No <input type=\"radio\" name=\"phoneR\" value=\"no\">";

            break;
        case option[10]:
            s = "<h2>Admin Contact Info</h2>";
            s += "Email:<input type=\"text\">";
            s += "Call:<input type=\"text\">";
            break;
        default:
            alert(errorMessage);
            s = "";
            break;

    }
    document.getElementById("questionHolder").innerHTML += s;
}