var recipes = [
  {
    type: "accompagnement",
    nom: "riz", //recipes[0].nom
    ingredients: ["riz", "eau"],
    duration: 15,
    ustensile: ["casserole"],
  },
  {
    type: "accompagnement",
    nom: "haricots verts",
    ingredients: ["haricots verts", "beurre"],
    duration: 10,
    ustensile: ["poêle"],
  },
  {
    type: "accompagnement",
    nom: "pâtes",
    ingredients: ["pâtes", "eau"],
    duration: 20,
    ustensile: ["casserole"],
  },
  {
    type: "assaisonnement",
    nom: "curry",
    ingredients: ["épice curry"],
    duration: 3,
    ustensile: ["cuillere a soupe"],
  },
  {
    type: "assaisonnement",
    nom: "paprika",
    ingredients: ["épice paprika"],
    duration: 3,
    ustensile: ["cuillere a soupe"],
  },
  {
    type: "assaisonnement",
    nom: "citron",
    ingredients: ["citron", "huile"],
    duration: 3,
    ustensile: ["cuillere a soupe"],
  },
  {
    type: "plat",
    nom: "boeuf",
    ingredients: ["épice curry"],
    duration: 3,
    ustensile: ["poele"],
  },
  {
    type: "plat",
    nom: "poulet",
    ingredients: ["paprika"],
    duration: 4,
    ustensile: ["plat"],
  },
  {
    type: "plat",
    nom: "saumon en papillote",
    ingredients: ["citron"],
    duration: 3,
    ustensile: ["Aluminium"],
  },
];

var plat = recipes.filter((recipe) => recipe.type === "plat"); // création var plat et cette var recipe est filtré dans recettes.type
var assaisonnement = recipes.filter(
  (recipe) => recipe.type === "assaisonnement"
);
var accompagnement = recipes.filter(
  (recipe) => recipe.type === "accompagnement"
);

var newRecipes = [];

for (i = 0; i < 10; i++) {
  let platSelected = plat[Math.floor(Math.random() * plat.length)];
  let assaisonnemmentSelected =
    assaisonnement[Math.floor(Math.random() * assaisonnement.length)];
  let accompagnementSelected =
    accompagnement[Math.floor(Math.random() * accompagnement.length)];

  let newRecipe = {
    nom:
      platSelected.nom +
      " " +
      accompagnementSelected.nom +
      " " +
      assaisonnemmentSelected.nom,
    ingredients: [
      ...accompagnementSelected.ingredients,
      ...assaisonnemmentSelected.ingredients,
      ...platSelected.ingredients,
    ],
    duration:
      platSelected.duration +
      assaisonnemmentSelected.duration +
      accompagnementSelected.duration,
    ustensile: [
      ...accompagnementSelected.ustensile,
      ...assaisonnemmentSelected.ustensile,
      ...platSelected.ustensile,
    ],
  };

  newRecipes.push(newRecipe);
}

console.log(newRecipes);

let recipe = {
  nom: [5, 15],
  ingrédients: "ingredients",
  type: "plat",
};

console.log(recipe.nom[0]);

//var plat = recipes.filtrer((recipe) => recipe.type === "plat");
//var assaisonnement = recipes.filtrer(
//  (recipe) => recipe.assaisonnement === "assaisonnement"
//);
//var accompagnement = recipes.filter(
//  (recipe) => recipe.accompagnement === "accompagnement"
//);

//var newRecipes = [];

//for (var i = 0; i < 10; i++) {
//  var platSelected = plat[math.floor(math.random() * plat.length)];
//  var accompagnementSelected =
//    accompagnement[math.floor(math.random() * accompagnement.length)];
//  var assaisonnementSelected =
//    assaisonnement[math.floor(math.random() * assaisonnement.length)];
//}
