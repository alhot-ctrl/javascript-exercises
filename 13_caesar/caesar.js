const caesar = function(uncoded, shiftparam) {

    len=uncoded.length
    uncoded_arr=uncoded.split("")
    coded=""

    for (i=0;i<len;i++){
        coded+=String.fromCharCode(uncoded.charCodeAt(i)+shiftparam)
    }

};

// Do not edit below this line
module.exports = caesar;
