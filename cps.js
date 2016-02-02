function firstChar (string, cont) {
    cont( string[0] );
}

//demonstrating the use of the CPS function
firstChar( "JavaScript", function (char) {
    console.log(char); 
});



function lastChar (string, cont) {
    cont( string[string.length - 1] );
}

//demo
lastChar( "JavaScript", function (char) {
    console.log(char);
});



function getFirstAndLast (string, cont) {
    
}