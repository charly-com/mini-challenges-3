/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) {
    
    // converting the value to binary
    let binary = (parseInt(value).toString(2));
    
    // padding the binary with 0s to make it 8 digits
    let padding = String(binary).padStart(8, "0");
    
    // reversing the binary
    let splitedPad = padding.split("").reverse().join("");
    
    // converting the reversed binary to decimal
    splitedPad = parseInt(splitedPad, 2) 
    
    return splitedPad.toString()

  
}

console.log(binaryReversal("45"));

module.exports = binaryReversal;
 