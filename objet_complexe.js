var my_object = {
    firstName: "Jean",
    lastName: "Dupont",
    options: {
        name: "Option 1",
        testing: true
    }
}

var my_tree = {
    firstName: "Jean",
    lastName: "Dupont",
    dateStart: 1910,
    dateEnd: 1943,
    children: [
        {
            firstName: "Jean Junior",
            lastName: "Dupont",
            dateStart: 1930,
            dateEnd: 1973,
            children: [
            ]
        }
    ]
}

my_tree.children.push({
    firstName: "Jean Junior 2",
    lastName: "Dupont 2",
    dateStart: 1935,
    dateEnd: 1979,
    children: []
})

console.log( my_tree.children[0] ["firstNaame"], )

var tab = ["lastName", "firstName", "options"]

//console.log(my_object[tab[0]], my_object[lastName], my_object[firstName])