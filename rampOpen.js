var total = 0;
var single = 0;
var taken = 0;

function addSingle() {
    total++;
    single++;
    displayText();
}

function addTaken() {
    total++;
    taken++;
    displayText();
}

function displayText() {
    var singlePercentage = (single / total) * 100;
    var takenPercentage = (taken / total) * 100;
    
    // Ensure to round the percentages to make them more readable
    document.getElementById("singlePercentage").innerText = singlePercentage.toFixed(2);
    document.getElementById("takenPercentage").innerText = takenPercentage.toFixed(2);
}
