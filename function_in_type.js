const _ = require('lodash')


var tab_element = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "V", "D", "R"]

var type = ["CA", "C", "P", "T"]


var pile_card = []




for (var i = 0; i < tab_element.length; i++) {
    for (var j = 0; j < type.length; j++) {
        pile_card.push(tab_element[i] + "-" + type[j])
    }
}



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
pile_card = shuffle(pile_card)


// Melanger les element du tableau pile_card

function numberRamdom(max, min) {
    return Math.round(Math.random() * (max - min) + min)
}


//console.log(turn1, pile_card[turn1])




pile_card = pile_card.map(function (cart) {
    console.log(cart)
    var value = cart.split('-')[0]
    var value_color =  cart.split('-')[1]
    if (isNaN(value) && value != "A")
        value = 10
    else if (isNaN(value) && value == "A")
        value = 11
    else
        value = Number(value)
    if (value_color == "CA" || value_color == "C")
        value_color = "red"
    else
        value_color = "black"
    var obj = {name: cart, value: value, color: value_color}
    return obj
})

console.log(pile_card)

pile_card = _.shuffle(pile_card)
console.log(pile_card)

var indexFind = _.findIndex(pile_card, ["name", "4-C"])
console.log(indexFind, pile_card(indexFind))



