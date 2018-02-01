/*
 List of Name Constant Regex.
*/
const regexStatement = new RegExp(/[0-9]]/, "g");;
const headerTitleNameRegEx = new RegExp(/headerTitle/ + regexStatement.source, "g");
const questionTitleNameRegEx = new RegExp(/questionTitle/ + regexStatement.source, "g");
const answerTitleNameRegEx = new RegExp(/answerTitle/ + regexStatement.source, "g");
const subHeaderTitleNameRegEx = new RegExp(/subHeaderTitle/ + regexStatement.source, "g");

const genericDirectionsNameRegEx = new RegExp(/genericDirections/ + regexStatement.source, "g");
const questionDirectionsNameRegEx = new RegExp(/questionDirections/ + regexStatement.source, "g");
const answerDirectionsNameRegEx = new RegExp(/answerDirections/ + regexStatement.source, "g");
const customDirectionsNameRegEx = new RegExp(/customDirections/ + regexStatement.source, "g");

const multiNameRegEx = new RegExp(/multiQuestions/ + regexStatement.source, "g");
const ratingNameRegEx = new RegExp(/ratingQuestions/ + regexStatement.source, "g");
const shortAnswerNameRegEx = new RegExp(/shortAnswerQuestions/ + regexStatement.source, "g");
const scaleNameRegEx = new RegExp(/scaleQuestions/ + regexStatement.source, "g");

const adminInfoNameRegEx = new RegExp(/adminInfoContact/ + regexStatement.source, "g");
const emailNameRegEx = new RegExp(/emailContact/ + regexStatement.source, "g");
const nameFullNameRegEx = new RegExp(/nameFullContact/ + regexStatement.source, "g");
const firstNameNameRegEx = new RegExp(/firstNameContact/ + regexStatement.source, "g");
const middleNameNameRegEx = new RegExp(/middleNameContact/ + regexStatement.source, "g");
const middleInitialNameRegEx = new RegExp(/middleInitialContact/ + regexStatement.source, "g");
const lastNameNameRegEx = new RegExp(/lastNameContact/ + regexStatement.source, "g");
const addressNameRegEx = new RegExp(/addressContact/ + regexStatement.source, "g");
const phoneNumberNameRegEx = new RegExp(/phoneNumberContact/ + regexStatement.source, "g");
const employeeNumberNameRegEx = new RegExp(/employeeNumberContact/ + regexStatement.source, "g");
const genericFullContactNameRegEx = new RegExp(/genericFullContact/ + regexStatement.source, "g");

const unlimitedCommentNameRegEx = new RegExp(/unlimitedComment/ + regexStatement.source, "g");
const largeCommentNameRegEx = new RegExp(/largeComment/ + regexStatement.source, "g");
const mediumCommentNameRegEx = new RegExp(/mediumComment/ + regexStatement.source, "g");
const smallCommentNameRegEx = new RegExp(/smallComment/ + regexStatement.source, "g");
/*
LIST of Tag Constants
*/
const headerTitleTag = "<h></h>";
const questionTitleTag = "<h1></h1>";
const answerTitleTag = "<h2></h2>";
const subHeaderTitleTag = "<h3></h3>";

const genericDirectionsTag = "<p style=\"font-size:12pt;\"></p>";
const questionDirectionsTag = "<p style=\"font-size:12pt; font-weight:900;\"></p>";
const answerDirectionsTag = "<p style=\"font-size:10pt; font-weight:900;\"></p>";
const customDirectionsTag = "<p style=\"font-size:12pt;\" ></p>";

const multiTag = "<p></p><br>";
const multiTagAnswer = "<input type=\"radio\">";
const ratingTag = "<input type=\"text\"  value=\"Rating Label\"><br><div class=\"slidecontainer\"><input  type=\"range\" class=\"slider\"></div>";
const shortAnswerTag = "<p></p><br><textarea></textarea>";
const scaleTag = "<input type=\"text\"  value=\"Rating Label\"><br><div class=\"slidecontainer\"><input  type=\"range\" class=\"slider\"></div>";

const adminInfoTag = "<a href=\"\"></a><br><a href=\"\"></a>";
const emailTag = "<input type=\"text\" >";
const nameFullTag = "<input type=\"text\" >";
const firstNameTag = "<input type=\"text\" >";
const middleNameTag = "<input type=\"text\" >";
const middleInitialTag = "<input type=\"text\" >";
const lastNameTag = "<input type=\"text\" >";
const addressTag = "<input type=\"text\" >";
const phoneNumberTag = "<input type=\"text\" >";
const employeeNumberTag = "<input type=\"text\" >";
const genericFullContactTag = nameFullTag + "<br>" + emailTag + "<br>" + addressTag + "<br>" + phoneNumberTag

const unlimitedCommentTag = "<textarea></textarea>";
const largeCommentTag = "<textarea maxlenth=\"5000\"></textarea>";
const mediumCommentTag = "<textarea maxlenth=\"1000\"></textarea>";
const smallCommentTag = "<textarea maxlenth=\"400\"></textarea>";


function updateDiv() {
   
    var formObjects = $("questionHolder").serializeArray();
    /*
This is where you will store your new forms
*/
    var divToModify = document.getElementById("previewForm").innerHTML;
   document.getElementById("previewForm").innerHTML += "<p>hello</p>";
    var index= {num:0};
    for ( index.num = 0; index < formObjects.length; index.num++) {
        divToModify += tagGenerator(index, formObjects);

    }


    /*
     * Take this array and begin to see which forms were generated
     */

    document.getElementById("previewForm").innerHTML = divToModify;

}

function tagGenerator(index, arr) {
    var tag = "";
    switch (arr[index.num].name) {
        /*
        Regex cases for direction tags
        */
        case unlimitedCommentNameRegEx:
            if (tag.length === 0 || !tag.trim())
                tag = unlimitedCommentTag;
        case largeCommentNameRegEx:
            if (tag.length === 0 || !tag.trim())
                tag = largeCommentTag;
        case mediumCommentNameRegEx:
            if (tag.length === 0 || !tag.trim())
                tag = mediumCommentTag;
        case smallCommentNameRegEx:
            if (tag.length === 0 || !tag.trim()) {
                tag = smallCommentTag;
            }
            requirementCheckerDirections(index, arr, tag);
            break;
        /*
        Regex cases for contact tags
        */
        case adminInfoNameRegEx:
            if (tag.length === 0 || !tag.trim())
                tag = adminInfoTag;
            tag = requirementCheckerAdminInfo(index, arr, tag);
            break;
        case emailNameRegEx:
            if (tag.length === 0 || !tag.trim())
                tag = emailTag;
        case nameFullNameRegEx:
            if (tag.length === 0 || !tag.trim())
                tag = nameFullTag;
        case firstNameNameRegEx:
            if (tag.length === 0 || !tag.trim()) {
                tag = firstNameTag;
            }
        case middleNameNameRegEx:
            if (tag.length === 0 || !tag.trim())
                tag = middleNameTag;
        case middleInitialNameRegEx:
            if (tag.length === 0 || !tag.trim())
                tag = middleInitialTag;
        case lastNameNameRegEx:
            if (tag.length === 0 || !tag.trim())
                tag = lastNameTag;
        case addressNameRegEx:
            if (tag.length === 0 || !tag.trim()) {
                tag = addressTag;
            }
        case phoneNumberNameRegEx:
            if (tag.length === 0 || !tag.trim())
                tag = phoneNumberTag;
            requirementCheckerContact(index, arr, tag);
            break;
        case employeeNumberNameRegEx:
            if (tag.length === 0 || !tag.trim())
                tag = employeeNumberTag;
            tag = requirementCheckerEmployeeNumber(index, arr, tag);
            break;
        case genericFullContactNameRegEx:
            if (tag.length === 0 || !tag.trim())
                tag = genericFullContactTag;
            tag = requirementCheckerGenericContact(index, arr, tag);
            break

        /*
        Regex cases for question tags
        */
        case multiNameRegEx:
            if (tag.length === 0 || !tag.trim())
                tag = multiTag;
        case ratingNameRegEx:
            if (tag.length === 0 || !tag.trim())
                tag = ratingTag;
        case shortAnswerNameRegEx:
            if (tag.length === 0 || !tag.trim())
                tag = shortAnswerTag;
        case scaleNameRegEx:
            if (tag.length === 0 || !tag.trim()) {
                tag = scaleTag;
            }
            tag = requirementCheckerQuestions(index, arr, tag);
            break;
        /*
        Regex cases for header tag
        */
        case headerTitleNameRegEx:
            if (tag.length === 0 || !tag.trim())
                tag = headerTitleTag;
        case questionTitleNameRegEx:
            if (tag.length === 0 || !tag.trim())
                tag = questionTitleTag;
        case answerTitleNameRegEx:
            if (tag.length === 0 || !tag.trim())
                tag = answerTitleTag;
        case subHeaderTitleNameRegEx:
            if (tag.length === 0 || !tag.trim()) {
                tag = subHeaderTitleTag;
            }
            tag = requirementCheckerHeader(index, arr, tag);
            break;
        /*
         Regex cases for directions tag
        */
        case genericDirectionsNameRegEx:
            if (tag.length === 0 || !tag.trim())
                tag = genericDirectionsTag;
        case questionDirectionsNameRegEx:
            if (tag.length === 0 || !tag.trim())
                tag = questionDirectionsTag;
        case answerDirectionsNameRegEx:
            if (tag.length === 0 || !tag.trim())
                tag = answerDirectionsTag;
        case customDirectionsNameRegEx:
            if (tag.length === 0 || !tag.trim()) {
                tag = customDirectionsTag;
            }
            tag = requirementCheckerDirections(index, arr, tag);
            break;
    }
    return tag;
}

function requirementCheckerComment(index, arr, tag) {
    var count = 0;
    for (count = 0; count <= 2; i++ , index.num++) {
        /*
            Step 1: create the tag
            Step 2: set the pre-set requirements
            Step 3: get object value from arr & set attribute accordingly
            Step 4: repeat steps 2-3 until all attributes are set
            Step 5: return generated tag
        */
    }
    return tag;
}
function requirementCheckerHeader(index, arr, tag) {
    var count = 0;
    for (count = 0; count <= 2; i++ , index.num++) {
        /*
            Step 1: create the tag
            Step 2: set the pre-set requirements
            Step 3: get object value from arr & set attribute accordingly
            Step 4: repeat steps 2-3 until all attributes are set
            Step 5: return generated tag
        */
    }
    return tag;
}
function requirementCheckerDirections(index, arr, tag) {
    var count = 0;
    for (count = 0; count <= 2; i++ , index.num++) {
        /*
            Step 1: create the tag
            Step 2: set the pre-set requirements
            Step 3: get object value from arr & set attribute accordingly
            Step 4: repeat steps 2-3 until all attributes are set
            Step 5: return generated tag
        */
    }
    return tag;
}
function requirementCheckerQuestions(index, arr, tag) {
    var count = 0;
    for (count = 0; count <= 2; i++ , index.num++) {
        /*
            Step 1: create the tag
            Step 2: set the pre-set requirements
            Step 3: get object value from arr & set attribute accordingly
            Step 4: repeat steps 2-3 until all attributes are set
            Step 5: return generated tag
        */
    }
    return tag;
}
function requirementCheckerContact(index, arr, tag) {
    var count = 0;
    for (count = 0; count <= 2; i++ , index.num++) {
        /*
            Step 1: create the tag
            Step 2: set the pre-set requirements
            Step 3: get object value from arr & set attribute accordingly
            Step 4: repeat steps 2-3 until all attributes are set
            Step 5: return generated tag
        */
    }
    return tag;
}
function requirementCheckerGenericContact(index, arr, tag) {
    var count = 0;
    for (count = 0; count <= 2; i++ , index.num++) {
        /*
            Step 1: create the tag
            Step 2: set the pre-set requirements
            Step 3: get object value from arr & set attribute accordingly
            Step 4: repeat steps 2-3 until all attributes are set
            Step 5: return generated tag
        */
    }
    return tag;
}
function requirementCheckerAdminInfo(index, arr, tag) {
    var count = 0;
    for (count = 0; count <= 2; i++ , index.num++) {
        /*
            Step 1: create the tag
            Step 2: set the pre-set requirements
            Step 3: get object value from arr & set attribute accordingly
            Step 4: repeat steps 2-3 until all attributes are set
            Step 5: return generated tag
        */
    }
    return tag;
}
function requirementCheckerEmployeeNumber(index, arr, tag) {
    var count = 0;
    for (count = 0; count <= 2; i++ , index.num++) {
        /*
            Step 1: create the tag
            Step 2: set the pre-set requirements
            Step 3: get object value from arr & set attribute accordingly
            Step 4: repeat steps 2-3 until all attributes are set
            Step 5: return generated tag
        */
    }
    return tag;
}
