// Code your solution in this file!
function distanceFromHqInBlocks(a) {
    return Math.abs(a - 42);
}


function distanceFromHqInFeet(a) {
    return (distanceFromHqInBlocks(a) * 264 );
}

function distanceTravelledInFeet(a, b) {
    return Math.abs(b - a) * 264;
}


function calculatesFarePrice(start, destination) {
let total = distanceTravelledInFeet(start, destination);

if (total < 400) {
    return 0;
}
else if  (total > 400 && total < 2000) {
    total = total - 400 
    return total * 0.02;
}

else if  (total > 2000 && total < 2500) {
        return 25;
}

else if  (total > 2500) {
        return "cannot travel that far"
}

}