var data =[
    {
        type: "Santé",
        descriptions: ["Problème AVC", "RDV Scanner", "RDV IRM"],
        price_max: 1000,
        price_min: 300
    },
    {
        type: "Loisirs",
        descriptions: ["Sortie cinéma", "Sortie bowling", "Sortie karting"],
        price_max: 100,
        price_min: 10
    },
    {
        type: "Loyer",
        descriptions: ["Résidence principale", "Résidence secondaire"],
        price_max: 850,
        price_min: 350, 
    },
    {
        type: "Voiture",
        descriptions: ["Pneus", "Lave-glace"],
        price_max: 850,
        price_min: 350, 
    },
    {
        type: "Frais",
        descriptions: ["carburant", "Assurance"],
        price_max: 850,
        price_min: 350, 
    }
]

var wallet = {
    depenses: []
}

var min = 713251378
var max = 1713251378

for (var i = 0; i < 1000; i++) {
    var object_type = data[Math.round(Math.random()*((data.length - 1) - 0) +0)]
    var object_description = object_type.descriptions[Math.round(Math.random()*((object_type.descriptions.length - 1) - 0) +0)]

   wallet.depenses.push({
        date: Math.round(Math.random()* (max - min) + min),
        type: object_type.type,
        price: Math.round(Math.random()*(object_type.price_max - object_type.price_min) + object_type.price_min),
        description: object_description
    })
}

console.log(wallet.depenses)                                  // Afficher les résultats
console.log("Taille tableau:", wallet.depenses.length)                                                                                