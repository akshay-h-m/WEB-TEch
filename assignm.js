// Global variable for quiz score
var score = 0;

// Function Declaration
function questionOne() {
    var answer = prompt("Q1: What is the capital of France?");
    var correctAnswer = "Paris";
    if (answer === correctAnswer) {
        score++;
    }
}

// Function Expression
const questionTwo = function () {
    var answer = prompt("Q2: What is 2 + 2?");
    var correctAnswer = "4";
    if (answer === correctAnswer) {
        score++;
    }
};

// Hoisting demonstration: function declaration called before defined
questionThree(); // Works due to hoisting

function questionThree() {
    var answer = prompt("Q3: What color do you get when you mix red and white?");
    var correctAnswer = "Pink";
    if (answer === correctAnswer) {
        score++;
    }

    // Local variable, not accessible outside
    var localScore = 5;
}

// Hoisting demo with var
console.log("Hoisted var example:", hoistedExample); // undefined
var hoistedExample = "Hoisted!";

// Run quiz questions
questionOne();
questionTwo();

console.log("Final Quiz Score: " + score);

// Bonus: Try accessing a local variable from outside its scope
function reviewScore() {
    try {
        console.log("Review Score:", localScore); // Error, localScore is not defined here
    } catch (e) {
        console.log("Error accessing localScore:", e.message);
    }
}
reviewScore();


// -------------------------
// 📍 PART 2: Student Activity Evaluator
// -------------------------

// Global variables
var studentName = "Anika";
var activityScores = [10, 20, 15, 5];

// Function Declaration
function calculateTotal(scores) {
    var total = 0;
    for (var i = 0; i < scores.length; i++) {
        total += scores[i];
    }
    return total;
}

// Function Expression
const evaluateRank = function (total) {
    if (total > 40) return "Star Performer";
    else if (total >= 30) return "Active";
    else return "Inactive";
};

// Anonymous function to calculate average score
const calculateAverage = function () {
    return calculateTotal(activityScores) / activityScores.length;
};

// Lexical scope demonstration
function generateReport() {
    var rank = evaluateRank(calculateTotal(activityScores));
    function showDetails() {
        console.log("Report:");
        console.log("  Student: " + studentName);
        console.log("  Rank: " + rank);
        console.log("  Message: " + (rank === "Star Performer" ? "Great job on co-curriculars!" : "Keep going!"));
    }
    showDetails();
}

// Hoisting experiment
console.log("Category (before declaration):", category); // undefined due to hoisting
var category = "General";

// Scope isolation test
if (true) {
    var insideBlock = "I'm inside a block";
}
console.log("Accessing block variable outside:", insideBlock); // Accessible due to function scope of var

// Display final output
var totalScore = calculateTotal(activityScores);
var avgScore = calculateAverage();
var rank = evaluateRank(totalScore);

console.log("Student:", studentName);
console.log("Activity Scores:", activityScores);
console.log("Total Score:", totalScore);
console.log("Average Score:", avgScore);
console.log("Rank:", rank);

generateReport();
