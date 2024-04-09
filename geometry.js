let rectangle = {
   X: 50,
   Y: 120,
   Largeur: 30,
   Longueur: 70, 
}


rectangle.perimetre = rectangle.Largeur+rectangle.Longueur+rectangle.Largeur+rectangle.Longueur,
rectangle.unite = "cm"
rectangle.area = rectangle.Largeur*rectangle.Longueur
rectangle.diagonale = Math.hypot(30, 70);



console.log("X :",rectangle.X+rectangle.unite)
console.log("Y :",rectangle.Y+rectangle.unite)
console.log("Perimetre :",rectangle.perimetre+rectangle.unite)
console.log("Aire :",rectangle.area+rectangle.unite+"²")
console.log("Diagonale :",rectangle.diagonale.toFixed(2)+rectangle.unite)