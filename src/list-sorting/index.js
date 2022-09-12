function listSorting(needle, haystack) {
    // The lastIndexOf() method returns the index (position) of the last occurrence of a specified value in a string.
   if (typeof(haystack[0]) == "object") {
    let result;
    let row;
    for (let i = 0; i < haystack.length; i++) {
        for (let j = 0; j < haystack[i].length; j++) {
            if (haystack[i][j] === needle) {
                result = haystack[i].lastIndexOf(needle);
                row = i;
            }
        }
     }
     if (row == undefined) return -1;
     return [row, result]

   } 
   else {
    return haystack.lastIndexOf(needle);
   }
}

module.exports = listSorting;
