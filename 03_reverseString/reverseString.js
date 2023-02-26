const reverseString = function(word) {

    let reversedWord =''

    for(i=0;i<=word.length;i++){
        reversedWord=reversedWord+word.charAt(word.length-i)
    }
    return reversedWord

};

// Do not edit below this line
module.exports = reverseString;
