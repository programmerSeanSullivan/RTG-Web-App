/*
LIST of ID CONSTANTS
*/
const commentBoxName = [{ "CommentPromptU": name, 1000000000: size }, { "CommentPromptM": name, 5000: size }, { "CommentPromptL": name, 1000: size }, { "CommentPromptS": name, 400: size, }];
const questionHolderName = [{ "shortAnswer": name, "": question, 0: numAnswers, "": answers }, { "multi": name, "": questions, "": answers }, { "rating": name, "": questions, "": answers }, { "scale": name, "": questions, "": answers }];
const contactHolderName = [{ "emailaddressR": name, true: validation }, { "mIR": name, true: validation },
{ "fullR": name, true: validation }, { "lastR": name, true: validation },
{ "firstR": name, true: validation }, { "addressR": name, true: validation },
{ "middleR": name, true: validation }, { "phoneR": name, true: validation },
{ "phoneR": name, true: validation }, { "empolyeeNum": name, true: validation }];
const headingHolderName = [{ "TitlePrompt": name, }];
const directionHolderName = [{}];
/*
Comment box options
*/
var commentBox = commentBoxName;
/*
Question options
*/
var questionHolder = questionHoldername;
/*
Answer options
*/
var headingHolder = headingHodlerName;
/*
Heading options
*/
var contactolder = contactHolderName;
/*
Rating options
*/
function updateDiv() {
    var formObjects = $('#questionHolder').serializeArray();
        /*
    This is where you will store your new forms
    */
    var divToModify = document.getElementById("previewForm").innerHTML;
    /*
     * Take this array and begin to see which forms were generated
     */
    for (let index = 0; index < formObjects.length; index++) {
        const element = formObjects[index];
        switch (element.name) {
            case "contact":
                switch (element.type) {

                    case "email":
                        /*
                       *TAG GENERATION AND APPENDING HERE

                       */
                      divToModify += "<input type=\"email\" name=\"emailName\" id=\"\">";
                        break;
                    case "nameFull":
                        /*
                       *TAG GENERATION AND APPENDING HERE
                       */
                      divToModify += "<input type=\"text\" name=\"fullName\" id=\"\">";
                        break;
                    case "firstName":
                        /*
                       *TAG GENERATION AND APPENDING HERE
                       */
                      divToModify += "<input type=\"text\" name=\"firstName\" id=\"\">";
                        break;
                    case "middleName":
                        /*
                       *TAG GENERATION AND APPENDING HERE
                       */
                      divToModify += "<input type=\"email\" name=\"middleName\" id=\"\">";
                        break;
                    case "middleInitial":
                        /*
                       *TAG GENERATION AND APPENDING HERE
                       */
                      divToModify += "<input type=\"email\" name=\"middleInitial\" id=\"\">";
                        break;
                    case "lastName":
                        /*
                       *TAG GENERATION AND APPENDING HERE
                       */
                      divToModify += "<input type=\"text\" name=\"lastName\" id=\"\">";
                        break;
                    case "address":
                        /*
                       *TAG GENERATION AND APPENDING HERE
                       */
                      divToModify += "<input type=\"email\" name=\"address\" id=\"\">";
                        break;
                    case "phoneNumber":
                        /*
                       *TAG GENERATION AND APPENDING HERE
                       */
                      divToModify += "<input type=\"tele\" name=\"phoneNumber\" id=\"\">";
                        break;
                    case "employeeNumber":
                        /*
                       *TAG GENERATION AND APPENDING HERE
                       */
                      divToModify += "<input type=\"text\" name=\"employeeNumber\" id=\"\">";
                        break;

                    case "genericFullContact":
                        /*
                       *TAG GENERATION AND APPENDING HERE
                       */
                      divToModify += "<input type=\"text\" name=\"fullName\" id=\"\"><br>";
                      divToModify += "<input type=\"tele\" name=\"phoneNumber\" id=\"\"><br>";
                      divToModify += "<input type=\"text\" name=\"employeeNumber\" id=\"\"><br>";
                      divToModify += "<input type=\"email\" name=\"address\" id=\"\"><br>";
                      eledivToModifyment += "<input type=\"email\" name=\"emailName\" id=\"\"><br>";
                        break;
                    default:
                        break;
                }
                break;
            case "question":
                switch (element.type) {
                    case "shortAnswer":
                        /*
                        *TAG GENERATION AND APPENDING HERE
                        */
                        break;
                    case "multi":
                        /*
                        *TAG GENERATION AND APPENDING HERE
                        */
                        break;
                    case "rating":
                        /*
                        *TAG GENERATION AND APPENDING HERE
                        */
                        break;
                    case "scale":
                        /*
                        *TAG GENERATION AND APPENDING HERE
                        */
                        break;
                    default:
                        break;
                }
                break;
            case "direction":
                switch (element.type) {
                    case "genericD":
                        /*
                        *TAG GENERATION AND APPENDING HERE
                        */
                        break;
                    case "questionD":
                        /*
                        *TAG GENERATION AND APPENDING HERE
                        */
                        break;
                    case "answerD":
                        /*
                        *TAG GENERATION AND APPENDING HERE
                        */
                        break;
                    case "customD":
                        /*
                        *TAG GENERATION AND APPENDING HERE
                        */
                        break;
                }
                break;
            case "heading":
            switch (element.type) {
                case "title":
                    /*
                    *TAG GENERATION AND APPENDING HERE
                    */
                    break;
                case "question":
                    /*
                    *TAG GENERATION AND APPENDING HERE
                    */
                    break;
                case "answer":
                    /*
                    *TAG GENERATION AND APPENDING HERE
                    */
                    break;
                case "sub":
                    /*
                    *TAG GENERATION AND APPENDING HERE
                    */
                    break;
            }
                break;
            case "comment":
            switch (element.type) {
                case "unlimted":
                    /*
                    *TAG GENERATION AND APPENDING HERE
                    */
                    break;
                case "large":
                    /*
                    *TAG GENERATION AND APPENDING HERE
                    */
                    break;
                case "medium":
                    /*
                    *TAG GENERATION AND APPENDING HERE
                    */
                    break;
                case "small":
                    /*
                    *TAG GENERATION AND APPENDING HERE
                    */
                    break;
            }
                break;
            default:
                break;
        }

    }
    document.getElementById("previewForm").innerHTML = divToModify;

}

