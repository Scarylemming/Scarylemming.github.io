var team1scoreHistory = [0];
var team2scoreHistory = [0];
var team1Name = "";
var team2Name = "";

Cookies.set("Name1", "true")


function calculateScore() {
    var team1score = parseInt(document.getElementById("team1score").value);
    var team2score = parseInt(document.getElementById("team2score").value);

    // Add current scores to history
    team1scoreHistory.push(team1score);
    team2scoreHistory.push(team2score);

    // Calculate total score for each team
    var team1total = team1scoreHistory.reduce((a, b) => a + b, 0);
    var team2total = team2scoreHistory.reduce((a, b) => a + b, 0);

    // Update total scores on page
    document.getElementById("team1total").innerHTML = team1total;
    document.getElementById("team2total").innerHTML = team2total;

    // Reset input fields
    document.getElementById("team1score").value = 0;
    document.getElementById("team2score").value = 0;
}

function addPoints(teamScoreId, bonusPoints) {

    if (teamScoreId == "team1score") {
        console.log("Team 1");
        var team1score = bonusPoints;
        team1scoreHistory.push(team1score);
        var team1total = team1scoreHistory.reduce((a, b) => a + b, 0);
        document.getElementById("team1total").innerHTML = team1total;
    } else {
        console.log("Team 2");
        var team2score = bonusPoints;
        team2scoreHistory.push(bonusPoints);
        var team2total = team2scoreHistory.reduce((a, b) => a + b, 0);
        document.getElementById("team2total").innerHTML = team2total;
    }
 }

function undo() {
    team1scoreHistory.pop();
    team2scoreHistory.pop();

    // Recalculate total score for each team
    var team1total = team1scoreHistory.reduce((a, b) => a + b, 0);
    var team2total = team2scoreHistory.reduce((a, b) => a + b, 0);

    // Update total scores on page
    document.getElementById("team1total").innerHTML = team1total;
    document.getElementById("team2total").innerHTML = team2total;
}
function calculate() {
    const team1ScoreInput = document.getElementById("team1score");
    const team2ScoreInput = document.getElementById("team2score");
    const team1Score = parseInt(team1ScoreInput.value, 10);
    const team2Score = parseInt(team2ScoreInput.value, 10);

    if (!isNaN(team1Score) && team1Score > 0 && team2Score === 0) {
        const team2ScoreResult = 157 - team1Score;
        addPoints("team1score", team1Score);
        addPoints("team2score", team2ScoreResult);
        
    } else if (!isNaN(team2Score) && team2Score > 0 && team1Score === 0) {
        const team1ScoreResult = 157 - team2Score;
        addPoints("team2score", team2Score);
        addPoints("team1score", team1ScoreResult);
        
    } else {
        alert("Please enter a score for one team only");
    }
    document.getElementById("team1score").value = 0;
    document.getElementById("team2score").value = 0;
}


