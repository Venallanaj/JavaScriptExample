function myFunction(p1, p2) {
    return Math.max(p1, p2);
}
document.getElementById("demo").innerHTML = myFunction(50, 60);

var array = [3, 6, 2, 56, 32, 5, 89, 32];
var largest = 0;

for (i = 0; i <= largest; i++) {
    if (array[i] > largest) {
        var largest = array[i];
    }
}
console.log(largest);

function MaxNumber() {
    var array = [2, 4, 6, 8, 20]
    var number = 0;

    for (i = 0; i <= number; i++) {
        if (array[i] > number) {
            var number = array[i];
        }
    }
    return number;

};

console.log(MaxNumber());

function MinNumber() {
    var array = [1, 2, 3]
    var minnumber = 0;
    for (i = 0; i <= minnumber; i--) {
        if (array[i] < minnumber) {
            var minnumber = array[i];
        }
    }
    return minnumber;
}




console.log(MinNumber());


function Ena() {
    var array = [20, 40, 50];
    var numberEna = 0;

    for (i = 0; i <= 0; i++) {
        if (array[i] > numberEna) {

            var numberEna = array[i];
        }
        return numberEna;
    }
}

alert.MaxNumber();