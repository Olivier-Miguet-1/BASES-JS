var obj = {
    a: 1,
    b: 3,
    c: { e: { f: { z: { y: 23 } } } }
}

function searchKeyY(object, keyName) {
    for (let i = 0; i < obj.length; i++) {
        if (){
            console.log(searchKeyY) 
    }
}
console.log(searchKey(obj, `y`)) // true -> false

const filteredKeysObject = keys.filter(key => key && {key})
returnEveryKey()  // --> [a,b,c,e,f,z,y]
}


function sommeTableau(tableau) {
    if (tableau.length == 0)
        return 0
    return tableau[0] + sommeTableau(tableau.splice(1))
}

function lengthTableau(tableau) {
    if (tableau.length == 0)
        return 0
    return 1 + lengthTableau(tableau.splice(1))
}

function isPalindrome(str) {
if (str.length <= 1) 
    return true

if (str[0] !== str[str.length -1])
    return false
    }  
 return isPalindrome(str.slice(1, -1))


 console.log(isPalindrome("madam")); // devrait afficher true
 console.log(isPalindrome("venu"));  // devrait afficher false
 console.log(isPalindrome("radar")); // devrait afficher true
 console.log(isPalindrome("elle"));  // devrait afficher true
 console.log(isPalindrome("hello")); // devrait afficherfalse
 console.log(isPalindrome("level")); // devrait afficher true
 console.log(isPalindrome("a"));     // devrait afficher true
 console.log(isPalindrome(""));      // devrait afficher true





console.log(sommeTableau({1, 2, 3, 4, 5}));
console.log(lengthTableau({1, 2, 3, 4, 5}));
console.log(lengthTableau({1, 2, 3, 4, 5}));


//console.log(filteredKeysObject)