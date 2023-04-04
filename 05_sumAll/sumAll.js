const sumAll = function(first, second) {
    if (!Number.isInteger(first) || !Number.isInteger(second)) return "ERROR";

    if(first < 0 || second < 0){
        return "ERROR"
    }

    let num = 0;

    for(i = first; first <= second; i++) {
        num += i;
    }

    return num;

};

// Do not edit below this line
module.exports = sumAll;
