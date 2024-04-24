var table = ["Salut", "ça", "va"]

function recursiveLoop(tab, index) {
    console.log(tab[index], "/ index =", index)
        if (index< tab.length - 1)
        recursiveLoop(tab, index + 1)
        else
            console.log("Fin du tableau")
}

//recursiveLoop(table, 0)
//for (var i = 0; i < table.length; i++) {

function recursiveLoopSub(tab) {
    for (var i = 0; i < table.length; i++) {
    console.log(tab[i].name)
        if (tab[i].subProjet.length > 0)
        recursiveLoopSub(tab[i].subProjet)
        }
}

var projet = [{ 
        name: "Projet 1",
        subProjet: [
            {
                name: "SubProjet 1",
                subProjet: [{name: "SubProjectdeSubPorject1"}]
    }
]
}, 
{ name: "Projet 2", subProjet: [] }]

recursiveLoopSub(projet)