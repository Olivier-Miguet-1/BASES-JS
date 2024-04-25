function recursiveLoopSub(tab) {
    for (var i = 0; i < tab.length; i++) {
    console.log(tab[i].name)
        if (tab[i].subProjet && tab[i].subProjet.length > 0)
        recursiveLoopSub(tab[i].subProjet)
        }
}

var projet = [{                        // Variable projet déclare   crée le tableau subProjet qui crée un tableau
        subProjet: [                                 // où se trouve les objets name et subProject
            {
                name: "SubProjet 1",
                subProjet: [{name: "SubProjectdeSubPorject1"}]
             }
        ]
}, 
{ name: "Projet 2", subProjet: [] }]

recursiveLoopSub(projet)

function recursiveLoopChildren(tab) {
    for (var i = 0; i < tab.length; i++) {
    console.log(tab[i].firstName,tab[i].lastName )            // On affiche firstName et lastName
        if (tab[i].children && tab[i].children.length > 0)
        recursiveLoopChildren(tab[i].children);
        }
}



var people = [{           // Recursivité en Javascript "parent-enfant"
    firstName: "Edouard",
    lastName: "Bernier",
    children: [{
        firstName: "Jean",
        lastName: "Bernier",
        children: [{
            firstName: "Junior",
            lastName: "Bernier",
            children: [{
                firstName: "Jordan",
                lastName: "Bernier"
            },
            {
                firstName: "Luc",
                lastName: "Bernier"
            }]
        }]
    },
    {
        firstName: "Sacha",
        lastName: "Bernier",
    },
    {
        firstName: "Laurent",
        lastName: "Bernier",
    },
    {
        firstName: "Raphael",
        lastName: "Bernier",
    }]
},
{
    firstName: "Jean",
    lastName: "Luc",
    children: [{
        firstName: "Richard",
        lastName: "Luc",
        children: [{
            firstName: "Roméo",
            lastName: "Luc"
        }]
    }]
}]

recursiveLoopChildren(people);


function affichageFamille (tab, indent, origin) {                   // Fonction affichage famille
    let tabulation  = ""                                            // Déclaration variable tab

    for( y = 0 ; y < indent ; y++){     // Tant que y est inférieur à indent
        tabulation += " "             // Ajout d'un espace dans tabulation
    }
    for (let i = 0; i < tab.length; i++){               // Tant que i est inférieur à tab
        // Affichage console de tabulation, du nom à la position i de tab, du prénom à la position i et de l'origine
        console.log(`${tabulation}nom : ${tab[i].lastName} / prénom : ${tab[i].firstName} / origin : ${origin}`)   
        
        if (tab[i].children && tab[i].children.length > o){    // Si dans tab à la position i, il y a le param enfant et présence d'enfants 
            affichageFamille(tab[i].children,indent+1, origin + `$(tab[i].firstName) ${tab[i].lastName} - `)
        }   // Appel de la fonction affichage famille en donnant tableau enfant + incrémentation indent + nom et prénom du parent
    }
}

affichageFamille(people, 0,"- ")

//                 if(tab[i].children){ // si children existe
//              fait quelque chose seulement si children existe
//    
//                 if(tab[i].children.length > 0){// si contenu dans children existe
//              // fait quelque chose seulement si children à un contenu
//    }
//  }

//   = tu assignes
//  == tu testes l'égalité
// === strictement égal