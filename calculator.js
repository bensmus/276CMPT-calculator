// // Testing "displaying something based on certain conditions"
// let n = Math.round(Math.random())
// let p1 = document.getElementById("p1")
// if (n == 1) {
//     p1.innerHTML = "1";
// } else {
//     p1.innerHTML = "0";
// }

// Displaying the percentage for first row
let p1 = document.getElementById("p1");
let n1 = document.getElementById("n1");
let d1 = document.getElementById("d1");

n1.oninput = updatePercent;
d1.oninput = updatePercent;

function updatePercent() {
    p1.innerHTML = Math.round(n1.value / d1.value * 100) + "%";
}



