// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {

    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

};

//password
//var completedPassword = "";
// true of false values to reference "typesArr" values
var pwCriteriaArr = [false, false, false, false];
// Array of types of characters in password
var typesArr = ["lowercase", "uppercase", "numeric", "special"];
var pwLength = 0;
var confirmMsg = "";
var confirmSelection = true;


function generatePassword() {
    //a check to see if user accepts the parameters set
    do {
        passwordPrompts();
        if (!confirmSelection) {
            pwCriteriaArr = [false, false, false, false];
            pwLength = 0;
            confirmMsg = "";
        }
    } while (!confirmSelection)

    return populatePassword();
}

//a function to set parameters of desired password
function passwordPrompts() {

    var userInput = 0;
    var correctInput = false;
    //last index of "True"
    var lit = 0;
    //first index of "True"
    var fit = 0;

    do {
        // User input is converted from a string to an Integer
        userInput = parseInt(prompt("how many characters do you want your password to be?"), 10);

        //checks if an integer was input
        if (!Number.isInteger(userInput)) {
            alert("Error: Please enter an integer")
        }
        //checks if input meets minimum size requirements
        else if (userInput < 8) {
            alert("Error: password length must be no less than 8 characters");
        }
        //checks if input meets maximum size requirements
        else if (userInput > 128) {
            alert("Error: password length must be no more than 128 characters");
        }
        // set value if conditions are passed
        else correctInput = true;

        //if value was set then loop exits
    } while (correctInput === false);

    // save user input to a global variable
    pwLength = userInput


    do {
        //loop to promp user for types of characters in array
        for (var i = 0; i < pwCriteriaArr.length; i++)
            //set indexes depending to true if user wants a specific type of character
            pwCriteriaArr[i] = confirm("Do you want the password to have " + typesArr[i] + " characters?");

        //save first index of true
        fit = pwCriteriaArr.indexOf(true);
        lit = pwCriteriaArr.lastIndexOf(true);

        //if fit is less than 0 there are no indexes with a value of true
        if (fit < 0) alert("Error: must choose at least one option");

        //loop till there is at least one true value in "pwCriteriaArr"
        // meaning user must select at least one type of character for password
    } while (fit < 0);

    //confirm selection
    //calls a function that returns a string with appropriate description of the user's selection
    confirmSelection = confirm("Confirm: You want your password to be " + pwLength + " characters with ONLY " + loopPwc() + " characters?");
    //returns string of description of user's selection
    function loopPwc() {
        confirmMsg = "";
        for (var i = 0; i < pwCriteriaArr.length; i++) {

            //if true value in the array (that corresponds to the array of character types) then populate the string with 
            if (pwCriteriaArr[i]) {

                if (i === fit) {
                    confirmMsg += typesArr[i];
                }
                else if (i === lit) {
                    confirmMsg += (" and " + typesArr[i]);
                }
                else {
                    confirmMsg += ", " + typesArr[i]
                }


            }
        }

        return confirmMsg;
    }

}

function populatePassword() {
    var popPass = "";
    var letterC = "abcdefghijklmnopqustuvwxyz";
    var specialC = "`~!@#$%^*&()-=_+[]\{}|;':./"
    //variable to count instances of true
    //var instTrue = 0;
    //variable loop amount
    //var loopAmt = 0
    var result = "";
    // //determines how many true values in array
    // for (var i = 0; i < pwCriteriaArr.length; i++) {
    //     if (pwCriteriaArr[i] === true) instTrue++;
    // }

    // //calculate how many times to loop
    // loopAmt = Math.floor(pwLength / instTrue) + Math.ceil(pwLength % instTrue);
    // console.log("   . . . . . . . loopAmt =" + loopAmt);

    var x = 0;
    for (var i = 0; i < pwLength; i++, x++) {
        if (x === 4) { x = 0; }

        if (typesArr[0] && x === 0) {
            //lower
            result += letterC.charAt(Math.floor(Math.random() * letterC.length));
            console.log("i: " + i + " || result: " + result);
        }

        else if (typesArr[1] && x === 1) {
            //upper
            result += letterC.charAt(Math.floor(Math.random() * letterC.length)).toUpperCase();
            console.log("i: " + i + " || result: " + result);
        }

        else if (typesArr[2] && x === 2) {
            //number
            result += Math.floor(Math.random() * 10);
            console.log("i: " + i + " || result: " + result);
        }

        else if (typesArr[3] && x === 3) {
            //special
            result += specialC.charAt(Math.floor(Math.random() * specialC.length));
            console.log("i: " + i + " || result: " + result);
        }


        popPass = popPass.concat(result);
        result = ""
    }

    var submitPassword = randomize(popPass);
    return submitPassword;
}

// function randomize (orderedPassword) {

//     var ordrPass = orderedPassword;
//     var jumble = "";

//     for (var i = 0; i < ordr.length; i++) {

//         jumble.charAt(i) = order.charAt(i);
//     }

//     return jumble;
// }