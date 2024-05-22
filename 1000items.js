const { faker } = require('@faker-js/faker');
const _ = require("lodash")

let number_items = 20
let price_min = 5.0
let price_max = 6.0
let stock_min = 0
let stock_max = 10
let intervalPrice = 5.5
let alertStock = 3

var products = []

for (let i = 0; i < number_items; i++) {
    let name = faker.commerce.product();
    let description = faker.commerce.productDescription();
    let department = faker.commerce.department();
    let price = _.random(price_min, price_max, true);
    let stock = _.random(stock_min, stock_max);
    products.push({
        name: name,
        description: description,
        department: department,
        price: Number(price.toFixed(2)),
        stock: stock,
    })
}
console.log(products)

let stock_Ok_interval_more = []
let stock_Ok_interval_less = []
let stock_a_zero = []

for (let i = 0; i < products.length; i++) {
    if ((products[i].price <= intervalPrice) && (products[i].stock > 0)) {
            stock_Ok_interval_less.push(products[i])
    }
    else if ((products[i].price > 5.5) && (products[i].stock > 0)) {
            stock_Ok_interval_more.push(products[i])
    }
    else if (products[i].stock <= alertStock) {
            stock_a_zero.push(products[i])
    }
    else {

    }  
    
}

// function printProducts(tab) {
    // for (let i = 0; i < tab.length; i++) {
        // var obj_people = tab[i]
        // var gender_fr = "Homme"
        // if (tab[i].gender === "female") {
            //  gender_fr = "Femme"
    // }
    // var text = `${obj_people.firstName} ${obj_people.lastName} - ${gender_fr} - ${obj_people.age}ans`
    // }
// }
// let stock_Ok_<_5.5euros = []
// let stock_Ok_>_5,5euros = []
// let zero_en_stock = []
// let stock_moins_de_3 = []
 
// for (let i = 0; i < products.length; i++) {
    // if ((products[i].stock === true) && (products[i].price <= 5.5)) {
        // stock_Ok_<_5.5euros.push(products[i])
    // }
    // else if ((products[i].stock === true) && (products[i].price > 5.5)) {
        // hommes_Moins_de_45ans.push(products[i])
    // }
    // else if ((products[i].gender === "female") && (products[i].age > 45)) {
        // femmes_Plus_de_45ans.push(products[i])
    // }
    // else {
        // femmes_Moins_de_45ans.push(products[i])
    // }
// }  
console.log(products)
// printProducts(products)

