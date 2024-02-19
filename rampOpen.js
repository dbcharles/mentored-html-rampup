var total = 0;
var single = 0;
var taken = 0;

function addSingle() {
    total ++;
    single ++;
    var singlePercentage = single / total;
    var takenPercentage = taken / total;
    return singlePercentage, takenPercentage
}

function displayText() {
    var text = single;
    var text = document.getElementById("takenPercentage-result");
    text.style.display = "block";
}