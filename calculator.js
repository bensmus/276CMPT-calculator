let gradeFractions = {}
let weights = {}
let rowcount = 4;

// Displaying percentages for all rows
for (let count = 1; count <= rowcount; count++) {
    initialize(count);
}

function initialize(count) {
    let p = document.getElementById("p" + count)
    let n = document.getElementById("n" + count);
    let d = document.getElementById("d" + count);
    let w = document.getElementById("w" + count);
    w.oninput = weightUpdate(w, count);
    n.oninput = percentUpdate(n, d, p, count);
    d.oninput = percentUpdate(n, d, p, count);
}

function weightUpdate(w, count) {
    return function () {
        weights[count] = Number(w.value);
    }
}

function percentUpdate(n, d, p, count) {
    return function () {
        gradeFraction = n.value / d.value;
        gradeFractions[count] = gradeFraction;
        p.innerHTML = Math.round(gradeFraction * 100) + "%";
    };
}

weightedButton = document.getElementById("wb");
meanButton = document.getElementById("mb");
rowButton = document.getElementById("rb");
result = document.getElementById("result");

weightedButton.onclick = function () {
    console.log("weightedButton clicked");
    result.innerHTML = calculateWeighted(weights, gradeFractions);
}

meanButton.onclick = function () {
    console.log("meanButton clicked");
    result.innerHTML = calculateWeighted({ 1: 0.25, 2: 0.25, 3: 0.25, 4: 0.25 }, gradeFractions);
}

function calculateWeighted(weights, gradeFractions) {
    let weightedFraction = 0;
    for (let count = 1; count <= rowcount; count++) {
        weightedFraction += weights[count] * gradeFractions[count];
    }
    let weighted = Math.round(weightedFraction * 100) + "%";
    return weighted;
}

rowButton.onclick = function () {
    rowcount++;

    // create the row elements
}

