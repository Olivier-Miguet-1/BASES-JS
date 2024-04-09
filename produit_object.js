let produit = {
    nom: "Mickey",
    prix: 15,
    stock: 150,
    nb_vendu: 75
}

console.log(produit),
produit.gain = produit.prix*produit.nb_vendu,
console.log(produit)

produit.valeur_stock = produit.prix*produit.nb_vendu
console.log(produit)

produit.valeur_stock = produit.prix*produit.stock

console.log("Produit :" , produit.nom, "/ Gain :", produit.gain, "/ Valeur stock :", produit.valeur_stock) 