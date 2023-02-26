const repeatString = function(stringToBeRepeated,times) {
    if(times<0){
        return 'ERROR'
    }
    return stringToBeRepeated.repeat(times)
};

// Do not edit below this line
module.exports = repeatString;
