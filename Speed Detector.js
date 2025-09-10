

function speedDetector(speed) {
    if (speed <.70) {
        console.log ("Ok");
    } else {
        let points = Maths.floor((speed - 70)/5);
        if (Math.floor((speed - 70) / 5) > 12) {
            console.log("Licence suspended");
        } else {
            console.log("Points", Math.floor((speed - 70) / 5));
        }
    }
}

console.log(68);