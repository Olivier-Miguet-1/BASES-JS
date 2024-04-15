var age = 26;
var authorized = false

if (age>= 18) {
    console.log("Tu es majeur !")
    authorized = true
}
else {
    console.log("Tu es un mineur !")
}
//console.log("Salut comment vas-tu ?")
console.log('autorisé : ${authorized}')

var authorized2 = age >= 18 ? true : false
console.log(`autorisé : ${'authorized2}`)
