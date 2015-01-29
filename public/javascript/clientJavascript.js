// Our javascript for the CLIENT side.
// This will run on the browser.

/**
 * Takes no arguments, and creates a javascript alert in the client's browser.
 */
var sendAlert = function(){
    alert("THIS IS AN ALERT!");
};

/**
 * Used for getting the length of a string. For example only, you won't likely need to use something like this...
 * DIFFERENT FROM THE stringLength function in the server side javascript!!!
 *
 * @param str  - the string to have its length returned
 * @returns {*}  - an integer, the length of the string
 */
var testStringLength = function(str){
    return str.length;
};


/**
 * Takes no arguments, returns the string "kittens"
 *
 * @returns {string}  - returns "kittens"
 */
var returnKittens = function(){
    return "kittens";
};

var calculateGPA = function(grade, credit){
    var numGrade = 0;
    if (grade == 'A') {
        numGrade = 4;
    }
    if (grade == 'B') {
        numGrade = 3;
    }
    if (grade == 'C') {
        numGrade = 2;
    }
    if (grade == 'D') {
        numGrade = 1;
    }
    return (numGrade * credit) / credit;
};
var totalGPA = function(GPA1, GPA2, GPA3){
    return (GPA1 + GPA2 + GPA3) / 3;
};