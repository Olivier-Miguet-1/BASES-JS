const _ = require('lodash')

// On commence par créer une liste de types de cartes ("A" pour As, "2" pour 2, etc.) 
//et une liste de types de cartes ("CA" pour cœur, "C" pour carreau, etc.).
var tab_element = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "V", "D", "R"]

var type = ["CA", "C", "P", "T"]

//Ensuite, on crée une liste vide appelée pile_card
var pile_card = []


// On fait une double boucle pour combiner chaque type de carte avec chaque 
//type de carte ("A-CA", "A-C", etc.) et on ajoute ces combinaisons à la liste pile_card.

for (var i = 0; i < tab_element.length; i++) {
    for (var j = 0; j < type.length; j++) {
        pile_card.push(tab_element[i] + "-" + type[j])
    }
}

// On utilise des fonctions pour mélanger les cartes. La première utilise un algorithme simple
// pour mélanger les cartes. Les deux autres utilisent une fonction aléatoire.
function shuffle(tab) {
    return tab.sort(function () { return Math.random() - 0.5 })
}
function shuffleOther(tab) {
    return tab.sort(() => { Math.random() - 0.5 })
}

function shuffleFisher(arr) {
    for (var i = arr.length - 1; 0 > i; i--) {
        var j = Math.floor(Math.round() * i + 1)
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }
}

console.log(pile_card)

// On utilise une fonction pour mélanger les cartes dans pile_card.
pile_card = shuffle(pile_card)


// Melanger les element du tableau pile_card

function numberRamdom(max, min) {
    return Math.round(Math.random() * (max - min) + min)
}


//console.log(turn1, pile_card[turn1])

// On définit une fonction pour attribuer des valeurs et des
// couleurs aux cartes. Par exemple, les "A" ont une valeur de
// 11, les autres cartes numériques gardent leur valeur numérique,
// et les autres cartes (V, D, R) ont une valeur de 10.


pile_card = pile_card.map(function (cart) {
    console.log(cart)
    var value = cart.split('-')[0]
    var value_color =  cart.split('-')[1]
    if (isNaN(value) && value != "A")
        value = 10
    else if (isNaN(value) && value == "A")
        value = 11
    // Les couleurs sont déterminées en fonction du type de carte. Les
    // cœurs et les carreaux sont rouges, les piques et les trèfles sont
    // noirs. On applique cette fonction à chaque carte dans la liste pile_card.
    else
        value = Number(value)
    if (value_color == "CA" || value_color == "C")
        value_color = "red"
    else
        value_color = "black"
    var obj = {name: cart, value: value, color: value_color}
    return obj
})

// On affiche les cartes avec leurs valeurs et couleurs attribuées.
console.log(pile_card)

//on utilise une fonction spéciale de la bibliothèque lodash pour mélanger une
// dernière fois les cartes de manière aléatoire, puis on affiche la liste de cartes mélangées.
pile_card = _.shuffle(pile_card)
console.log(pile_card)



