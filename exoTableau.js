var people_formation = [
    {
        firstName: "Brothers",
        lastName: "Yannis",
        age: 24,
        dateStart: "14 juillet 2000",
        lieu_de_naissance: "Paris"
    },
    {
        firstName: "Louis"+i,
        lastName: "Labroquante"+i,
        age: 16,
        dateStart: "12-12-1950"+i,
        lieu_de_naissance: "Paris"
    }
]

//console.log(people_formation)

//people_formation.pop()

//console.log(people_formation)

//people_formation.pop({
//    firstName: "Brothers",
//    lastName: "Mathis",
//    dateStart: "2000",
//    lieu_de_naissance: "Paris" 
//})

/* for (var i = 0; i < 100; i++){
    people_formation.push({
            firstName: "Louis"+i,
            lastName: "Mathis",
            dateStart: "2000",
            age: 32+i,
            lieu_de_naissance: "Paris" 
        })
} */

for (var i = 0; i < 100; i++){
    people_formation.push({
            firstName: "Louis"+i,
            lastName: "Mathis",
            dateStart: "2000",
            age: 32+i,
            lieu_de_naissance: "Paris" 
        })
}

var tableau_plus_de_50 = []
for (var i = 0; i < people_formation.length; i++) {
    if (people_formation[i].age > 50) {
        tableau_plus_de_50.push({...people_formation[i]})
    }
}

//console.log(`J'ai ${tableau_plus_de_50.length} personne(s) qui ont plus de 50 ans dans mon tableau.`)
 
//console.log(`J'ai ${people_formations.lenght}  personnes dans mon tableau.`)

for (var i = 0; i < people_formation.length; i++){
    if (people_formation[i].firstName === "Louis55") {
        console.log(`Prénom : ${people_formation[i].firstName}`)
        console.log("Nom :", people_formation[i].lastName)
        console.log("Age :", people_formation[i].age)
        console.log(`Il est à la ${i} position dans le tableau.\n`)
    }
}

//console.log(`Il y a ${people_formation.lenght}personnes dans la formation.`)

// Stockage d'un élémet unique avec Obj
var obj_people = {}

for (var i =0;i < people_formation.length; i++) {
    obj_people[people_formation[i].firstName] = people_formation[i]
} 
console.log(obj_people["Louis55"])
