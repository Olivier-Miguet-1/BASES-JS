var data = [
  {
    type: "accompagnement",
    nom: "riz",
    ingredients: ["riz", "eau"],
    duration: 10,
    ustensile: ["casserole"],
  },
  {
    type: "assaisonnement",
    nom: "curry",
    ingredients: ["epice curry"],
    duration: 3,
    ustensile: ["cuillere a soupe"],
  },
  {
    type: "plat",
    nom: "boeuf",
    ingredients: ["epice curry"],
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
    ingredients: ["epice curry"],
    duration: 3,
    ustensile: ["Aluminium"],
  },
];

//exemple:
//{
//   nom: "Riz Boeuf Curry"
//   ingredients: [viande, huile, riz, eau, curry]
//    duration: 20,
//    ustensile: [poele, casserole]
//}

var recipes = [
  {
    type: [
      nom,
      duration,
      ustensile,
      (ingredients = [
        "riz",
        "eau",
        "epice curry",
        "viande",
        "huile",
        "pure",
        "lait",
        "eau",
      ]),
    ][("nom", "ingredients", "duration", "ustensile")],
  },
];

for (var i = 0; i < recipes.length; i++) {
  console.log(recipes);
  //var recipes,type,ingredients;[],[0, 1, 2, 3] = data[Math.round(Math.random() * (recipes.length - 1 - 0) + 0)];
}
