// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//     var password = generatePassword();
//     var passwordText = document.querySelector("#password");

//     passwordText.value = password;

// };

// // Prompt user to enter

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);


//Password Criteria
var pwCriteriaArr = [false, false, false, false];
var pwLength = 0;
var confirmMsg = "";
var confirmSelection = true;

function pwPrompt() {
    var typesArr = ["lowercase", "uppercase", "numeric", "special"];
    var userInput = 0;
    var correctInput = false;
    var lit = 0;
    var fit = 0;
    
    do {
        userInput = parseInt(prompt("how many characters do you want your password to be?"), 10);

        if (!Number.isInteger(userInput)) {
            alert("Error: Please enter an integer")
        }
        else if (userInput <= 8) {
            alert("Error: password length must be no less than 8 characters");
        }
        else if (userInput >= 128) {
            alert("Error: password length must be no more than 128 characters");
        }
        else correctInput = true;

    } while (correctInput === false);


    pwLength = userInput


    do {
        for (var i = 0; i < pwCriteriaArr.length; i++)
            pwCriteriaArr[i] = confirm("Do you want the password to have " + typesArr[i] + " characters?");

        lit = pwCriteriaArr.lastIndexOf(true)
        fit = pwCriteriaArr.indexOf(true)

        if (fit < 0) alert("Error: must choose at least one option");
    } while (fit < 0);

    confirmSelection = confirm("Confirm: You want your password to be " + pwLength + " characters with ONLY " + loopPwc() + " characters?");

    function loopPwc() {
        for (var i = 0; i < pwCriteriaArr.length; i++) {

            if (pwCriteriaArr[i]) {

                if (i === fit) confirmMsg += typesArr[i];
                else if (i === lit || lit === fit)
                    confirmMsg += (" and " + typesArr[i]);
                else confirmMsg += ", " + typesArr[i]
            }
        }

        return confirmMsg;
    }

}

do {
pwPrompt();
    if (!confirmSelection) {
        pwCriteriaArr = [false, false, false, false];
        pwLength = 0;
        confirmMsg = "";
    }
} while (!confirmSelection)



