var table = ["Salut", "ça", "va"]

function recursiveLoop(tab, index) {
    console.log(tab[index], "/ index =", index)
        if (index< tab.length - 1)
        recursiveLoop(tab, index + 1)
        else
            console.log("Fin du tableau")
}

recursiveLoop(table, 0)

function recursiveLoopSub(tab) {
    for (let i = 0; i < tab.length; i++) {
    console.log("Nom du projet :", tab[i].name)
    // console.log("ligne 17", tab[i].subProjet.length)

        if (tab[i].subProjet){
            recursiveLoopSub(tab[i].subProjet)
        }
    }
}

var projet = [
    { 
        name: "Projet 1",
        subProjet: [
            {
                name: "SubProjet 1",
                subProjet: [{name: "SubProjectdeSubPorject1"}]
            }
        ]
    }, 
    { 
        name: "Projet 2", 
        subProjet: []
    }
]

recursiveLoopSub(projet)