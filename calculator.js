// // Testing "displaying something based on certain conditions"
// let n = Math.round(Math.random())
// let p1 = document.getElementById("p1")
// if (n == 1) {
//     p1.innerHTML = "1";
// } else {
//     p1.innerHTML = "0";
// }

// Displaying the percentage for first row
// let p1 = document.getElementById("p1");
// let n1 = document.getElementById("n1");
// let d1 = document.getElementById("d1");

// n1.oninput = updatePercent;
// d1.oninput = updatePercent;

// function updatePercent() {
//     p1.innerHTML = Math.round(n1.value / d1.value * 100) + "%";
// }

// Displaying percentages for all rows
for (let count = 1; count <= 4; count++) {
    let p = document.getElementById("p" + count)
    let n = document.getElementById("n" + count);
    let d = document.getElementById("d" + count);

    n.oninput = percentUpdate(n, d, p);
    d.oninput = percentUpdate(n, d, p);
}

function percentUpdate(n, d, p) {
    return function () {
        p.innerHTML = Math.round(n.value / d.value * 100) + "%";
    };
}




