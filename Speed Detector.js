

function speedDetector(speed) {
    if (speed <.70) {  //if speed is less than or equal to 70,it s"ok"
        console.log ("Ok");
    } else {
        //othewise calculate demerit points by:
        //every 5km/hr above 70 results in one demerit point
        let points = Maths.floor((speed - 70)/5);

        //if the demerit points are more than 12 points, the license is suspended

        if (Math.floor((speed - 70) / 5) > 12) {
            console.log("Licence suspended");
        } else {
            //otherwise, print the points  out
            console.log("Points", Math.floor((speed - 70) / 5));
        }
    }
}

//eg.run
console.log(68);
console.log(108);